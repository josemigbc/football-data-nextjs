import DateForm from "./DateForm";
import MatchList from "./MatchList";
import PageTitle from "./PageTitle";
import Image from "next/image";
import config from "@/config";

const baseUrl = config.BASE_URL
async function getMatches(date = null) {
  const response = await fetch(`${baseUrl}/match${date ? `?utcDate=${date}` : ""}`, { next: { revalidate: 1800 } })
  const data = response.json()
  return data
}
export default async function Page({ searchParams }) {

  const date = searchParams.date
  const data = date ? await getMatches(date) : await getMatches()

  if (data.length === 0) {
    return (
      <main>
        <DateForm date={date} />
        <PageTitle text={"Matches"} />
        <p className="text-center my-5">There are no matches today</p>
      </main>
    )
  }
  const dataByLeague = {}

  data.forEach(element => {
    if (dataByLeague[element.competition.id]) {
      dataByLeague[element.competition.id].push(element)
    } else {
      dataByLeague[element.competition.id] = [element]
    }
  });

  return (
    <main>
      <DateForm date={date} />
      <PageTitle text={"Matches"} />
      {
        Object.entries(dataByLeague).map(([league, data], index) => (
          <section key={index}>
            <div className="flex justify-start items-center px-3">
              <Image src={data[0].competition.emblem} width={30} height={30} alt={data[0].competition.name} />
              <h2 className="text-lg items-center mb-2 px-6">{data[0].competition.name}</h2>
            </div>
            <MatchList data={data} scroll={false} />
          </section>
        ))
      }
    </main>
  )
}
