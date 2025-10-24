import { RouteProp, useFocusEffect, useRoute } from '@react-navigation/native';
import Container from '@src/components/common/Container';
import Player from '@src/components/player';
import usePlayerHeight from '@src/hooks/usePlayerHeight';
import { useFirestoreCollection } from '@src/services/query';
import { BottomMenuParams } from '@src/types/nav-type';
import { PlayerRefHandler } from '@src/types/player-type/index.ts';
import { Short } from '@src/types/post-type';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

const ShortsScreen = () => {
  const route = useRoute<RouteProp<BottomMenuParams>>();

  const flatListRef = useRef<FlatList>(null);

  const {
    data: shorts,
    error,
    isError,
  } = useFirestoreCollection<Short>('shorts');

  const { PlayerHeight } = usePlayerHeight();
  const mediaRefs = useRef<PlayerRefHandler[]>([]);
  const [pendingSeek, setPendingSeek] = useState<{
    postId: string;
    seekTo: number;
  } | null>(null);

  // consume navigation params on focus
  useFocusEffect(
    useCallback(() => {
      const params = (route.params ?? {}) as {
        postId?: string;
        seekTo?: number;
      };
      if (params.postId) {
        const idx = shorts.findIndex(s => s.id === params.postId);
        if (idx >= 0) {
          // scroll to the index. viewPosition centers the item
          flatListRef.current?.scrollToIndex({
            index: idx,
            animated: true,
            viewPosition: 0.5,
          });

          // Wait a short moment for scroll/measure to settle, then set pending seek.
          // The ShortItem will receive seekTo prop and perform the actual seek when mounted/visible.
          setTimeout(() => {
            setPendingSeek({
              postId: params.postId ?? '',
              seekTo: params.seekTo ?? 0,
            });
          }, 200);
        }
      }

      // clear params so repeated focuses don't re-trigger
      return () => {
        // optional: cleanup if you want to reset pendingSeek when leaving
      };
    }, [route.params, shorts]),
  );

  const onViewableItemsChanged = useRef(
    ({
      changed,
      viewableItems,
    }: {
      viewableItems: ViewToken[];
      changed: ViewToken[];
    }) => {
      //@ts-ignore
      changed?.forEach(element => {
        const cell = mediaRefs.current[element?.item?.id];
        if (cell) {
          if (element?.isViewable) {
            cell?.play?.();
          } else {
            cell?.stop?.();
          }
        }
      });
    },
  );

  return (
    <Container>
      <FlatList
        ref={flatListRef}
        data={shorts ?? []}
        style={{ height: '100%' }}
        keyExtractor={(item, index) => item?.id?.toString()}
        renderItem={({ item, index }) => (
          <Player
            short={item}
            shouldSeek={pendingSeek?.postId === item?.id}
            seekTo={pendingSeek?.seekTo ?? 0}
            ref={(shortCardRef: any) =>
              //@ts-ignore
              (mediaRefs.current[item?.id] = shortCardRef)
            }
          />
        )}
        pagingEnabled
        scrollEventThrottle={16}
        snapToInterval={PlayerHeight}
        snapToAlignment="start"
        decelerationRate="fast"
        scrollEnabled={true}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 70,
        }}
      />
    </Container>
  );
};

export default ShortsScreen;
