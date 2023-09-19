import PageTitle from "./../PageTitle";
import LeagueContainer from "./LeagueContainer";
import config from "@/config";

const baseUrl = config.BASE_URL
const getCompetitions = async () => {
    const response = await fetch(`${baseUrl}/competition/`)
    return response.json()
}

export default async function Page() {

    const data = await getCompetitions()

    return (
        <main>
            <PageTitle text={"Leagues"} />
            <div className="flex flex-col gap-3 px-5 py-3 md:px-10">
                {data.results.map(league => <LeagueContainer key={league.id} data={league}/>)}
            </div>
        </main>
    )
}