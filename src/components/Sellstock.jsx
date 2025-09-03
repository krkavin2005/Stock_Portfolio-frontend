import Sellitem from "./Sellitem";

const Sellstock=(props)=>{
    const {list}=props;
    return(
        <div className="sellstock"  style={{display:"none"}}>
            {list.map(el=> <Sellitem stock={el}/>)}
            <button className="sell">Sell</button>
        </div>
    )
}

export default Sellstock;