const Header=(props)=>{
    const {list}=props;
    let sum=0;
    let total=list.forEach(el => {
        sum+=el.cur_price;
    });
    const getReview=()=>{
        let investment=0;
        let cur_val=0;
        for(let el of list){
            investment+=el.buy_price*el.qty
            cur_val+=el.cur_price*el.qty
        }
        return ((cur_val-investment)/investment * 100).toFixed(2);
    }
    return(
        <div className="header">
            <h1>Stock Holdings</h1>
            <div className="dashboard">
                <span style={{borderRight:"1px solid white"}}><h4>Holdings Value</h4><h2>${sum}</h2></span>
                <span><h4>Gain/Loss</h4><h2 className={(getReview()>0?"profit":"loss")}>{(getReview()>0)?"+":""}{getReview()}%</h2></span>
            </div>
        </div>
    )
}

export default Header;