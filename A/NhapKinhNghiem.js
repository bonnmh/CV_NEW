import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Picker
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
export default class NhapKinhNghiem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisiable: false,
      chosenDate: "",
      isVisiabled: false,
      chosenDated: "",
      id_KinhNghiem: 1,
      CongTy: "",
      ChucDanh: "",
      LoaiTien: "",
      MucLuong: "",
      MoTaCV: "",
      ThanhTich: "" ,
      TrangThai: true ,
      TrangThai_Xoa : 0 ,
      ArrTMP : {
        chosenDate: "",
        chosenDated: "",
        id_KinhNghiem: 1,
        CongTy: "",
        ChucDanh: "",
        LoaiTien: "",
        MucLuong: "",
        MoTaCV: "",
        ThanhTich: "" ,
        TrangThai: true ,
        TrangThai_Xoa : 0 ,
      }
    };
   
    
  }
  handlePicker = datetime => {
    this.setState({
      isVisiable: false,
      chosenDate: moment(datetime).format("MMMM, YYYY")
    });
  };
  showPicker = () => {
    this.setState({
      isVisiable: true
    });
  };

  hidePicker = () => {
    this.setState({
      isVisiable: false
    });
  };

  showPickered = () => {
    this.setState({
      isVisiabled: true
    });
  };

  handlePickered = datetime => {
    this.setState({
      isVisiabled: false,
      chosenDated: moment(datetime).format("MMMM, YYYY")
    });
  };
  hidePickered = () => {
    this.setState({
      isVisiabled: false
    });
  };
  componentDidMount(){
    this.setState({
      chosenDate: this.props.TMP.ThoiGian_Tu,
      chosenDated: this.props.TMP.ThoiGian_Den,
      id_KinhNghiem:this.props.TMP.id_KinhNghiem,
      CongTy: this.props.TMP.CongTy,
      ChucDanh: this.props.TMP.ChucDanh,
      LoaiTien: this.props.TMP.LoaiTien,
      MucLuong: this.props.TMP.MucLuong,
      MoTaCV: this.props.TMP.MoTaCV,
      ThanhTich: this.props.TMP.ThanhTich,
      TrangThai : this.props.TMP.TrangThai , 
      TrangThai_Xoa : this.props.TMP.TrangThai_Xoa
    })
  }
  
  render() {
    return (
      <View style={[styles.container, { flexDirection: "column" }]}>
      <View style = {{flex : 0}} onPress = {this.props.TMP}></View>
        <View style={styles.container}>
          <View style={styles.flex_5_column}>
            <View style={styles.containerTitle}>
              <Text style={{ marginRight: 5 }}>Công ty</Text>
              <Text style = {{color : "red"}} >*</Text>
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <TextInput style={[styles.borderHeight_30, { textAlignVertical: "auto" ,color : '#757575' }]}>{this.state.CongTy}</TextInput>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.flex_5_column}>
            <View style={styles.containerTitle}>
              <Text style={{ marginRight: 5 }}>Chức danh</Text>
              <Text style = {{color : "red"}} >*</Text>
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <TextInput style={[styles.borderHeight_30, { color : '#757575'}]} >{this.state.ChucDanh}</TextInput>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.flex_5_column}>
            <View style={styles.containerTitle}>
              <Text style={{ marginRight: 5 }}>Thời gian làm việc</Text>
              <Text style = {{color : "red"}} >*</Text>
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <View style={{ height: 30, flexDirection: "row", flex: 1 }}>
              <TouchableOpacity
                onPress={this.showPicker}
                style={{ flex: 2, marginTop: 8 }}
              >
                <Text style={styles.btnTuDen}>từ</Text>
              </TouchableOpacity>
              <Text style={{ flex: 0.5 }} />
              <DateTimePicker
                isVisible={this.state.isVisiable}
                onConfirm={this.handlePicker}
                onCancel={this.hidePicker}
                mode={"date"}
                datePickerModeAndroid={"spinner"}
              />
              <Text style={styles.txtTuDen}>{this.state.chosenDate}</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.flex_5_column}>
            <View style={styles.containerTitle}>
              <Text style={{ marginRight: 5 }} />
              <Text style = {{color : "red"}} >*</Text>
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <View style={{ height: 30, flexDirection: "row", flex: 1 }}>
              <TouchableOpacity
                onPress={this.showPickered}
                style={{ flex: 2, marginTop: 8 }}
              >
                <Text style={styles.btnTuDen}>đến</Text>
              </TouchableOpacity>
              <Text style={{ flex: 0.5 }} />
              <DateTimePicker
                isVisible={this.state.isVisiabled}
                onConfirm={this.handlePickered}
                onCancel={this.hidePickered}
                mode={"date"}
                datePickerModeAndroid={"spinner"}
              />
              <Text style={styles.txtTuDen}>{this.state.chosenDated}</Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.flex_5_column}>
            <View style={styles.containerTitle}>
              <Text style={{ marginRight: 5 }}>Mức lương</Text>
            </View>
          </View>

          <View style={{ flex: 7, flexDirection: "row" }}>
            <View
              style={[styles.borderHeight_30, { borderRadius: 5, flex: 4 }]}
            >
              <Picker
                selectedValue={this.state.LoaiTien}
                onValueChange={itemValue => {
                  this.setState({
                    LoaiTien: itemValue
                  });
                  // alert(itemValue);
                }}
                style={{ flex: 1, color: "#757575", padding: 4 }}
                itemStyle={{ color: "white" }}
              >
                <Picker.Item label="VND" value="VND" />
                <Picker.Item label="$" value="$" />
              </Picker>
            </View>
            <View style={{ flex: 0.5 }} />
            <TextInput
              style={[styles.borderHeight_30, { flex: 9  ,color : '#757575'}]}
              dataDetectorTypes={"phoneNumber"}
            >{this.state.MucLuong}</TextInput>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.flex_5_column}>
            <View style={styles.containerTitle}>
              <Text style={{ marginRight: 5 }}>Mô tả công việc</Text>
              <Text style = {{color : "red"}} >*</Text>
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <TextInput style={styles.border_height_50} >{this.state.MoTaCV}</TextInput>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.flex_5_column}>
            <View style={styles.containerTitle}>
              <Text style={{ marginRight: 5 }}>Thành tích</Text>
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <TextInput style={styles.border_height_50} >{this.state.ThanhTich}</TextInput>
          </View>
        </View>

        <View
          style={[
            styles.container,
            { justifyContent: "space-around", marginTop: 20 }
          ]}
        >
          <View />
          
          {this.state.TrangThai 
          ? <TouchableOpacity>
              <View style={[styles.btnSua, { backgroundColor: "red" }]}>
                <Icon name="save" size={21} color="#fff" />
                <Text style={{ color: "#fff", marginLeft: 2 }}>Lưu</Text>
              </View>
            </TouchableOpacity> : null}
         
          <TouchableOpacity onPress ={()=> this.props.onPress(this.state.id_KinhNghiem)} > 
            <View style={[styles.btnSua, { marginLeft: 5 }]}>
              <Icon name="trash" size={21} color="#929292" />
              <Text style={{ color: "#929292", marginLeft: 2 }}> Xóa</Text>
            </View>
          </TouchableOpacity>

          <View />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 3
  },
  btnSua: {
    borderColor: "#DCDCDC",
    borderWidth: 1,
    paddingHorizontal: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 2,
    padding: 3
  },
  flex_5_column: { flex: 5, flexDirection: "column" },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 5
  },
  borderHeight_30: { borderWidth: 1, borderColor: "#DCDCDC" },
  border_height_50: {
    borderWidth: 1,
    borderColor: "#DCDCDC",
    marginTop: 5 ,color : '#757575'
  },
  btnTuDen: {
    fontSize: 10,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    textAlign: "center",
    borderRadius: 5,
    textAlignVertical: "center"
  },
  txtTuDen: {
    flex: 10,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    textAlignVertical: "center",
    paddingLeft: 10
  }
});
