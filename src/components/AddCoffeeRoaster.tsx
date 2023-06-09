import { addCoffeeRoaster } from '@/app/api/db/coffee/coffeeRoastersApi'
import React from 'react'

const AddCoffeeRoaster = () => {
  return (
    <form action={addCoffeeRoaster}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="location" placeholder="Location" />
        <button type="submit" >Add</button>
    </form>
  )
}

export default AddCoffeeRoaster