import { useEffect, useState } from 'react'
import { getUsers } from './services/api'
import UserCard from './components/UserCard'
import ButtonUsage from './components/ButtonUsage'
import TableUsage from './components/TableUsage'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {

    const response = await getUsers()
    
    if (response.error) {
      alert(response.error)
      return
    }

    setUsers(response.data)
  }

  return (
    <div>

      <h1>Usuários</h1>
      <ButtonUsage onClick={loadUsers}/>

      <div>
        {
          users.map((user) => (
            <TableUsage
              key={user.id}
              data={[user]}
            />

          ))
        }
      </div>
      

      

    </div>
  )
}

export default App