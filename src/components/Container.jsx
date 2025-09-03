import { useState } from "react";
import Header from "./Header";
import Display from "./Display";
import Sellstock from "./Sellstock";
import Charts from "./Charts";

const DATA=[
    {
        symbol:"AAPL",
        company:"Apple",
        qty:10,
        buy_price:120,
        cur_price:145,
        gl:20
    },
    {
        symbol:"TSLA",
        company:"Tesla",
        qty:5,
        buy_price:700,
        cur_price:720,
        gl:2
    }
]

const Container=()=>{
    const[list,setList]=useState(DATA)
    return(
        <div className="container">
            <Header list={list}/>
            <Charts list={list}/>
            <Display list={list}/>
            <Sellstock list={list}/>
        </div>
    )
}

export default Container;