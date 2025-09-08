import { useState } from "react";

const Stockcard = (props) => {
    const {stock,addStock}=props;
    const[qty,setQty]=useState("")
    const [buy,setBuy]=useState("")

    const handleQty=(e)=>{
        setQty(e.target.value)
    }
    
    const handleSubmit=()=>{
        if(buy){
            addStock(stock.symbol,stock.company,qty,stock.price,stock.price+20)
            setQty("")
            setBuy(false)
        }
        else setBuy(true)
    }

    return (
        <div className="card">
            <h1>{stock.company}</h1>
            <h2>{stock.symbol}</h2>
            <h3>${stock.price}</h3>
            {buy?<h4>Qty:<input className="cardqty" type="Text" placeholder="Quantity" value={qty} onChange={handleQty}/></h4>:""}
            <button onClick={handleSubmit}>{buy?"Confirm":"Buy"}</button>
            {buy?<button style={{backgroundColor:"rgb(214,93,93)",marginLeft:"5px"}} onClick={()=>setBuy(false)}>Cancel</button>:""}
        </div>
    )
}

export default Stockcard;