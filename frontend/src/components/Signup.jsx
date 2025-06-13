import { useState } from 'react'

import Headding1 from '../parts/Heading'
import Subheading from '../parts/Subheading'
import Inputbox from '../parts/Inputbox'
import Button from '../parts/Button'
import axios from "axios"
import Buttomwarning from '../parts/Buttomwarning'

 export default  function Signup (){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center" > 
     <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
         <Headding1 label={"Sign up"}/>
         <Subheading paras={"Enter  your information to create an account "}/>
         <Inputbox label={"First name "} onechange={e=>{ setFirstName(e.target.value)}} placeholder={"john"} />
            <Inputbox label={"Last name "} onechange={(e)=>{setLastName(e.target.value)} } placeholder={"deerr"} />
            <Inputbox label={"Email / Username  "} onechange={(e)=>{setUsername()}} placeholder={"johndeeer@gmail.com"} />
            <Inputbox label={"Password "} onechange={e=>{ setPassword(e.target.value)}} placeholder={"134325325"} /> 
          <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} label={"Sign up"} />
 
 <Buttomwarning label={"already have an account ?"} to={"/signin"} buttontext={"signin"}/>

            </div>
            </div>
    </div>
  )
}

