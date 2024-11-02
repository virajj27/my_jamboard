"use client"
import { ReactNode} from "react"
import { ClientSideSuspense, LiveblocksProvider } from "@liveblocks/react/suspense"
import { RoomProvider } from "@liveblocks/react/suspense"


interface roomProps{
    children:ReactNode,
    roomId:string,
    fallback: ReactNode
}
const authorizationEndPoint="/api/liveblocks-auth"
export const Room=({children,roomId,fallback}:roomProps)=>{
    return(
        // throttle =16 -->60 fps
        <LiveblocksProvider authEndpoint={authorizationEndPoint} throttle={16}>
            <RoomProvider id={roomId} initialPresence={{cursor:null,}}>
                <ClientSideSuspense fallback={fallback}>
                    {()=>children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    )
}