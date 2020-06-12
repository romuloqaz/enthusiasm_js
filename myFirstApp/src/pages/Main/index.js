import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Main = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button title="Navigate to users" onPress={() => navigate('User')} />
    </View>
  );
};

export default Main;
