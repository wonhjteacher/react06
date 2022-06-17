import React from 'react';
import './../style/main.css';
import { useState ,useEffect } from 'react';

const Main = () => {
    const listData=['content01','content02','content03','content04']; 
    const [num,setNum] = useState(0);  
    const [check,setCheck] = useState('next');
    //listData.unshift('more1')
    listData.unshift(listData[listData.length-1])
    const fncClassAdd = (i) =>{
        const on=(i===num)?' on':' on' ; 
        const view='view_';
        const textNum="00000"+(i+1);
        const viewText=view+textNum.slice(-2); 
        console.log(viewText)
        return viewText+on
    }
    const initialStyle = {
        position:'relative',
        left:'-100%',
        marginLeft:`${num * -100}%`,
    }
    const [slideStyle,setSlideStyle]= useState(initialStyle)
    
    const fncPrevStyle = () => {
        setSlideStyle({
            ...initialStyle,
            transition:(num!==3) ? 'margin 500ms ease':'none',
            animation:(num===3)?'lastSlide 500ms ease 1':'none'
        })
    }
    const fncNextStyle= () => {
        setSlideStyle({
            ...initialStyle,
            transition:(num!==0) ? 'margin 500ms ease':'none',
            animation:(num===0)?'firstSlide 500ms ease 1' : 'none'
        }) 
    }

    const fncPrevSlide = () => {
        setNum(num<=0?3:num-1);
        setCheck('prev');
    }

    const  fncNextSlide  = () => {
        setNum(num>=3?0:num+1);
        setCheck('next');
    }
 //  넥스트 버튼을클릭하면  fncNextSlid 호출 
 //  num => +1   check=next 
 // useEffect 을 사용해서 num 변화를 감지해서, 체크상태 감지 next 가 들어가 있으면 
 //fncNextStyle 함수를 호출해서 ul fncNextStyle 안의 스타일을 적용한다. 
    useEffect(()=>{
        (check === 'next') ? fncNextStyle() : fncPrevStyle () ;
    },[num])

    return (
        <div className='mainContainer'>
            <h2>메인페이지</h2>
            <div className="viewBox">
                <div className='slideBtn'>
                    <button type="button" onClick={fncPrevSlide}>이전</button>
                    <button type="button" onClick={fncNextSlide}>이후</button>
                </div>
            </div>
            <div className='viewContents'>
                <ul style={slideStyle}>
                    {
                        listData.map((list,index)=>{
                            return(
                                <li className={fncClassAdd(index)}>{list}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Main;

/* 
const list = [1,2,3,4,5,a,b]
const list2 = list 
const list2 = [...list]
const obj = {a:1,b:2,c:3}
//const obj2=obj   참조만 맞춘것 
const obj2 ={...obj,c:4,b:1,e:8}
console.log(obj , obj2)

*/