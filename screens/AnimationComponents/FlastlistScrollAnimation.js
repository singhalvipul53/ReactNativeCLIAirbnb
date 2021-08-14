import React from 'react';
import {View, Text, Dimensions, FlatList, Image, Animated} from 'react-native';
import data from './../data/dummydata';
// import {} from '@react-native-community/masked-view'
// import {} from 'react-native-svg'
const FlastlistScrollAnimation = () => {
  const {width, height} = Dimensions.get('window');
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const spacing = 10;
  const item_size = width * 0.72;
  const spaceritemsize = (width - item_size) / 2;
  const datatoshow = [{key: 'left_spacer'}, ...data, {key: 'right-spacer'}];
  return (
    <View style={{flex: 1}}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={datatoshow}
        keyExtractor={(_, index) => index}
        horizontal
        contentContainerStyle={{alignItems: 'center'}}
        snapToInterval={item_size}
        decelerationRate={0}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
        renderItem={({item, index}) => {
          if (!item.image) {
            return <View style={{width: spaceritemsize}} />;
          }
          const inputRange = [
            (index - 2) * item_size,
            (index - 1) * item_size,
            index * item_size,
          ];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          return (
            <View style={{width: item_size}}>
              <Animated.View
                style={{
                  marginHorizontal: spacing,
                  padding: spacing * 2,
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: 34,
                  transform: [{translateY}],
                }}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: '100%',
                    height: item_size * 1.2,
                    resizeMode: 'cover',
                    borderRadius: 24,
                    margin: 0,
                  }}
                />
                <Text numberOfLines={1} style={{fontSize: 24}}>
                  {item.author}
                </Text>
                <Text numberOfLines={3} style={{fontSize: 12}}>
                  {item.name}
                </Text>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FlastlistScrollAnimation;
