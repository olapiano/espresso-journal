import { addCoffeeMaker } from '@/app/api/db/coffee/coffeeRoastersApi'
import React from 'react'

const AddCoffeeMaker = () => {
  return (
    <form action={addCoffeeMaker}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="location" placeholder="Location" />
        <button type="submit" >Add</button>
    </form>
  )
}

export default AddCoffeeMaker