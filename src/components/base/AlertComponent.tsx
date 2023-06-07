'use client'

import { Alert } from "flowbite-react";

type Props = {
    color: "info" | "failure" | "success" | "warning"
    isRounded?: boolean
    withBorderAccent?: boolean
    title: string
    body: string
    isVisible: boolean
}

export default function AlertComponent({color, isRounded = true, withBorderAccent=false, title, body, isVisible=false}: Props) {
    
    return (
        <Alert 
            color={color} 
            rounded={isRounded} 
            withBorderAccent={withBorderAccent}
            /* onDismiss={() => stopFunction} */
            style={{ visibility: isVisible ? 'visible' : 'hidden'}}
        >
            <span>
                <span className="font-medium">
                    {title}
                </span>
                {' '}{body}
            </span>
        </Alert>
    )
}