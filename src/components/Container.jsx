import Header from "./Header";
import Display from "./Display";
import Sellstock from "./Sellstock";
import Charts from "./Charts";
import { useState } from "react";


const Container = (props) => {
    const {list,removeStock}=props
    const [trade,setTrade]=useState(false)
    return (
        <div className="container">
            <Header list={list} />
            <Charts list={list} />
            <Display list={list} setTrade={setTrade}/>
            <Sellstock list={list} trade={trade} setTrade={setTrade} removeStock={removeStock}/>
        </div>
    )
}

export default Container;