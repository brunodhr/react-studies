import React from 'react'
import Main from 'pages/Main'

const fakeDatabase = {
  Heisenberg: [
    '8am - Chemistry classes at school',
    '12:30pm - Meet Jesse for lunch',
    '15pm - Meet Gus at the Pollos Hermanos',
    '20pm - Dinner by the pool with Hank and Marie'
  ]
}

const App = ({ logged, username }) => {
  return (
    <>
      {logged ? (
        <Main username={username} tasks={fakeDatabase[username]} />
      ) : (
        <p>Hello, visitor. Sign in to continue.</p>
      )}
    </>
  )
}

export default App
