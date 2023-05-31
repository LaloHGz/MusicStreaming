import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const usuarioArtistaSeguidoSeeder = async () => {
    const artistaSeguido1 = await prisma.usuarioArtistaSeguido.create({
        data: {
            id_usuario: 1,
            id_artista: 1,
        },
    })
    console.log({ artistaSeguido1 })

    const artistaSeguido2 = await prisma.usuarioArtistaSeguido.create({
        data: {
            id_usuario: 1,
            id_artista: 2,
        },
    })
    console.log({ artistaSeguido2 })

    const artistaSeguido3 = await prisma.usuarioArtistaSeguido.create({
        data: {
            id_usuario: 2,
            id_artista: 2,
        },
    })
    console.log({ artistaSeguido3 })

    const artistaSeguido4 = await prisma.usuarioArtistaSeguido.create({
        data: {
            id_usuario: 2,
            id_artista: 3,
        },
    })
    console.log({ artistaSeguido4 })

    const artistaSeguido5 = await prisma.usuarioArtistaSeguido.create({
        data: {
            id_usuario: 3,
            id_artista: 1,
        },
    })
    console.log({ artistaSeguido5 })


}
