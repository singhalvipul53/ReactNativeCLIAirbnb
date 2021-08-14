import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {selectName} from '../../redux/features/testSlice';

const GuestScreen = () => {
  const [adult, setadult] = useState(0);
  const dispatch = useDispatch();
  const [children, setchildren] = useState(0);
  const [infant, setinfant] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Adults
            </Text>
            <Text
              style={{
                color: '#8d8d8d',
              }}>
              Ages 13 or above
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                dispatch(selectName('Anshul'));
                setadult(Math.max(0, adult - 1));
              }}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{adult}</Text>
            <Pressable
              onPress={() => setadult(adult + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Children
            </Text>
            <Text
              style={{
                color: '#8d8d8d',
              }}>
              Ages 2-12
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setchildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>
            <Pressable
              onPress={() => setchildren(children + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Infants
            </Text>
            <Text
              style={{
                color: '#8d8d8d',
              }}>
              Under 2
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setinfant(Math.max(0, infant - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{infant}</Text>
            <Pressable
              onPress={() => setinfant(infant + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() =>
          // Ye keh rha hai home screen mein jo explore screen hai usmein jao
          // aur uske andr jo searchresult screen hai uspr navigate karo
          // mtlb ye nested navigation hai
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          })
        }
        style={{
          marginBottom: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default GuestScreen;
