import React from 'react';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Container, Form, Input, SubmitButton } from './styles';

Icon.loadFont();

export default function Main() {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
        />
        <SubmitButton>
          <Icon name="add-circle-outline" size={20} color="#FFF" />
        </SubmitButton>
      </Form>
      <Button title="Navigate to users" onPress={() => navigate('User')} />
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};
