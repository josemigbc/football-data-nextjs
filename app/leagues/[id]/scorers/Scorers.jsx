export default function Scorers({data}){

    return (
        <section className="flex justify-center text-center sh">
            <table className="w-full mx-10 max-w-md">
                <tr className="border-b border-gray-400 py-2">
                    <th >#</th>
                    <th >Player</th>
                    <th >Team</th>
                    <th >Goals</th>
                    <th >Matches</th>
                </tr>
                {
                    data.map((player, index) => (
                        <tr key={player.player.id} className="border-b border-gray-400 py-2">
                            <td>{index + 1}</td>
                            <td>{player.player.name}</td>
                            <td>{player.team.name}</td>
                            <td>{player.goals}</td>
                            <td>{player.playedMatches}</td>
                        </tr>
                    ))
                }
            </table>
        </section>
    )
}