import Container from '@src/components/common/Container';
import Player from '@src/components/player';
import usePlayerHeight from '@src/hooks/usePlayerHeight';
import { useFirestoreCollection } from '@src/services/query';
import { PlayerRefHandler } from '@src/types/player-type/index.ts';
import { Short } from '@src/types/post-type';
import React, { useEffect, useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';

const ShortsScreen = () => {
  const {
    data: shorts,
    error,
    isError,
  } = useFirestoreCollection<Short>('shorts');

  const { PlayerHeight } = usePlayerHeight();
  const mediaRefs = useRef<PlayerRefHandler[]>([]);

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
        data={shorts ?? []}
        style={{ height: '100%' }}
        keyExtractor={(item, index) => item?.id?.toString()}
        renderItem={({ item, index }) => (
          <Player
            short={item}
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
