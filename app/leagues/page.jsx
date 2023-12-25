import PageTitle from "./../PageTitle";
import LeagueContainer from "./LeagueContainer";
import config from "@/config";

const baseUrl = config.BASE_URL
const getCompetitions = async () => {
    const competitions = ["FL1", "BL1", "PD", "PL", "SA", "CL", "ELC", "PPL"]
    let data = []
    for (let league of competitions) {
        const response = await fetch(`${baseUrl}/${league}/competition`)
        if (response.status === 200) {
            data.push(await response.json())
        }
    }

    return data
}

export default async function Page() {

    const data = await getCompetitions()

    return (
        <main>
            <PageTitle text={"Leagues"} />
            <div className="flex flex-col gap-3 px-5 py-3 md:px-10">
                {data.map(league => <LeagueContainer key={league.id} data={league} />)}
            </div>
        </main>
    )
}