import Link from "next/link"

function Navbar() {
    return (
        <nav>
            <div>
                <Link href="/">Inicio</Link>
                <Link href="/productos">Productos</Link>

                <Link href="/clientes">clientes</Link>
            </div>
        </nav>
    )
}

export default Navbar