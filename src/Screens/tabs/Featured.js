import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Featured = () => {
  const navigation = useNavigation();
  let featuredCourses = [
    {
      title: 'Learn Javascript in 30 Days',
      image:
        'https://c4.wallpaperflare.com/wallpaper/496/225/160/programming-code-html-css-wallpaper-preview.jpg',
      tutor: 'ali khan',
      price: '233',
      discountprice: '233',
      rating: '4.9',
      totalRating: '2343',
      isBestseller: true,
    },
    {
      title: 'Learn Javascript in 30 Days',
      image:
        'https://c4.wallpaperflare.com/wallpaper/496/225/160/programming-code-html-css-wallpaper-preview.jpg',
      tutor: 'ali khan',
      price: '233',
      discountprice: '233',
      rating: '4.9',
      totalRating: '2343',
      isBestseller: false,
    },
    {
      title: 'Learn Javascript in 30 Days',
      image:
        'https://c4.wallpaperflare.com/wallpaper/496/225/160/programming-code-html-css-wallpaper-preview.jpg',
      tutor: 'ali khan',
      price: '233',
      discountprice: '233',
      rating: '4.9',
      totalRating: '2343',
      isBestseller: true,
    },
  ];
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Image
            source={require('../../images/banner_featured.jpg')}
            style={{width: '100%', height: 200, marginTop: 0}}
          />
          <Text
            style={{
              fontSize: 40,
              color: 'black',
              fontWeight: '500',
              margin: 20,
            }}>
            {'Learn from \ntheir experience'}
          </Text>
          <Text style={{marginLeft: 20, marginRight: 20, fontSize: 16}}>
            {
              'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.here are many variations of passages of Lorem Ipsum available.here are many variations of passages of Lorem Ipsum.'
            }
          </Text>
          <View
            style={{
              width: '90%',
              height: 70,
              backgroundColor: 'gold',
              alignSelf: 'center',
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 15}}>
              Learn from real-world experts
            </Text>
            <Text style={{color: 'black', fontWeight: '800', fontSize: 15}}>
              Ends in 1 Day
            </Text>
          </View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              fontSize: 25,
              fontWeight: '800',
              color: 'black',
            }}>
            Featured
          </Text>
          <View style={{width: '100%', marginTop: 10, marginBottom: 200}}>
            <FlatList
              data={featuredCourses}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{width: 300, marginLeft: 10}}
                    onPress={() => {
                      navigation.navigate('Viewcourse', {data: item});
                    }}>
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                      }}>
                      <Image
                        source={{uri: item.image}}
                        style={{width: '100%', height: 150}}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          color: 'black',
                          fontWeight: '700',
                          marginLeft: 10,
                          marginTop: 10,
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          // color: 'black',
                          marginLeft: 10,
                        }}>
                        {item.tutor}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: '100%',
                          alignItems: 'center',
                        }}>
                        <Text style={{marginLeft: 10, fontSize: 15}}>4.99</Text>
                        <Image
                          source={require('../../images/rating.png')}
                          style={{height: 13, width: 13, marginLeft: 10}}
                        />
                        <Image
                          source={require('../../images/rating.png')}
                          style={{height: 13, width: 13, marginLeft: 2}}
                        />
                        <Image
                          source={require('../../images/rating.png')}
                          style={{height: 13, width: 13, marginLeft: 2}}
                        />
                        <Image
                          source={require('../../images/rating.png')}
                          style={{height: 13, width: 13, marginLeft: 2}}
                        />
                        <Image
                          source={require('../../images/rating.png')}
                          style={{height: 13, width: 13, marginLeft: 2}}
                        />
                        <Text>{'(230)'}</Text>
                      </View>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: '700',
                            color: 'black',
                            marginTop: 5,
                            marginLeft: 10,
                          }}>
                          {'$' + item.price}
                        </Text>
                        <Text
                          style={{
                            textDecorationLine: 'line-through',
                            fontSize: 15,
                            fontWeight: '500',
                            // color: 'black',
                            marginTop: 5,
                            marginLeft: 10,
                          }}>
                          {'$' + item.discountprice}
                        </Text>
                      </View>
                      {item.isBestseller ? (
                        <View
                          style={{
                            backgroundColor: 'gold',
                            height: 30,
                            width: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                            marginTop: 5,
                          }}>
                          <Text style={{color: 'black'}}> Best Seller</Text>
                        </View>
                      ) : null}
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 60,
          backgroundColor: 'black',
          position: 'absolute',
          bottom: 70,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Featured;
