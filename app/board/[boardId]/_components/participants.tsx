import { Skeleton } from "@/components/ui/skeleton"

export const Participants=()=>{
    return (
        <div className="absolute top-2 right-2 rounded-md bg-white p-3 h-12 flex items-center shadow-md">
            List of users!
        </div>
    )
}

Participants.skeleton=function ParticipantsSkeleton(){
    return (
        <div className="absolute top-2 right-2 rounded-md bg-white p-3 h-12 flex items-center shadow-md w-[150px] animate-pulse"/>
    )
}