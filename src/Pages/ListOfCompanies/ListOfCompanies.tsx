import React, { useState } from "react"
import './ListOgCompanies.css'

interface CompaniesProps {
    items: string[];
    heading: string;
    onSelectedItem: (item: string) => void;
}

function ListOfCompanies({items, heading, onSelectedItem}: CompaniesProps) {
    const [selectedId, setSelectedId] = useState(-1);

    return (
        <><h1>Company list</h1><ul>
            {items.map((item, index) => (
                <li className={selectedId === index ? 'list-group active' : 'list-group'} onClick={() => { setSelectedId(index); onSelectedItem(item)}}>
                    {item}
                </li>
            ))}
            
        </ul></>
    )
}

export default ListOfCompanies