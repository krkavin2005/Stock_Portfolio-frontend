import Sellitem from "./Sellitem";

const Sellstock=(props)=>{
    const {list,trade,setTrade,removeStock} =props;
   
    return(
        <div className="sellstock" style={{display:trade?"flex":"none"}}>
            <h1>Select</h1>
            {list.map(el=> <Sellitem stock={el} setTrade={setTrade} removeStock={removeStock}/>)}
        </div>
    )
}

export default Sellstock;