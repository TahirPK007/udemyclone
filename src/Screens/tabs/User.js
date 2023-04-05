import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const User = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          width: '100%',
          height: 60,
          borderBottomWidth: 1,
          borderColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 20}}>Account</Text>
      </View>
      <Text
        style={{marginTop: 30, marginLeft: 15, fontSize: 15, color: 'black'}}>
        Support
      </Text>
      <View>
        <FlatList
          data={[
            {title: 'About Udemy', isIcon: true},
            {title: 'About Udemy Business', isIcon: true},
            {title: 'Help And Support', isIcon: false},
            {title: 'Share the Udemy App', isIcon: false},
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  // borderBottomWidth: 1,
                  // borderColor: 'black',
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{marginLeft: 15, fontWeight: 'bold', fontSize: 20}}>
                    {item.title}
                  </Text>
                  {item.isIcon ? (
                    <Image
                      source={require('../../images/next.png')}
                      style={{height: 24, width: 24, marginRight: 15}}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text
        style={{
          alignSelf: 'center',
          color: 'purple',
          fontWeight: '800',
          marginTop: 30,
          fontSize: 20,
        }}>
        Sign Out
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          color: 'black',
          marginTop: 10,
          fontSize: 15,
        }}>
        Udemy v6.12.1
      </Text>
    </View>
  );
};

export default User;
