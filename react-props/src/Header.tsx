interface HeaderProps {
    count: number
}

export default function Header({ count }: HeaderProps) {
    return (
        <header> Vite + React + {count} </header >

    )
}