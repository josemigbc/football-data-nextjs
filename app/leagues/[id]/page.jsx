import MatchList from "@/app/MatchList";
import config from "@/config";

const baseUrl = config.BASE_URL
const getMatches = async (id) => {
    const response = await fetch(`${baseUrl}/${id}/matches`,{next:{revalidate: 1800}})
    const raw_data = await response.json()
    return raw_data.matches
}

export default async function Page({params}){

    const data = await getMatches(params.id)

    return <MatchList data={data}/>
}