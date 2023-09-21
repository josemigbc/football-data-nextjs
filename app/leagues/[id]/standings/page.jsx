import config from "@/config";
import Standings from "./Standings";

const baseUrl = config.BASE_URL
const getStandings = async (id) => {
    const response = await fetch(`${baseUrl}/standings/${id}`)
    return await response.json()
}

export default async function Page({ params }) {

    const data = await getStandings(params.id)
    
    return (
        <div>
            {data.map(group => (
                <section className="px-5 mb-3">
                    <h4 className="text-center">{group.group}</h4>
                    <Standings data={group.table} />
                </section>
            ))}
        </div>
    )
}