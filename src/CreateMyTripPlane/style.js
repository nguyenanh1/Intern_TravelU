import {StyleSheet, Dimensions} from 'react-native';
const full = Dimensions.get("window").width;
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  toolbar: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  main: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  name: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,

  },
  titlename: {
    fontFamily: 'Roboto regular',
    fontSize: 13,
    color: '#313131',
    opacity: 0.5,
    flex: 3
  },
  namecontainer:{
    fontFamily: 'Roboto regular',
    fontSize: 13,
    color: '#313131',
    marginRight: 10,
    flex: 6 ,
    textAlign:"right"
  },
  fromto:{
    backgroundColor: '#FFF',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    marginTop: 5,
  },
  imgfromto:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 25,
      paddingBottom: 20
  },
  formfromto:{
    flex: 9,
    marginLeft: 10,
    marginRight: 20,
  },
  formNhap:{
      backgroundColor:"#FFF",
      borderRadius: 5,
      flexDirection:"row",
      borderColor: "#707070",
      borderWidth: 0.2,
      alignItems:"center",
      paddingLeft: 10,
      paddingRight: 10
  },
  nextstep:{
      width: full,
      paddingTop: 15,
      paddingBottom: 15,
      alignItems:"center",
      justifyContent:"center"
  }

});

export default styles;
