import { deleteCoffeeRoaster, fetchCoffeeRoasters, editCoffeeRoaster } from '@/app/api/db/coffee/coffeeRoastersApi'
import React from 'react'
import { H3, P } from './base/TypographyComponent'
import Hr from './base/Hr'

export default async function CoffeeRoastersList() {
    const coffeeRoasters = await fetchCoffeeRoasters()
    
    let content

    if (!coffeeRoasters || coffeeRoasters.length === 0) {
        content = (
            <div>
                <p>No coffee roasters available</p>
            </div>
        )
    } else {
        content = (
        <ul>
            {coffeeRoasters.map((coffeeRoaster) => 
                <li key={coffeeRoaster._id}>
                    <H3>{coffeeRoaster.name}</H3>
                    <P>{coffeeRoaster.location}</P>
                    <form>
                        <button type="submit" formAction={async () => { 
                            'use server'
                            await editCoffeeRoaster(coffeeRoaster, "Nytt namn", "Ny plats")
                        }}>
                            Edit
                        </button>


                        <button type="submit" formAction={async () => { 
                            'use server'
                            await deleteCoffeeRoaster(coffeeRoaster)
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