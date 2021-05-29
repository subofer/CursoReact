import React from 'react'

export default function Tabs({tabs,tabcontrol}){
            return (
                <ul className="nav nav-tabs">
                {tabs.map((tab,index) =>
                    <li key={index} className="nav-item">
                        <a className={"nav-link " + (tabcontrol[0]==index && "active")} href="#" onClick={()=>tabcontrol[1](index)}>{tab.name}</a>
                    </li>
                )}
                </ul>
            )
        }

