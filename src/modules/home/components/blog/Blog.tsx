import * as Styled from "./style";
import CardIcon1 from "../../../../assets/icons/1.jpg";
import CardIcon2 from "../../../../assets/icons/2.jpg";
import CardIcon3 from "../../../../assets/icons/3.jpg";
import CardIcon4 from "../../../../assets/icons/4.jpg";
import { Icon } from "../../../../styles/styled";
import Slider from "react-slick";

// import Slider from "react-slick";

export const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
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

  const CardDetails = [
    {
      IconSrc: CardIcon1,
      miniHeading: "Cryptocurrency",
      mainHeading: "New trends in UI/UX Design World Integration",
      cardDetail:
        "Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of",
      monthDetail: " September, 15 2017",
    },
    {
      IconSrc: CardIcon1,
      miniHeading: "Cryptocurrency",
      mainHeading: "New trends in UI/UX Design World Integration",
      cardDetail:
        "Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of",
      monthDetail: " September, 15 2017",
    },
    {
      IconSrc: CardIcon1,
      miniHeading: "Cryptocurrency",
      mainHeading: "New trends in UI/UX Design World Integration",
      cardDetail:
        "Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of",
      monthDetail: " September, 15 2017",
    },
    {
      IconSrc: CardIcon1,
      miniHeading: "Cryptocurrency",
      mainHeading: "New trends in UI/UX Design World Integration",
      cardDetail:
        "Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of",
      monthDetail: " September, 15 2017",
    },
    {
      IconSrc: CardIcon1,
      miniHeading: "Cryptocurrency",
      mainHeading: "New trends in UI/UX Design World Integration",
      cardDetail:
        "Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of",
      monthDetail: " September, 15 2017",
    },
    {
      IconSrc: CardIcon1,
      miniHeading: "Cryptocurrency",
      mainHeading: "New trends in UI/UX Design World Integration",
      cardDetail:
        "Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of",
      monthDetail: " September, 15 2017",
    },
    {
      IconSrc: CardIcon1,
      miniHeading: "Cryptocurrency",
      mainHeading: "New trends in UI/UX Design World Integration",
      cardDetail:
        "Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of",
      monthDetail: " September, 15 2017",
    },
    {
      IconSrc: CardIcon1,
      miniHeading: "Cryptocurrency",
      mainHeading: "New trends in UI/UX Design World Integration",
      cardDetail:
        "Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of",
      monthDetail: " September, 15 2017",
    },
  ];

  return (
    <Styled.Container>
      <Styled.PageGridContainer>
        <Styled.MainHeading>Latest News & Blog</Styled.MainHeading>
        <Styled.SlickDiv>
          <Slider {...settings}>
            {/* <Styled.CardsGridContainer> */}
            {/* <Carousel
          breakPoints={breakPoints}
          showArrows={false}
          className="carousel"
        > */}
            {CardDetails.map((card: any, index: number) => (
              <div
                key={index}
                style={{ padding: "0px 15px", background: "green" }}
              >
                <Styled.CardContainer>
                  <Styled.CardUpperPart>
                    <Icon
                      src={card.IconSrc}
                      alt="cardImg"
                      width="100%"
                      height="100%"
                    />
                  </Styled.CardUpperPart>
                  <Styled.CardLowerPart>
                    <Styled.CardMiniHeading>
                      {card.miniHeading}
                    </Styled.CardMiniHeading>
                    <Styled.CardMainHeading>
                      {card.mainHeading}
                    </Styled.CardMainHeading>
                    <Styled.CardDetail>{card.cardDetail}</Styled.CardDetail>
                    <Styled.CardMonthDetail>
                      {card.monthDetail}
                    </Styled.CardMonthDetail>
                  </Styled.CardLowerPart>
                </Styled.CardContainer>
              </div>
            ))}
            {/* <Styled.CardContainer>
              <Styled.CardUpperPart>
                <Icon
                  src={CardIcon1}
                  alt="cardImg"
                  width="100%"
                  height="100%"
                />
              </Styled.CardUpperPart>
              <Styled.CardLowerPart>
                <Styled.CardMiniHeading>Cryptocurrency</Styled.CardMiniHeading>
                <Styled.CardMainHeading>
                  New trends in UI/UX Design World Integration
                </Styled.CardMainHeading>
                <Styled.CardDetail>
                  Specially for our VIP customers the LH Crypto team
                  representatives Alexander Smirnov and Antonis Lapos will
                  conduct a number of
                </Styled.CardDetail>
                <Styled.CardMonthDetail>
                  September, 15 2017
                </Styled.CardMonthDetail>
              </Styled.CardLowerPart>
            </Styled.CardContainer>
            <Styled.CardContainer>
              <Styled.CardUpperPart>
                <Icon
                  src={CardIcon2}
                  alt="cardImg"
                  width="100%"
                  height="100%"
                />
              </Styled.CardUpperPart>
              <Styled.CardLowerPart>
                <Styled.CardMiniHeading>Bitcoin</Styled.CardMiniHeading>
                <Styled.CardMainHeading>
                  The LH-Crypto project has reached $7 000 000!
                </Styled.CardMainHeading>
                <Styled.CardDetail>
                  The meetings will take place in the following cities: 15
                  January – Milan, 16 January – Lugano, 17 January – Zurich, 18
                  Jan
                </Styled.CardDetail>
                <Styled.CardMonthDetail>
                  September, 15 2017
                </Styled.CardMonthDetail>
              </Styled.CardLowerPart>
            </Styled.CardContainer>
            <Styled.CardContainer>
              <Styled.CardUpperPart>
                <Icon
                  src={CardIcon3}
                  alt="cardImg"
                  width="100%"
                  height="100%"
                />
              </Styled.CardUpperPart>
              <Styled.CardLowerPart>
                <Styled.CardMiniHeading>ICO</Styled.CardMiniHeading>
                <Styled.CardMainHeading>
                  New trends in UI/UX Design World Integration
                </Styled.CardMainHeading>
                <Styled.CardDetail>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                </Styled.CardDetail>
                <Styled.CardMonthDetail>
                  September, 15 2017
                </Styled.CardMonthDetail>
              </Styled.CardLowerPart>
            </Styled.CardContainer>
            <Styled.CardContainer>
              <Styled.CardUpperPart>
                <Icon
                  src={CardIcon4}
                  alt="cardImg"
                  width="100%"
                  height="100%"
                />
              </Styled.CardUpperPart>
              <Styled.CardLowerPart>
                <Styled.CardMiniHeading>Blockchain</Styled.CardMiniHeading>
                <Styled.CardMainHeading>
                  The LH-Crypto project has reached $7 000 000!
                </Styled.CardMainHeading>
                <Styled.CardDetail>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                </Styled.CardDetail>
                <Styled.CardMonthDetail>
                  September, 15 2017
                </Styled.CardMonthDetail>
              </Styled.CardLowerPart>
            </Styled.CardContainer>
            <Styled.CardContainer>
              <Styled.CardUpperPart>
                <Icon
                  src={CardIcon1}
                  alt="cardImg"
                  width="100%"
                  height="100%"
                />
              </Styled.CardUpperPart>
              <Styled.CardLowerPart>
                <Styled.CardMiniHeading>Cryptocurrency</Styled.CardMiniHeading>
                <Styled.CardMainHeading>
                  New trends in UI/UX Design World Integration
                </Styled.CardMainHeading>
                <Styled.CardDetail>
                  Specially for our VIP customers the LH Crypto team
                  representatives Alexander Smirnov and Antonis Lapos will
                  conduct a number of
                </Styled.CardDetail>
                <Styled.CardMonthDetail>
                  September, 15 2017
                </Styled.CardMonthDetail>
              </Styled.CardLowerPart>
            </Styled.CardContainer>
            <Styled.CardContainer>
              <Styled.CardUpperPart>
                <Icon
                  src={CardIcon1}
                  alt="cardImg"
                  width="100%"
                  height="100%"
                />
              </Styled.CardUpperPart>
              <Styled.CardLowerPart>
                <Styled.CardMiniHeading>Cryptocurrency</Styled.CardMiniHeading>
                <Styled.CardMainHeading>
                  New trends in UI/UX Design World Integration
                </Styled.CardMainHeading>
                <Styled.CardDetail>
                  Specially for our VIP customers the LH Crypto team
                  representatives Alexander Smirnov and Antonis Lapos will
                  conduct a number of
                </Styled.CardDetail>
                <Styled.CardMonthDetail>
                  September, 15 2017
                </Styled.CardMonthDetail>
              </Styled.CardLowerPart>
            </Styled.CardContainer>
            <Styled.CardContainer>
              <Styled.CardUpperPart>
                <Icon
                  src={CardIcon2}
                  alt="cardImg"
                  width="100%"
                  height="100%"
                />
              </Styled.CardUpperPart>
              <Styled.CardLowerPart>
                <Styled.CardMiniHeading>Bitcoin</Styled.CardMiniHeading>
                <Styled.CardMainHeading>
                  The LH-Crypto project has reached $7 000 000!
                </Styled.CardMainHeading>
                <Styled.CardDetail>
                  The meetings will take place in the following cities: 15
                  January – Milan, 16 January – Lugano, 17 January – Zurich, 18
                  Jan
                </Styled.CardDetail>
                <Styled.CardMonthDetail>
                  September, 15 2017
                </Styled.CardMonthDetail>
              </Styled.CardLowerPart>
            </Styled.CardContainer>
            <Styled.CardContainer>
              <Styled.CardUpperPart>
                <Icon
                  src={CardIcon3}
                  alt="cardImg"
                  width="100%"
                  height="100%"
                />
              </Styled.CardUpperPart>
              <Styled.CardLowerPart>
                <Styled.CardMiniHeading>ICO</Styled.CardMiniHeading>
                <Styled.CardMainHeading>
                  New trends in UI/UX Design World Integration
                </Styled.CardMainHeading>
                <Styled.CardDetail>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                </Styled.CardDetail>
                <Styled.CardMonthDetail>
                  September, 15 2017
                </Styled.CardMonthDetail>
              </Styled.CardLowerPart>
            </Styled.CardContainer>
            <Styled.CardContainer>
              <Styled.CardUpperPart>
                <Icon
                  src={CardIcon4}
                  alt="cardImg"
                  width="100%"
                  height="100%"
                />
              </Styled.CardUpperPart>
              <Styled.CardLowerPart>
                <Styled.CardMiniHeading>Blockchain</Styled.CardMiniHeading>
                <Styled.CardMainHeading>
                  The LH-Crypto project has reached $7 000 000!
                </Styled.CardMainHeading>
                <Styled.CardDetail>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                </Styled.CardDetail>
                <Styled.CardMonthDetail>
                  September, 15 2017
                </Styled.CardMonthDetail>
              </Styled.CardLowerPart>
            </Styled.CardContainer>
            <Styled.CardContainer>
              <Styled.CardUpperPart>
                <Icon
                  src={CardIcon1}
                  alt="cardImg"
                  width="100%"
                  height="100%"
                />
              </Styled.CardUpperPart>
              <Styled.CardLowerPart>
                <Styled.CardMiniHeading>Cryptocurrency</Styled.CardMiniHeading>
                <Styled.CardMainHeading>
                  New trends in UI/UX Design World Integration
                </Styled.CardMainHeading>
                <Styled.CardDetail>
                  Specially for our VIP customers the LH Crypto team
                  representatives Alexander Smirnov and Antonis Lapos will
                  conduct a number of
                </Styled.CardDetail>
                <Styled.CardMonthDetail>
                  September, 15 2017
                </Styled.CardMonthDetail>
              </Styled.CardLowerPart>
            </Styled.CardContainer>
            <Styled.CardContainer>
              <Styled.CardUpperPart>
                <Icon
                  src={CardIcon1}
                  alt="cardImg"
                  width="100%"
                  height="100%"
                />
              </Styled.CardUpperPart>
              <Styled.CardLowerPart>
                <Styled.CardMiniHeading>Cryptocurrency</Styled.CardMiniHeading>
                <Styled.CardMainHeading>
                  New trends in UI/UX Design World Integration
                </Styled.CardMainHeading>
                <Styled.CardDetail>
                  Specially for our VIP customers the LH Crypto team
                  representatives Alexander Smirnov and Antonis Lapos will
                  conduct a number of
                </Styled.CardDetail>
                <Styled.CardMonthDetail>
                  September, 15 2017
                </Styled.CardMonthDetail>
              </Styled.CardLowerPart>
            </Styled.CardContainer>
            <Styled.CardContainer>
              <Styled.CardUpperPart>
                <Icon
                  src={CardIcon2}
                  alt="cardImg"
                  width="100%"
                  height="100%"
                />
              </Styled.CardUpperPart>
              <Styled.CardLowerPart>
                <Styled.CardMiniHeading>Bitcoin</Styled.CardMiniHeading>
                <Styled.CardMainHeading>
                  The LH-Crypto project has reached $7 000 000!
                </Styled.CardMainHeading>
                <Styled.CardDetail>
                  The meetings will take place in the following cities: 15
                  January – Milan, 16 January – Lugano, 17 January – Zurich, 18
                  Jan
                </Styled.CardDetail>
                <Styled.CardMonthDetail>
                  September, 15 2017
                </Styled.CardMonthDetail>
              </Styled.CardLowerPart>
            </Styled.CardContainer> */}
            {/* <Styled.CardContainer>
            <Styled.CardUpperPart>
              <Icon src={CardIcon3} alt="cardImg" width="100%" height="100%" />
            </Styled.CardUpperPart>
            <Styled.CardLowerPart>
              <Styled.CardMiniHeading>ICO</Styled.CardMiniHeading>
              <Styled.CardMainHeading>
                New trends in UI/UX Design World Integration
              </Styled.CardMainHeading>
              <Styled.CardDetail>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for
              </Styled.CardDetail>
              <Styled.CardMonthDetail>
                September, 15 2017
              </Styled.CardMonthDetail>
            </Styled.CardLowerPart>
          </Styled.CardContainer>
          <Styled.CardContainer>
            <Styled.CardUpperPart>
              <Icon src={CardIcon4} alt="cardImg" width="100%" height="100%" />
            </Styled.CardUpperPart>
            <Styled.CardLowerPart>
              <Styled.CardMiniHeading>Blockchain</Styled.CardMiniHeading>
              <Styled.CardMainHeading>
                The LH-Crypto project has reached $7 000 000!
              </Styled.CardMainHeading>
              <Styled.CardDetail>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for
              </Styled.CardDetail>
              <Styled.CardMonthDetail>
                September, 15 2017
              </Styled.CardMonthDetail>
            </Styled.CardLowerPart>
          </Styled.CardContainer>
          <Styled.CardContainer>
            <Styled.CardUpperPart>
              <Icon src={CardIcon1} alt="cardImg" width="100%" height="100%" />
            </Styled.CardUpperPart>
            <Styled.CardLowerPart>
              <Styled.CardMiniHeading>Cryptocurrency</Styled.CardMiniHeading>
              <Styled.CardMainHeading>
                New trends in UI/UX Design World Integration
              </Styled.CardMainHeading>
              <Styled.CardDetail>
                Specially for our VIP customers the LH Crypto team
                representatives Alexander Smirnov and Antonis Lapos will conduct
                a number of
              </Styled.CardDetail>
              <Styled.CardMonthDetail>
                September, 15 2017
              </Styled.CardMonthDetail>
            </Styled.CardLowerPart>
          </Styled.CardContainer>
          <Styled.CardContainer>
            <Styled.CardUpperPart>
              <Icon src={CardIcon1} alt="cardImg" width="100%" height="100%" />
            </Styled.CardUpperPart>
            <Styled.CardLowerPart>
              <Styled.CardMiniHeading>Cryptocurrency</Styled.CardMiniHeading>
              <Styled.CardMainHeading>
                New trends in UI/UX Design World Integration
              </Styled.CardMainHeading>
              <Styled.CardDetail>
                Specially for our VIP customers the LH Crypto team
                representatives Alexander Smirnov and Antonis Lapos will conduct
                a number of
              </Styled.CardDetail>
              <Styled.CardMonthDetail>
                September, 15 2017
              </Styled.CardMonthDetail>
            </Styled.CardLowerPart>
          </Styled.CardContainer> */}
            {/* <Styled.CardContainer>
            <Styled.CardUpperPart>
              <Icon src={CardIcon2} alt="cardImg" width="100%" height="100%" />
            </Styled.CardUpperPart>
            <Styled.CardLowerPart>
              <Styled.CardMiniHeading>Bitcoin</Styled.CardMiniHeading>
              <Styled.CardMainHeading>
                The LH-Crypto project has reached $7 000 000!
              </Styled.CardMainHeading>
              <Styled.CardDetail>
                The meetings will take place in the following cities: 15 January
                – Milan, 16 January – Lugano, 17 January – Zurich, 18 Jan
              </Styled.CardDetail>
              <Styled.CardMonthDetail>
                September, 15 2017
              </Styled.CardMonthDetail>
            </Styled.CardLowerPart>
          </Styled.CardContainer>
          <Styled.CardContainer>
            <Styled.CardUpperPart>
              <Icon src={CardIcon3} alt="cardImg" width="100%" height="100%" />
            </Styled.CardUpperPart>
            <Styled.CardLowerPart>
              <Styled.CardMiniHeading>ICO</Styled.CardMiniHeading>
              <Styled.CardMainHeading>
                New trends in UI/UX Design World Integration
              </Styled.CardMainHeading>
              <Styled.CardDetail>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for
              </Styled.CardDetail>
              <Styled.CardMonthDetail>
                September, 15 2017
              </Styled.CardMonthDetail>
            </Styled.CardLowerPart>
          </Styled.CardContainer>
          <Styled.CardContainer>
            <Styled.CardUpperPart>
              <Icon src={CardIcon4} alt="cardImg" width="100%" height="100%" />
            </Styled.CardUpperPart>
            <Styled.CardLowerPart>
              <Styled.CardMiniHeading>Blockchain</Styled.CardMiniHeading>
              <Styled.CardMainHeading>
                The LH-Crypto project has reached $7 000 000!
              </Styled.CardMainHeading>
              <Styled.CardDetail>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for
              </Styled.CardDetail>
              <Styled.CardMonthDetail>
                September, 15 2017
              </Styled.CardMonthDetail>
            </Styled.CardLowerPart>
          </Styled.CardContainer>
          <Styled.CardContainer>
            <Styled.CardUpperPart>
              <Icon src={CardIcon1} alt="cardImg" width="100%" height="100%" />
            </Styled.CardUpperPart>
            <Styled.CardLowerPart>
              <Styled.CardMiniHeading>Cryptocurrency</Styled.CardMiniHeading>
              <Styled.CardMainHeading>
                New trends in UI/UX Design World Integration
              </Styled.CardMainHeading>
              <Styled.CardDetail>
                Specially for our VIP customers the LH Crypto team
                representatives Alexander Smirnov and Antonis Lapos will conduct
                a number of
              </Styled.CardDetail>
              <Styled.CardMonthDetail>
                September, 15 2017
              </Styled.CardMonthDetail>
            </Styled.CardLowerPart>
          </Styled.CardContainer> */}
            {/* </Carousel> */}
            {/* </Styled.CardsGridContainer> */}
          </Slider>
        </Styled.SlickDiv>
      </Styled.PageGridContainer>
    </Styled.Container>
  );
};
