import './globals.css'
import Main from '@/components/base/Main'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ThemeProvider from '@/context/ThemeProvider'
import menuItems, { loginMenuItems } from '@/lib/menuItems'

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
        <ThemeProvider>
          <Main full={true} >
            <Navbar menuItems={menuItems} loginMenuItems={loginMenuItems}/>
              {children}
            <Footer />
          </Main>
        </ThemeProvider>
      </body>
    </html>
  )
}