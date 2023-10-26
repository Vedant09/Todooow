import React from 'react'
// import Task from './Task'

export default function Elements(){

    const[item,setItem] = React.useState(["Task 1"]);
    function addItem(){
        setItem(function(prevItems){
            return [...prevItems,` Task ${prevItems.length+1}`]
        });
    }

    return(
        <div className='dddd'>
            <div className='todo'>
                <h1>TO DO LIST</h1>
            </div>
            <div className='task-div'>
                <span className='span-div'>
                    <h1>Add Task :</h1> 
                    <input className='input' type="text"/>
                </span>
                <button  onClick={addItem} className='button'>Submit</button>
                <div className='items-list'>
                    <h1 className='taskis'>{item}</h1>
                </div>
            </div>
        </div>
    )
}