import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Feed from './../../Components/DummyData/data';
import Post from './../../Components/Posts/index';
const index = () => {
  return (
    <View>
      <FlatList data={Feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default index;
