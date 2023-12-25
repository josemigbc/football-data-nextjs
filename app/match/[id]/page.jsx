import config from "@/config";
import Link from "next/link";
import Image from "next/image";

const baseUrl = config.BASE_URL
const getMatch = async (id) => {
    const response = await fetch(`${baseUrl}/match/${id}`, { next: { revalidate: 1800 } })
    const data = await response.json()
    return data
}

const TeamContainer = ({ data }) => {
    return (
        <Link href={`/team/${data.id}`}>
            <div className="flex flex-col items-center text-xs sm:text-sm md:text-base">
                <div>
                    <Image src={data.crest} width={20} height={20} alt={data.name} className="md:w-14 md:h-14 w-10 h-10 mb-3" />
                </div>
                <div><h3>{data.name}</h3></div>
            </div>
        </Link>
    )
}

const Score = ({ data }) => {
    const date = new Date(data.utcDate)
    if (data.status === "FINISHED" || data.status === "IN_PLAY") {
        return (
            <div className="flex flex-col items-center text-2xl font-bold">
                <h2>{`${data.score.fullTime.home} - ${data.score.fullTime.away}`}</h2>
                <h5 className="text-sm font-light">{`(${data.score.halfTime.home} - ${data.score.halfTime.away})`}</h5>
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center text-2xl font-bold">
            <h2>{date.toLocaleTimeString()}</h2>
            <h5 className="text-sm font-light">{date.toLocaleDateString()}</h5>
        </div>
    )
}

export default async function Page({ params }) {
    const data = await getMatch(params.id)

    return (
        <main className="pt-6">
            <h4 className="text-sm px-5 mb-6">{data.competition.name} {data.stage.replace("_", " ")} {data.matchday && `Matchday ${data.matchday}`}</h4>
            <div className="grid grid-cols-3 px-3">
                <TeamContainer data={data.homeTeam} />
                <Score data={data} />
                <TeamContainer data={data.awayTeam} />
            </div>
        </main>
    )
}