import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const usuarioSeeder = async () => {
    const usuario1 = await prisma.usuario.create({
        data: {
            id_usuario: 1,
            nombre: 'Omar',
            apellido: 'Rodriguez',
            correo_electronico: 'omar@omar.com',
            contrasena: '123456',
            fecha_nacimiento: new Date('1999-01-08 04:05:06'),
            ciudad: 'Bogota',
            pais: 'Colombia',
        },
    })
    console.log({ usuario1 })

    const usuario2 = await prisma.usuario.create({
        data: {
            id_usuario: 2,
            nombre: 'Eduardo',
            apellido: 'Hernandez',
            correo_electronico: 'eduardo@eduardo.com',
            contrasena: 'abdcde',
            fecha_nacimiento: new Date('2002-03-10 04:05:06'),
            ciudad: 'Tampico',
            pais: 'Mexico',
        },
    })
    console.log({ usuario2 })

    const usuario3 = await prisma.usuario.create({
        data: {
            id_usuario: 3,
            nombre: 'Carlos',
            apellido: 'Gomez',
            correo_electronico: 'carlos@carlos.com',
            contrasena: 'querty',
            fecha_nacimiento: new Date('2000-06-06 04:05:06'),
            ciudad: 'Ottawa',
            pais: 'Canada',
        },
    })
    console.log({ usuario3 })

}
