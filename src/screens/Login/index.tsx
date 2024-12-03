import React from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, } from 'react-native';
import { styles } from './styles'

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Imagem de fundo */}
      <Image
        source={require('../../assets/login.jpg')} // Ajuste o caminho conforme necessário
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>Bem-Vindo (a)</Text>
        <TextInput placeholder="Matrícula" style={styles.input} />
        <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        {/* Logo */}
        <Image
          source={require('../../assets/mediotec.png')} // Ajuste o caminho conforme necessário
          style={styles.mediotec}
          resizeMode="center"
        />
      </View>
    </View>
  );
};

