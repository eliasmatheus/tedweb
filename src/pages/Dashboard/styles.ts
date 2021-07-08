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
    height: 46px;
    border-radius: 22px;
    font-size: 20px;
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
    width: 189px;
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
  height: 488px;
  width: 265px;
`;

export const DivImage = styled.div`
  height: 336px;
  background: blue;
  /* display: flex; */
  justify-content: center;
  overflow: hidden;
  display: flex;
  img {
    width: 127%;
    /* height: 96%; */
    height: fit-content;
  }
`;

export const DescriptionSpeaker = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  margin-top: 13px;
`;
export const NameSpeaker = styled.div`
  font-weight: 700;
  font-size: 33px;
  justify-content: center;
  display: flex;
  text-align: center;
`;
export const OccupationSpeaker = styled.div`
  margin-top: 20px;
  font-weight: 700;
  font-size: 20px;
  color: #a8a8a8;
  text-align: center;
`;
