import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const cancionSeeder = async () => {
    const cancion1 = await prisma.cancion.create({
        data: {
            id_cancion: 1,
            titulo: "Home",
            duracion: 146,
            id_album: 1,
        },
    })
    console.log({ cancion1 })

    const cancion2 = await prisma.cancion.create({
        data: {
            id_cancion: 2,
            titulo: "Stop The World I Wanna Get Off With You",
            duracion: 189,
            id_album: 2,
        },
    })
    console.log({ cancion2 })

    const cancion3 = await prisma.cancion.create({
        data: {
            id_cancion: 3,
            titulo: "Sparks",
            duracion: 227,
            id_album: 3,
        },
    })
    console.log({ cancion3 })



}
