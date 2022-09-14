import * as Styled from "./style";
import CardImg1 from "../../../../assets/icons/1_1.png";
import CardImg2 from "../../../../assets/icons/2_1.png";
import CardImg3 from "../../../../assets/icons/3_1.png";
import { Icon } from "../../../../styles/styled";
import AOS from "aos";
import { useEffect } from "react";

export const ProductInfo = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  return (
    <Styled.Container>
      <Styled.GridContainer>
        <Styled.SubHeading>MEET THE PRODUCT</Styled.SubHeading>
        <Styled.MainHeading>
          Beautiful, functional and nearly ready to launch
        </Styled.MainHeading>
        <Styled.InfoGridContainer>
          <Styled.SingleCard data-aos="zoom-in">
            <Icon
              src={CardImg1}
              alt="mobileApp"
              width="fit-content"
              height="60px"
            />
            <Styled.CardHeading>Mobile App</Styled.CardHeading>
            <Styled.CardDetails>
              {" "}
              Our popular wallet works on your Android or iPhone in addition to
              your web browser.
            </Styled.CardDetails>
          </Styled.SingleCard>
          <Styled.SingleCard data-aos="zoom-in">
            <Icon
              src={CardImg2}
              alt="insurance"
              width="fit-content"
              height="60px"
            />
            <Styled.CardHeading>Insurance Protection</Styled.CardHeading>
            <Styled.CardDetails>
              {" "}
              Digital currency stored on our servers is covered by our insurance
              policy.
            </Styled.CardDetails>
          </Styled.SingleCard>
          <Styled.SingleCard data-aos="zoom-in">
            <Icon
              src={CardImg3}
              alt="storage"
              width="fit-content"
              height="60px"
            />
            <Styled.CardHeading>Secure Storage</Styled.CardHeading>
            <Styled.CardDetails>
              {" "}
              We store the vast majority of the digital assets in secure offline
              storage.
            </Styled.CardDetails>
          </Styled.SingleCard>
        </Styled.InfoGridContainer>
      </Styled.GridContainer>
    </Styled.Container>
  );
};
