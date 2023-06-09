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
    collection: 'users',
};
  
const baseUrl = `${process.env.MONGODB_DATA_API_URL as string}/action`;

export async function fetchUserByEmail(email: string) {
  const readData = await fetch(`${baseUrl}/findOne`, {
      ...fetchOptions,
      body: JSON.stringify({
          ...fetchBody,
          filter: { email: email }
      }),
  });
  const readDataJson = await readData.json();
  const user: User = readDataJson.document
  return user;
}

export async function addUser() {
    const loginData = await fetch('http://localhost:3000/api/auth/me')
    console.log(loginData);

    /* const insertData = await fetch(`${baseUrl}/insertOne`, {
        ...fetchOptions,
        body: JSON.stringify({
        ...fetchBody,
        document: {
            email,
            emailVerified,
            givenName,
            familyName, 
            locale,
            espressoMachines: []
            grinders: []
            equipment: {

            }
            coffee: []
            journalEntries: []
            version: "0.1.0"
        },
    })})
    await insertData.json(); */
    revalidatePath('/')
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