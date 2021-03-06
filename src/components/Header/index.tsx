import * as S from "./styles";
import imgLogo from "../../assets/logo.svg";

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <S.HeaderLogo
          src={imgLogo}
          alt="bored.io"
          onClick={() => window.open("https://www.boredapi.com")}
          title="Go to Bored API"
        />
      </S.Content>
    </S.Container>
  );
}
