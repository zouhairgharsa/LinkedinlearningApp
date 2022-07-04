import * as React from 'react';
import { View, StyleShee } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function VideoCourse() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <Video
      ref={video}
      style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
      source={{
        uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      }}
      useNativeControls
      resizeMode="contain"
      isLooping
      onPlaybackStatusUpdate={(status) => setStatus(() => status)}
    />
  );
}