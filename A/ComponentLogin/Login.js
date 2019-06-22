import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  render() {
    let checkedColor = this.state.checked ?  '#2A70B2' : 'white'
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.container}>
            <View style={styles.LogonContainer}>
              <Text style={styles.title}>Logo</Text>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.input}>
                <Icon name="user" size={20} color="white" />
                <TextInput
                  style={styles.input_}
                  placeholder="Username"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  keyboardType="email-address"
                  autoCorrect={false}
                />
              </View>
              <View style={styles.input}>
                <Icon name="lock" size={20} color="white" />
                <TextInput
                  style={styles.input_}
                  placeholder="Password"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  keyboardType="go"
                  secureTextEntry
                />
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.container_remember} >
                  <TouchableOpacity onPress = {()=>{this.setState({checked : !this.state.checked})}}>
                    <Icon name="check-square" size={20} color= {checkedColor} />
                  </TouchableOpacity>
                  <Text style={styles.txtRemember}>
                    Remember Me
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.btnLogin}
                >
                  <Text style={styles.btnText}>SIGN IN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#69AEEF",
    padding: 10
  },
  LogonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  logo: {
    width: 130,
    height: 56
  },
  title: { color: "white", fontSize: 30, textAlign: "center" },
  infoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200
  },
  input: {
    backgroundColor: "#69AEEF",
    paddingTop: 10,
    color: "white",
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    flexDirection: "row"
  },
  buttonContainer: {
    paddingVertical: 15,
    flexDirection: "row"
  },
  btnText: {
    textAlign: "center",
    color: "white"
  } ,
  btnLogin : {
    flex: 1,
    backgroundColor: "#2A70B2",
    paddingVertical: 10,
    overflow: "hidden",
    borderRadius: 20
  },
  input_:{ marginLeft: 10, color: "white" },
  container_remember :{  flex: 1,  flexDirection: "row", alignItems: "center"  },
  txtRemember :{ color: "white", fontSize: 14, marginLeft: 5 },
});
