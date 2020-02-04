import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import * as S from './styles'

interface Props {
  toogleTheme(): void
}

const Header: React.FC<Props> = ({ toogleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <S.Container>
      Hello World
      <Switch
        onChange={toogleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.3, colors.secundary)}
        onColor={colors.secundary}
      />
    </S.Container>
  )
}
export default Header
