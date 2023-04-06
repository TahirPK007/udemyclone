import {View, Text, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Viewcourse = () => {
  const route = useRoute();
  return (
    <View style={{flex: 1}}>
      <Image
        source={{uri: route.params.data.image}}
        style={{
          width: '90%',
          height: 200,
          marginTop: 10,
          alignSelf: 'center',
          borderRadius: 15,
        }}
      />
      <Text
        style={{
          fontSize: 25,
          fontWeight: '600',
          marginLeft: 20,
          marginTop: 10,
        }}>
        {route.params.data.title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          marginLeft: 20,
        }}>
        {
          'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.here are many variations of passages of Lorem Ipsum available.here are many variations of passages of Lorem Ipsum.'
        }
      </Text>
      <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
        <Text style={{marginLeft: 20}}>Posted by </Text>
        <Text style={{fontWeight: '700', color: 'purple', fontSize: 20}}>
          {route.params.data.tutor}
        </Text>
      </View>
    </View>
  );
};

export default Viewcourse;
