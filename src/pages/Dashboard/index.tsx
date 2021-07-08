import React, { useEffect, useRef, useState } from 'react';
import Countdown from 'react-countdown';

import logoHeader from '../../assets/logo-header.png';
import contrapondoParadigmas from '../../assets/contrapondo-paradigmas.png';
import speaker1 from '../../assets/speaker1.png';
import speaker2 from '../../assets/speaker2.png';
import speaker3 from '../../assets/speaker3.png';
import speaker4 from '../../assets/speaker4.png';
import imageSetas from '../../assets/image-setas.png';

import {
  Header,
  ContrapondoParadigmas,
  SectionInitial,
  ImageSetas,
  ImageContrapondoParadigmas,
  CetralText,
  LocalEvento,
  CentralButton,
  SpeakersSection,
  CardSpeaker,
  NameSpeaker,
  DescriptionSpeaker,
  OccupationSpeaker,
  DivImage,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <SectionInitial>
        <Header>
          <img src={logoHeader} alt="TEDx Belo Horizonte" />
          <div>
            <div>Home</div>
            <div>Speakers</div>
            <div>Agenda</div>
            <div>Patrocinadores</div>
            <div>Tedxclusive</div>
            <div>Login</div>
          </div>
          <button>Registrar</button>
        </Header>
        <ContrapondoParadigmas>
          <ImageSetas src={imageSetas} alt="Contrapondo Paradigmas" />
          <ImageContrapondoParadigmas
            src={contrapondoParadigmas}
            alt="Contrapondo Paradigmas"
          />
        </ContrapondoParadigmas>
        <CetralText>
          <LocalEvento>Tedx Belo Horizonte</LocalEvento>
          <div>Evento online, 06 e 07 Outubro, 2021</div>
        </CetralText>
        <CentralButton>
          <button>Registrar agora</button>
        </CentralButton>
      </SectionInitial>
      <SpeakersSection>
        <CardSpeaker>
          <DivImage>
            <img
              src="https://media-exp3.licdn.com/dms/image/C4D03AQGfJp428KvEVQ/profile-displayphoto-shrink_800_800/0/1576464863674?e=1629331200&v=beta&t=yWSW47vOUt-rhwjy7jJJ9k1FfiVMsmUCY0nFiPg8c5E"
              alt="FirstSpeaker"
            />
          </DivImage>
          <DescriptionSpeaker>
            <NameSpeaker>João Pedro</NameSpeaker>
            <OccupationSpeaker>
              Software Engineer | .NET | Node.js
            </OccupationSpeaker>
          </DescriptionSpeaker>
        </CardSpeaker>

        <CardSpeaker>
          <DivImage>
            <img
              src="https://media-exp3.licdn.com/dms/image/C4D03AQGfJp428KvEVQ/profile-displayphoto-shrink_800_800/0/1576464863674?e=1629331200&v=beta&t=yWSW47vOUt-rhwjy7jJJ9k1FfiVMsmUCY0nFiPg8c5E"
              alt="FirstSpeaker"
            />
          </DivImage>
          <DescriptionSpeaker>
            <NameSpeaker>Fernanda Sousa</NameSpeaker>
            <OccupationSpeaker>
              Analista de Produto | UX/UI na B2W Digital
            </OccupationSpeaker>
          </DescriptionSpeaker>
        </CardSpeaker>

        <CardSpeaker>
          <DivImage>
            <img
              src="https://media-exp3.licdn.com/dms/image/C4D03AQGfJp428KvEVQ/profile-displayphoto-shrink_800_800/0/1576464863674?e=1629331200&v=beta&t=yWSW47vOUt-rhwjy7jJJ9k1FfiVMsmUCY0nFiPg8c5E"
              alt="FirstSpeaker"
            />
          </DivImage>
          <DescriptionSpeaker>
            <NameSpeaker>João Arêas</NameSpeaker>
            <OccupationSpeaker>
              Lead Organizer at TEDxBeloHorizonte
            </OccupationSpeaker>
          </DescriptionSpeaker>
        </CardSpeaker>

        <CardSpeaker>
          <DivImage>
            <img
              src="https://media-exp3.licdn.com/dms/image/C4D03AQGfJp428KvEVQ/profile-displayphoto-shrink_800_800/0/1576464863674?e=1629331200&v=beta&t=yWSW47vOUt-rhwjy7jJJ9k1FfiVMsmUCY0nFiPg8c5E"
              alt="FirstSpeaker"
            />
          </DivImage>
          <DescriptionSpeaker>
            <NameSpeaker>João Pedro</NameSpeaker>
            <OccupationSpeaker>
              Software Engineer | .NET | Node.js
            </OccupationSpeaker>
          </DescriptionSpeaker>
        </CardSpeaker>
      </SpeakersSection>
    </>
  );
};

export default Dashboard;
