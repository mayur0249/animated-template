import * as Styled from "./style";
import CardIcon1 from "../../../../assets/icons/1.jpg";
import CardIcon2 from "../../../../assets/icons/2.jpg";
import CardIcon3 from "../../../../assets/icons/3.jpg";
import CardIcon4 from "../../../../assets/icons/4.jpg";
import { Icon } from "../../../../styles/styled";
import Carousel from "react-elastic-carousel";

// import Slider from "react-slick";

export const Blog = () => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    className: "center",
    // responsive: [
    //   {
    //     breakpoint: 1700,
    //     settings: {
    //       slidesToShow: 4,
    //     },
    //   },
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 900,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 560,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <Styled.Container>
      <Styled.PageGridContainer>
        <Styled.MainHeading>Latest News & Blog</Styled.MainHeading>
        <Styled.CardsGridContainer>
          {/* <Carousel
          breakPoints={breakPoints}
          showArrows={false}
          className="carousel"
        > */}
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
        </Styled.CardsGridContainer>
      </Styled.PageGridContainer>
    </Styled.Container>
  );
};
