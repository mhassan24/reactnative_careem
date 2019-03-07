import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Image,ImageBackground , TouchableOpacity} from 'react-native'
import menu from '../images/menu.png';

export default class Careem extends Component {
    state = {
        bg: "white"
    }

    colorTextInput = () => {
        this.setState({
            bg:"#F0F0F0"
        })
    }

    txtBlur = () => {
        this.setState({
            bg:"white"
        })
    }

  render() {

    
const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    txtInput:{
        height:50,
        width:"90%",
        borderWidth:1,
        borderColor: "#CCCCCC",
        marginTop:20,
        backgroundColor: this.state.bg,
        borderRadius:10,
    },
    txtInputtwo:{
        height:180,
        width:"90%",
        borderWidth:1,
        borderColor: "#CCCCCC",
        marginTop:10,
        backgroundColor: this.state.bg,
        borderRadius:10,
        alignItems:"center"
    },
    txt:{
        fontFamily:"Roboto",
        fontSize:30,
        width:"80%",
        color:"black",
        fontWeight:"bold",
        marginTop:10,
        marginLeft:18
    },
    txtInView:{
        fontFamily:"Roboto",
        fontSize:20,
        color:"black",
        // fontWeight:"bold",
        marginTop:10,
        marginLeft:30,
        marginRight:30,
        width:"80%",
    },
    txtInViewTwo:{
        fontFamily:"Roboto",
        fontSize:13,
        color:"#696969",
        // fontWeight:"bold",
        marginTop:3,
        width:"80%",
    },
    btn:{
        width:"80%",
        height:30,
        backgroundColor:"#35B24C",
        alignItems:"center",
        borderRadius:5,
        justifyContent:"center",
        marginTop:20
    },
    img:{
        marginTop:10,
        marginLeft:18
    }
})

    return (
      <View>
          <TouchableOpacity>
          <Image source={menu} style={style.img}></Image>
          </TouchableOpacity>
          <Text style={style.txt}>Pickup location</Text>
          <View style={style.container}>
          <TextInput placeholder="Enter your pickup location..." placeholderTextColor="#888888" onBlur={this.txtBlur} onFocus={this.colorTextInput} style={style.txtInput}>
          </TextInput>
          <View style={style.txtInputtwo}>
            <Text style={style.txtInView}>Careem requires acess to your location</Text>
            <Text style={style.txtInViewTwo}>Enable location services for a more accurate pickup experience</Text>
            <TouchableOpacity style={style.btn}>
                <Text style={{color:"white",fontSize:12}}>Turn on location services</Text>
            </TouchableOpacity>
          </View>
          </View>
      </View>
    )
  }
}
