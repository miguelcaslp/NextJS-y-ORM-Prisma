'use server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';



export async function getProductos() {
    try {
        const productos = await prisma.Producto.findMany()
        return productos;
    } catch (error) {
        return null;
    }
}

export async function getClientes() {
    try {
        const clientes = await prisma.Cliente.findMany()
        return clientes;
    } catch (error) {
        return null;
    }
}

export async function editCliente(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const localidad = formData.get('localidad')
    const fechaNacimiento = new Date(formData.get('fechaNacimiento')).toISOString()

    try {
        const cliente = await prisma.cliente.update({
            where: { id },
            data: { nombre, localidad, fechaNacimiento },
        })
        console.log(cliente);
        revalidatePath('/clientes')
    } catch (error) {
        console.log(error);
    }
    redirect('/clientes');
}

