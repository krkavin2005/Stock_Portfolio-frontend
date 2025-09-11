import { NavLink } from "react-router";
import Stockcard from "./Stockcard";

const Stocklist = (props) => {
    const { addStock } = props
    const list = [
        {
            symbol: "AAPL",
            company: "Apple",
            price: 175
        },
        {
            symbol: "TSLA",
            company: "Tesla",
            price: 250
        },
        {
            symbol: "MSFT",
            company: "Microsoft",
            price: 310
        },
        {
            symbol: "NFLX",
            company: "Netflix",
            price: 560
        },
    ]
    return (
        <div className="stocklist">
            <div className="stocklistblock">
                {list.map((el, index) => {
                    return <Stockcard key={index} stock={el} addStock={addStock} />
                })}
            </div>
            <NavLink style={{textDecoration:"none"}} to="/container">
                <button className="return" >Return</button>
            </NavLink>
        </div>
    )
}
export default Stocklist;