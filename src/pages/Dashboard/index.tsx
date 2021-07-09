import React, { useEffect, useRef, useState } from 'react';
import Countdown from 'react-countdown';

import { Header } from '../../shared/components';

import contrapondoParadigmas from '../../assets/contrapondo-paradigmas.png';
import imageSetas from '../../assets/image-setas.png';

import {
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
        <Header />
        <div className="btn btn-secondary">Hello</div>

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
