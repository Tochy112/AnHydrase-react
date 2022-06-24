import React from 'react'

function List (){
    const months = [
        { id : 1, month : "Jan"},
        { id : 2, month : "feb"},
        { id : 3, month : "March"},
        { id : 4, month : "April"}
    ];
    const listMonth = months.map((item =>
        <li key={item.id}>{item.month}</li>
))
  return (
    <div>
        <ul>{listMonth}</ul>
    </div>
  )
}

export default List