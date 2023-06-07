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
    collection: 'coffee_makers',
};
  
const baseUrl = `${process.env.MONGODB_DATA_API_URL as string}/action`;

export async function fetchCoffeeMakers() {
    const readData = await fetch(`${baseUrl}/find`, {
        ...fetchOptions,
        body: JSON.stringify({
            ...fetchBody
        }),
    });
    const readDataJson = await readData.json();
    const coffeeMakers: CoffeeRoaster[] = readDataJson.documents
    return coffeeMakers;
}

export async function addCoffeeMaker(data: FormData) {
    const name = data.get('name')
    const location = data.get('location')

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

export async function deleteCoffeeMaker(coffeeMaker: CoffeeRoaster) {
    console.log(coffeeMaker._id)
    try {
        const deleteData = await fetch(`${baseUrl}/deleteOne`, {
            ...fetchOptions,
            body: JSON.stringify({
              ...fetchBody,
              filter: { _id: { $oid: coffeeMaker._id } },
            }),
          });
        await deleteData.json();
        revalidatePath('/coffee')
        revalidatePath('/journal')
        revalidatePath('/coffee/server-actions')

    } catch(error) {
        
    }
}


export async function editCoffeeMaker(coffeeMaker: CoffeeRoaster, newName: string, newLocation: string) {
    console.log(coffeeMaker._id, newName, newLocation)
    try {
        const editData = await fetch(`${baseUrl}/updateOne`, {
            ...fetchOptions,
            body: JSON.stringify({
              ...fetchBody,
              filter: { _id: { $oid: coffeeMaker._id } },
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