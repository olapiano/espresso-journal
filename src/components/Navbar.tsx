'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation'
import { DarkThemeToggle, useThemeMode } from "flowbite-react"
import Hamburger from 'hamburger-react'
import Image from 'next/image'

type Props = {
  menuItems: MenuItem[]
  loginMenuItems: MenuItem[]
}

export default function Navbar({menuItems, loginMenuItems}: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDrodownOpen, setIsDropdownOpen] = useState(false)
    const segment = useSelectedLayoutSegment() ?? ''
    const [mode, setMode, toggleMode] = useThemeMode()
    useEffect(() => {
      setIsDropdownOpen(false)
    }, [isMenuOpen])
    return (
      <nav className="rounded-lg shadow bg-white border-gray-200 dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
          {/* Logo */}

          <Link href="/" className="flex items-center">
              <img src="https://www.milesteaandcoffee.com/userfiles/files/Espresso.jpg" className="rounded-full h-8 mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Espresso Journal</span>
          </Link>

          <div className="flex items-center md:order-2">
            
          {/* Dropdown menu */}
          <div>
            <button type="button" onClick={() => setIsDropdownOpen(prev => !prev)} className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <Image className="w-8 h-8 rounded-full" width="32" height="32" src="/images/OIP.jpg" alt="user photo" />
            </button>
            <div className="relative block">
              <div className={`${isDrodownOpen ? '' : 'hidden'} block absolute z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  {loginMenuItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        {item.name}
                      </Link>
                    </li>  
                  ))}
                </ul>
              </div>
            </div>
            </div>
            <DarkThemeToggle className="text-black dark:text-white" />
            <div className="md:hidden">
              <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} color={`${mode === 'light' ? 'black' : 'white'}`} size={26} rounded label="show menu" />
            </div>

          </div> 
          <div className={`${isMenuOpen ? '': 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="mobile-menu-2">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-700 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:dark:bg-gray-800 dark:border-gray-700">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href} className={`${item.href === `/${segment}` ?  'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500' : 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`} aria-current="page">{item.name}</Link>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    )
}