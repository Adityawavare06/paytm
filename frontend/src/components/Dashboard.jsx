import React from 'react'
import Appbar from '../parts/Appbar'
import Balance from '../parts/balance'

import Users from '../parts/User'
export default function Dashboard() {
  return (
    <div>Dashboard

       <Appbar/>  
       <Balance Amout1={"$50000"}/>
       <Users/>
    </div>
  )
}
