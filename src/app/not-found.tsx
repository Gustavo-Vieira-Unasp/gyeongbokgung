import Link from "next/link";

export default function NotFound(){
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-9 text-6xl"> ERROR 404: NOT FOUND</h1>
            <p>Essa página que você tentou ascessar não existe</p>

            <Link href='/'>
                Voltar para a Home
            </Link>
        </div>
    )
}