import React, {useState, useEffect, response} from 'react'

const Blog = () => {
    const [data, getData] = useState([])
    useEffect(() => {
      fetchData();
    }, [])
    
    const fetchData = () =>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response => response.json()))
        .then((response => getData(response)));
        console.log(response)
    }
  return (
    <>
        <h1>Blog</h1>
        {
           data.map((todos, id) => 
                (
                <div key={id}>
                    <p>{todos.id}</p>
                    <p>{todos.title}</p>
                    <p>{todos.completed}</p>
                </div>
           ) )

           
        } 
    </>
  )
}

export default Blog