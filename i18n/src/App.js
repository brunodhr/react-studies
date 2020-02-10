import React from 'react'

import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <div>
      <button onClick={() => changeLanguage('pt')}>pt</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      <div>{t('title')}</div>
    </div>
  )
}

export default App
