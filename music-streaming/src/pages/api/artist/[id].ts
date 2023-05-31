import { prisma } from "../../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const artistId = req.query.id

    if(req.method === 'DELETE'){
        const delArtist = await prisma.artista.delete({
            where: {
                id_artista: Number(artistId),
            },
        });
        res.json(delArtist);
    }else if(req.method === 'PUT'){
        const { nombre, genero, inicio} = req.body;
        const updateArtist = await prisma.artista.update({
            where: {
                id_artista: Number(artistId),
            },
            data: {
                nombre: nombre,
                genero_musical: genero,
                fecha_inicio_carrera: new Date(inicio),
            },
        });
        res.json(updateArtist);
    }

}
