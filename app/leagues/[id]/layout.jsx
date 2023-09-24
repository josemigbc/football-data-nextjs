import PageTitle from "./../../PageTitle"
import NavItem from "./NavItem";
import Image from "next/image";
import config from "@/config";

const baseUrl = config.BASE_URL
const getCompetition = async (id) => {
    const response = await fetch(`${baseUrl}/competition/${id}/`)
    return await response.json()
}

export default async function Layout({ children, params }) {

    const data = await getCompetition(params.id)

    return (
        <main>
            <div className="flex justify-center gap-5 items-center">
                <Image src={data.emblem} width={30} height={30} alt={data.name} />
                <PageTitle text={data.name} />
            </div>

            <nav className="flex gap-4 justify-around items-center w-full py-2 px-5 text-gray-700 mb-3">
                <NavItem text={"Matches"} href={`/leagues/${params.id}`} />
                <NavItem text={"Standings"} href={`/leagues/${params.id}/standings`} />
                <NavItem text={"Scorers"} href={`/leagues/${params.id}/scorers`} />
            </nav>
            {children}
        </main>
    )
}