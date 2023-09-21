import MatchList from "@/app/MatchList";
import config from "@/config";

const baseUrl = config.BASE_URL
const getMatches = async (id) => {
    const response = await fetch(`${baseUrl}/matches/?competition=${id}`)
    return await response.json()
}

export default async function Page({params}){

    const data = await getMatches(params.id)

    return <MatchList data={data}/>
}