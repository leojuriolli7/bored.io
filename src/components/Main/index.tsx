import { Activity } from "../Activity";
import * as S from "./styles";

export function Main() {
  return (
    <S.Container>
      <S.TitleText>How about you...</S.TitleText>
      <Activity />
    </S.Container>
  );
}
