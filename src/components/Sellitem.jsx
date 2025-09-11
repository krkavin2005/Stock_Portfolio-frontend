import { useState } from "react";

const Sellitem = (props) => {
    const { stock, setTrade, removeStock } = props;
    const [sell, setSell] = useState(false)
    const [qty, setQty] = useState("")
    const [msg, setMsg] = useState("")
    const handleChange = (e) => {
        setQty(e.target.value);
    }
    const handleSell = () => {
        if (sell) {
            if (qty > stock.qty) setMsg("Not Enough Holdings")
            else if (qty == "" || qty <= 0) setMsg("Enter a Valid Quantity")
            else {
                removeStock(qty, stock.symbol)
                setQty("")
                setSell(false)
                setMsg(false)
            }
        }
        else setSell(true)
    }

    const handleCancel = () =>{
        setSell(false)
        setMsg("")
    }
    return (
        <span className="sellitem">
        <span className="sellitemspan">
            <span>{stock.symbol}</span>
            <span>${stock.cur_price}</span>
            {sell ? <input className="sellqty" type="text" placeholder="Qty" value={qty} onChange={handleChange} /> : ""}
            <button onClick={handleSell}>{sell ? "Confirm" : "Sell"}</button>
            {sell && <button onClick={handleCancel} style={{marginLeft:"5px" , backgroundColor:"rgb(41,78,130)" , color:"white"}}>Cancel</button>}
        </span>
        <p style={{ color: "rgb(214,93,93)" , margin:"0" , textAlign:"center"}}>{msg}</p>
        </span>
    )
}

export default Sellitem;