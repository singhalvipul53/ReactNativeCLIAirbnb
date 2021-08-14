import React from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
  Animated,
} from 'react-native';
import data from './../data/dummydata';
const FlatListVerticalScroll = () => {
  const spacing = 20;
  const avatarsize = 70;
  const itemsize = avatarsize + spacing * 3;
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{flex: 1}}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuCCzJaOSCfUV7ZlWRtvioWZmas6mpKBC7w&usqp=CAU',
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        keyExtractor={(_, index) => index}
        contentContainerStyle={{
          padding: spacing,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            itemsize * index,
            itemsize * (index + 1.5),
          ];
          const opacityinputRange = [
            -1,
            0,
            itemsize * index,
            itemsize * (index + 0.5),
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange: opacityinputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Animated.View
              style={{
                flexDirection: 'row',
                padding: spacing,
                marginBottom: spacing,
                backgroundColor: 'rgba(255,255,255,0.8)',
                borderRadius: 12,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.3,
                shadowRadius: 20,
                opacity,
                transform: [{scale}],
              }}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: avatarsize,
                  height: avatarsize,
                  borderRadius: avatarsize,

                  marginRight: spacing / 2,
                }}
              />
              <View>
                <Text style={{fontSize: 22, fontWeight: '700'}}>
                  {item.author}
                </Text>
                <Text style={{fontSize: 18, opacity: 0.7}}>{item.name}</Text>
                <Text style={{fontSize: 14, opacity: 0.8, color: '#0099cc'}}>
                  {item.name}
                </Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default FlatListVerticalScroll;
