import config from "@/config";
import Standings from "./Standings";

const baseUrl = config.BASE_URL
const getStandings = async (id) => {
    const response = await fetch(`${baseUrl}/standings/${id}`)
    return await response.json()
}

export default async function Page({params}){

    const data = await getStandings(params.id)

    return <Standings data={data[0].table} />
}