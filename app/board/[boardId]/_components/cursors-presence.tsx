"use client"
import { memo } from "react"
import { useOthersConnectionIds } from "@liveblocks/react/suspense"
import { Cursor } from "./cursor";

const Cursors=()=>{
    const ids=useOthersConnectionIds();
    return (
        <>
        { ids.map((connectionId)=>{            
                return <Cursor
                key={connectionId}
                connectionId={connectionId}
                />
            })}
        </>
    )
}
export const CursorsPresence = memo(() => {
    return (
      <>
        <Cursors />
      </>
    );
  });

CursorsPresence.displayName="CursorsPresence";