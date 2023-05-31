import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const listaReproduccionSeeder = async () => {
    const lista1 = await prisma.listaReproduccion.create({
        data: {
            id_lista_reproduccion: 1,
            titulo: "Alternative Vibes",
            descripcion: "Experience the energy and creativity of alternative music with this playlist. Discover a diverse mix of alternative rock, indie, and experimental sounds that will take you on a sonic journey like no other.",
            id_usuario: 1,
        },
    })
    console.log({ lista1 })

    const lista2 = await prisma.listaReproduccion.create({
        data: {
            id_lista_reproduccion: 2,
            titulo: "Indie Edge",
            descripcion: "Get ready to dive into the cutting-edge world of indie music. This playlist showcases the best of independent artists and bands, featuring their unique and innovative sounds that push the boundaries of alternative music.",
            id_usuario: 2,
        },
    })
    console.log({ lista2 })

    const lista3 = await prisma.listaReproduccion.create({
        data: {
            id_lista_reproduccion: 3,
            titulo: "Eclectic Alternative",
            descripcion: "Explore the eclectic side of alternative music with this playlist. From dreamy shoegaze to post-punk revival, this collection brings together a wide range of alternative genres and subgenres, offering a captivating blend of sounds for the adventurous listener.",
            id_usuario: 3,
        },
    })
    console.log({ lista3 })

}
