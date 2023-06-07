export default function Main({children, full=false}: {children: React.ReactNode, full?: boolean}) {
    return (
        <main className={`${full ? 'p-4 min-h-screen bg-slate-50 dark:bg-gray-900': 'bg-white dark:bg-gray-800 my-4 shadow rounded-lg'}`}>
            <div className={`${full ? '' :  'p-4 w-full mx-auto max-w-screen-xl'}`}>
                {children}
            </div>
        </main>
    )
}