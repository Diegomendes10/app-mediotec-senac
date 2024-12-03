import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
  padding-left: 30px;
  padding-top: 120px
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

/** Estilos para os cards */
export const LargeCard = styled.View`
  border-radius: 25px;
  background-color: #003FFF;
  width: 175px;
  height: 216px;
  margin-top: 0px;
  padding: 23px;
  text-align: left;
  margin-right: 10px;
  margin-left: -14px;
`;

export const SmallCardOne = styled.View`
  height: 100px;
  width: 160px;
  border-radius: 20px;
  background-color: #FEC027;
  padding: 15px;
  margin-left: 0px;
  margin-right: 10px;
`;

export const SmallCardTwo = styled.View`
  height: 100px;
  width: 160px;
  border-radius: 20px;
  background-color: #FEC027;
  padding: 15px;
  margin-left: -170px;
  margin-top: 114px;
  position: absolute;
`;

export const WideCard = styled.View`
  height: 110px;
  width: 350px;
  border-radius: 20px;
  background-color: #FD6E26;
  padding: 10px;
  justify-content: left;
  align-items: center;
  margin-top: 10px;
  padding-left: 20;
  margin-left: -11px;
`;

export const LargeCardAlt = styled.View`
  border-radius: 30px;
  background-color: #FD6E26;
  width: 175px;
  height: 216px;
  margin-right: 10px;
  margin-top: 0px;
  padding: 20px;
  text-align: left;
  margin-right: 10px;
  margin-left: 0px;
`;

/** Estilos para os títulos*/
export const CardTitleLarge = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  text-align: left;
  margin-top: 90px;
`;
/** Estilos para os títulos*/
export const CardTitleLargeAlt = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-align: left;
  margin-top: 90px;
`;

export const CardTitleWide = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-right: 190px;
  margin-top: px;
  flex-direction: row;
  padding-right: 50px;

`;

  export const CardTitleSmall = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-align: left;
  margin-top: 12px;
`;  

/** Estilos para os ícones*/
export const Icon = styled.View`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 15px;
`;

export const IconWide = styled.View`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 15px;
`;
