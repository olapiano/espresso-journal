'use client'

import { CustomFlowbiteTheme, Flowbite } from 'flowbite-react'

const theme: CustomFlowbiteTheme = {
    sidebar: {
      root: {
        base: 'h-full bg-inherit',
        inner: 'h-full overflow-y-auto overflow-x-hidden rounded bg-inherit py-4 px-3',
      },
    },

}

export default function ThemeProvider({ children }: {children: React.ReactNode} ) {  
  
  return (
        <Flowbite theme={{ theme }}>
            {children}
        </Flowbite>
    )
}