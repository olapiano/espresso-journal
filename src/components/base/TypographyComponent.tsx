import Link from "next/link"

type Props = {
    children: React.ReactNode
    lead?: boolean
    bold?: boolean
}

type LinkProps = {
    children: React.ReactNode
    href: string
}

export function H1({children}: Props) {
    return (
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {children}
        </h1>
    )
}
export function H2({children}: Props) {
    return (
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            {children}
        </h1>
    )
}
export function H3({children}: Props) {
    return (
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            {children}
        </h1>
    )
}
export function H4({children}: Props) {
    return (
        <h1 className="mb-3 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            {children}
        </h1>
    )
}
export function H5({children}: Props) {
    return (
        <h1 className="mb-3 text-lg font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white">
            {children}
        </h1>
    )
}
export function H6({children}: Props) {
    return (
        <h1 className="mb-2 text-base font-bold leading-none tracking-tight text-gray-900 md:text-lg lg:text-xl dark:text-white">
            {children}
        </h1>
    )
}
export function P({children, lead=false}: Props) {
    return (
        <p className={`${lead ? "text-lg md:text:xl": "text-base"} mb-3 text-gray-500 dark:text-gray-400 `}>
          {children}  
        </p>
    )
}

export function A({children, href}: LinkProps) {
    return (
        <Link href={href} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{children}</Link>
    )
}

export function Strong({children}: Props) {
    return (
        <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>
    )
}