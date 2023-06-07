import { deleteCoffeeMaker, fetchCoffeeMakers, editCoffeeMaker } from '@/app/api/db/coffee/coffeeRoastersApi'
import React from 'react'
import { H3, P } from './base/TypographyComponent'
import Hr from './base/Hr'

export default async function CoffeeMakersList() {
    const coffeeMakers = await fetchCoffeeMakers()
    
    let content

    if (!coffeeMakers || coffeeMakers.length === 0) {
        content = (
            <div>
                <p>No coffee makers available</p>
            </div>
        )
    } else {
        content = (
        <ul>
            {coffeeMakers.map((coffeeMaker) => 
                <li key={coffeeMaker._id}>
                    <H3>{coffeeMaker.name}</H3>
                    <P>{coffeeMaker.location}</P>
                    <form>
                        <button type="submit" formAction={async () => { 
                            'use server'
                            await editCoffeeMaker(coffeeMaker, "Nytt namn", "Ny plats")
                        }}>
                            Edit
                        </button>


                        <button type="submit" formAction={async () => { 
                            'use server'
                            await deleteCoffeeMaker(coffeeMaker)
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