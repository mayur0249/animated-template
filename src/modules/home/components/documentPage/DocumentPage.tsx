import * as Styled from "./style";
import BookIcon from "../../../../assets/icons/book.svg";
import { Icon } from "../../../../styles/styled";
import Aos from "aos";
import { useEffect } from "react";

export const DocumentPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);

  return (
    <Styled.Container>
      <Styled.GridContainer>
        <Styled.GridUpperContainer data-aos="fade-right">
          <Styled.SubHeading>White pappers</Styled.SubHeading>
          <Styled.MainHeading>Documentation Download</Styled.MainHeading>
        </Styled.GridUpperContainer>
        <Styled.GridLowerContainer>
          <Styled.PaperInfoDiv data-aos="fade-left">
            <Icon src={BookIcon} alt="book" width="36.13px" height="44px" />
            <Styled.NoteDetail>WhitePapper</Styled.NoteDetail>
          </Styled.PaperInfoDiv>
          <Styled.PaperInfoDiv data-aos="fade-left">
            <Icon src={BookIcon} alt="book" width="36.13px" height="44px" />
            <Styled.NoteDetail>One Page Summary</Styled.NoteDetail>
          </Styled.PaperInfoDiv>
          <Styled.PaperInfoDiv data-aos="fade-left">
            <Icon src={BookIcon} alt="book" width="36.13px" height="44px" />
            <Styled.NoteDetail>Pitch Deck</Styled.NoteDetail>
          </Styled.PaperInfoDiv>
          <Styled.PaperInfoDiv data-aos="fade-left">
            <Icon src={BookIcon} alt="book" width="36.13px" height="44px" />
            <Styled.NoteDetail>Industry Report</Styled.NoteDetail>
          </Styled.PaperInfoDiv>
        </Styled.GridLowerContainer>
      </Styled.GridContainer>
    </Styled.Container>
  );
};
