class ListItem {
    constructor(public item: string | number | boolean, public key?: string | number) {}
}

type Props = {
    items: ListItem[]
}

export function listFromArray(arr: string[] | number[] | boolean[]) {
    return arr.map((item, key) => (new ListItem(item, key)))
}

export function Ul({items}: Props) {
    return (
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            {items.map((item) => (
                <li key={item.key}>
                    {item.item}
                </li>
            ))}
        </ul>
    )
}

export function Ol({items}: Props) {
    return (
        <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
            {items.map((item) => (
                <li key={item.key}>
                    {item.item}
                </li>
            ))}
        </ol>
    )
}