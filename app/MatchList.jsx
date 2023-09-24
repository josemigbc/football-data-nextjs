"use client";
import MatchContainer from "./MatchContainer";
import { useEffect, useRef} from "react";

export default function MatchList({data, scroll}) {

    const element = useRef(null)
    let found = false
    let stage = null
    let matchday = null
    scroll = scroll === undefined ? true: scroll
    
    useEffect(()=>{
        if (element.current && scroll){
            element.current.scrollIntoView()
        }
    },[])

    data.sort((a,b) => new Date(a.utcDate) - new Date(b.utcDate))

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 px-4 gap-3">
            {data.map(match => {
                let setRef = !found && match.status !== "FINISHED"
                const setStage = match.stage !== stage
                const setMatchday = match.matchday !== matchday
                
                if (setRef){
                    found = true;
                } else {
                    setRef = null;
                }
                
                if (setStage){
                    stage = match.stage;
                }
                if (setMatchday){
                    matchday = match.matchday
                }

                return (
                    <div 
                    ref={setRef && element}
                    key={match.id}
                    >
                        <h3 className="mb-3">{setStage && match.stage.replace("_"," ")} {setMatchday && `Matchday ${matchday}`}</h3>
                        <MatchContainer data={match}/>
                    </div>
                )
            })}
        </div>
    )
}