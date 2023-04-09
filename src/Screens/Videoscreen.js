import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Slider,
} from 'react-native';
import React, {isValidElement, useState} from 'react';
import Video from 'react-native-video';

const Videoscreen = () => {
  const [videoclicked, setvideoclicked] = useState(false);
  const [play, setPlay] = useState(false);
  const [currenttime, setcurrenttime] = useState(0);
  const [totaltime, settotaltime] = useState(0);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <TouchableOpacity
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setvideoclicked(!videoclicked);
        }}>
        <Video
          paused={play}
          onProgress={data => {
            setcurrenttime(data.currentTime);
            settotaltime(data.playableDuration);
          }}
          source={require('../images/video1.mp4')} // Can be a URL or a local file.
          onBuffer={() => {}} // Callback when remote video is buffering
          onError={() => {}} // Callback when video cannot be loaded
          style={{width: '100%', height: 200}}
        />
      </TouchableOpacity>
      {videoclicked == true ? (
        <TouchableOpacity
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
          onPress={() => {
            setvideoclicked(!videoclicked);
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={require('../images/backward.png')}
                  style={{
                    width: 50,
                    height: 50,
                    tintColor: 'white',
                    marginLeft: 20,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPlay(!play);
                }}>
                {play === true ? (
                  <Image
                    source={require('../images/play.png')}
                    style={{width: 50, height: 50, tintColor: 'white'}}
                  />
                ) : (
                  <Image
                    source={require('../images/play_fill.png')}
                    style={{width: 50, height: 50, tintColor: 'white'}}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={require('../images/forward.png')}
                  style={{
                    width: 50,
                    height: 50,
                    tintColor: 'white',
                    marginRight: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 10,
                flexDirection: 'row',
                width: '100%',
                height: 60,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', marginLeft: 20}}>
                {currenttime}
              </Text>
              <Slider
                style={{width: '70%'}}
                maximumValue={totaltime}
                value={currenttime}
              />
              <Text style={{color: 'white', marginRight: 20}}>{totaltime}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Videoscreen;
