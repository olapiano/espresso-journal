'use client'

import AlertComponent from "@/components/base/AlertComponent";
import Button from "@/components/base/Button";
import { useState } from "react";

type Props = {    
    children: React.ReactNode
    color?: ButtonColors
    title?: string
    body?: string
    viewTimeSec?: number
}

export function AlertButton({children, title="", body="", viewTimeSec=10}: Props) {
    const [viewAlert, setViewAlert] = useState(false)
    
    const hideAlert = () => {
        setViewAlert(false)
    }

    const handleClick = () => {
        const timeout = setTimeout(hideAlert, 3000)
        setViewAlert(true)
    }
    
    return (
        <>
            <Button onClick={handleClick}>{children}</Button>
            <AlertComponent isVisible={viewAlert} color="info" title={title} body={body} />
            
        </>
    )
}

export function TestButton({children, color="default"}: Props) {
    return <Button color={color} onClick={() => alert('test')}>{children}</Button>
}
