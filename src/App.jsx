import { BrowserRouter, Route , Routes} from "react-router";
import Container from "./components/Container"
import Loginform from "./components/LoginForm";
import Stocklist from "./components/Stocklist";

const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loginform />}/>
      <Route path='/container' element={<Container />}/>
    </Routes>
    
    {/* <Stocklist/> */}
    </BrowserRouter>
  )
}

export default App;