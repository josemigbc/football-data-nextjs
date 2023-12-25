import config from "@/config";
import Scorers from "./Scorers";
import { notFound } from "next/navigation"

const baseUrl = config.BASE_URL
const getScorers = async (id) => {
    const response = await fetch(`${baseUrl}/${id}/scorers`,{next:{revalidate: 9800}})
    if (response.status !== 200) {
        notFound()
    }
    const data = await response.json()
    return data.scorers
}

export default async function Page({params}){

    const data = await getScorers(params.id)

    return <Scorers data={data} />
}