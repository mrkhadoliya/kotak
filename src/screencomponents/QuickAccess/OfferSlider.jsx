import {Dimensions, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import data from '../../data/OfferVoucher'

const OfferSlider = ({data}) => {
  // console.log(data.length,'sarurrrrrrrrrrrrrrrr')
  const {width,height} = Dimensions.get("window")
  return (
    <View style={{flex: 1}}>
      {data ? (
        <>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
                // console.log(item.image)
              return (
                <View
                  key={index}
                  style={{width: width, height: 90, overflow: 'hidden',}}>
                  <Image
                    source={{uri:item.image}}
                    resizeMode="cover"
                    style={styles.ImageFlatList}
                  />
                </View>
              );
            }}
            horizontal
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
          />
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({
  ImageFlatList: {
    width: '100%',
    height: '100%',
    resizeMode:"cover"
  },
});
