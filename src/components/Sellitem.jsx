const Sellitem=(props)=>{
    const {stock}=props;
    return (
        <div className="sellitem">
            <span>{stock.symbol}</span>
            <span>${stock.cur_price}</span>
        </div>
    )
}

export default Sellitem;