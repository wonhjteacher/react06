import React from 'react';
import EventStyle from './../style/event.module.css';
import {Link} from 'react-router-dom';
import { useEffect ,useState } from 'react';
import EventItem from './EventItem';

const Event = () => {
     //data 불러오기 
     const [dataList,setDataList] = useState([]);
     const dataUrl = './data/eventData.json';
     useEffect(()=>{
        (async () => {
            await fetch(dataUrl)
            .then(res=>res.json())
            .then(res=>setDataList(res))
        })()
     },[])
     

     const viewData = dataList.filter((data,index)=>index<5)
     console.log(viewData)
    return (
        <div className={EventStyle.event}>
            <h2>Event</h2>
            <ul>
                {
                    viewData.map((data,index)=>{
                        return(
                            <EventItem key={data.id} data={data} index={index} />
                        )
                    })
                }
                
            </ul>
        </div>
    );
};

export default Event;