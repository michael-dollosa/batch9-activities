import { useState } from "react"

const UserForm = () => {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const titleChangedHandler = e => {
    setTitle(e.target.value)
  }

  const bodyChangedHandler = e => {
    setBody(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const data = { userID: 123, title: title, body: body}
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res)
      alert("Form submitted")
      return res.json()
    })
  }
  return(
    <form onSubmit={handleSubmit}>
    <h3>Create Post</h3>
    <div>
      <input type="text" name="title" placeholder="input title" value={title} onChange={titleChangedHandler}/>
      <input type="text" name="body" placeholder="input title" value={body} onChange={bodyChangedHandler}/>
      <input type="submit" value="Submit" />
    </div>
    
    </form>
  )
}

export default UserForm