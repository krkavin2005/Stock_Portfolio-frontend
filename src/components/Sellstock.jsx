import Sellitem from "./Sellitem";

const Sellstock=(props)=>{
    const {list,trade,setTrade,removeStock} =props;
   
    return(
        <div className="sellstock" style={{display:trade?"flex":"none"}}>
            <h1>Select</h1>
            {list.map(el=> <Sellitem stock={el} setTrade={setTrade} removeStock={removeStock}/>)}
            <button className="return" onClick={()=>setTrade(false)} style={{width:"auto"}}>Return</button>
        </div>
    )
}

export default Sellstock;