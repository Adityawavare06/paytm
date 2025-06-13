import React from 'react'
   
import { Link } from 'react-router-dom';

export default  function Buttomwarning ({to, label, buttontext}){
  return (
    <div className='text-sm py-2 '>
        <div>
            {label}
        </div>
   <Link className=" pointer cusror-pointer underline " to={to} >      {buttontext}</Link> 

    </div>
  )
}
