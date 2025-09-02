import { useState } from "react";

const Loginform=()=>{
    const[name,setName]=useState("");
    const[password,setPassword]=useState("")
    const handleNameChange=(e)=>{
        setName(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name && !password) console.log("Username and Password Empty")
        else if(!name) console.log("Username empty")
        else if(!password) console.log("Password empty")
        else {
        console.log("Success")
        console.log("form submitted");
        console.log(name);
        console.log(password);
        }
    }
    return(
        <div id="form">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                    <input type="text" placeholder="username" value={name} onChange={handleNameChange}/>
                </div>
                <div>
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Loginform;