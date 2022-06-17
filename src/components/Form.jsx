import React from 'react';
import { useRef, useState } from 'react';

function Form(props) {
    const writer = useRef() ;  // 객체형태의 변수 생성 writer=> 작성자 input참조
    const content = useRef() ;  // 객체형태의 변수 생성 conten => 컨텐츠input 참고 
    const [state,setState] = useState({
        writer:'',
        content:'',
        grade : 50
    }) 

const fncForm = (e) => {
    setState({
        ...state,
        [e.target.name] : e.target.value
    })
}

console.log(state)
const fncSubmit = () => {
    console.log(state)
}
    
    return (
        <div style={{width:'1200px',margin:'auto',fontSize:"2rem"}}>
            <div>
                <input 
                type="text" 
                name="writer" 
                id="writer" 
                placeholder='작성자' 
                ref={writer}
                onChange={fncForm}
                 />
                <label htmlFor="writer" className='blind'>작성자</label>
            </div>
            <div>
                <textarea
                 name='content' 
                 placeholder='오늘수행한 일'
                 ref={content}
                 onChange={fncForm}

                  />
            </div>
            <div>
                <select name="grade" value={state.grade} onChange={fncForm}>
                    <option value={50}>50</option>
                    <option value={60}>60</option>
                    <option value={70}>70</option>
                    <option value={80}>80</option>
                    <option value={90}>90</option>
                    <option value={100}>100</option>
                </select> 
            </div>
            <div>
                <button onClick={fncSubmit}>저장하기</button>
            </div>
        </div>
    );
}

export default Form;