import * as S from './styles'
import imgLogo from "../../assets/logo.svg"

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <img src={imgLogo} alt="bored.io" onClick={() => window.open("https://www.boredapi.com")} title="Go to BoredApi"/>
      </S.Content>
    </S.Container>
  )
  }