import React from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const images = [
  'https://thumbs-prod.si-cdn.com/P4Smi9MthEBXH7pdW8Y-bvwR6ts=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg',
  'https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg',
  'https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg',
  'https://assets.unenvironment.org/styles/article_billboard_image/s3/2021-05/alberta-2297204_1920.jpg?h=1483c54f&amp;itok=GdjA9GRu',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrvFUphS1tp97S1zWJxExPo6TVzaip4lwzJ9Y7te4eYzNv9VxXHJhruHmKNM4aSvRx77U&usqp=CAU',
  'https://pbs.twimg.com/profile_images/782975549316661249/_7llAhyy.jpg',
  'https://m.economictimes.com/thumb/msid-68721417,width-1200,height-900,resizemode-4,imgsize-1016106/nature1_gettyimages.jpg',
  'https://eco-business.imgix.net/ebmedia/fileuploads/Feature_RightsofNature_inline2.jpg?fit=crop&h=960&ixlib=django-1.2.0&w=1440',
  'https://images.unsplash.com/photo-1608159477202-8a0e27f807b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  'https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/3:2/w_3999,h_2666,c_limit/MtFuji-GettyImages-959111140.jpg',
  'https://i.pinimg.com/originals/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG84bDpZ-8_WEfnCx6DqtpzTQ7wLVr2Me9yQ&usqp=CAU',
  'https://i0.wp.com/www.yesmagazine.org/wp-content/uploads/imports/312be001e3254afeafb551ea77bbae66.jpg?fit=1400%2C840&quality=90&ssl=1',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8RkLRgal0fWFdd_bawCPb9ZZYEXKbOxu4w&usqp=CAU',
];
const ImageAnimation = () => {
  const {width, height} = Dimensions.get('screen');
  const image_size = 80;
  const spacing = 10;
  const topref = React.useRef();
  const thumbref = React.useRef();
  const [activeindex, setactiveindex] = React.useState(0);
  const scrolltoactiveindex = index => {
    //setindex
    setactiveindex(index);
    //scrollflatlist
    topref?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    if (index * (image_size + spacing) - image_size / 2 > width / 2) {
      thumbref?.current?.scrollToOffset({
        offset: index * (image_size + spacing) - width / 2 + image_size / 2,
        animated: true,
      });
    } else {
      thumbref?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <FlatList
        ref={topref}
        data={images}
        keyExtractor={(_, index) => index}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={ev => {
          scrolltoactiveindex(
            Math.round(ev.nativeEvent.contentOffset.x / width),
          );
        }}
        renderItem={({item}) => {
          return (
            <View style={{width, height}}>
              <Image
                source={{uri: item}}
                style={StyleSheet.absoluteFillObject}
              />
            </View>
          );
        }}
      />
      <FlatList
        ref={thumbref}
        data={images}
        keyExtractor={(_, index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{position: 'absolute', bottom: image_size}}
        contentContainerStyle={{paddingHorizontal: spacing}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => scrolltoactiveindex(index)}>
              <Image
                source={{uri: item}}
                style={{
                  width: image_size,
                  height: image_size,
                  borderRadius: 12,
                  marginRight: spacing,
                  borderWidth: 2,
                  borderColor: activeindex === index ? '#fff' : 'transparent',
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ImageAnimation;
