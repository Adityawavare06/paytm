import React from "react"
import Headding1 from '../parts/Heading'
import Subheading from '../parts/Subheading'
import Inputbox from '../parts/Inputbox'
import Button from '../parts/Button'

export default function Signin() {
  return (
     <div className="bg-slate-300 h-screen flex justify-center" > 
     <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
         <Headding1 label={"Sign iN"}/>
         <Subheading paras={"Enter  you credentials to access your account  "}/>
            <Inputbox label={"Email  "} onechange={onchange} placeholder={"johndeeer@gmail.com"} />
            <Inputbox label={"Password "} onechange={onchange} placeholder={"134325325"} /> 
           <div className="pt-3"> 
            <Button    label={"Signin"}/>
           </div> 
            </div>
            </div>
    </div>

  )
}
