function UserCard({ nome, email, status }) {

    return (
        <div
            style={{
                border: '1px solid #ccc',
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '10px'
            }}
        >
            <h2>{nome}</h2>

            <p>{email}</p>

            <span>Status: {status}</span>
        </div>
    )
}

export default UserCard