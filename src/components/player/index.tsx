import useColors from '@src/hooks/useColors';
import usePlayerHeight from '@src/hooks/usePlayerHeight';
import { hp, SCREEN_HEIGHT } from '@src/themes/dimensions';
import { Short } from '@src/types/post-type';
import { Search } from 'lucide-react-native';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { TouchableOpacity, View } from 'react-native';
import { VideoRef } from 'react-native-video';
import PlayerDetails from './PlaerDetails';
import PlayerAction from './playerAction';
import VideoPlayer from './videoPlayer';
import { PlayerRefHandler } from '@src/types/player-type/index.ts';
import { useFocusEffect } from '@react-navigation/native';

interface PlayerComponents {
  short: Short;
  shouldSeek?: boolean;
  seekTo?: number;
}

const Player = forwardRef<PlayerRefHandler, PlayerComponents>(
  ({ short, shouldSeek, seekTo }, parentRef) => {
    const videoPlayerRef = React.useRef<VideoRef>(null);
    const { PlayerHeight } = usePlayerHeight();
    const colors = useColors();
    const hasSeekedRef = useRef(false);

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

    // when seekTo changes for this item, attempt seek and optionally play
    // useEffect(() => {
    //   if (typeof seekTo === 'number' && videoPlayerRef.current) {
    //     try {
    //       // react-native-video exposes seek()
    //       videoPlayerRef.current?.seek?.(seekTo);
    //       hasSeekedRef.current = true;
    //       if (autoPlay) {
    //         videoPlayerRef.current.resume?.();
    //       }
    //       // notify parent that seek/play has been applied
    //       onPlayed?.();
    //     } catch (err) {
    //       // ignore; can retry after small timeout if necessary
    //       setTimeout(() => {
    //         videoPlayerRef.current?.seek?.(seekTo);
    //         if (autoPlay) playerRef.current?.resume?.();
    //         onPlayed?.();
    //       }, 120);
    //     }
    //   }
    // }, [seekTo, shouldSeek]);

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
          poster={{ source: { uri: short?.thumbnail }, resizeMode: 'cover' }}
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
