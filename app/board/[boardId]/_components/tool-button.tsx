"use client"
import { LucideIcon } from "lucide-react"
import { Hint } from "@/components/ui/hint"
import { Button } from "@/components/ui/button"

interface ToolButtonProps{
    label:string,
    icon:LucideIcon,
    onclick:()=>void,
    isActive?:boolean,
    isDisabled?:boolean,
}

export const ToolButton=({
    label,
    icon:Icon,
    onclick,
    isActive,
    isDisabled
}:ToolButtonProps)=>{
    return (
        <Hint label={label} side="right" sideOffset={14}>
            <Button
            disabled={isDisabled}
            variant={isActive ? "boardActive":"board"}
            size="icon"
            onClick={onclick}
            >
                <Icon/>
            </Button>
        </Hint>
    )
}