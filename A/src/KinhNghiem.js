import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Modal from "react-native-modal";
import NhapKinhNghiem from "../src/NhapKinhNghiem.js";
import ItemKinhNghiem from "../src/ItemKinhNghiem.js";

let screen = Dimensions.get("window");
export default class KinhNghiem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_NhapThongTin: false,
      isModalVisible: false,
      id: 0,
      ArrTMP: null,
      ArrKinhNghiem: [
        {
          id_KinhNghiem: 0,
          CongTy: "",
          ChucDanh: "",
          ThoiGian_Tu: "",
          ThoiGian_Den: "",
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
        },
        {
          id_KinhNghiem: 1,
          CongTy: "Geso",
          ChucDanh: "Developer App",
          ThoiGian_Tu: "March, 2018",
          ThoiGian_Den: "March, 2020",
          LoaiTien: "$",
          MucLuong: "1000000",
          MoTaCV: "OK OK OK OK OK OK OK",
          ThanhTich: "Chưa đạt được gì ~~",
          TrangThai: true,
          TrangThai_Xoa: 0,
          ThangDau: "tháng 1",
          NamDau: "2018",
          ThangSau: "tháng 2",
          NamSau: "3000"
        },
        {
          id_KinhNghiem: 2,
          CongTy: "Geso",
          ChucDanh: "Developer Ios",
          ThoiGian_Tu: "March, 2000",
          ThoiGian_Den: "March, 2020",
          LoaiTien: "$",
          MucLuong: "10",
          MoTaCV: "OK OK OK OK OK OK OK",
          ThanhTich: "Chưa đạt được gì ~~",
          TrangThai: true,
          TrangThai_Xoa: 0,
          ThangDau: "tháng 1",
          NamDau: "2018",
          ThangSau: "tháng 2",
          NamSau: "3000"
        },
        {
          id_KinhNghiem: 3,
          CongTy: "Geso",
          ChucDanh: "Developer Ios",
          ThoiGian_Tu: "March, 2000",
          ThoiGian_Den: "March, 2020",
          LoaiTien: "$",
          MucLuong: "10",
          MoTaCV: "FFFFFFFFFFFFFFFF",
          ThanhTich: "Chưa đạt được gì ~~",
          TrangThai: true,
          TrangThai_Xoa: 0,
          ThangDau: "tháng 1",
          NamDau: "2018",
          ThangSau: "tháng 2",
          NamSau: "3000"
        },
        {
          id_KinhNghiem: 4,
          CongTy: "Geso",
          ChucDanh: "Developer Ios",
          ThoiGian_Tu: "March, 2000",
          ThoiGian_Den: "March, 2020",
          LoaiTien: "$",
          MucLuong: "10",
          MoTaCV: "DDDDDDDDDDDDDd",
          ThanhTich: "Chưa đạt được gì ~~",
          TrangThai: true,
          TrangThai_Xoa: 0,
          ThangDau: "tháng 1",
          NamDau: "2018",
          ThangSau: "tháng 2",
          NamSau: "3000"
        },
      ]
    };
  }
  OnToggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  onPressFull = id => {
    this.state.ArrKinhNghiem[id].TrangThai = false;
    this.setState({ id: id, ArrKinhNghiem: this.state.ArrKinhNghiem });
    this.OnToggleModal();
  };
  onPressSua = id => {
    this.OnToggleModal();
    this.setState({ id: id, TrangThai_Xoa: 2 });
  };

  onPressXoa = id => {
    let i = this.state.ArrKinhNghiem.indexOf(this.state.ArrKinhNghiem[id]);
    this.state.ArrKinhNghiem.splice(i, 1);
    this.setState({
      ArrKinhNghiem: this.state.ArrKinhNghiem
    });
  };
  HideBtnSave = () => {
    this.state.ArrKinhNghiem[this.state.id].TrangThai = true;
    this.setState({ ArrKinhNghiem: this.state.ArrKinhNghiem, id: 0 });
  };

  onPressXoaNhap = (id, trangthai) => {
    console.log(trangthai);
    console.log(id);
    if (trangthai == 1) {
      this.OnToggleModal();
      let i = this.state.ArrKinhNghiem.indexOf(this.state.ArrKinhNghiem[id]);
      this.state.ArrKinhNghiem.splice(i, 1);
      this.setState({
        ArrKinhNghiem: this.state.ArrKinhNghiem
      });
    } else {
      console.log(this.state.ArrTMP);
      this.state.ArrTMP = this.state.ArrKinhNghiem[0];
      this.setState({
        ArrTMP: this.state.ArrTMP
      });
      console.log(this.state.ArrTMP);
    }
  };

  render() {
    if (this.state.id == 0) {
      this.state.ArrTMP = this.state.ArrKinhNghiem[0];
    } else {
      this.state.ArrTMP = this.state.ArrKinhNghiem[this.state.id];
    }
    return (
      <View style={styles.container}>
        <View style={styles.containerHe}>
          <View style={styles.red}>
            <View style={styles.iRed} />
          </View>
          <View style={styles.ThongTin}>
            <Text style={styles.txtThongTin}>Kinh nghiệm làm việc</Text>
          </View>
          <View style={styles.BatBuoc}>
            <Text style={styles.txtBatBuoc}>(bắt buộc)</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.txtLine} />
          </View>
        </View>
        <View style={styles.containerDe}>
          <View style={{ flex: 2, padding: 5 }}>
            <Text style={{ flex: 10 }}>
              Hãy liệt kê những công việc và nhiệm vụ mà bạn đã từng đảm nhận và
              thực hiện . Chú ý liệt kê những công việc từ thời gian gần đây
              nhất về trước
            </Text>
            <Text style={styles.line_txt} />
          </View>

          <View style={{ flex: 13 }}>
            <FlatList
              data={
                this.state.ArrKinhNghiem.filter(
                  (x = x => x.id_KinhNghiem > 0)
                ) || []
              }
              renderItem={({ item }) => (
                <ItemKinhNghiem
                  ItemKinhNghiem={item}
                  onPressFull={this.onPressFull}
                  onPressSua={this.onPressSua}
                  onPressXoa={this.onPressXoa}
                />
              )}
              keyExtractor={item => {
                item.id_KinhNghiem;
              }}
            />
            <View style={{ flex: 0.2, flexDirection: "row" }} />

            <View style={styles.D}>
              <TouchableOpacity onPress={this.OnToggleModal}>
                <Text style={styles.A}> + </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <Modal
            isVisible={this.state.isModalVisible}
            animationInTiming={500}
            onBackdropPress={this.OnToggleModal}
            style={styles.C}
            onModalHide={this.HideBtnSave}
          >
            <View style={styles.E}>
              <Text style={styles.B}>Nhập thông tin kinh nghiệm</Text>
            </View>

            <View style={styles.G}>
              <NhapKinhNghiem
                style={{ flex: 3 }}
                TMP={this.state.ArrTMP}
               
                onPressXoaNhap={this.onPressXoaNhap}
              />
            </View>

            <View style={{ flex: 1 }}>
              <View style={{ backgroundColor: "white", flex: 1 }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onPress={this.OnToggleModal}
                >
                  <Text style={{ fontSize: 20 }}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
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
  A: {
    height: 40,
    width: 40,
    textAlign: "center",
    textAlignVertical: "center",
    color: "white"
  },
  B: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 17,
    flex: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#DCDCDC",
  },
  C: {
    borderRadius: 10,
    width: screen.width - 30,
    height: screen.height - 300,
    borderWidth: 1,
    overflow: "hidden",
    borderColor: "#DCDCDC"
  },
  D: {
    borderWidth: 1,
    position: "absolute",
    bottom: 0,
    alignSelf: "flex-end",
    borderRadius: 100,
    overflow: "hidden",
    borderColor: "#DCDCDC",
    margin: 10,
    width: 40,
    height: 40,
    backgroundColor: "red"
  },
  E: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  G: {
    flex: 10,
    backgroundColor: "white",
    borderBottomWidth: 1,
    paddingTop: 20,
    borderBottomColor: "#DCDCDC"
  }
});
