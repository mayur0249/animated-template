import { Button } from "../../../../styles/styled";
import { colors } from "../../../../styles/theme";
import * as Styled from "./style";
import AOS from "aos";
import { useEffect } from "react";

export const ReadMore = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  return (
    <Styled.Container>
      <Styled.ReadMoreGrid>
        <Styled.MainHeading data-aos="fade-right">
          Bitcoinus Transaction Algorithm
        </Styled.MainHeading>
        <Button
          padding="20px 30px"
          color={colors.white}
          background={colors.emraldGreen2}
          borderRadius="30px"
          width="185px"
          opacity="0.7"
          data-aos="fade-left"
        >
          Read more
        </Button>
      </Styled.ReadMoreGrid>
    </Styled.Container>
  );
};
