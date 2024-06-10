import Link from 'next/link'
import Producto from '@/components/Producto'
import { getProductos } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const productos = await getProductos()
    // console.log(productos);

    return (
        <div>
            <Link className='enlace' href="/productos/new"> Nuevo producto </Link>
            {
                productos.map((producto) => (
                    <Producto key={producto.id} producto={producto} >
                        <Link
                            className='enlace'
                            href={{ pathname: '/productos/edit', query: { id: producto.id } }}>
                            Editar producto
                        </Link>
                        <Link
                            className='enlace'
                            href={{ pathname: '/productos/delete', query: { id: producto.id } }}>
                            Eliminar producto
                        </Link>
                    </Producto>
                ))
            }
        </div>
    )
}