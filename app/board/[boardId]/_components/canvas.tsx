"use client"

import { useCallback, useState } from "react"
import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"
import { useCanRedo,
     useCanUndo,
      useHistory,
       useMutation,
       useSelf
    
    } from "@liveblocks/react/suspense"

import { Camera, CanvasMode, CanvasState } from "@/types/canvas"
import { CursorsPresence } from "./cursors-presence"
import { pointerEventToCanvasPoint } from "@/lib/utils"
interface CanvasProps{
    boardId: string
}
export const Canvas=({boardId}:CanvasProps)=>{

    const [canvasState,setCanvasState]=useState<CanvasState>({
        mode: CanvasMode.None,
    })
    const info=useSelf((me)=>me.info)

    const [camera,setCamera]=useState<Camera>({x:0,y:0});
    const history=useHistory()
    const canRedo=useCanRedo()
    const canUndo=useCanUndo()

    const onWheel=useCallback((e:React.WheelEvent)=>{//used for tasks like zooming, panning, or scrolling through content in a custom way
        console.log({
            x:e.deltaX,
            y:e.deltaY
        });  
        setCamera((camera)=>({
            x:camera.x-e.deltaX,//e.deltaX= by how much points did x shift down or up
            y: camera.y-e.deltaY
        }))
    },[])
    const onPointerMove=useMutation(({setMyPresence},e:React.PointerEvent)=>{
        e.preventDefault()
        const current=pointerEventToCanvasPoint(e,camera);
        console.log("current:",{current});
        setMyPresence({cursor:current})
    },[]);
    return (
        <main className="h-full w-full relative bg-neutral-200 touch-none">
            <Info boardId={boardId}/>
            <Participants/>
            <Toolbar
            canvasState={canvasState}
            setCanvasState={setCanvasState}
            canRedo={canRedo}
            canUndo={canUndo}
            undo={history.undo} 
            redo={history.redo}
            />
            <svg
             className="h-[100vh] w-[100vw]"
             onWheel={onWheel}
             onPointerMove={onPointerMove}
            >
                {/* <g>ke neeche immediately foreignObject ana chaiye no div or any other html tag */}
                <g>
                    <CursorsPresence/>
                </g>
            </svg>
        </main>
    )
}