import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import styles from './styles';
import SearchResult from './../../Components/DummyData/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const DestinationSearchScreen = () => {
  const navigation = useNavigation();
  const [input, setinput] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={val => setinput(val)}
        style={styles.textinput}
        placeholder="Where are you going?"
      />

      <FlatList
        data={SearchResult}
        renderItem={({item}) => (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate('Animation')}>
            <View style={styles.iconcontainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationtext}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
