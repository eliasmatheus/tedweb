import React from 'react';

import logoHeader from '../../assets/logo-header.png';
import contrapondoParadigmas from '../../assets/contrapondo-paradigmas.png';
import firstSpeaker from '../../assets/firstSpeaker.png';
import secondSpeaker from '../../assets/secondSpeaker.png';
import thirdSpeaker from '../../assets/thirdSpeaker.png';

import {
  Header,
  HeaderBody,
  HeaderTop,
  SpeakersSection,
  DescriptionSpaker,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>
        <HeaderTop>
          <img src={logoHeader} alt="TEDx Belo Horizonte" />
        </HeaderTop>
        <HeaderBody>
          <img src={contrapondoParadigmas} alt="Contrapondo Paradigmas" />
        </HeaderBody>
      </Header>
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
        {/* <div>
          <div>
            <div>
              <img
                src="https://media-exp3.licdn.com/dms/image/C4D03AQGfJp428KvEVQ/profile-displayphoto-shrink_800_800/0/1576464863674?e=1629331200&v=beta&t=yWSW47vOUt-rhwjy7jJJ9k1FfiVMsmUCY0nFiPg8c5E"
                alt="FirstSpeaker"
              />
            </div>
            <div>
              <h3>Luiza Helena Trajano Inácio Rodrigues</h3>
              <p>CEO Magazine Luiza</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://media-exp3.licdn.com/dms/image/C4D03AQHGjUUPtRG_7w/profile-displayphoto-shrink_800_800/0/1613746381551?e=1629331200&v=beta&t=F8GtwAKb9nEpXPSikvtZLoCjXO1YffmaC-K-PmEbiV0"
                alt="FirstSpeaker"
              />
            </div>
            <div>
              <h3>Luiza Helena Trajano Inácio Rodrigues</h3>
              <p>CEO Magazine Luiza</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://media-exp3.licdn.com/dms/image/C4E03AQFxu-jFEGoIEQ/profile-displayphoto-shrink_800_800/0/1612732331486?e=1629331200&v=beta&t=OGQVJgvBSSKZwqRhrnrnaAbXmb-9fkgyy8cfJxd8tag"
                alt="FirstSpeaker"
              />
            </div>
            <div>
              <h3>Luiza Helena Trajano Inácio Rodrigues</h3>
              <p>CEO Magazine Luiza</p>
            </div>
          </div>
        </div> */}
      </SpeakersSection>
    </>
  );
};

export default Dashboard;
