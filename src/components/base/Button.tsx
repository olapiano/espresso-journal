'use client'

type Props = {
    children: React.ReactNode
    color?: ButtonColors
    pill?: boolean
    shadow?: boolean
    onClick: () => void
}


const Button: React.FC<Props> = (
    {
        children, 
        color="default",
        pill=false, 
        shadow=false, 
        onClick
    }: Props) => {
        const mainStyle = "px-5 py-2.5 mr-2 mb-2 text-sm font-medium focus:ring-4 focus:outline-none"
        let colorStyle = ""
        const cornerStyle = `${pill ? "rounded-full": "rounded-lg"}`
        const shadowStyle = `${shadow ? "": ""}`
        switch (color) {
            case "default": 
                colorStyle += "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-blue-300 dark:focus:ring-blue-800" 
                break
            case "alternative": 
                colorStyle += "text-gray-900 hover:text-blue-700 bg-transparent border border-gray-200 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700" 
                break
            case "green": 
                colorStyle += "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" 
                break
            case "red": 
                colorStyle += "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" 
                break

            default: colorStyle += ""
        }
        return (
            <button 
                type="button" 
                className={`${mainStyle} ${colorStyle} ${cornerStyle} ${shadowStyle}`}
                onClick={onClick}>
                    {children}
            </button>
        )
}

export default Button