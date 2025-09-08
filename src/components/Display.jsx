import Element from "./Element"
import {NavLink} from "react-router"
const Display = (props) => {
    const { list , setTrade} = props
    const handleSell=()=>{
        setTrade(true)
    }
    return (
        <div className="display">
            <table>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th id="min">Company</th>
                        <th>Qty</th>
                        <th>Buy Price</th>
                        <th>Current Price</th>
                        <th>Gain/Loss</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((el) => <Element stock={el} />)}
                </tbody>
            </table>
            <div>
                <NavLink to="/stocklist"><button className="buy">Buy Stock</button></NavLink>
                <button className="sell" onClick={handleSell}>Sell Stock</button>
            </div>
        </div>
    )
}

export default Display;