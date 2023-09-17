import MatchList from "./MatchList";
import PageTitle from "@/components/PageTitle";
import config from "@/config";

const baseUrl = config.BASE_URL
async function getMatches() {
  const response = await fetch(`${baseUrl}/matches/`)
  const data = response.json()
  return data
}

export default async function Page() {

  const data = await getMatches()
  const dataByLeague = {}

  data.results.forEach(element => {
    if (dataByLeague[element.competition.id]) {
      dataByLeague[element.competition.id].push(element)
    } else {
      dataByLeague[element.competition.id] = [element]
    }
  });

  return (
    <main>
      <PageTitle text={"Matches"} />
      {
        Object.entries(dataByLeague).map(([league, data]) => (
          <section>
            <h2 className="text-lg items-center mb-2 px-6">{data[0].competition.name}</h2>
            <MatchList data={data}/>
          </section>
        ))
      }
    </main>
  )
}
