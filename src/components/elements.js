import React from 'react'

export default function Elements(){

    const [items, setItems] = React.useState(()=>JSON.parse(localStorage.getItem("items"))||[]);
    const [task, setTask] = React.useState('');

    React.useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    }, [items])

    function addItem(){
        if(!task){
            alert("Task cant be empty")
            return
        }
        if (task) {
            setItems((prevItems) => [`Task ${prevItems.length + 1}: ${task}`,...prevItems]);
            setTask('');
            console.log(task.length)
        }else{
            alert("Only 5 tasks can be added at a time")
        }
    }

    function clearItem(){
        setItems([])
    }

    function deleteTask(index) {
        setItems(prev => {
        const newArray = [...prev];
        newArray.splice(index, 1); 
        return newArray; 
        });
    }
    
    // function deleteTask(index){
    //     setItems(prev => prev.filter((items,i)=>i!==index))
    // }

    return(
        <div className='dddd'>
            <div className='todo'>
                <h1>TO DO LIST</h1>
            </div>
            <div className='task-div'>
                <span className='span-div'>
                    <h1>Add Task :</h1> 
                    <input 
                        className='input' 
                        type="text"
                        name="task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </span>
                <button  onClick={addItem} className='button'>Submit</button>

                <button  onClick={clearItem} className='ClearButton'>Clear</button>
                <div className='items-list'>
                    {items.map((item, index) => (
                    <div key={index} className='taskdiv'>
                        <h4 className='taskis'>{item}</h4>
                            <button 
                            className="delete-btn"
                            onClick={()=>deleteTask(index)}
                            >
                            <i className="gg-trash trash-icon"></i>
                        </button>
                    </div>
                     ))}
                </div>
            </div>
        </div>
    )
}