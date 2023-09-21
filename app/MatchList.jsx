"use client";
import MatchContainer from "./MatchContainer";
import { useEffect, useRef} from "react";

export default function MatchList({data}) {
    const element = useRef(null)
    let found = false

    useEffect(()=>{
        if (element.current){
            element.current.scrollIntoView()
        }
    },[])

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 px-4 gap-3">
            {data.map(match => {
                if (!found && match.status !== "FINISHED"){
                    found = true;
                    return <div ref={element} key={match.id}><MatchContainer data={match} /></div>
                }
                return <MatchContainer key={match.id} data={match} />
            })}
        </div>
    )
}