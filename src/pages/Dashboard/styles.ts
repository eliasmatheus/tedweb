import styled from 'styled-components';

export const Header = styled.div`
  position: relative;
  background: white;
  height: 125px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
  cursor: pointer;

  div {
    font-family: Inter;
    font-size: 20px;
    letter-spacing: 0px;
    font-style: normal;
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    height: 100%;
    /* background: coral; */

    div {
      /* background: red; */
      display: flex;
      align-items: center;

      /* background: red; */
      &:hover {
        background: #ededed;
        transition: 0.2s;
      }
    }
  }
  button {
    background: #ff0000;
    border: 0px;
    color: white;
    /* margin: 10px; */
    padding: 12px 21px 12px 21px;
    width: 189px;
    height: 44px;
    border-radius: 22px;
  }
`;

export const ContrapondoParadigmas = styled.div`
  padding-top: 64px;
  display: flex;
  align-items: center;
`;

export const ImageSetas = styled.img`
  width: 30%;
  margin-left: -5px;
`;

export const ImageContrapondoParadigmas = styled.img`
  width: 44%;
  margin-left: 39px;
`;

export const SectionInitial = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const CetralText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #a8a8a8;
  font-size: 20px;
`;

export const LocalEvento = styled.div`
  font-weight: 700;
`;

export const CentralButton = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-grow: 1;
  button {
    height: fit-content;
    height: 46px;
    background: #ff0000;
    color: white;
    border-radius: 23px;
    border: 0px;
    font-size: 20px;
    padding: 12px 21px 12px 21px;
  }
`;

export const SpeakersSection = styled.div`
  display: flex;
  background: white;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
`;

export const CardSpeaker = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  height: 488px;
  width: 265px;
`;
