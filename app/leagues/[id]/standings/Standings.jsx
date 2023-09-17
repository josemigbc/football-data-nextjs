export default function Standings({data}) {

    return (
        <section className="flex justify-center text-center">
            <table className="w-full mx-10 max-w-md">
                <tr className="border-b border-gray-400 py-2">
                    <th >#</th>
                    <th >Team</th>
                    <th >W</th>
                    <th >D</th>
                    <th >L</th>
                    <th >GD</th>
                    <th >Pts</th>
                </tr>
                {
                    data.map(team => (
                        <tr key={team.team.id} className="border-b border-gray-400 py-2">
                            <td>{team.position}</td>
                            <td>{team.team.name}</td>
                            <td>{team.won}</td>
                            <td>{team.draw}</td>
                            <td>{team.lost}</td>
                            <td>{team.goalDifference}</td>
                            <td>{team.points}</td>
                        </tr>
                    ))
                }
            </table>
        </section>
    )
}