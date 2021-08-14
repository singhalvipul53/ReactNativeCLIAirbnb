import React from 'react';
import {Text, View, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {namevalue} from '../../redux/features/testSlice';
const index = () => {
  const navigation = useNavigation();
  const name = useSelector(namevalue);
  return (
    <View>
      <Pressable
        style={styles.searchbutton}
        onPress={() => navigation.navigate('Destination Search')}>
        {/* <Icon name="ios-book" size={25} color="#4F8EF7" /> */}
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchbuttontext}>Where are you going {name}?</Text>
      </Pressable>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1438786657495-640937046d18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlsbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        }}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore btn Clicked')}>
          <Text style={styles.buttontext}>Explore Nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default index;
