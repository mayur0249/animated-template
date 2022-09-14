import * as Styled from "./style";
import Emp1 from "../../../../assets/icons/emp1.png";
import Emp2 from "../../../../assets/icons/emp2.png";
import Emp3 from "../../../../assets/icons/emp3.png";
import Emp4 from "../../../../assets/icons/emp4.png";
import Emp5 from "../../../../assets/icons/emp5.png";
import Emp6 from "../../../../assets/icons/emp6.png";
import Emp7 from "../../../../assets/icons/emp7.png";
import Emp8 from "../../../../assets/icons/emp8.png";
import Emp9 from "../../../../assets/icons/emp9.png";
import Emp10 from "../../../../assets/icons/emp10.png";
import Emp11 from "../../../../assets/icons/emp11.png";
import Emp12 from "../../../../assets/icons/emp12.png";
import FbIcon from "../../../../assets/icons/fb.svg";
import LinkedIcon from "../../../../assets/icons/linked.svg";
import GoogleIcon from "../../../../assets/icons/gg.svg";
import { Icon } from "../../../../styles/styled";
import { useEffect } from "react";
import Aos from "aos";

export const Team = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);

  return (
    <Styled.Container>
      <Styled.GridTeamContainer>
        <Styled.SubHeading>Our brain</Styled.SubHeading>
        <Styled.MainHeading>Awesome Team</Styled.MainHeading>
        <Styled.GridTeamInfoContainer>
          <Styled.TeamInfoDiv data-aos="zoom-in">
            <Styled.ImageDiv>
              <Icon src={Emp1} alt="emp1" width="110px" height="110px" />
              <Styled.SocialIcon
                src={LinkedIcon}
                alt="linkedIn"
                width="24px"
                height="24px"
              />
            </Styled.ImageDiv>
            <Styled.TeamInfoName>David Drake</Styled.TeamInfoName>
            <Styled.TeamInfoPost>UI Designer</Styled.TeamInfoPost>
          </Styled.TeamInfoDiv>
          <Styled.TeamInfoDiv data-aos="zoom-in">
            <Styled.ImageDiv>
              <Icon src={Emp2} alt="emp1" width="110px" height="110px" />
              <Styled.SocialIcon
                src={LinkedIcon}
                alt="linkedIn"
                width="24px"
                height="24px"
              />
            </Styled.ImageDiv>
            <Styled.TeamInfoName>Allan Bellor</Styled.TeamInfoName>
            <Styled.TeamInfoPost>Analitics</Styled.TeamInfoPost>
          </Styled.TeamInfoDiv>
          <Styled.TeamInfoDiv data-aos="zoom-in">
            <Styled.ImageDiv>
              <Icon src={Emp3} alt="emp1" width="110px" height="110px" />
              <Styled.SocialIcon
                src={LinkedIcon}
                alt="linkedIn"
                width="24px"
                height="24px"
              />
            </Styled.ImageDiv>
            <Styled.TeamInfoName>David Drake</Styled.TeamInfoName>
            <Styled.TeamInfoPost>UI Designer</Styled.TeamInfoPost>
          </Styled.TeamInfoDiv>
          <Styled.TeamInfoDiv data-aos="zoom-in">
            <Styled.ImageDiv>
              <Icon src={Emp4} alt="emp1" width="110px" height="110px" />
              <Styled.SocialIcon
                src={FbIcon}
                alt="linkedIn"
                width="24px"
                height="24px"
              />
            </Styled.ImageDiv>
            <Styled.TeamInfoName>Allan Bellor</Styled.TeamInfoName>
            <Styled.TeamInfoPost>Analitics</Styled.TeamInfoPost>
          </Styled.TeamInfoDiv>
          <Styled.TeamInfoDiv data-aos="zoom-in">
            <Styled.ImageDiv>
              <Icon src={Emp5} alt="emp1" width="110px" height="110px" />
              <Styled.SocialIcon
                src={LinkedIcon}
                alt="linkedIn"
                width="24px"
                height="24px"
              />
            </Styled.ImageDiv>
            <Styled.TeamInfoName>David Drake</Styled.TeamInfoName>
            <Styled.TeamInfoPost>UI Designer</Styled.TeamInfoPost>
          </Styled.TeamInfoDiv>
          <Styled.TeamInfoDiv data-aos="zoom-in">
            <Styled.ImageDiv>
              <Icon src={Emp6} alt="emp1" width="110px" height="110px" />
              <Styled.SocialIcon
                src={LinkedIcon}
                alt="linkedIn"
                width="24px"
                height="24px"
              />
            </Styled.ImageDiv>
            <Styled.TeamInfoName>Allan Bellor</Styled.TeamInfoName>
            <Styled.TeamInfoPost>Analitics</Styled.TeamInfoPost>
          </Styled.TeamInfoDiv>
          <Styled.TeamInfoDiv data-aos="zoom-in">
            <Styled.ImageDiv>
              <Icon src={Emp7} alt="emp1" width="110px" height="110px" />
              <Styled.SocialIcon
                src={FbIcon}
                alt="linkedIn"
                width="24px"
                height="24px"
              />
            </Styled.ImageDiv>
            <Styled.TeamInfoName>David Drake</Styled.TeamInfoName>
            <Styled.TeamInfoPost>UI Designer</Styled.TeamInfoPost>
          </Styled.TeamInfoDiv>
          <Styled.TeamInfoDiv data-aos="zoom-in">
            <Styled.ImageDiv>
              <Icon src={Emp8} alt="emp1" width="110px" height="110px" />
              <Styled.SocialIcon
                src={GoogleIcon}
                alt="linkedIn"
                width="24px"
                height="24px"
              />
            </Styled.ImageDiv>
            <Styled.TeamInfoName>Allan Bellor</Styled.TeamInfoName>
            <Styled.TeamInfoPost>Analitics</Styled.TeamInfoPost>
          </Styled.TeamInfoDiv>
          <Styled.TeamInfoDiv data-aos="zoom-in">
            <Styled.ImageDiv>
              <Icon src={Emp9} alt="emp1" width="110px" height="110px" />
              <Styled.SocialIcon
                src={LinkedIcon}
                alt="linkedIn"
                width="24px"
                height="24px"
              />
            </Styled.ImageDiv>
            <Styled.TeamInfoName>David Drake</Styled.TeamInfoName>
            <Styled.TeamInfoPost>UI Designer</Styled.TeamInfoPost>
          </Styled.TeamInfoDiv>
          <Styled.TeamInfoDiv data-aos="zoom-in">
            <Styled.ImageDiv>
              <Icon src={Emp10} alt="emp1" width="110px" height="110px" />
              <Styled.SocialIcon
                src={GoogleIcon}
                alt="linkedIn"
                width="24px"
                height="24px"
              />
            </Styled.ImageDiv>
            <Styled.TeamInfoName>Allan Bellor</Styled.TeamInfoName>
            <Styled.TeamInfoPost>Analitics</Styled.TeamInfoPost>
          </Styled.TeamInfoDiv>
          <Styled.TeamInfoDiv data-aos="zoom-in">
            <Styled.ImageDiv>
              <Icon src={Emp11} alt="emp1" width="110px" height="110px" />
              <Styled.SocialIcon
                src={GoogleIcon}
                alt="linkedIn"
                width="24px"
                height="24px"
              />
            </Styled.ImageDiv>
            <Styled.TeamInfoName>David Drake</Styled.TeamInfoName>
            <Styled.TeamInfoPost>UI Designer</Styled.TeamInfoPost>
          </Styled.TeamInfoDiv>
          <Styled.TeamInfoDiv data-aos="zoom-in">
            <Styled.ImageDiv>
              <Icon src={Emp12} alt="emp1" width="110px" height="110px" />
              <Styled.SocialIcon
                src={LinkedIcon}
                alt="linkedIn"
                width="24px"
                height="24px"
              />
            </Styled.ImageDiv>
            <Styled.TeamInfoName>Allan Bellor</Styled.TeamInfoName>
            <Styled.TeamInfoPost>Analitics</Styled.TeamInfoPost>
          </Styled.TeamInfoDiv>
        </Styled.GridTeamInfoContainer>
      </Styled.GridTeamContainer>
    </Styled.Container>
  );
};
