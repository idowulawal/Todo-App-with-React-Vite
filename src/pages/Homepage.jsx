import React, { useEffect, useState } from 'react'
import "./Homepage.css"
import NavComponent from '../components/NavComponent'
import CreateTask from '../components/CreateTask'
import Todo from '../components/Todo'


const Homepage = () => {

    const [TodosArray, setTodosArray] = useState([]);
    const dummyTodos = [
        {
          id: 1,
          task: "Wash Clothes",  
          status: "Pending"
        },
        {
          id: 2,
          task: "Buy Groceries",  
          status: "Pending"
        },
        {
          id: 3,
          task: "Read a Book",  
          status: "Pending"
        },
        {
          id: 4,
          task: "Exersice",  
          status: "Pending"
        },
        {
          id: 5,
          task: "Clean the house",  
          status: "In progress"
        },
    ]

    useEffect(() =>{
        setTodosArray (dummyTodos);
    },[])


  return (
    <div className='homepage'>
        <NavComponent/>
        

        <main>
            <CreateTask/>

            <div className='todos-wrapper'>


                {
                  TodosArray.map((todo) =>(
                    <Todo todoData={ todo} />
                  ))
                }


            
            
            

            </div>
        </main>

    </div>
  )
}

export default Homepage