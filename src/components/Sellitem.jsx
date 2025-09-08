import { useState } from "react";

const Sellitem=(props)=>{
    const {stock,setTrade,removeStock}=props;
    const [sell,setSell]=useState(false)
    const [qty,setQty]=useState("")
    const handleChange=(e)=>{
        setQty(e.target.value);
    }
    const handleSell=()=>{
        if(sell){
            removeStock(qty,stock.symbol)
            setQty("")
            setTrade(false)
            setSell(false)
        }
        else setSell(true)
    }
    return (
        <span className="sellitem">
            <span>{stock.symbol}</span>
            <span>${stock.cur_price}</span>
            {sell?<input className="sellqty" type="text" placeholder="Qty" value={qty} onChange={handleChange}/>:""}
            <button onClick={handleSell}>{sell?"Confirm":"Sell"}</button>
        </span>
    )
}

export default Sellitem;