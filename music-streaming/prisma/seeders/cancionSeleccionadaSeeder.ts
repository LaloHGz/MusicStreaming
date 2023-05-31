import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const cancionSeleccionadaSeeder = async () => {
    const cancionSeleccionada1 = await prisma.cancionSeleccionada.create({
        data: {
            id_cancion: 1,
            id_lista_reproduccion: 1,
        },
    })
    console.log({ cancionSeleccionada1 })

    const cancionSeleccionada2 = await prisma.cancionSeleccionada.create({
        data: {
            id_cancion: 2,
            id_lista_reproduccion: 1,
        },
    })
    console.log({ cancionSeleccionada2 })

    const cancionSeleccionada3 = await prisma.cancionSeleccionada.create({
        data: {
            id_cancion: 3,
            id_lista_reproduccion: 1,
        },
    })
    console.log({ cancionSeleccionada3 })


    const cancionSeleccionada4 = await prisma.cancionSeleccionada.create({
        data: {
            id_cancion: 2,
            id_lista_reproduccion: 2,
        },
    })
    console.log({ cancionSeleccionada4 })

    const cancionSeleccionada5 = await prisma.cancionSeleccionada.create({
        data: {
            id_cancion: 3,
            id_lista_reproduccion: 2,
        },
    })
    console.log({ cancionSeleccionada5 })

    
    const cancionSeleccionada6 = await prisma.cancionSeleccionada.create({
        data: {
            id_cancion: 1,
            id_lista_reproduccion: 3,
        },
    })
    console.log({ cancionSeleccionada6 })

}
