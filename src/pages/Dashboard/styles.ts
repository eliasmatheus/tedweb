import styled from 'styled-components';

export const Header = styled.div`
  position: relative;
`;

export const HeaderTop = styled.div`
  background: white;
  height: 113px;
  padding-top: 31px;
  padding-left: 28px;
`;

export const HeaderBody = styled.div`
  padding-top: 64px;
  img {
    width: 48%;
    max-width: 684px;
    min-width: 293px;
  }
`;

export const SpeakersSection = styled.div`
  background: white;
  /* height: 855px; */

  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  padding-top: 102px;
  h2 {
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 50px;
  }
  div {
    display: flex;
    width: 100%;
    @media (max-width: 866px) {
      flex-direction: column;
    }
    div {
      flex-direction: column;
      div {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
`;
export const DescriptionSpaker = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  height: 140px;
  font-size: 24px;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
  h6 {
    font-size: 24px;
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    color: #333333;
    font-weight: 550;
  }
  div {
    color: #ff1100;
  }
`;

export const CountDown = styled.div`
  height: 170px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: -63px;

  @media (max-width: 866px) {
    height: 100px;
    margin-bottom: -45px;
  }

  @media (max-width: 560px) {
    height: 77px;
    margin-bottom: -37px;
  }
`;
export const CountDownBody = styled.div`
  width: 70%;
  background: white;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 74px;
  padding-left: 3%;
  padding-right: 3%;
`;

export const CountDownCard = styled.div`
  div + div {
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 25px;
    margin-top: 10px;
  }

  @media (max-width: 866px) {
    height: 100px;
    margin-top: 0px;
    div {
      font-size: 40px;
      height: 55px;
    }
    div + div {
      font-family: Helvetica;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 25px;
      margin-top: 0px;
    }
  }

  @media (max-width: 560px) {
    div {
      font-size: 20px;
      height: 45px;
    }
    div + div {
      font-family: Helvetica;
      font-style: normal;
      font-weight: normal;
      font-size: 9px;
      line-height: 25px;
      margin-top: 0px;
    }
  }
`;

export const PlanSection = styled.div`
  /* background: black; */
  display: flex;
  justify-content: space-evenly;
  margin-top: 182px;
  margin-bottom: 182px;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PlanCard = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 293px;

  button {
    margin-top: auto;
    width: 293px;
    height: 104px;
    background: #ff1100;
    padding-left: 39px;
    padding-right: 39px;
    padding-top: 24px;
    padding-bottom: 24px;
    border-radius: 10px;
    color: white;
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    border: 0px;
    &:hover {
      background: #c91104;
      transition: 0.5s;
    }
  }

  @media (max-width: 650px) {
    & + & {
      margin-top: 100px;
    }
    button {
      margin-top: 30px;
    }
  }
`;

export const PlanHeader = styled.div`
  align-items: center;
  text-align: center;
  /* position: relative; */
  div {
    span {
      font-weight: 800;
    }
  }
  h3 {
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 55px;
  }

  h3 + div {
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 74px;
    margin-top: 60px;
  }
  h3 + div + div {
    margin-top: 25px;
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
  }
`;

export const Profit = styled.div`
  margin-top: 55px;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 24px;
  width: 100%;
`;

export const ProfitBody = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ProfitHeader = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;

export const SponsorsSection = styled.div`
  background: white;
  padding-top: 53px;
  padding-bottom: 53px;
  padding-left: 81px;
  padding-right: 81px;
  h2 {
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 31px;
    line-height: 36px;
  }

  @media (max-width: 570px) {
    padding-left: 0px;
    padding-right: 0px;
    text-align: center;
  }
`;

export const LogosSponsors = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  div + div {
    margin-left: 60px;
  }
  @media (max-width: 570px) {
    flex-direction: column;
    text-align: center;
    div + div {
      margin-left: 0px;
    }
  }
`;
