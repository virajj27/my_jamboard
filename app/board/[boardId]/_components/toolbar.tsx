export const Toolbar=()=>{
    return (
        <div className="absolute top-[50%] -translate-y-[50%] flex  flex-col left-2">
            <div className="bg-white rounded-md p-1.5 gap-y-1 flex flex-col items-center shadow-md">
            <div>pencil</div>
            <div>square</div>
            <div>circle</div>
            <div>Ellipsis</div>
            </div>
            <div className="bg-white rounded-md p-1.5 mt-3 flex flex-col items-center shadow-md">
                <div>
                    Undo
                </div>
                <div>
                    Redo
                </div>
            </div>
        </div>
    )
}

Toolbar.skeleton=function ToolbarSkeleton(){
    return (
        <div className="absolute top-[50%] -translate-y-[50%] flex flex-col left-2 w-[52px] h-[360px] bg-white shadow-md rounded-md animate-pulse"/>
    )
}