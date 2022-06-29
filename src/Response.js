import React from 'react'

const Response = () => {

    let userResponse = JSON.parse(sessionStorage.getItem("userResponse"))
    
  return (
    <div>
        <h3>Thanks for the review </h3>
        <h5>This is what we got:</h5>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Response</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{userResponse.name}</td>
                    <td>{userResponse.text}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Response