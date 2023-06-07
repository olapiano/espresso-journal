import Link from "next/link"
import menuItems from "@/lib/menuItems"

export default function Footer() {
    return (
      <footer className="bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <Link href="/" className="hover:underline">Ola Råbius Magnusson</Link>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              {menuItems.map((item, index) => (
                <li key={index}>
                    <Link href={item.href} className="mr-4 hover:underline md:mr-6 ">{item.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </footer>
    )
}