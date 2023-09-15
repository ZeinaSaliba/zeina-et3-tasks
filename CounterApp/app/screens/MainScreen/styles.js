import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
        flex:1,
        padding:wp('4%'),
        display:"flex",
        alignItems:"center"
    }
})