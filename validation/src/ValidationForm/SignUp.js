import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
function SignUp() {
    const navigate = useNavigate()
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [VerifyPassword, setVerifyPassword] = useState("")
    const [Email, setEmail] = useState("")
    const [Technologies, setTechnologies] = useState("Javascript")
    function confirmPassword() {
        const newArr = [];
        if (Username.trim() === "") {
            alert("Username can't be empty!")
        }
        else if (Username.length < 5 || Username.length > 15) {
            alert("Username should be minimum 5 and maximum 15 character long!")
        }
        else if (Password.trim() === "") {
            alert("Password can't be empty!")
        }
        else if (VerifyPassword.trim() === "") {
            alert("Verify Password can't be empty!")
        }
        else if (Password !== VerifyPassword) {
            alert("Value of Password and Verify Password fields are not matched!")
        }
        else if (Email.trim() === "") {
            alert("Email can't be empty!")
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email)) {
            alert("Email is invalid")
        }
        else {
            newArr.push({ Username: Username, Password: Password, Email: Email, Technologies: Technologies })
            navigate("/Dashboard")
        }
    }
    return (
        <div className="container">
            <h1>𝚂𝙸𝙶𝙽𝚄𝙿</h1>
            <form className="fields">
                <label>Username<span>*</span></label>
                <input type="text" placeholder="Username" onChange={(e) => {
                    setUsername(e.target.value)
                }} /><br />
                <label>Password<span>*</span></label>
                <input type="password" placeholder="Password" onChange={(e) => {
                    setPassword(e.target.value)
                }} /><br />
                <label>Confirm Password<span>*</span></label>
                <input type="password" placeholder="Password" onChange={(e) => {
                    setVerifyPassword(e.target.value)
                }} /><br />
                <label>Email<span>*</span></label>
                <input type="email" placeholder="Email" onChange={(e) => {
                    setEmail(e.target.value)
                }} /><br />
                <label>Technologies<span>*</span></label>
                <select onChange={(e) => {
                    setTechnologies(e.target.value)
                }} >
                    <option>Javascript</option>
                    <option>Java</option>
                    <option>Python</option>
                    <option>Scala</option>
                    <option>Spark</option>
                </select><br />
                <button onClick={() => {
                    confirmPassword()
                }}>Submit</button>
            </form>
        </div>
    )
}
export default SignUp