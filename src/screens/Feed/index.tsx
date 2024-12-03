import { Container, Title, Row, LargeCard, LargeCardAlt, SmallCardOne, SmallCardTwo, WideCard, CardTitleLarge, CardTitleWide, CardTitleSmall, Icon, IconWide, CardTitleLargeAlt } from './styles';
import { TouchableOpacity } from 'react-native';

import { ClockClockwise } from 'phosphor-react-native';
import { Chats } from 'phosphor-react-native';
import { Files } from 'phosphor-react-native';
import { UserCircle } from 'phosphor-react-native';
import { CheckCircle } from 'phosphor-react-native';
import { Calendar } from 'phosphor-react-native';


export default function Feed() {
  return (
    <Container>
      <Title>Feed</Title>

      {/* LARGO SUPERIOR*/}
      <Row>
        <TouchableOpacity>
          <LargeCard>
            <ClockClockwise color='#FFF' weight="fill" />
            <CardTitleLarge>Quadro de Horários</CardTitleLarge>
          </LargeCard>
        </TouchableOpacity>

        {/* MENORES */}
        <TouchableOpacity>
        <SmallCardOne>
            <Files weight="fill"/>
            <CardTitleSmall>Conceitos</CardTitleSmall>
        </SmallCardOne>
        </TouchableOpacity>

        <TouchableOpacity>
          <SmallCardTwo>
            <CheckCircle weight="fill"/>
            <CardTitleSmall>Faltas</CardTitleSmall>
          </SmallCardTwo>
        </TouchableOpacity>
      </Row>

      {/* LARGO CENTRAL*/}
      <Row>
        <TouchableOpacity>
          <WideCard>
            <Chats />
            <CardTitleWide>Verificar Avisos</CardTitleWide>
          </WideCard>
        </TouchableOpacity>
      </Row>

      {/* GRANDES INFERIORES*/}
      <Row>
        <TouchableOpacity>
          <LargeCard>
            <UserCircle color='#FFF' weight="fill"/>
            <CardTitleLarge>Contatos da Coordenação</CardTitleLarge>
          </LargeCard>
        </TouchableOpacity>

        <TouchableOpacity>
          <LargeCardAlt>
            <Calendar weight="fill"/>
            <CardTitleLargeAlt>Calendário Acadêmico</CardTitleLargeAlt>
          </LargeCardAlt>
        </TouchableOpacity>
      </Row>
    </Container>
  );
}
