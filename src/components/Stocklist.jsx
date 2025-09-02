import Stockcard from "./Stockcard";

const Stocklist=()=>{
    const list=[
        {
            symbol:"AAPL",
            company:"Apple",
            price:175
        },
        {
            symbol:"TSLA",
            company:"Tesla",
            price:250
        },
        {
            symbol:"MSFT",
            company:"Microsoft",
            price:310
        },
        {
            symbol:"NFLX",
            company:"Netflix",
            price:560
        },
    ]
    return (
        <div className="stocklist">
            {list.map(el=>{
                return <Stockcard stock={el}/>
            })}
        </div>
    )
}
export default Stocklist;