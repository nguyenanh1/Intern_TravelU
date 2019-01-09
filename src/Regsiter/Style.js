import { StyleSheet,backgroundColor} from 'react-native';
const styles = StyleSheet.create({
     
      khung: {
         flex: 1,
          
       },
       top: {
           flex: 1 ,
           position : "relative"

           
      },
      body: {

        flex: 3 ,
        backgroundColor: 'white',
        
      },
      form: {
         flex:6 , backgroundColor:'white',margin:15 , borderRadius: 30, paddingBottom:'10%',borderWidth :0.5, marginTop:'-10%' 
        
      },
      bot : {
         flex:1 ,
         alignItems: 'center',
         
      },
      anh:{
         marginTop:'-10%'
      }


});
export default styles;