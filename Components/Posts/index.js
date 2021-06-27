import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
const Post = ({post}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      <Text style={styles.bedroom}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldprice}>${post.oldprice}</Text>
        <Text style={styles.newprice}> ${post.newprice}</Text>/ night
      </Text>
      <Text style={styles.totalprice}>${post.totalprice} Total</Text>
    </View>
  );
};

export default Post;
