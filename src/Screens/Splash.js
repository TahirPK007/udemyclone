import {View, Text, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const {height, width} = Dimensions.get('window');
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 1000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={require('../images/udemy.png')}
        style={{width: '100%', height: '100%', resizeMode: 'center'}}
      />
    </View>
  );
};

export default Splash;
