import { addCoffeeBlend } from '@/app/api/db/coffee/coffeeBlendsApi'
import { fetchCoffeeRoasters } from '@/app/api/db/coffee/coffeeRoastersApi'
import React from 'react'

const AddCoffeeBlend = async () => {
  const coffeeRoasters = await fetchCoffeeRoasters()
  return (
    <form action={addCoffeeBlend}>
        <input type="text" name="name" placeholder="Name" />
        <select name="roasterName" placeholder='Select Coffee Roaster'>
        {coffeeRoasters.map((roaster) => (
          <option value={roaster.name} key={roaster._id}>{roaster.name}</option>
        ))}
        </select>
        <input type="range" min="0" max="100" value="50" name="arabica" />
        <input type="range" min="0" max="100" value="50" name="robusta" />
        <input type="range" min="0" max="100" value="0" name="other" />
        <select name="roast" placeholder='Select roast'>
          <option value="light">light</option>
          <option value="medium">medium</option>
          <option value="dark">dark</option>
        </select>
        <input type="text" name="origin" placeholder="Origin" />
        <input type="text" name="description" placeholder="Description" />
        <button type="submit" >Add</button>
    </form>
  )
}

export default AddCoffeeBlend