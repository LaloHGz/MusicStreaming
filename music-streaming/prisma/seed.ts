const { PrismaClient } = require('@prisma/client');
import { usuarioSeeder } from './seeders/usuarioSeeder'
import { artistaSeeder } from './seeders/artistaSeeder'
import { albumSeeder } from './seeders/albumSeeder'
import { cancionSeeder } from './seeders/cancionSeeder'
import { listaReproduccionSeeder } from './seeders/listaReproduccionSeeder'
import { usuarioArtistaSeguidoSeeder } from './seeders/usuarioArtistaSeguidoSeeder'
import { cancionSeleccionadaSeeder } from './seeders/cancionSeleccionadaSeeder'


const prisma = new PrismaClient()


async function main() {
    await usuarioSeeder();
    await artistaSeeder();
    await albumSeeder();
    await cancionSeeder();
    await listaReproduccionSeeder();
    await usuarioArtistaSeguidoSeeder();
    await cancionSeleccionadaSeeder();
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });