import MatchContainer from "./MatchContainer";

export default function MatchList({data}) {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 px-4 gap-3">
            {data ? data.map(match => <MatchContainer key={match.id} data={match} />): null}
        </div>
    )
}