"use server"

import { revalidatePath } from "next/cache"
import { fetchCoffeeRoasterByName } from "./coffeeRoastersApi";

const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.MONGODB_DATA_API_KEY as string,
    },
};
  
const fetchBody = {
    dataSource: process.env.MONGODB_DATA_SOURCE as string,
    database: 'espresso_journal',
    collection: 'coffee_blends',
};
  
const baseUrl = `${process.env.MONGODB_DATA_API_URL as string}/action`;

export async function fetchCoffeeBlends() {
    const readData = await fetch(`${baseUrl}/find`, {
        ...fetchOptions,
        body: JSON.stringify({
            ...fetchBody
        }),
    });
    const readDataJson = await readData.json();
    const coffeeBlends: CoffeeBlend[] = readDataJson.documents
    return coffeeBlends;
}

export async function fetchCoffeeBlendByName(name: string) {
  const readData = await fetch(`${baseUrl}/findOne`, {
      ...fetchOptions,
      body: JSON.stringify({
          ...fetchBody,
          filter: { name: name }
      }),
  });
  const readDataJson = await readData.json();
  const coffeeBlend: CoffeeBlend = readDataJson.document
  return coffeeBlend;
}

export async function addCoffeeBlend(data: FormData) {
    const name = data.get('name')
    const composition = data.get('composition')
    const roast = data.get('roast')
    const origin = data.get('origin')
    const description = data.get('description')
    const roasterName = data.get('roasterName')
    
    let coffeeRoaster
    if (roasterName) {
        coffeeRoaster = await fetchCoffeeRoasterByName(roasterName.toString())
        console.log(coffeeRoaster)
        if (!coffeeRoaster) {
            throw new Error(`An existing coffee roster mst be selected`)
        }
    }

    if (name) {
      const data = await fetchCoffeeBlendByName(name.toString())
      if (data?.name === name){
        throw new Error(`The name: ${name} already exist in the list of coffee blends`)
      }
    } else {
      throw new Error(`Name must be filled`)
    }

    const insertData = await fetch(`${baseUrl}/insertOne`, {
        ...fetchOptions,
        body: JSON.stringify({
        ...fetchBody,
        document: {
            name,
            composition,
            roast, 
            origin, 
            description,
            coffeeRoaster: {
              _id: coffeeRoaster?._id,
              version: coffeeRoaster?.version,
              name: coffeeRoaster?.name,
              location: coffeeRoaster?.location
            },
            version: "0.1.0"
        },
    })})
    await insertData.json();
    revalidatePath('/coffee')
    revalidatePath('/journal')
    revalidatePath('/coffee/server-actions')


}

export async function deleteCoffeeBlend(coffeeBlend: CoffeeBlend) {
    console.log(coffeeBlend._id)
    try {
        const deleteData = await fetch(`${baseUrl}/deleteOne`, {
            ...fetchOptions,
            body: JSON.stringify({
              ...fetchBody,
              filter: { _id: { $oid: coffeeBlend._id } },
            }),
          });
        await deleteData.json();
        revalidatePath('/coffee')
        revalidatePath('/journal')
        revalidatePath('/coffee/server-actions')

    } catch(error) {
        
    }
}


export async function editCoffeeBlend(coffeeBlend: CoffeeBlend, newName: string, newLocation: string) {
    console.log(coffeeBlend._id, newName, newLocation)
    try {
        const editData = await fetch(`${baseUrl}/updateOne`, {
            ...fetchOptions,
            body: JSON.stringify({
              ...fetchBody,
              filter: { _id: { $oid: coffeeBlend._id } },
              update: {
                $set: {
                  name: newName,
                  location: newLocation,
                },
              },
            }),
          });
        await editData.json();
        revalidatePath('/coffee')
        revalidatePath('/journal')
        revalidatePath('/coffee/server-actions')
    } catch(error) {
        
    }
}