import Link from "next/link";
import Image from "next/image";

export default function LeagueContainer({ data }) {
    return (
        <Link href={`/leagues/${data.code}`}>
            <div className="flex justify-start gap-5 shadow-md bg-gray-300 hover:bg-gray-400 rounded-md py-2 px-3 font-bold md:text-xl">
                <Image src={data.emblem} width={30} height={30} alt={data.name} />
                <h3>{data.name}</h3>
            </div>
        </Link>
    )
}