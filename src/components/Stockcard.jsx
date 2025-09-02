const Stockcard = (props) => {
    const {stock}=props;
    return (
        <div className="card">
            <h1>{stock.company}</h1>
            <h2>{stock.symbol}</h2>
            <h3>${stock.price}</h3>
            <button>Buy</button>
        </div>
    )
}

export default Stockcard;