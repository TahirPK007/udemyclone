import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Featured from './tabs/Featured';
import Search from './tabs/Search';
import MyLearning from './tabs/MyLearning';
import Wishlist from './tabs/Wishlist';
import User from './tabs/User';

const Main = () => {
  const [selectedtab, setselectedtab] = useState(0);
  return (
    <View style={{flex: 1}}>
      {selectedtab == 0 ? (
        <Featured />
      ) : selectedtab == 1 ? (
        <Search />
      ) : selectedtab == 2 ? (
        <MyLearning />
      ) : selectedtab == 3 ? (
        <Wishlist />
      ) : (
        <User />
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          height: 70,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setselectedtab(0);
          }}>
          <Image
            source={
              selectedtab == 0
                ? require('../images/feature_fill.png')
                : require('../images/feature.png')
            }
            style={{height: 30, width: 30}}
          />
          <Text>Featured</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setselectedtab(1);
          }}>
          <Image
            source={
              selectedtab == 1
                ? require('../images/search_fill.png')
                : require('../images/search.png')
            }
            style={{height: 30, width: 30}}
          />
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setselectedtab(2);
          }}>
          <Image
            source={
              selectedtab == 2
                ? require('../images/play_fill.png')
                : require('../images/play.png')
            }
            style={{height: 30, width: 30}}
          />
          <Text>My Learning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setselectedtab(3);
          }}>
          <Image
            source={
              selectedtab == 3
                ? require('../images/like_fill.png')
                : require('../images/like.png')
            }
            style={{height: 30, width: 30}}
          />
          <Text>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setselectedtab(4);
          }}>
          <Image
            source={
              selectedtab == 4
                ? require('../images/user_fill.png')
                : require('../images/user.png')
            }
            style={{height: 30, width: 30}}
          />
          <Text>User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;
