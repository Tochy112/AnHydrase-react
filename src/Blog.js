import React, {useState, useEffect} from 'react'

const Blog = () => {
    const [data, getData] = useState([])
    useEffect(() => {
      fetchData();
    }, [])
    
    const fetchData = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response => response.json()))
        .then((response => getData(response)));
        // console.log(getData())
    }
  return (
    <>
        <h1>Blog</h1>
        {
           data ? data.map((data, id) => 
                (
                <div key={id}>
                    <p>{data.id}</p>
                    <p>{data.title}</p>
                    <p>{data.completed}</p>
                </div>
           ) ):console.log('error dey guy')

           
        } 
    </>
  )
}

export default Blog