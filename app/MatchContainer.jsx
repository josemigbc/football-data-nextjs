
const TeamContainer = ({team}) => {
    return (
        <div className="grid grid-cols-7 max-w-xs mb-2">
            <div className="m-auto col-span-2">
                <div className="rounded-full bg-slate-900 w-6 h-6"></div>
            </div>
            <div className="col-span-4 text-sm text-start hover:text-gray-700"><p>{team.name}</p></div>
            <div className="text-center"><p>{team.score}</p></div>
        </div>
    )
}

export default function MatchContainer({data}) {
    return (
        <article className="grid grid-cols-4 hover:bg-gray-200">
            <div className="col-span-3 border-r-2 border-gray-500">
                <TeamContainer team={{name:data.homeTeam.name, score: data.score.fullTime.home}}/>
                <TeamContainer team={{name:data.awayTeam.name, score: data.score.fullTime.away}}/>
            </div>
            <div className="flex place-items-center">
                <p className="text-center w-full">{data.utcDate.split("T")[1].slice(0,5)}</p>
            </div>
        </article>
    )
}