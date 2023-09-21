import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    image:{
        height:hp('10%'),
        width:wp('10%'),
        backgroundColor:"red"
    },
})