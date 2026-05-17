import { useEffect, useState } from 'react'
import { getUsers } from './services/api'
import UserCard from './components/UserCard'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {

    const response = await getUsers()

    setUsers(response.data)
  }

  return (
    <div>

      <h1>Usuários</h1>

      {users.map((user) => (

        <UserCard
          key={user.id}
          nome={user.nome}
          email={user.email}
          status={user.status}
        />

      ))}

    </div>
  )
}

export default App