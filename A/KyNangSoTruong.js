import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class KyNangSoTruong extends Component {
  constructor(props) {
    super(props);
    this.state = {
        check1 : false ,
        check2 : false ,
        check3 : false ,
        check4 : false ,
        check5 : false ,
        check6 : false ,
        check7 : false ,
        check8 : false ,
        check9 : false ,
        check10 : false ,
        check11 : false ,
        check12 : false ,
        A: [
            {id : 0 , check : false , value : 'Lãnh đạo'},
            {id : 0 , check : false , value : 'Lãnh đạo'},
            {id : 0 , check : false , value : 'Lãnh đạo'},
            {id : 0 , check : false , value : 'Lãnh đạo'},
            {id : 0 , check : false , value : 'Lãnh đạo'},
            {id : 0 , check : false , value : 'Lãnh đạo'},
            {id : 0 , check : false , value : 'Lãnh đạo'},
            {id : 0 , check : false , value : 'Lãnh đạo'},
            {id : 0 , check : false , value : 'Lãnh đạo'},
            {id : 0 , check : false , value : 'Lãnh đạo'},
            {id : 0 , check : false , value : 'Lãnh đạo'},
            {id : 0 , check : false , value : 'Lãnh đạo'},
        ]
    };
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHe}>
          <View style={styles.red}>
            <View style={styles.iRed} />
          </View>
          <View style={styles.ThongTin}>
            <Text style={styles.txtThongTin}>Kỹ năng & Sở trường</Text>
          </View>
          <View style={styles.BatBuoc}>
            <Text style={styles.txtBatBuoc}>(không bắt buộc)</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.txtLine} />
          </View>
        </View>
        <View style={styles.containerDe}>
            <View style = {styles.View_Title}><Text style = {{fontSize: 10 ,color: "#1676C1"}}>Kỹ năng / Sở trường</Text></View>
            <View style = {{flex : 9 , flexDirection : 'row' }}>
               
                <View style = {{flex : 4  , padding : 5}}>
                    <CheckBox  containerStyle= {{backgroundColor : 'white'}}  onPress = {()=>{this.setState({checked1 :!this.state.checked1})}} title={'Lãnh đạo'} checked={this.state.checked1} size = {17}   checkedColor = 'red'  style = {{backgroundColor : 'white'}} textStyle = {styles.textStyleCheck} />
                    <CheckBox  containerStyle= {{backgroundColor : 'white'}}  onPress = {()=>{this.setState({checked2 : !this.state.checked2})}} title='Giải quyết vấn đề' checked={this.state.checked2} size = {17}   checkedColor = 'red' textStyle = {styles.textStyleCheck} />
                    <CheckBox  containerStyle= {{backgroundColor : 'white'}}  onPress = {()=>{this.setState({checked3 : !this.state.checked3})}} title='Quản lý thời gian' checked={this.state.checked3} size = {17}   checkedColor = 'red'  textStyle = {styles.textStyleCheck} />
                    <CheckBox  containerStyle= {{backgroundColor : 'white'}}  onPress = {()=>{this.setState({checked4 : !this.state.checked4})}} title='Quản lý sáng tạo' checked={this.state.checked4} size = {17}   checkedColor = 'red' textStyle = {styles.textStyleCheck} />
                    <CheckBox  containerStyle= {{backgroundColor : 'white'}}  onPress = {()=>{this.setState({checked5 : !this.state.checked5})}} title='Ra quyết định' checked={this.state.checked5} size = {17}   checkedColor = 'red'  textStyle = {styles.textStyleCheck} />
                    <CheckBox  containerStyle= {{backgroundColor : 'white'}}  onPress = {()=>{this.setState({checked6 : !this.state.checked6})}} title='Làm việc nhóm' checked={this.state.checked6} size = {17}   checkedColor = 'red' textStyle = {styles.textStyleCheck} />
                   

                </View>
                <View style = {{flex : 4  , padding : 5}}>
                    <CheckBox  containerStyle= {{backgroundColor : 'white'}}  onPress = {()=>{this.setState({checked7 : !this.state.checked7})}} title='Quản lý stress' checked={this.state.checked7} size = {17}   checkedColor = 'red' textStyle = {styles.textStyleCheck} />
                    <CheckBox  containerStyle= {{backgroundColor : 'white'}}  onPress = {()=>{this.setState({checked8 : !this.state.checked8})}} title='Học hiệu quả' checked={this.state.checked8} size = {17}   checkedColor = 'red' textStyle = {styles.textStyleCheck} />
                    <CheckBox  containerStyle= {{backgroundColor : 'white'}}  onPress = {()=>{this.setState({checked9 : !this.state.checked9})}} title='Quản lý dự án' checked={this.state.checked9} size = {17}   checkedColor = 'red'  textStyle = {styles.textStyleCheck} />
                    <CheckBox  containerStyle= {{backgroundColor : 'white'}}  onPress = {()=>{this.setState({checked10 : !this.state.checked10})}} title='Quản lý chiến lược' checked={this.state.checked10} size = {17}   checkedColor = 'red'  textStyle = {styles.textStyleCheck} />
                    <CheckBox  containerStyle= {{backgroundColor : 'white'}}  onPress = {()=>{this.setState({checked11 : !this.state.checked11})}} title='Quản lý giao tiếp' checked={this.state.checked11} size = {17}   checkedColor = 'red'  textStyle = {styles.textStyleCheck} />
                    <CheckBox  containerStyle= {{backgroundColor : 'white'}}  onPress = {()=>{this.setState({checked12 : !this.state.checked12})}} title='Nghề nghiệp' checked={this.state.checked12} size = {17}   checkedColor = 'red' textStyle = {{color : '#959595' , fontWeight : 'normal' , fontSize : 12}} />
                
                </View>
            </View>
            <View style = {{flex : 6  , padding : 10 }}>
                <View style={{flex : 1 , flexDirection : 'column'  , marginLeft : 5}}>
                    <Text style = {{fontSize: 10 ,color: "#1676C1"}}>Sở thích</Text>
                    <TextInput style={styles.styleInput_} ></TextInput>
                </View>
                <View style={{flex : 1 , flexDirection : 'column', marginLeft : 5}}>
                    <Text style = {{fontSize: 10 ,color: "#1676C1"}}>Kỹ năng đặc biệt / tài lẻ</Text>
                    <TextInput style={styles.styleInput_} ></TextInput>
                </View>

                <View style={styles.ctn_btn}>
                    <View></View>
                    <TouchableOpacity>
                        <View style={styles.btn_save}>
                            <Icon name="save" size={21} color="#fff" />
                            <Text style={{color : 'white'  , marginLeft : 5}}>Lưu</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.btn_xoa}>
                            <Icon name="trash" size={21} color="#959595" />
                            <Text style={{color : '#959595'  , marginLeft : 5}}>Xóa</Text>
                        </View>
                    </TouchableOpacity>
                    <View></View>
                </View>

            </View>
        </View>
      </View>
    );
  }
}

