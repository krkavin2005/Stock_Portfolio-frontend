const Element=(props)=>{
    const {stock}=props;
    const getClassName=()=>{
        return (stock.gl>0)?"profit":"loss";
    }
    return(
        <tr className="Element">
            <td>{stock.symbol}</td>
            <td>{stock.company}</td>
            <td>{stock.qty}</td>
            <td>{stock.buy_price}</td>
            <td>{stock.cur_price}</td>
            <td className={getClassName()}>{`${(stock.gl>0)?"+":""}`}{stock.gl}%</td>
        </tr>
    )
}

export default Element;