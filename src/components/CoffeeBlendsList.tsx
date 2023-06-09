import { deleteCoffeeBlend, fetchCoffeeBlends, editCoffeeBlend } from '@/app/api/db/coffee/coffeeBlendsApi'
import React from 'react'
import { H3, P } from './base/TypographyComponent'
import Hr from './base/Hr'

export default async function CoffeeBlendsList() {
    const coffeeBlends = await fetchCoffeeBlends()
    
    let content

    if (!coffeeBlends || coffeeBlends.length === 0) {
        content = (
            <div>
                <p>No coffee blends available</p>
            </div>
        )
    } else {
        content = (
        <ul>
            {coffeeBlends.map((coffeeBlend) => 
                <li key={coffeeBlend._id}>
                    <H3>{coffeeBlend.coffeeRoaster.name} {coffeeBlend.name}</H3>
                    <p>{coffeeBlend.origin}</p>
                    <p>{coffeeBlend.description}</p>
                    <p>{coffeeBlend.roast}</p>
                    <form>
                        <button type="submit" formAction={async () => { 
                            'use server'
                            await editCoffeeBlend(coffeeBlend, "Nytt namn", "Ny plats")
                        }}>
                            Edit
                        </button>


                        <button type="submit" formAction={async () => { 
                            'use server'
                            await deleteCoffeeBlend(coffeeBlend)
                        }}>
                            Delete
                        </button>

                        
                    </form>
                    <Hr />
                </li>
            )}
        </ul>)
    }
    return content
}