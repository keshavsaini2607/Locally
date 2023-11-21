import {SafeAreaView} from 'react-native';
import React from 'react';
import {Center, Container, ScrollView, Text} from 'native-base';
import Card from '../../components/Card';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView bg={'white'} showsVerticalScrollIndicator={false}>
        <Center>
          <Text
            fontSize={'6xl'}
            px={5}
            fontWeight={900}
            letterSpacing={10}
            style={{fontFamily: 'VinaSans-Regular'}}>
            In Your Locality
          </Text>
          <Container width="100%">
            <Card />
            <Card />
            <Card />
            <Card />
          </Container>
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
