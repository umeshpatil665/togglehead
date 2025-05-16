import React from 'react'
import './history.css'
import { HistoryData, type HistoryProps } from './module'
import { Plus } from 'lucide-react'
const History = () => {
  return (
    <div className='historyContainer'>
        
        
        {
            HistoryData.map((cur:HistoryProps,index:number)=>    <div key={cur?.title} className='gridColspan1'>
            <h4>{cur?.subTitle}</h4>
            <h2>{cur?.customer}<Plus/></h2>
            <h3>{cur?.title}</h3>
            <p>{cur?.description}</p>
        </div>)
        
}
    </div>
  )
}

export default History