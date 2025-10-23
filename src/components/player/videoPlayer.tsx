import React, { FunctionComponent } from 'react';
import Video, { ReactVideoProps, VideoRef } from 'react-native-video';

const VideoPlayer: FunctionComponent<
  ReactVideoProps & {
    videoRef?: React.Ref<VideoRef>;
    isUriLocal?: boolean;
  }
> = ({ videoRef, isUriLocal = false, ...videoProps }) => {
  return (
    <Video
      ref={videoRef}
      onError={error => {
        if (__DEV__) {
          console.error(`path: ${videoProps.source?.uri}`, error);
        }
      }}
      style={{ flex: 1 }}
      shutterColor="transparent"
      preventsDisplaySleepDuringVideoPlayback
      {...videoProps}
    />
  );
};

export default VideoPlayer;
