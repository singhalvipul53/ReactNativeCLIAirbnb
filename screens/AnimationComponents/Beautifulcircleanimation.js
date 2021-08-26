import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import {detaillist, iconsByType} from '../data/CircleAnimationData';

const detaillist = ['preptime', 'exp', 'skill', 'cousine', 'type'];
const iconsByType = {
  preptime: 'fire',
  exp: 'badge',
  skill: 'energy',
  cousine: 'chemistry',
  type: 'drop',
};
const data = [
  {
    image:
      'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg',
    title: 'Lemon drizzle cake',
    description: 'Its difficult not to demolish by Tana Ramsay',
    preptime: '1 hour',
    exp: 10,
    skill: 'easy',
    cousine: 'vegan',
    type: 'dehydrated',
  },
  {
    image:
      'https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg',
    title: 'Lemon drizzle cake',
    description: 'Its difficult not to demolish by Tana Ramsay',
    preptime: '1 hour',
    exp: 20,
    skill: 'very-easy',
    cousine: 'vegan',
    type: 'dehydrated',
  },
  {
    image:
      'https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg',
    title: 'Lemon drizzle cake',
    description: 'Its difficult not to demolish by Tana Ramsay',
    preptime: '1 hour',
    exp: 30,
    skill: 'medium',
    cousine: 'non-vegan',
    type: 'dehydrated',
  },
  {
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.670xw:1.00xh;0.173xw,0&resize=480:*',
    title: 'Lemon drizzle cake',
    description: 'Its difficult not to demolish by Tana Ramsay',
    preptime: '1 hour',
    exp: 25,
    skill: 'easy',
    cousine: 'vegan',
    type: 'dehydrated',
  },
  {
    image: 'https://static.toiimg.com/photo/72023714.cms',
    title: 'Lemon drizzle cake',
    description: 'Its difficult not to demolish by Tana Ramsay',
    preptime: '1 hour',
    exp: 10,
    skill: 'easy',
    cousine: 'vegan',
    type: 'dehydrated',
  },
  {
    image:
      'https://i.pinimg.com/originals/4e/b7/49/4eb749705c6bc1c957e9e74792d711f2.jpg',
    title: 'Lemon drizzle cake',
    description: 'Its difficult not to demolish by Tana Ramsay',
    preptime: '1 hour',
    exp: 10,
    skill: 'easy',
    cousine: 'vegan',
    type: 'dehydrated',
  },
];

const {width, height} = Dimensions.get('screen');
const duration = 700;
const titlesize = 36;
const spacing = 80;
const imagesize = width * 0.8;

const colors = {
  lightBg: '#e2e2e2',
  darkBg: '#2c2d51',
  lightText: '#e5e5dd',
  darkText: '#a5a6aa',
};

const Item = ({children, style}) => {
  return (
    <View
      style={[
        {
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: 'transparent',
        },
        style,
      ]}>
      {children}
    </View>
  );
};

const Icon = ({type}) => {
  return (
    <SimpleLineIcons
      name={type}
      size={26}
      color="#a5a611"
      style={{marginRight: 15, height: 26}}
    />
  );
};

const Description = ({index, text, color}) => {
  return (
    <Item>
      <Text key={`description-${index}`} style={{fontSize: 16, color}}>
        {text}
      </Text>
    </Item>
  );
};

const Title = ({index, text, color}) => {
  return (
    <Item style={{height: titlesize * 3, justifyContent: 'flex-end'}}>
      <Text
        key={`title-${index}`}
        style={{fontSize: titlesize, fontWeight: '900', color}}>
        {text}
      </Text>
    </Item>
  );
};

const Details = ({color, index}) => {
  return (
    <View style={{marginVertical: spacing}}>
      {detaillist.map(key => {
        return (
          <View
            key={key}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 25,
            }}>
            <Icon type={iconsByType[key]} />
            <Item style={{flex: 1, height: 26, justifyContent: 'center'}}>
              <Text
                key={`${key}-${index}`}
                style={{fontSize: 16, color, fontWeight: '700'}}>
                {data[index][key]}
              </Text>
            </Item>
          </View>
        );
      })}
    </View>
  );
};
const Beautifulcircleanimation = () => {
  const [index, setIndex] = React.useState(0);
  const color = index % 2 === 1 ? colors.lightText : colors.darkText;
  const headingColor = index % 2 === 1 ? colors.lightText : colors.darkBg;
  const activeIndex = React.useRef(new Animated.Value(0)).current;
  const animation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: activeIndex,
      duration,
      useNativeDriver: true,
    }).start();
  });
  return (
    <SafeAreaView>
      <View
        style={[
          styles.imageContainer,
          {borderColor: index % 2 === 0 ? colors.darkBg : colors.lightBg},
        ]}>
        <Image
          source={{
            uri: data[index].image,
          }}
          style={styles.image}
        />
      </View>
      <View style={{padding: 20, flex: 1, justifyContent: 'space-evenly'}}>
        <Title color={headingColor} index={index} text={data[index].title} />
        <Details color={color} index={index} />
        <Description
          index={index}
          text={data[index].description}
          color={headingColor}
        />
      </View>
    </SafeAreaView>
  );
};

export default Beautifulcircleanimation;

const styles = StyleSheet.create({
  imageContainer: {
    // flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: imagesize,
  },
});
