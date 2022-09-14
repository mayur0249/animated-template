import CardIcon1 from "../../../../assets/icons/7.png";
import CardIcon2 from "../../../../assets/icons/8.png";
import Avatar1 from "../../../../assets/icons/ava.png";
import Avatar2 from "../../../../assets/icons/ava_2.png";
import { Icon } from "../../../../styles/styled";
import * as Styled from "./style";

import Slider from "react-slick";

export const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings1 = {
    breakPoints: [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 2 },
      { width: 1200, itemsToShow: 2 },
    ],
    showArrows: false,
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
  ];

  return (
    <Styled.Container>
      <Styled.GridContainer>
        <Styled.SubHeading>What says about Us</Styled.SubHeading>
        <Styled.MainHeading>Press About Us</Styled.MainHeading>
        {/* <Styled.AllCardsGridContainer> */}
        <Styled.SlickDiv>
          <Slider {...settings}>
            {/* <Carousel
          breakPoints={breakPoints}
          showArrows={false}
          className="carousel"
        > */}
            {/* <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div> */}
            <Styled.SingleCardGridContainer>
              <Styled.FlexBox>
                <Icon
                  src={CardIcon1}
                  alt="card-icon"
                  width="232px"
                  height="auto"
                />
              </Styled.FlexBox>

              <Styled.CardDetail>
                “Candlefish round stingray Reedfish giant wels, slimy sculpin
                beardfish anglerfish lighthousefish stream catfish. Rio Grande
                perch medaka rock bass ronquil squeaker southern hake northern
                pearleye South American Lungfish Red salmon cod icefish“
              </Styled.CardDetail>
              <Styled.CardProfileGrid>
                <Icon src={Avatar1} alt="avatar" width="78px" height="78px" />
                <Styled.ProfileHeading>Den Miller</Styled.ProfileHeading>
                <Styled.ProfileSubHeading>CEO</Styled.ProfileSubHeading>
              </Styled.CardProfileGrid>
            </Styled.SingleCardGridContainer>
            <Styled.SingleCardGridContainer>
              <Styled.FlexBox>
                <Icon
                  src={CardIcon2}
                  alt="card-icon"
                  width="232px"
                  height="auto"
                />
              </Styled.FlexBox>
              <Styled.CardDetail>
                “Lionfish ronquil yellowbelly tail catfish. Temperate ocean-bass
                merluccid hake snake mackerel archerfish zingel, shad swordtail,
                cepalin alooh masu salmon herring gopher rockfish. Pacific
                salmon longnose lancetfish giant sea bass candlefish deepwater
                flathead“
              </Styled.CardDetail>
              <Styled.CardProfileGrid>
                <Icon src={Avatar2} alt="avatar" width="78px" height="78px" />
                <Styled.ProfileHeading>Hanna Garcia</Styled.ProfileHeading>
                <Styled.ProfileSubHeading>Journalist</Styled.ProfileSubHeading>
              </Styled.CardProfileGrid>
            </Styled.SingleCardGridContainer>
            <Styled.SingleCardGridContainer>
              <Styled.FlexBox>
                <Icon
                  src={CardIcon1}
                  alt="card-icon"
                  width="232px"
                  height="auto"
                />
              </Styled.FlexBox>
              <Styled.CardDetail>
                “Candlefish round stingray Reedfish giant wels, slimy sculpin
                beardfish anglerfish lighthousefish stream catfish. Rio Grande
                perch medaka rock bass ronquil squeaker southern hake northern
                pearleye South American Lungfish Red salmon cod icefish“
              </Styled.CardDetail>
              <Styled.CardProfileGrid>
                <Icon src={Avatar1} alt="avatar" width="78px" height="78px" />
                <Styled.ProfileHeading>Den Miller</Styled.ProfileHeading>
                <Styled.ProfileSubHeading>CEO</Styled.ProfileSubHeading>
              </Styled.CardProfileGrid>
            </Styled.SingleCardGridContainer>
            <Styled.SingleCardGridContainer>
              <Styled.FlexBox>
                <Icon
                  src={CardIcon2}
                  alt="card-icon"
                  width="232px"
                  height="auto"
                />
              </Styled.FlexBox>
              <Styled.CardDetail>
                “Lionfish ronquil yellowbelly tail catfish. Temperate ocean-bass
                merluccid hake snake mackerel archerfish zingel, shad swordtail,
                cepalin alooh masu salmon herring gopher rockfish. Pacific
                salmon longnose lancetfish giant sea bass candlefish deepwater
                flathead“
              </Styled.CardDetail>
              <Styled.CardProfileGrid>
                <Icon src={Avatar2} alt="avatar" width="78px" height="78px" />
                <Styled.ProfileHeading>Hanna Garcia</Styled.ProfileHeading>
                <Styled.ProfileSubHeading>Journalist</Styled.ProfileSubHeading>
              </Styled.CardProfileGrid>
            </Styled.SingleCardGridContainer>
            <Styled.SingleCardGridContainer>
              <Styled.FlexBox>
                <Icon
                  src={CardIcon1}
                  alt="card-icon"
                  width="232px"
                  height="auto"
                />
              </Styled.FlexBox>
              <Styled.CardDetail>
                “Candlefish round stingray Reedfish giant wels, slimy sculpin
                beardfish anglerfish lighthousefish stream catfish. Rio Grande
                perch medaka rock bass ronquil squeaker southern hake northern
                pearleye South American Lungfish Red salmon cod icefish“
              </Styled.CardDetail>
              <Styled.CardProfileGrid>
                <Icon src={Avatar1} alt="avatar" width="78px" height="78px" />
                <Styled.ProfileHeading>Den Miller</Styled.ProfileHeading>
                <Styled.ProfileSubHeading>CEO</Styled.ProfileSubHeading>
              </Styled.CardProfileGrid>
            </Styled.SingleCardGridContainer>
            <Styled.SingleCardGridContainer>
              <Styled.FlexBox>
                <Icon
                  src={CardIcon2}
                  alt="card-icon"
                  width="232px"
                  height="auto"
                />
              </Styled.FlexBox>
              <Styled.CardDetail>
                “Lionfish ronquil yellowbelly tail catfish. Temperate ocean-bass
                merluccid hake snake mackerel archerfish zingel, shad swordtail,
                cepalin alooh masu salmon herring gopher rockfish. Pacific
                salmon longnose lancetfish giant sea bass candlefish deepwater
                flathead“
              </Styled.CardDetail>
              <Styled.CardProfileGrid>
                <Icon src={Avatar2} alt="avatar" width="78px" height="78px" />
                <Styled.ProfileHeading>Hanna Garcia</Styled.ProfileHeading>
                <Styled.ProfileSubHeading>Journalist</Styled.ProfileSubHeading>
              </Styled.CardProfileGrid>
            </Styled.SingleCardGridContainer>
            <Styled.SingleCardGridContainer>
              <Styled.FlexBox>
                <Icon
                  src={CardIcon1}
                  alt="card-icon"
                  width="232px"
                  height="auto"
                />
              </Styled.FlexBox>
              <Styled.CardDetail>
                “Candlefish round stingray Reedfish giant wels, slimy sculpin
                beardfish anglerfish lighthousefish stream catfish. Rio Grande
                perch medaka rock bass ronquil squeaker southern hake northern
                pearleye South American Lungfish Red salmon cod icefish“
              </Styled.CardDetail>
              <Styled.CardProfileGrid>
                <Icon src={Avatar1} alt="avatar" width="78px" height="78px" />
                <Styled.ProfileHeading>Den Miller</Styled.ProfileHeading>
                <Styled.ProfileSubHeading>CEO</Styled.ProfileSubHeading>
              </Styled.CardProfileGrid>
            </Styled.SingleCardGridContainer>
            <Styled.SingleCardGridContainer>
              <Styled.FlexBox>
                <Icon
                  src={CardIcon2}
                  alt="card-icon"
                  width="232px"
                  height="auto"
                />
              </Styled.FlexBox>
              <Styled.CardDetail>
                “Lionfish ronquil yellowbelly tail catfish. Temperate ocean-bass
                merluccid hake snake mackerel archerfish zingel, shad swordtail,
                cepalin alooh masu salmon herring gopher rockfish. Pacific
                salmon longnose lancetfish giant sea bass candlefish deepwater
                flathead“
              </Styled.CardDetail>
              <Styled.CardProfileGrid>
                <Icon src={Avatar2} alt="avatar" width="78px" height="78px" />
                <Styled.ProfileHeading>Hanna Garcia</Styled.ProfileHeading>
                <Styled.ProfileSubHeading>Journalist</Styled.ProfileSubHeading>
              </Styled.CardProfileGrid>
            </Styled.SingleCardGridContainer>
          </Slider>
        </Styled.SlickDiv>
        {/* </Styled.AllCardsGridContainer> */}
        {/* </Carousel> */}
      </Styled.GridContainer>
    </Styled.Container>
  );
};
