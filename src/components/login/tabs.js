import React from 'react'
import {Link} from "react-router-dom";

export default function Tabs({tabs,tabcontrol}){
            return (
                <ul className="nav nav-tabs">
                {tabs.map((tab,index) =>
                    <li key={index} className="nav-item">
                        <Link className={"nav-link " + (tabcontrol[0]===index && "active")} to="#" onClick={()=>tabcontrol[1](index)}>{tab.name}</Link>
                    </li>
                )}
                </ul>
            )
        }

