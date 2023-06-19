import React, { useState } from 'react';

const Calculator = () => {

    let [input,setInput]=useState('');
    let operators=['+', '-', '*', '/'];

    function addValue(str) {
        let n=input.length-1;
        let temp=input;
        if(input[n]===operators[0] || input[n]===operators[1] || input[n]=== operators[2] || input[n]===operators[3])
        {
            if(str===operators[0] || str===operators[1] || str===operators[2] || str===operators[3]){
                temp=temp.slice(0,n);
            }
        }
        str=temp+str;
        setInput(str);
    }

    function evaluation(){
        let n=input.length-1;
        let temp=input;
        if(input[0]===operators[0] || input[0]===operators[1] || input[0]=== operators[2] || input[0]===operators[3]){
            temp=temp.slice(1,n+1);
        }
        if(input[n]===operators[0] || input[n]===operators[1] || input[n]=== operators[2] || input[n]===operators[3]){
            temp=temp.slice(0,n);
        }

        let answer=eval(temp);
        setInput(answer);
    }

    return (
        <div className='container'>
            <div className='result'>{input}</div>
            <div className='btn-container'>

                <button onClick={()=>{setInput('')}} >C</button>
                <button onClick={(e)=>{addValue(e.target.innerText)}}>/</button>
                <button onClick={(e)=>{addValue(e.target.innerText)}}>-</button>
                <button onClick={(e)=>{addValue(e.target.innerText)}}>*</button>

                <button onClick={(e)=>{addValue(e.target.innerText)}}>7</button>
                <button onClick={(e)=>{addValue(e.target.innerText)}}>8</button>
                <button onClick={(e)=>{addValue(e.target.innerText)}}>9</button>
                <button onClick={(e)=>{addValue(e.target.innerText)}} className='plus'>+</button>

                <button onClick={(e)=>{addValue(e.target.innerText)}}>4</button>
                <button onClick={(e)=>{addValue(e.target.innerText)}}>5</button>
                <button onClick={(e)=>{addValue(e.target.innerText)}}>6</button>

                <button onClick={(e)=>{addValue(e.target.innerText)}}>1</button>
                <button onClick={(e)=>{addValue(e.target.innerText)}}>2</button>
                <button onClick={(e)=>{addValue(e.target.innerText)}}>3</button>
                <button onClick={(e)=>{evaluation()}} className='equal'>=</button>

                <button onClick={(e)=>{addValue(e.target.innerText)}}>0</button>
                <button onClick={(e)=>{addValue(e.target.innerText)}}>.</button>
                <button> </button>

            </div>
        </div>
    );
};

export default Calculator;