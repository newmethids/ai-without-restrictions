"use client";

import { sitelist } from "./sitelist";

export const Sites = () => {


    return (
        <ol className={"flex gap-2 flex-col"}>
            {sitelist.map(x => {
                return (
                    <li key={x.name}>
                        <a target={"_blank"} href={x.link}>{x.name}</a>
                    </li>
                )
            })}
        </ol>
    )
}