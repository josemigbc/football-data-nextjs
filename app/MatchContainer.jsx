import Link from "next/link"

const TeamContainer = ({ team }) => {
    return (
        <Link href={`/team/${team.id}`}>
            <div className="grid grid-cols-7 max-w-xs mb-2 items-center">
                <div className="m-auto col-span-2">
                    <img src={team.logo} width={20} height={20} alt={team.name} />
                </div>
                <div className="col-span-4 text-sm text-start hover:text-gray-700"><p>{team.name || "To be defined"}</p></div>
                <div className="text-center"><p>{team.score}</p></div>
            </div>
        </Link>

    )
}

export default function MatchContainer({ data }) {

    const datatime = new Date(data.utcDate)
    return (
        <Link href={`/match/${data.id}`}>
            <article className="grid grid-cols-4 hover:bg-gray-200">
                <div className="col-span-3 border-r-2 border-gray-500">
                    <TeamContainer team={{ id:data.homeTeam.id, name: data.homeTeam.name, score: data.score.fullTime.home, logo: data.homeTeam.crest }} />
                    <TeamContainer team={{ id:data.awayTeam.id, name: data.awayTeam.name, score: data.score.fullTime.away, logo: data.awayTeam.crest }} />
                </div>
                <div className="flex flex-col justify-center text-sm">
                    <p className="text-center w-full">{datatime.toLocaleDateString()}</p>
                    <p className="text-center w-full">{datatime.toLocaleTimeString()}</p>
                </div>
            </article>
        </Link>
    )
}