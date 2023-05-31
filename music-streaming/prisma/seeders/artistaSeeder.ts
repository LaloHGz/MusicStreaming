import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const artistaSeeder = async () => {
    const artista1 = await prisma.artista.create({
        data: {
            nombre: "Vacations",
            genero_musical: "Indie",
            fecha_inicio_carrera: new Date("2015-01-01"),
        },
    })
    console.log({ artista1 })

    const artista2 = await prisma.artista.create({
        data: {
            nombre: "Arctic Monkeys",
            genero_musical: "Alternative",
            fecha_inicio_carrera: new Date("2002-01-01"),
        },
    })
    console.log({ artista2 })

    const artista3 = await prisma.artista.create({
        data: {
            nombre: "Coldplay",
            genero_musical: "Alternative",
            fecha_inicio_carrera: new Date("1998-01-01"),
        },
    })
    console.log({ artista3 })
}
