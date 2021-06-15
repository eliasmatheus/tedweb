import styled from 'styled-components';

export const Header = styled.div`
  height: 481px;
`;

export const HeaderTop = styled.div`
  background: white;
  height: 113px;
  padding-top: 31px;
  padding-left: 28px;
`;

export const HeaderBody = styled.div`
  padding-top: 64px;
`;

export const SpeakersSection = styled.div`
  background: white;
  height: 855px;

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

export const ContagemRegressiva = styled.div`
  height: 170px;
  /* background: #cccc; */
  display: flex;
  justify-content: center;
  padding-left: 62px;
  padding-right: 62px;
`;
export const ContagemRegressivaBody = styled.div`
  width: 1049px;
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
`;

export const ContagemRegressivaCard = styled.div`
  div + div {
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 25px;
  }
`;
