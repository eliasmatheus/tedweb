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
  /* padding-top: 38px;
  padding-bottom: 38px;
  padding-left: 41px;
  padding-right: 41px; */
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
  }
  div {
    color: #ff1100;
  }
`;
