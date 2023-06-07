import React from 'react';
import { View, Text } from 'react-native';
import firebase from './src/services/firebaseConnection';
import { Container, Titulo, Nome, BotaoSujeito, BotaoText } from './src/styles';

export default function App() {
 return (
   <Container>
     <Titulo cor="#FF0000" >Sujeito Programador</Titulo>
     <Nome>Olá Vinicius!</Nome>

     <BotaoSujeito onPress={ () => alert('CLICOU!') }>
       <BotaoText>Entrar</BotaoText>
     </BotaoSujeito>

   </Container>
  );
}
