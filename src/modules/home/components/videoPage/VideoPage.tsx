import * as Styled from "./style";
import Logo from "../../../../assets/icons/ico_logo.png";
import VideoBg from "../../../../assets/icons/video_bg.png";
import VideoBg1 from "../../../../assets/icons/video_bg_1.jpg";
import { Icon } from "../../../../styles/styled";
import { useEffect } from "react";
import AOS from "aos";

export const VideoPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  return (
    <Styled.Container>
      <Styled.VideoPageDiv>
        <Styled.VideoPageUpperContent className="animation1" data-aos="fade-up">
          <Styled.MiniHeading>Our mission</Styled.MiniHeading>
          <Styled.MainHeading>
            Crypterium Awesome ICO Service that Works for You!
          </Styled.MainHeading>
          {/* <Styled.MainHeading2>that Works for You!</Styled.MainHeading2> */}
          <Icon
            src={Logo}
            alt="logo"
            width="43px"
            height="48px"
            marginTop="40px"
          />
          <Styled.MainDetail>
            JavaScript is also used in environments that aren’t web-based, such
            as PDF documents, site-specific browsers, and desktop widgets. Newer
            and faster JavaScript virtual machines (VMs) and platforms built
            upon them have also increased the popularity of JavaScript for
            server-side web applications. On the client side, JavaScript has
            been traditionally implemented as an interpreted language, but more
            recent browsers perform just-in-time compilation.
          </Styled.MainDetail>
        </Styled.VideoPageUpperContent>

        <Styled.ImgVid data-aos="fade-up">
          {/* <Icon width="100%" height="612px" src={VideoBg} /> */}
          <Styled.BgImage src={VideoBg} alt="video" />
          <Styled.BgUpperImage src={VideoBg1} />
          {/* <Icon
            width="90%"
            height="62%"
            src={VideoBg1}
            position="absolute"
            top="101px"
            left="40px"
          /> */}
          <Styled.VideoPlayDivCont>
            <Styled.VideoPlayDiv></Styled.VideoPlayDiv>
            <Styled.VideoText>Video Presentation</Styled.VideoText>
          </Styled.VideoPlayDivCont>
        </Styled.ImgVid>
      </Styled.VideoPageDiv>
    </Styled.Container>
  );
};
