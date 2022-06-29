import React, {useState} from 'react'


const Form2 = () => {

  const [form, setForm] = useState({
    name: "",
    text: ""
  })

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
   e.preventDefault()

    sessionStorage.setItem('userResponse', JSON.stringify({...form}))
    window.location="/Response"

  }

  return (
    <div>
      <fieldset>
        <legend>Customer Review</legend>
        <form onSubmit={handleSubmit}>
          <div>
              <label for="name">User</label>
              <input type="text" name="name"  placeholder='Enter Name' onChange={handleChange} required />
          </div>
          <div>
              <label for="text">Comment</label>
              <textarea name="text" cols="30" rows="10" placeholder='Enter your review' onChange={handleChange} />
          </div>
          <button type='submit' onChange={handleChange}>Submit</button>
        </form>
      </fieldset>
    </div>
  )
}

export default Form2