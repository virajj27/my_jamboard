import { Circle, MousePointer2, Pencil, Redo2, Square, StickyNote, Type, Undo2 } from "lucide-react"
import { ToolButton } from "./tool-button"
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";


interface ToolBarProps{
    canvasState:CanvasState,
    setCanvasState:(newState:CanvasState) => void;
    undo:()=>void,
    redo:()=>void,
    canUndo:boolean,
    canRedo:boolean,
}
export const Toolbar=({
    canvasState,
    setCanvasState,
    undo,
    redo,
    canUndo,
    canRedo
}:ToolBarProps)=>{
    return (
        <div className="absolute top-[50%] -translate-y-[50%] flex  flex-col left-2">
            <div className="bg-white rounded-md p-1.5 gap-y-1 flex flex-col items-center shadow-md">
            <ToolButton
            label="select"
            icon={MousePointer2}
            onclick={()=>{setCanvasState({mode:CanvasMode.None})}}
            isActive={canvasState.mode===CanvasMode.None||
                canvasState.mode===CanvasMode.SelectionNet||
                canvasState.mode===CanvasMode.Pressing||
                canvasState.mode===CanvasMode.Resizing||
                canvasState.mode===CanvasMode.Translating
            }
            />
            <ToolButton
            label="Text"
            icon={Type}
            onclick={()=>{setCanvasState({mode: CanvasMode.Inserting,layerType:LayerType.Text})}}
            isActive={
                canvasState.mode===CanvasMode.Inserting &&
                canvasState.layerType===LayerType.Text
            }
            />
            <ToolButton
            label="Sticky Note"
            icon={StickyNote}
            onclick={()=>{setCanvasState({mode: CanvasMode.Inserting,layerType:LayerType.Note})}}
            isActive={
                canvasState.mode===CanvasMode.Inserting &&
                canvasState.layerType===LayerType.Note
            }
            />
            <ToolButton
            label="Rectangle"
            icon={Square}
            onclick={()=>{setCanvasState({mode: CanvasMode.Inserting,layerType:LayerType.Rectangle})}}
            isActive={
                canvasState.mode===CanvasMode.Inserting &&
                canvasState.layerType===LayerType.Rectangle
            }
            />
            <ToolButton
            label="Ellipse"
            icon={Circle}
            onclick={()=>{setCanvasState({mode: CanvasMode.Inserting,layerType:LayerType.Ellipse})}}
            isActive={
                canvasState.mode===CanvasMode.Inserting &&
                canvasState.layerType===LayerType.Ellipse
            }
            />
            <ToolButton
            label="Pen"
            icon={Pencil}
            onclick={()=>{setCanvasState({mode:CanvasMode.Pencil})}}
            isActive={canvasState.mode===CanvasMode.Pencil}
            />
            </div>
            <div className="bg-white rounded-md p-1.5 mt-3 flex flex-col items-center shadow-md">
            <ToolButton
            label="Undo"
            icon={Undo2}
            onclick={undo}
            isDisabled={!canRedo}
            />
            <ToolButton
            label="Redo"
            icon={Redo2}
            onclick={redo}
            isDisabled={!canUndo}
            />
            </div>
        </div>
    )
}

export const ToolbarSkeleton=()=>{
    return (
        <div className="absolute top-[50%] -translate-y-[50%] flex flex-col left-2 w-[52px] h-[360px] bg-white shadow-md rounded-md animate-pulse"/>
    )
}