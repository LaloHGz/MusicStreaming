import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const albumSeeder = async () => {
    const album1 = await prisma.album.create({
        data: {
            id_album: 1,
            titulo: "Vibes",
            fecha_lanzamiento: new Date("2016-05-05"),
            id_artista: 1,
        },
    })
    console.log({ album1 })

    const album2 = await prisma.album.create({
        data: {
            id_album: 2,
            titulo: "Why'd You Only Call Me When You're High?",
            fecha_lanzamiento: new Date("2013-09-11"),
            id_artista: 2,
        },
    })
    console.log({ album2 })

    const album3 = await prisma.album.create({
        data: {
            id_album: 3,
            titulo: "Parachutes",
            fecha_lanzamiento: new Date("2000-10-05"),
            id_artista: 3,
        },
    })
    console.log({ album3 })

}
