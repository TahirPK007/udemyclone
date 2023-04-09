import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Viewcourse = () => {
  const route = useRoute();
  return (
    <View style={{flex: 1}}>
      <ScrollView>
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
        <View
          style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
          <Text style={{marginLeft: 20}}>Posted by </Text>
          <Text style={{fontWeight: '700', color: 'purple', fontSize: 20}}>
            {route.params.data.tutor}
          </Text>
        </View>
        <Text style={{marginLeft: 20, fontWeight: '900', fontSize: 15}}>
          {route.params.data.rating}
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            data={[
              {
                title: 'Last updated 20 jan',
                icon: require('../images/info.png'),
              },
              {title: 'English', icon: require('../images/language.png')},
              {title: 'English', icon: require('../images/caption.png')},
            ]}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Image
                    source={item.icon}
                    style={{
                      width: 24,
                      height: 24,
                      marginLeft: 20,
                      tintColor: 'gray',
                    }}
                  />
                  <Text style={{marginLeft: 20}}>{item.title}</Text>
                </View>
              );
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '800',
            marginLeft: 15,
            color: 'black',
            marginTop: 30,
          }}>
          {' '}
          {'$ 380.99'}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'purple',
            width: '90%',
            height: 70,
            alignSelf: 'center',
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>
            Buy Now
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 70,
            alignSelf: 'center',
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
          }}>
          <Text style={{color: 'black', fontWeight: '700', fontSize: 20}}>
            Add To Cart
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: 40,
            fontWeight: 'bold',
            marginLeft: 20,
            marginTop: 20,
          }}>
          Curriculum
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    height: 80,
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, marginLeft: 30}}>
                      {index + 1}
                    </Text>
                    <View style={{marginLeft: 20}}>
                      <Text style={{fontSize: 25}}>
                        {'Video ' + (index + 1)}
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>{'Video ' + index + 1 + ' mins'}</Text>
                        <Image
                          source={require('../images/caption.png')}
                          style={{width: 24, height: 24, marginLeft: 15}}
                        />
                      </View>
                    </View>
                  </View>
                  <Image
                    source={require('../images/play.png')}
                    style={{
                      width: 24,
                      height: 24,
                      marginRight: 20,
                      tintColor: 'purple',
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Viewcourse;
