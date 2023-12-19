import React from "react"
import { useParams } from "react-router"

export const BookAsFC: React.FC = ()=>{
    const {id} =useParams();

    return (
        <>
        Book Page {id}
        </>
    )

    return <div><p> Books</p></div>
}