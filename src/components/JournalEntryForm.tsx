'use client'

import { useState } from 'react'
import { FormEvent } from 'react'

import { 
    Button, 
    Checkbox,
    Label, 
    RangeSlider,
    Select,
    ToggleSwitch,
} from "flowbite-react"


const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
}

export default function JournalEntryForm() {
    const [onSwitch1, setOnSwitch1] = useState(false)
    const [onSwitch2, setOnSwitch2] = useState(true)
    const [onSwitch3, setOnSwitch3] = useState(false)
    return (
        <form className="flex flex-col gap-4" onSubmit={e => handleSubmit(e)}>
            <div>
            <div id="select">
  <div className="mb-2 block">
    <Label
      htmlFor="countries"
      value="Select your country"
    />
  </div>
  <Select
    id="countries"
    required={true}
  >
    <option>
      United States
    </option>
    <option>
      Canada
    </option>
    <option>
      France
    </option>
    <option>
      Germany
    </option>
  </Select>
</div>
            </div>
            <div
  className="flex flex-col gap-4"
  id="checkbox"
>
  <div className="flex items-center gap-2">
    <Checkbox
      id="accept"
      defaultChecked={true}
    />
    <Label htmlFor="accept">
      I agree to the 
      <a
        href="/forms"
        className="text-blue-600 hover:underline dark:text-blue-500"
      >
        terms and conditions
      </a>
    </Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="promotion" />
    <Label htmlFor="promotion">
      I want to get promotional offers
    </Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="age" />
    <Label htmlFor="age">
      I am 18 years or older
    </Label>
  </div>
  <div className="flex gap-2">
    <div className="flex h-5 items-center">
      <Checkbox id="shipping" />
    </div>
    <div className="flex flex-col">
      <Label htmlFor="shipping">
        Free shipping via Flowbite
      </Label>
      <div className="text-gray-500 dark:text-gray-300">
        <span className="text-xs font-normal">
          For orders shipped from Flowbite from{' '}
          <span className="font-medium">
            € 25
          </span>
          {' '}in books or 
          <span>
            € 29
          </span>
          {' '}on other categories
        </span>
      </div>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox
      id="disabled"
      disabled={true}
    />
    <Label
      htmlFor="disabled"
      disabled={true}
    >
      Eligible for international shipping (disabled)
    </Label>
  </div>
</div>
<div
  className="flex flex-col gap-4"
  id="toggle"
>
  <ToggleSwitch
    checked={onSwitch1}
    label="Toggle me"
    onChange={() => setOnSwitch1(prev => !prev)}
  />
  <ToggleSwitch
    checked={onSwitch2}
    label="Toggle me (checked)"
    onChange={() => setOnSwitch2(prev => !prev)}
  />
  <ToggleSwitch
    checked={onSwitch3}
    disabled={true}
    label="Toggle me (disabled)"
    onChange={() => setOnSwitch3(prev => !prev)}
  />
</div>
<div className="flex flex-col gap-4">
  <div>
    <div className="mb-1 block">
      <Label
        htmlFor="default-range"
        value="Default"
      />
    </div>
    <RangeSlider id="default-range" />
  </div>
  </div>
            <Button type="submit">
                Submit
            </Button>
        </form>
    )
}