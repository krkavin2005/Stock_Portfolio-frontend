import { BrowserRouter, Route , Routes} from "react-router";
import Container from "./components/Container"
import Loginform from "./components/LoginForm";
import Stocklist from "./components/Stocklist";
import { useEffect, useState } from "react";

const DATA = [
    {
        symbol: "AAPL",
        company: "Apple",
        qty: 10,
        buy_price: 120,
        cur_price: 145
    },
    {
        symbol: "TSLA",
        company: "Tesla",
        qty: 5,
        buy_price: 700,
        cur_price: 720
    }
]

const App=()=>{
  const [list, setList] = useState(DATA)
    const calcGainLoss = (arr) => {
      console.log(arr)
        const res = arr.map(el => {
            return { ...el, gl: ((el.cur_price - el.buy_price ) / (el.buy_price ) * 100).toFixed(2) }
        })
        setList(res);
    }

    const addStock=(symbol,company,qty,buy_price,cur_price)=>{
      const exist=list.findIndex((el)=>el.symbol==symbol)
      let arr
      if(exist>=0){
        arr=list
        qty=Number(qty)
        qty+=arr[exist].qty;
        arr[exist]={symbol,company,qty,buy_price,cur_price}
      }
      else{
         arr=[...list,{symbol,company,qty,buy_price,cur_price}]
      }
        calcGainLoss(arr)
    }

    const removeStock=(qty,symbol)=>{
      const arr=list.map(el=>{
        if(el.symbol==symbol) {
          el.qty-=qty;
        }
        return el;
      }).filter(el=>el.qty>0)
      calcGainLoss(arr)
    }
    
    useEffect(() => calcGainLoss(list), [])
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loginform />}/>
      <Route path='/container' element={<Container list={list} removeStock={removeStock}/>}/>
      <Route path='/stocklist' element={<Stocklist addStock={addStock}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;