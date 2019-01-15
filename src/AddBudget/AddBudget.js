import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Image,
  FlatList,
} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import databudget from './databudget'
import ViewItemBudget from './ViewItemBudget'
export default class AddBudget extends Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#F117BE', '#8D0CBA']}
        >
          <View style={styles.toolbar}>
            <TouchableHighlight
              underlayColor="transparent"
              style={styles.icback}
              onPress={() => {
                this.props.navigation.goBack ();
              }}
            >
              <Image source={require ('../../resource/image/ic_back.png')} />
            </TouchableHighlight>
            <Text style={[styles.title, {flex: 8}]}>Create trip plan</Text>
            <TouchableHighlight style={{flex: 1}}>
              <Image
                source={require ('../../resource/image/ic_add_people.png')}
              />
            </TouchableHighlight>
          </View>
        </LinearGradient>
        <View
          style={{
            marginBottom: 250,
            backgroundColor: '#FFFFFF',
          }}
        >
          <TouchableHighlight>
            <View style={styles.addbudget}>
              <Image source={require ('../../resource/image/ic_add_wallest.png')} />
              <Text style={{color:"#9F9F9F",fontSize: 14, fontFamily:"Roboto Regular", marginLeft: 20}}>Thêm Budget</Text>
            </View>
          </TouchableHighlight>
          <View style={{padding: 16}}>
            <FlatList 
                data={databudget}
                renderItem={({item,index})=>{
                    return <ViewItemBudget item={item} index={index}/>
                }}
                showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate ('AddBudget');
          }}
          style={{
            position: 'absolute',
            bottom: 0,
          }}
        >
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#F117EA', '#DC444A']}
            style={styles.nextstep}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                color: '#FFF',
              }}
            >
              Next step
            </Text>
          </LinearGradient>
        </TouchableHighlight>
      </View>
    );
  }
}
