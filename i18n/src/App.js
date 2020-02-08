import React, { useState } from 'react'

import { en, pt } from 'locales'

function App() {
  const [lang, setLang] = useState('en')

  return (
    <>
      <button onClick={() => setLang('pt')}>pt</button>
      <button onClick={() => setLang('en')}>en</button>
      <p>{lang}</p>
    </>
  )
}

export default App