//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column" , 
    backgroundColor : 'white'
  },
  containerHe: {
    flex: 1,
    flexDirection: "row"
  },
  containerDe: {
    flex: 14,
    flexDirection: "column"
  },
  red: {
    flex: 0.4,
    paddingHorizontal: 18,
    paddingVertical: 8
  },
  iRed: {
    flex: 1,
    backgroundColor: "red"
  },
  ThongTin: {
    flex: 18
  },
  txtThongTin: {
    color: "#1676C1",
    marginTop: 8,
    fontSize: 16
  },
  line: {
    flex: 10
  },
  txtLine: {
    borderBottomWidth: 1,
    borderColor: "#DBDBDB",
    marginLeft: 10,
    marginHorizontal: 15
  },
  BatBuoc: {
    flex: 10
  },
  txtBatBuoc: {
    color: "#1676C1",
    marginTop: 12,
    fontSize: 11,
    textAlign: "center"
  },
  line_txt: { borderBottomWidth: 1, flex: 1, borderBottomColor: "#DCDCDC" },
  txt_line_show: {
    borderBottomWidth: 1,
    flex: 15,
    borderBottomColor: "#DCDCDC",
    marginHorizontal: 5,
    marginBottom: 3
  },
  textStyleCheck :{color : '#959595' , fontWeight : 'normal'  , fontSize : 12 },
  View_Title : {flex : .4 , paddingLeft : 10 , marginLeft : 5} ,
  styleInput_ :{ borderWidth : 1 , borderColor : '#D8D8D8' , borderRadius : 5 , padding : 10},
  btn_save :{flexDirection : 'row' , backgroundColor : 'red' , borderWidth : 1 , borderColor : '#D8D8D8' , padding : 5  , borderRadius : 5} ,
  btn_xoa :{flexDirection : 'row' , backgroundColor : '#FAFAFA' , borderWidth : 1 , borderColor : '#D8D8D8' , padding : 5  , borderRadius : 5},
  ctn_btn : {flex : 1 , flexDirection : 'row' , justifyContent : 'space-around'},
});
