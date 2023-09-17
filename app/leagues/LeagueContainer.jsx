import Link from "next/link";

export default function LeagueContainer({data}){
    return (
        <Link href={`/leagues/${data.code}`}>
            <div className="shadow-md bg-gray-300 hover:bg-gray-400 rounded-md py-2 px-3 font-bold md:text-xl">
                <h3>{data.name}</h3>
            </div>
        </Link>
    )
}