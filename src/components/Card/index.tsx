import Link from "next/link";

interface CardProps {
    disponivel: boolean
}

export function Card({ disponivel }: CardProps) {
    return (
        <div className="max-w-[255px] w-full bg-white shadow relative">
            <span className={`absolute top-2 right-2 px-4 rounded text-white ${disponivel ? 'bg-green-500' : 'bg-red-500'}`}>{disponivel ? 'Disponível' : 'Adotado'}</span>
            <img src="https://i.imgur.com/538fzQk.jpg" alt="" loading="lazy" className="w-full h-[220px] object-cover"/>
            <div className="p-4 text-primary-color">
                <h4 className="font-bold text-2xl">Malvo</h4>
                <span>Juripiranga/PB</span>
                <Link href={`/pets/id`}>
                    <button 
                        className="mt-6 w-full bg-primary-color rounded p-2 text-white font-bold hover:bg-[#6e29bcd2] max-sm:text-sm disabled:cursor-not-allowed disabled:bg-opacity-40"
                        disabled={!disponivel}
                    >
                            Quero conhecer
                    </button>
                </Link>
            </div>
        </div>
    );
}