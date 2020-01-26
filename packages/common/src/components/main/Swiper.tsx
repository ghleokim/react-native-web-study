import React from 'react';
import { View, ScrollView, Text } from 'react-native';

interface Props {
  loop?: boolean;
}

export const Swiper:React.FC<Props> = ({loop, children}) => {
  const getScrollPage = (e:any) => {
    const total = Object.keys(children!).length
    const curX = e.nativeEvent.contentOffset.x
    const totX = e.nativeEvent.contentSize.width - e.nativeEvent.layoutMeasurement.width
    const current = curX / totX * total
    console.log(e)
    console.log(`total ${total}`)
    console.log(`curX ${curX} totX ${totX}`)
    console.log(`curX / totX ${curX / totX}`)
    console.log(current)
  }
  console.log(loop)
  return (
    <View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={getScrollPage}
        >
          {children}
        </ScrollView>
    </View>
  )
}

