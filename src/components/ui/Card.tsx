import React from "react"
interface Props{
    title: string;
    description: string;
    children: React.ReactNode;
}
export function PriceCard({title,description,children } : Props){
    return(
        <div>
            {children}
        </div>
    )
}