import MatchList from "@/app/MatchList";
import config from "@/config";

const baseUrl = config.BASE_URL
const getMatchesByTeam = async (id) => {
    const response = await fetch(`${baseUrl}/match?team_id=${id}`,{next:{revalidate: 1800}})
    return await response.json()
}

export default async function Page({params}){

    const data = await getMatchesByTeam(params.id)

    return(
        <main>
            <MatchList data={data}/>
        </main>
    ) 
}