import Element from "./Element"

const Display = (props) => {
    const { list } = props
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
                <button className="buy">Buy Stock</button>
                <button className="sell">Sell Stock</button>
            </div>
        </div>
    )
}

export default Display;