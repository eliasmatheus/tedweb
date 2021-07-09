import styled from 'styled-components';

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
