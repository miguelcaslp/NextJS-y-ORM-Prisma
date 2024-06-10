import Form from "@/components/Form"
import prisma from '@/lib/prisma'
import { editCliente } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
    const cliente = await prisma.cliente.findUnique({
        where: {
            id: Number(searchParams.id),
        },
    })

    return (
        <div>
            <h3>Editar cliente {searchParams.id}</h3>
            <Form action={editCliente} title='Editar cliente' cliente={cliente} />
        </div>
    )
}


export default page