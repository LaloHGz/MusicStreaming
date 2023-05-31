import { useState } from 'react';
import { useRouter } from 'next/router';

interface CellProps {
    artist: {
        id_artista: string;
        nombre: string;
        genero_musical: string;
        fecha_inicio_carrera: string;
    };
    deleteArtist: (id: string) => void;
    updateArtist: (artist: any) => void;
}

function extraerAnioDeFecha(fechaISO: string): string {
    const fecha = new Date(fechaISO);
    const anio = fecha.getFullYear() + 1;

    return anio.toString();
}

export function Cell({ artist, deleteArtist, updateArtist}: CellProps) {

    
    const handleUpdate = () => {
        updateArtist(artist);
    };

    return (
        <tr>
            <td className="truncate">{artist.nombre}</td>
            <td>{artist.genero_musical}</td>
            <td className="truncate">{extraerAnioDeFecha(artist.fecha_inicio_carrera)}</td>
            <td>
                <div className="flex justify-center gap-2">
                    <label htmlFor="my-modal" className="btn btn-warning" onClick={handleUpdate}>Update</label>
                    <button onClick={() => deleteArtist(artist.id_artista)} className="btn btn-error">
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}


interface FormData {
    nombre: string;
    genero: string;
    inicio: string;
}

interface FormDataUpdate {
    id: string;
    nombre: string;
    genero: string;
    inicio: string;
}


export default function AllArtists({ props }: any) {

    const [formUpdate, setFormUpdate] = useState<FormDataUpdate>({ id: '', nombre: '', genero: '', inicio: '' })
    const [form, setForm] = useState<FormData>({ nombre: '', genero: '', inicio: '' })

    const router = useRouter()

    const refreshData = () => {
        router.replace(router.asPath);
    }

    const updateArtist = (artist: any) => {
        setFormUpdate({
            id: artist.id_artista,
            nombre: artist.nombre,
            genero: artist.genero_musical,
            inicio: artist.fecha_inicio_carrera,
        });
    };

    async function create(data: FormData) {
        try {
            fetch('http://localhost:3000/api/create', {
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }).then(() => {
                setForm({ nombre: '', genero: '', inicio: '' })
                refreshData();
            })
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteArtist(id: string) {
        try {
            fetch(`http://localhost:3000/api/artist/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'DELETE'
            }).then(() => {
                refreshData();
            })
        } catch (error) {
            console.log(error);
        }
    }

    async function upArtist(id: string, data: FormData) {
        try {
            fetch(`http://localhost:3000/api/artist/${id}`, {
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PUT'
            }).then(() => {
                refreshData();
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (data: FormData) => {
        try {
            create(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box modal-box-relative">
                <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={e => {
                        e.preventDefault();
                        handleSubmit(formUpdate);
                    }}>
                        <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                <label className="text-lg font-bold pb-2 pr-2">Nombre</label>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    placeholder='Son Lux'
                                    value={formUpdate.nombre}
                                    required
                                    onChange={e => setFormUpdate({ ...formUpdate, nombre: e.target.value })} />
                            </div>

                            <div className='flex flex-col'>
                                <label className="text-lg font-bold pb-2 pr-2">Genero Musical</label>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    placeholder="Indie"
                                    value={formUpdate.genero}
                                    required
                                    onChange={e => setFormUpdate({ ...formUpdate, genero: e.target.value })} />
                            </div>

                            <div className='flex flex-col'>
                                <label className="text-lg font-bold pb-2 pr-2">Inicio de carrera</label>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    placeholder="2010"
                                    value={formUpdate.inicio}
                                    required
                                    onChange={e => setFormUpdate({ ...formUpdate, inicio: e.target.value })} />
                            </div>
                            <div className="modal-action">
                                <label htmlFor="my-modal" className="btn" onClick={() => upArtist(formUpdate.id, formUpdate)}>Confirm</label>
                            </div>

                        </div>
                    </form>
                </div>
            </div>


            <div className="overflow-x-auto w-full p-10">
                <table className="table table-zebra table-compact w-[100%] table-fixed mb-10">
                    <thead>
                        <tr>
                            <th className="w-[25%]">Nombre</th>
                            <th className="w-[25%]">Genero Musical</th>
                            <th className="w-[25%]">Inicio de carrera</th>
                            <th className="w-[25%] text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.map((artists: any) => (
                            <Cell artist={artists} deleteArtist={deleteArtist} updateArtist={updateArtist} key={artists.id_artista} />
                        ))}
                    </tbody>
                </table>


                <form onSubmit={e => {
                    e.preventDefault();
                    handleSubmit(form);
                }}>
                    <div className='flex'>
                        <div className='mr-2'>
                            <label className="text-lg font-bold pb-2 pr-2">Nombre</label>
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder='Son Lux'
                                value={form.nombre}
                                required
                                onChange={e => setForm({ ...form, nombre: e.target.value })} />
                        </div>

                        <div className='mr-2'>
                            <label className="text-lg font-bold pb-2 pr-2">Genero Musical</label>
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="Indie"
                                value={form.genero}
                                required
                                onChange={e => setForm({ ...form, genero: e.target.value })} />
                        </div>

                        <div className='mr-2'>
                            <label className="text-lg font-bold pb-2 pr-2">Inicio de carrera</label>
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="2010"
                                value={form.inicio}
                                required
                                onChange={e => setForm({ ...form, inicio: e.target.value })} />
                        </div>
                        <button className="btn btn-accent" type="submit">
                            Add
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}