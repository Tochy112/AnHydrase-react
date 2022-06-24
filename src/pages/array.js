import React from 'react'

const array = () => {
    const items = [
        {id: 1, name:'samsung A12', category:'Phones', amount:'$440'},
        {id: 2, name:'Table', category:'Furniture', amount:'$80'},
        {id: 3, name:'Book',category:'School', amount:'$15'},
        {id: 3, name:'Cup', category:'Kitchen', amount:'$40'},
        {id: 4, name:'Fan', category:'Electrical', amount:'$104'},
      ]

      const remove = () =>{
        items.filter(items => items.id);
      }

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            
            <tbody>
                {items? items.map((item =>
                    <tr key={id}>
                         
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.amount}</td>
                    </tr>
                )):console.log('error')
                }
               
            </tbody>
        </table>
        <button onClick={remove}>remove</button>
    </div>
  )
}

export default array