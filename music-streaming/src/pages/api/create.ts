import { prisma } from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { nombre, genero, inicio } = req.body;
    try{
        const artist = await prisma.artista.create({
            data: {
                nombre: nombre,
                genero_musical: genero,
                fecha_inicio_carrera: new Date(inicio),
            },
        });
        console.log(artist);
        res.status(200).json({ message: "Artista creado correctamente" });
    }catch(error){
        console.log("Error en la creación del artista");
    }

}
