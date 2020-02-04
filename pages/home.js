import React from 'react';
import {Text, Button, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  const toDemo = () => {
    navigation.navigate('Demo');
  };
  return (
    <>
      <Text style={styles.title}>这是首页-Home</Text>
      <Button title="to Demo" onPress={toDemo} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    padding: 20,
    color: '#ff0000',
  },
});

export default Home;
