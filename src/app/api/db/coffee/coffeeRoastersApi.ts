"use server"

import { revalidatePath } from "next/cache"

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
    collection: 'coffee_roasters',
};
  
const baseUrl = `${process.env.MONGODB_DATA_API_URL as string}/action`;

export async function fetchCoffeeRoasters() {
    const readData = await fetch(`${baseUrl}/find`, {
        ...fetchOptions,
        body: JSON.stringify({
            ...fetchBody
        }),
    });
    const readDataJson = await readData.json();
    const coffeeRoasters: CoffeeRoaster[] = readDataJson.documents
    return coffeeRoasters;
}

export async function fetchCoffeeRoasterByName(name: string) {
  const readData = await fetch(`${baseUrl}/findOne`, {
      ...fetchOptions,
      body: JSON.stringify({
          ...fetchBody,
          filter: { name: name }
      }),
  });
  const readDataJson = await readData.json();
  const coffeeRoaster: CoffeeRoaster = readDataJson.document
  return coffeeRoaster;
}


export async function addCoffeeRoaster(data: FormData) {
    const name = data.get('name')
    const location = data.get('location')

    if (name) {
      const data = await fetchCoffeeRoasterByName(name.toString())
      if (data){
        throw new Error(`The name: ${name} already exist in list of coffee roasters`)
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
            location, 
            version: "0.1.0"
        },
    })})
    await insertData.json();
    revalidatePath('/coffee')
    revalidatePath('/journal')
    revalidatePath('/coffee/server-actions')


}

export async function deleteCoffeeRoaster(coffeeRoaster: CoffeeRoaster) {
    console.log(coffeeRoaster._id)
    try {
        const deleteData = await fetch(`${baseUrl}/deleteOne`, {
            ...fetchOptions,
            body: JSON.stringify({
              ...fetchBody,
              filter: { _id: { $oid: coffeeRoaster._id } },
            }),
          });
        await deleteData.json();
        revalidatePath('/coffee')
        revalidatePath('/journal')
        revalidatePath('/coffee/server-actions')

    } catch(error) {
        
    }
}


export async function editCoffeeRoaster(coffeeRoaster: CoffeeRoaster, newName: string, newLocation: string) {
    console.log(coffeeRoaster._id, newName, newLocation)
    try {
        const editData = await fetch(`${baseUrl}/updateOne`, {
            ...fetchOptions,
            body: JSON.stringify({
              ...fetchBody,
              filter: { _id: { $oid: coffeeRoaster._id } },
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