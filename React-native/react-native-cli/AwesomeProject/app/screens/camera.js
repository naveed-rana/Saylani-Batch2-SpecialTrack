import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import {Icon} from 'native-base'
import ImagePicker from 'react-native-image-picker';

export default class CameraApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        img:''
    };
  }

  onStartCam = () =>{

    // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
      

        console.log('img',response.uri);
        
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          img: response.uri,
        });
      }
    });
  }

  render() {
    return (
      <View style={{marginTop:100}}>
       <Image
          style={{width:100,height:100}}
          source={{uri:this.state.img}}
        />

{/* <Image
          style={{width:100,height:100}}
          source={require('./folder/img.png')}
        /> */}
          <Icon name="camera" type="Entypo" />
        <Text onPress={this.onStartCam}> onCamera </Text>
      </View>
    );
  }
}
