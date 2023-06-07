import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'

import Main from '@/components/base/Main'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import UserProfile from '@/components/UserProfile'
import ThemeProvider from '@/context/ThemeProvider'
import menuItems, { loginMenuItems } from '@/lib/menuItems'
import { A } from '@/components/base/TypographyComponent'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export const metadata = {
  title: 'Espresso Journal',
  description: 'The helper tool for brewing better espresso.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <UserProvider>
          <ThemeProvider>
            <Main full={true} >
              <Navbar menuItems={menuItems} loginMenuItems={loginMenuItems}/>
                <A href="/api/auth/logout">Logout</A>
                <A href="/api/auth/login">Login</A>
                <UserProfile />
                {children}
              <Footer />
            </Main>
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  )
}