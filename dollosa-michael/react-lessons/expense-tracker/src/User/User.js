import{ useState, useEffect } from "react"
import Card from "../UI/Card"
import UserForm from "./NewUser"
import "./User.css"

const Users = () => {
  const [users, setUsers] = useState("")
  const [hasErrors, setErrors] = useState(false)
  const [isLoading, setLoading] = useState(true)

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(result => {
        // console.log("users",result)
        setUsers(result)
        // console.log("users",result)
        setLoading(true)
      })
      .catch(err => {
        setErrors(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return(
    <div>
      <UserForm />
      <Card className="users">
        <h1>Random User</h1>
        {
          hasErrors ? <p>{hasErrors}</p> : null
        }
        {
          isLoading && users.length > 0
          ? (
            users.map(user => {
              console.log(user)
              const {id, name, email} = user;
              return(
                <div key={id} >
                  <p>Name: {name}</p>
                  <p>Email: {email}</p>
                  <hr />
                </div>
              )
            })
          )
          // ? (<p>Loading False</p>)
          : (
            <h3>Loading...</h3>
          )
        }
      </Card>
    </div>
  )
}

export default  Users