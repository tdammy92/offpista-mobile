import useColors from '@src/hooks/useColors';
import usePlayerHeight from '@src/hooks/usePlayerHeight';
import { hp, SCREEN_HEIGHT } from '@src/themes/dimensions';
import { Short } from '@src/types/post-type';
import { Search } from 'lucide-react-native';
import React, { forwardRef, useCallback, useImperativeHandle } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { VideoRef } from 'react-native-video';
import PlayerDetails from './PlaerDetails';
import PlayerAction from './playerAction';
import VideoPlayer from './videoPlayer';
import { PlayerRefHandler } from '@src/types/player-type/index.ts';
import { useFocusEffect } from '@react-navigation/native';

interface PlayerComponents {
  short: Short;
}

const Player = forwardRef<PlayerRefHandler, PlayerComponents>(
  ({ short }, parentRef) => {
    const videoPlayerRef = React.useRef<VideoRef>(null);
    const { PlayerHeight } = usePlayerHeight();
    const colors = useColors();

    useImperativeHandle(parentRef, () => ({
      play,
      stop,
    }));

    const play = () => {
      if (!videoPlayerRef.current) return;
      videoPlayerRef.current?.resume();
    };

    const stop = () => {
      if (!videoPlayerRef.current) return;
      videoPlayerRef.current?.pause();
    };

    useFocusEffect(
      useCallback(() => {
        return () => {
          stop();
        };
      }, []),
    );

    return (
      <View
        style={{
          height: PlayerHeight,
        }}
      >
        <VideoPlayer
          videoRef={videoPlayerRef}
          source={{
            uri: short.postUrl,
          }}
          repeat={true}
          muted={false}
          resizeMode={'cover'}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: SCREEN_HEIGHT * 0.08,
            left: 20,
            padding: 8,
            borderRadius: 8,
          }}
        >
          <Search color={colors.light} size={hp(30)} />
        </TouchableOpacity>
        <PlayerDetails short={short} />
        <PlayerAction short={short} />
      </View>
    );
  },
);

export default Player;
