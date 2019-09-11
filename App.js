
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import {Image} from 'react-native';
export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
         <Image source={{uri:'http://www.modapiyer.com/wp-content/uploads/2018/09/resim-1.jpg'}}
                style={{width:50,height:50,}}/>
         <Image source={{uri:'https://pngimage.net/wp-content/uploads/2018/06/resim-paleti-png-2.png'}}
                style={{width:100,height:100,}}/>
         <Image source={{uri:'https://www.freepngimg.com/thumb/environment/6-2-environment-png-file.png'}}
                style={{width:150,height:150,}}/>
                 <Image source={{uri:'https://www.campusonline.com/upload/urunler/513490_ResimOkumaveModernslupTarihiEitimiTmBlmler_KOzFY58i/resimokumatumbolumler600min.jpg'}}
                style={{width:200,height:200,}}/>
        <Image source={{uri:'https://turkbayraklari.com/wp-content/uploads/2016/04/hd-turk-bayragi-png.jpg'}}
                style={{width:250,height:250,}}/>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);