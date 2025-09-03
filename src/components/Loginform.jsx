import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Loginform = () => {
    const navigate=useNavigate()
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const [nameAlert, setNameAlert] = useState("");
    const [passAlert, setPassAlert] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setNameAlert("")
        setPassAlert("")
        if (!name && !password) {
            setNameAlert("Username empty")
            setPassAlert("Password empty")
        }
        else if (!name) setNameAlert("Username empty")
        else if (!password) setPassAlert("Password empty")
        else if (name == "admin" && password == "admin@123") {
            navigate("/container")
        }
        else setPassAlert("Incorrect Username/Password");
    }
    return (
        <div id="form">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                    <input type="text" placeholder="username" value={name} onChange={handleNameChange} />
                </div>
                {nameAlert}
                <div>
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                </div>
                {passAlert}
                <button type="submit">Login</button>

            </form>
        </div>
    )
}
export default Loginform;