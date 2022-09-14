import * as Styled from "./style";

export const RoadMap = () => {
  return (
    <Styled.Container>
      <Styled.RoadMapContainer>
        <Styled.MiniHeading>Our special way</Styled.MiniHeading>
        <Styled.MainHeading>Crypterium Road Map</Styled.MainHeading>
      </Styled.RoadMapContainer>
      <Styled.TimelineOuterDiv>
        <Styled.TimelineDiv>
          <Styled.SingleTimelineDiv>
            <Styled.MonthYearDiv>June 2017</Styled.MonthYearDiv>
            <Styled.PointDiv>
              <Styled.InnerPoint />
            </Styled.PointDiv>
            {/* <Styled.ConnectLine /> */}
            <Styled.Topic>
              Stats Center
              <br />
              Beta
            </Styled.Topic>
          </Styled.SingleTimelineDiv>
          <Styled.SingleTimelineDiv>
            <Styled.MonthYearDiv>July 2017</Styled.MonthYearDiv>
            <Styled.PointDiv>
              <Styled.InnerPoint />
            </Styled.PointDiv>
            {/* <Styled.ConnectLine /> */}
            <Styled.Topic>
              BI
              <br />
              Integration
            </Styled.Topic>
          </Styled.SingleTimelineDiv>
          <Styled.SingleTimelineDiv>
            <Styled.MonthYearDiv>December 2017</Styled.MonthYearDiv>
            <Styled.PointDiv>
              <Styled.InnerPoint />
            </Styled.PointDiv>
            {/* <Styled.ConnectLine /> */}
            <Styled.Topic>
              Fantasy
              <br />
              Prototype
            </Styled.Topic>
          </Styled.SingleTimelineDiv>
          <Styled.SingleTimelineDiv>
            <Styled.MonthYearDiv>December 2017</Styled.MonthYearDiv>
            <Styled.PointDiv>
              <Styled.InnerPoint />
            </Styled.PointDiv>
            {/* <Styled.ConnectLine /> */}
            <Styled.Topic>
              Tokens
              <br />
              Crowdsale
            </Styled.Topic>
          </Styled.SingleTimelineDiv>
          <Styled.SingleTimelineDiv>
            <Styled.MonthYearDiv>January 2018</Styled.MonthYearDiv>
            <Styled.PointDiv className="point">
              <Styled.InnerPoint />
            </Styled.PointDiv>
            {/* <Styled.ConnectLine /> */}
            <Styled.Topic>
              Blogging
              <br />
              Platform
            </Styled.Topic>
          </Styled.SingleTimelineDiv>
          <Styled.SingleTimelineDiv>
            <Styled.MonthYearDiv>April 2018</Styled.MonthYearDiv>
            <Styled.PointDiv className="point">
              <Styled.InnerPoint />
            </Styled.PointDiv>
            {/* <Styled.ConnectLine /> */}
            <Styled.Topic>
              Fantasy
              <br />
              Sports
            </Styled.Topic>
          </Styled.SingleTimelineDiv>
          <Styled.SingleTimelineDiv>
            <Styled.MonthYearDiv>May 2018</Styled.MonthYearDiv>
            <Styled.PointDiv className="point">
              <Styled.InnerPoint />
            </Styled.PointDiv>
            {/* <Styled.ConnectLine /> */}
            <Styled.Topic>
              Advertizing
              <br />
              System
            </Styled.Topic>
          </Styled.SingleTimelineDiv>
        </Styled.TimelineDiv>
      </Styled.TimelineOuterDiv>
    </Styled.Container>
  );
};
