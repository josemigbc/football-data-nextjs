import config from "@/config";
import Scorers from "./Scorers";

const baseUrl = config.BASE_URL
const getScorers = async (id) => {
    const response = await fetch(`${baseUrl}/scorers/${id}`)
    return await response.json()
}

export default async function Page({params}){

    const data = await getScorers(params.id)

    return <Scorers data={data} />
}