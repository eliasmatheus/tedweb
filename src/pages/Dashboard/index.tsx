import React, { useEffect, useRef, useState } from 'react';
import Countdown from 'react-countdown';

import logoHeader from '../../assets/logo-header.png';
import contrapondoParadigmas from '../../assets/contrapondo-paradigmas.png';
import patrocinador1 from '../../assets/patr1.png';
import patrocinador2 from '../../assets/patr2.png';
import patrocinador3 from '../../assets/patr3.png';

import {
  Header,
  HeaderBody,
  HeaderTop,
  SpeakersSection,
  DescriptionSpaker,
  CountDown,
  CountDownBody,
  CountDownCard,
  PlanSection,
  PlanCard,
  PlanHeader,
  Profit,
  ProfitHeader,
  ProfitBody,
  SponsorsSection,
  LogosSponsors,
} from './styles';

const Dashboard: React.FC = () => {
  const [date, setDate] = useState(10000000);

  useEffect(() => {
    const dataEvento = new Date(2021, 8, 17);
    const decorrido = dataEvento.getTime() - Date.now();
    setDate(decorrido);
  }, []);

  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    }
    // Render a countdown
    return (
      <CountDownBody>
        <CountDownCard>
          <div>{days}</div>
          <div>DIAS</div>
        </CountDownCard>
        <CountDownCard>
          <div>{hours}</div>
          <div>HORAS</div>
        </CountDownCard>
        <CountDownCard>
          <div>{minutes}</div>
          <div>MINUTOS</div>
        </CountDownCard>
        <CountDownCard>
          <div>{seconds}</div>
          <div>SEGUNDOS</div>
        </CountDownCard>
      </CountDownBody>
    );
  };
  return (
    <>
      <Header>
        <HeaderTop>
          <img src={logoHeader} alt="TEDx Belo Horizonte" />
          <div>
            <div>PARCEIROS</div>
            <div>ORGANIZADORES</div>
            <div>FAQ</div>
            <div>IMPRESSA</div>
          </div>
        </HeaderTop>
        <HeaderBody>
          <img src={contrapondoParadigmas} alt="Contrapondo Paradigmas" />
        </HeaderBody>
      </Header>
      <CountDown>
        <Countdown date={Date.now() + date} renderer={renderer} />
      </CountDown>

      <SpeakersSection>
        <h2>PALESTRANTES</h2>
        <div>
          <div>
            <div>
              <img
                src="https://media-exp3.licdn.com/dms/image/C4D03AQGfJp428KvEVQ/profile-displayphoto-shrink_800_800/0/1576464863674?e=1629331200&v=beta&t=yWSW47vOUt-rhwjy7jJJ9k1FfiVMsmUCY0nFiPg8c5E"
                alt="FirstSpeaker"
              />
            </div>
            <DescriptionSpaker>
              <h6>João Pedro Santos de Moura</h6>
              <div>Software Engineer | .NET | Node.js</div>
            </DescriptionSpaker>
          </div>

          <div>
            <div>
              <img
                src="https://media-exp3.licdn.com/dms/image/C4D03AQHGjUUPtRG_7w/profile-displayphoto-shrink_800_800/0/1613746381551?e=1629331200&v=beta&t=F8GtwAKb9nEpXPSikvtZLoCjXO1YffmaC-K-PmEbiV0"
                alt="FirstSpeaker"
              />
            </div>
            <DescriptionSpaker>
              <h6>Fernanda Sousa</h6>
              <div>Analista de Produto | UX/UI na B2W Digital</div>
            </DescriptionSpaker>
          </div>

          <div>
            <div>
              <img
                src="https://media-exp3.licdn.com/dms/image/C4E03AQFxu-jFEGoIEQ/profile-displayphoto-shrink_800_800/0/1612732331486?e=1629331200&v=beta&t=OGQVJgvBSSKZwqRhrnrnaAbXmb-9fkgyy8cfJxd8tag"
                alt="FirstSpeaker"
              />
            </div>
            <DescriptionSpaker>
              <h6>João Vitor Innecco Arêas</h6>
              <div>Lead Organizer at TEDxBeloHorizonte</div>
            </DescriptionSpaker>
          </div>
        </div>
      </SpeakersSection>
      <PlanSection>
        <PlanCard>
          <PlanHeader>
            <h3>BÁSICO</h3>
            <div>
              R$ <span>00</span>
            </div>
            <div>Ingresso grátis</div>
          </PlanHeader>
          <Profit>
            <div>Acesso a palestras</div>
            <div>Certificado</div>
          </Profit>
          <button>RESERVE JÁ!</button>
        </PlanCard>

        <PlanCard>
          <PlanHeader>
            <h3>PREMIUM</h3>
            <div>
              R$ <span>60</span>
            </div>
            <div>Básico +</div>
          </PlanHeader>
          <Profit>
            <ProfitHeader>
              Além do acesso básico, você também vai levar:
            </ProfitHeader>
            <ProfitBody>
              <div>Kit exclusivo</div>
              <div>Caneca</div>
              <div>Blusa</div>
              <div>Adesivo</div>
              <div>Tedxclusive</div>
            </ProfitBody>
          </Profit>
          <button>COMPRE AGORA!</button>
        </PlanCard>
      </PlanSection>
      <SponsorsSection>
        <h2>PATROCINADORES</h2>
        <LogosSponsors>
          <div>
            <img src={patrocinador1} alt="FirstSpeaker" />
          </div>
          <div>
            <img src={patrocinador2} alt="FirstSpeaker" />
          </div>
          <div>
            <img src={patrocinador3} alt="FirstSpeaker" />
          </div>
        </LogosSponsors>
      </SponsorsSection>
    </>
  );
};

export default Dashboard;
