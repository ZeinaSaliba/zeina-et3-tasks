import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//using styleSheet and react-native-responsive-screen
export default StyleSheet.create({
    plus:{
        backgroundColor:"#797979",
        borderRadius:wp('1%'),
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:hp('4%'),
        width:wp('10%')
    },
    textPlus:{
        color:"white",
        display:"flex",
        left:wp('0.5%'),
        fontSize:20
    },
    textMinus:{
        color:"white",
        display:"flex",
        fontSize:20
    },
    container:{
        flexDirection:"row",
        display:"flex",
        justifyContent:"space-between",
        width:wp('40%')
    },
})