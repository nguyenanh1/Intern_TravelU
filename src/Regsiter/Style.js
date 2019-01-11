import { StyleSheet, backgroundColor } from 'react-native';
const styles = StyleSheet.create({

   khung: {
      flex: 1,

   },
   top: {
      flex: 1,
      position: "relative"


   },
   body: {

      flex: 3,
      backgroundColor: 'white',

   },
   form: {
      flex: 6, backgroundColor: 'white', margin: 15, borderRadius: 30, paddingBottom: '10%', elevation: 2, marginTop: '-8%'

   },
   bot: {
      flex: 1,
      

   },
   anh: {
      marginTop: '-10%',

   },
   textname: {
      fontSize: 13, fontFamily: 'muli', color: 'black', opacity: 0.5,
   },
   textname2: {
      fontSize: 22, fontFamily: 'muli', color: 'white',
   },
   textinput: {
       width: '98%', borderColor: 'gray', borderBottomWidth: 0.5, fontSize: 20, opacity: 0.5, fontSize: 14
   },
   nutdk:{
      width:'40%',height:'40%',backgroundColor:'#F117BE',borderRadius: 25,alignItems:'center',justifyContent:'center',
   }
});
export default styles;