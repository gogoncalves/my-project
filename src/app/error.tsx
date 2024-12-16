"use client"

import Link from "next/link"
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    useEffect(() => {
        console.log(error)
    }, [error]);

    return (
        <div>
            <h2>Algo deu errado!</h2>
            <div><Link href="/">Back to home</Link></div>
        </div>
    )
}

export default Error;