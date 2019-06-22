import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import { Item } from "native-base";

import Picker from "react-native-picker";
const defaultState = {
  isVisiable: false,
  chosenDate: "",
  isVisiabled: false,
  chosenDated: "",
  id_KinhNghiem: 1,
  CongTy: "Geso",
  ChucDanh: "",
  LoaiTien: "$",
  MucLuong: "",
  MoTaCV: "",
  ThanhTich: "",
  TrangThai: true,
  TrangThai_Xoa: 0,
  ThangDau: "",
  NamDau: "",
  ThangSau: "",
  NamSau: ""
};

export default class NhapKinhNghiem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisiable: false,
      chosenDate: "",
      isVisiabled: false,
      chosenDated: "",
      id_KinhNghiem: 1,
      CongTy: "Geso",
      ChucDanh: "",
      LoaiTien: "$",
      MucLuong: "",
      MoTaCV: "",
      ThanhTich: "",
      TrangThai: true,
      TrangThai_Xoa: 0,
      ThangDau: "",
      NamDau: "",
      ThangSau: "",
      NamSau: ""
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
  componentDidMount() {
    console.log("xyz", this.props);
    console.log(this.props.TMP.TrangThai);
    this.setState({
      chosenDate: this.props.TMP.ThoiGian_Tu,
      chosenDated: this.props.TMP.ThoiGian_Den,
      id_KinhNghiem: this.props.TMP.id_KinhNghiem,
      CongTy: this.props.TMP.CongTy,
      ChucDanh: this.props.TMP.ChucDanh,
      LoaiTien: this.props.TMP.LoaiTien,
      MucLuong: this.props.TMP.MucLuong,
      MoTaCV: this.props.TMP.MoTaCV,
      ThanhTich: this.props.TMP.ThanhTich,
      TrangThai: this.props.TMP.TrangThai,
      ThangDau: this.props.TMP.ThangDau,
      NamDau: this.props.TMP.NamDau,
      ThangSau: this.props.TMP.ThangSau,
      NamSau: this.props.TMP.NamSau
    });
  }

  onPressXoaNhap = () => {
    const TrangThai = this.props.TMP.TrangThai;
    if (!TrangThai) {
      this.props.onPressXoaNhap(this.state.id_KinhNghiem, 1);
    } else {
      this.setState(defaultState);
    }
  };
  show() {
    let data = ["$", "VND"];
    Picker.init({
      pickerData : data ,
      pickerFontColor: [255, 0, 0, 1],
      selectedValue: ['VND'],
      pickerConfirmBtnText: "Chọn",
      pickerCancelBtnText: "Thoát",
      pickerTitleText: "Loại tiền",
      pickerFontSize: 15,
      pickerFontFamily: "normal",
      pickerToolBarFontSize: 15,
      onPickerConfirm: data => {
        this.setState({ LoaiTien: data });
      },
      onPickerCancel: data => {
        console.log(data);
      },
      onPickerSelect: data => {
        console.log(data);
      }
    });
    Picker.show();
  }


  _showTimePicker() {
    let years = [];
    let  months = [];

    for(let i=1;i<51;i++){
        years.push(i+1980);
    }
    for(let i=1;i<13;i++){
        months.push(i);
    }
    let pickerData = [months,years];
    Picker.init({
        pickerData : pickerData ,
        pickerFontColor: [255, 0, 0, 1],
        selectedValue: [6 , 1998],
        pickerConfirmBtnText: "Chọn",
        pickerCancelBtnText: "Thoát",
        pickerTitleText: "Từ ngày",
        pickerFontSize: 15,
        pickerFontFamily: "normal",
        pickerToolBarFontSize: 15,
        onPickerConfirm: pickedValue => {
            console.log('area', pickedValue[0]);
            this.setState({ ThangDau :'tháng ' + pickedValue[0] , NamDau : pickedValue[1]})
        },
        onPickerCancel: pickedValue => {
            console.log('area', pickedValue);
        },
    });
    Picker.show();
  }
  _showTimePicker_Sau() {
    let years = [];
    let  months = [];

    for(let i=1;i<51;i++){
        years.push(i+1980);
    }
    for(let i=1;i<13;i++){
        months.push(i);
    }
    let pickerData = [months,years];
    Picker.init({
        pickerData : pickerData ,
        pickerFontColor: [255, 0, 0, 1],
        selectedValue: [6 , 1998],
        pickerConfirmBtnText: "Chọn",
        pickerCancelBtnText: "Thoát",
        pickerTitleText: "Từ ngày",
        pickerFontSize: 15,
        pickerFontFamily: "normal",
        pickerToolBarFontSize: 15,
        onPickerConfirm: pickedValue => {
            console.log('area', pickedValue[0]);
            this.setState({ ThangSau :'tháng ' + pickedValue[0] , NamSau : pickedValue[1]})
        },
        onPickerCancel: pickedValue => {
            console.log('area', pickedValue);
        },
    });
    Picker.show();
  }

  render() {
    return (
      <View
        style={[styles.container, { flexDirection: "column" }]}
        TMP={this.props.TMP}
      >
        <View style={styles.container}>
          <View style={styles.flex_5_column}>
            <View style={styles.containerTitle}>
              <Text style={{ marginRight: 5 }}>Công ty</Text>
              <Text style={{ color: "red" }}>*</Text>
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <TextInput
              style={[
                styles.borderHeight_30,
                { textAlignVertical: "auto", color: "#757575" }
              ]}
              onChangeText={text => {
                this.setState({
                  CongTy: text
                });
              }}
            >
              {this.state.CongTy}
            </TextInput>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.flex_5_column}>
            <View style={styles.containerTitle}>
              <Text style={{ marginRight: 5 }}>Chức danh</Text>
              <Text style={{ color: "red" }}>*</Text>
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <TextInput
              style={[styles.borderHeight_30, { color: "#757575" }]}
              onChangeText={text => {
                this.setState({
                  ChucDanh: text
                });
              }}
            >
              {this.state.ChucDanh}
            </TextInput>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.flex_5_column}>
            <View style={styles.containerTitle}>
              <Text style={{ marginRight: 5 }}>Thời gian làm việc</Text>
              <Text style={{ color: "red" }}>*</Text>
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <View style={{ height: 30, flexDirection: "row", flex: 1 }}>
              <TouchableOpacity
                onPress={this.showPicker}
                style={{ flex: 2, marginTop: 8 }}
              >
                <TouchableOpacity onPress={this._showTimePicker.bind(this)}>
                  <Text style = {styles.btnTuDen}>từ</Text>
                </TouchableOpacity> 
              </TouchableOpacity>
              <Text style={{ flex: 0.5 }} />
              <View style = {{flex : 8 , flexDirection : 'row' }}>
                <Text style={styles.txtTuDen}>{this.state.ThangDau}</Text>
                <Text style={[styles.txtTuDen , {marginLeft : 5}]}>{this.state.NamDau}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.flex_5_column}>
            <View style={styles.containerTitle}>
              <Text style={{ marginRight: 5 }} />
              <Text style={{ color: "red" }}>*</Text>
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <View style={{ height: 30, flexDirection: "row", flex: 1 }}>
              <TouchableOpacity
                onPress={this.showPicker}
                style={{ flex: 2, marginTop: 8 }}
              >
                <TouchableOpacity onPress={this._showTimePicker_Sau.bind(this)}>
                  <Text style = {styles.btnTuDen}>đến</Text>
                </TouchableOpacity> 
              </TouchableOpacity>
              <Text style={{ flex: 0.5 }} />
              <View style = {{flex : 8 , flexDirection : 'row' }}>
                <Text style={styles.txtTuDen}>{this.state.ThangSau}</Text>
                <Text style={[styles.txtTuDen , {marginLeft : 5}]}>{this.state.NamSau}</Text>
              </View>
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
              <View style={ { borderRadius: 5, flex: 2,marginTop :10 }}>
                <TouchableOpacity style = {styles.btnTuDen} onPress={this.show.bind(this)}>
                  <Text style = {{fontSize : 10 , textAlign : 'center' }}>{this.state.LoaiTien}</Text> 
                </TouchableOpacity> 
              </View>
              <TextInput
                        style={[styles.borderHeight_30, { flex: 7, color: "#757575" , marginLeft :5  , marginTop : 3}]}
                        onChangeText={text => {
                          this.setState({
                            MucLuong: text
                          });
                        }}
                      >
                      {this.state.MucLuong}
                </TextInput>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.flex_5_column}>
            <View style={styles.containerTitle}>
              <Text style={{ marginRight: 5 }}>Mô tả công việc</Text>
              <Text style={{ color: "red" }}>*</Text>
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <TextInput
              style={styles.border_height_50}
              onChangeText={text => {
                this.setState({
                  MoTaCV: text
                });
              }}
            >
              {this.state.MoTaCV}
            </TextInput>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.flex_5_column}>
            <View style={styles.containerTitle}>
              <Text style={{ marginRight: 5 }}>Thành tích</Text>
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <TextInput
              style={styles.border_height_50}
              onChangeText={text => {
                this.setState({
                  ThanhTich: text
                });
              }}
            >
              {this.state.ThanhTich}
            </TextInput>
          </View>
        </View>

        <View
          style={[
            styles.container,
            { justifyContent: "space-around", marginTop: 20 }
          ]}
        >
          <View />

          {this.state.TrangThai ? (
            <TouchableOpacity>
              <View style={[styles.btnSua, { backgroundColor: "red" }]}>
                <Icon name="save" size={21} color="#fff" />
                <Text style={{ color: "#fff", marginLeft: 2 }}>Lưu</Text>
              </View>
            </TouchableOpacity>
          ) : null}

          <TouchableOpacity onPress={this.onPressXoaNhap}>
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
    marginTop: 5,
    color: "#757575"
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
    flex: 1,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    paddingLeft : 10 , 
    marginTop : 6 , 
    paddingVertical : 2
  }
});
{
  /* <Picker
                selectedValue={this.state.LoaiTien}
                onValueChange={itemValue => {
                  this.setState({
                    LoaiTien: itemValue
                  });
                  // alert(itemValue);
                }}
                style={{ flex: 1, color: "#757575", padding: 4 }}
              >
                <Picker.Item
                  label="VND"
                  value="VND"
                  itemStyle={{ color: "white", fontSize: 10 }}
                />
                <Picker.Item label="$" value="$" />
              </Picker> */
}
