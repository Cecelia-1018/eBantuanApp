// Normal Import
import React, { Component } from 'react';
import {
  Modal, View, Text, Image,
  StyleSheet, ScrollView, Linking,
  TouchableOpacity, Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';
import { LineChart, BarChart, ProgressChart } from "react-native-chart-kit";
// import ReactNativeFusionCharts from "react-native-fusioncharts";
// import Modal from "react-native-modal";

// Data Import
import * as dummies from './assets/dummy'
import * as constants from './assets/constant'
import firestore from '@react-native-firebase/firestore';

// Constant Declaration
const Donor = dummies.Donor;
var DonorCount = dummies.DonorCount;
var totalDonation = dummies.totalDonation;
var totalDispersion = dummies.totalDispersion;
var DonorRetention = dummies.DonorRetention;
var uniqueDonorCount = dummies.uniqueDonorCount;
const Recipient = dummies.Recipient;
var RecipientCount = dummies.RecipientCount;
const Dispersion = dummies.Dispersion;
const statistic = dummies.statistic;
const categorydata = dummies.categorydata;
const statedata = dummies.statedata;
const width = constants.width;
const height = constants.height;
const dashboardPartA = constants.dashboardPartA;
const dashboardPartB = constants.dashboardPartB;
const dashboardPartB_card_h = constants.dashboardPartB_card_h;
const dashboardPartB_card_w = constants.dashboardPartB_card_w;
const chart_h = constants.chart_h;
const chart_w = constants.chart_w;
const chartConfig_1 = constants.chartConfig_1;
const chartConfig_2 = constants.chartConfig_2;
const chartConfig_3 = constants.chartConfig_3;
const dashboard_head_1 = constants.dashboard_head_1
const card_title_1 = constants.card_title_1
const card_title_2 = constants.card_title_2
const card_title_3 = constants.card_title_3
const card_title_4 = constants.card_title_4
const update_by = constants.update_by
const dashboard_head_2 = constants.dashboard_head_2
const title_analysis_1 = constants.title_analysis_1
const title_analysis_2 = constants.title_analysis_2
const title_analysis_3a = constants.title_analysis_3a
const title_analysis_3b = constants.title_analysis_3b
const end_of_analysis = constants.end_of_analysis
const total_donation = constants.total_donation
const total_dispersion = constants.total_dispersion
const jkm_misi = constants.jkm_misi
const wlc_msg = constants.wlc_msg
const close_msg = constants.close_msg

// Extra Screen/Class/Function Constructor
class TestScreen extends Component {
  // Just an idiot constructor, can do nothing

}

// Actual Implementation
class DashboardScreen extends Component {
  state = {
    modalVisible: true,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  };
  SampleFunction = () => {
    Alert.alert("Service Not Available For Current Version");
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View>
        <View>
          <Modal
            animationType="fade" // slide or fade
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.modalContainer}></View>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{wlc_msg}</Text>
                <Button
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => this.setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>{close_msg}</Text>
                </Button>
              </View>
            </View>
            <View style={styles.modalContainer}></View>
          </Modal>
        </View>

        <View style={styles.container}>
          <LinearGradient
            colors={['#0072ff', '#00c6ff']}
            style={styles.dashboardcontentA}
            start={{ x: 0, y: 0 }}>
            <Text style={styles.header_1}>{dashboard_head_1}</Text>
            <Text style={styles.Text1}>{jkm_misi}</Text>
            <ScrollView
              fadingEdgeLength={60}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View backgroundColor="blue" style={styles.dashboardA_Card} >
                <TouchableOpacity activeOpacity={0.9}>
                  <Text style={styles.dashboardA_Card_TextHeader}>{card_title_1}</Text>
                  <Text style={styles.dashboardA_Card_Text1}>{uniqueDonorCount}</Text>
                </TouchableOpacity>
              </View>
              <View backgroundColor="red" style={styles.dashboardA_Card}>
                <TouchableOpacity activeOpacity={0.9}>
                  <Text style={styles.dashboardA_Card_TextHeader}>{card_title_2}</Text>
                  <Text style={styles.dashboardA_Card_Text1}>{DonorRetention} %</Text>
                </TouchableOpacity>
              </View>
              <View backgroundColor="#52c234" style={styles.dashboardA_Card}>
                <TouchableOpacity activeOpacity={0.9}>

                  <Text style={styles.dashboardA_Card_TextHeader}>{card_title_3}</Text>
                  <Text style={styles.dashboardA_Card_Text1}>{RecipientCount}</Text>
                </TouchableOpacity></View>
              <View backgroundColor="orange" style={styles.dashboardA_Card}>
                <TouchableOpacity activeOpacity={0.9}>

                  <Text
                    style={styles.dashboardA_Card_TextHeader}
                    onPress={() => Linking.openURL('https://www.jkm.gov.my/jkm/index.php')}>
                    {card_title_4}
                  </Text>
                  <Text style={styles.dashboardA_Card_Text1}
                    onPress={() => Linking.openURL('https://www.jkm.gov.my/jkm/index.php')}>
                    ➤
                  </Text></TouchableOpacity>
              </View>
            </ScrollView>
          </LinearGradient>

          <View style={styles.dashboardcontentB}>
            <Text style={styles.header_2}>{dashboard_head_2}</Text>

            <ScrollView
              fadingEdgeLength={60}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              minimumZoomScale={1}
              maximumZoomScale={5}
            >
              <View style={styles.dashboardB_Card}>
                <Text style={styles.dashboardB_Card_TextHeader}>{title_analysis_1}</Text>
                <Text style={styles.dashboardB_Card_Text1}>{update_by}{new Date().toDateString()}</Text>
                <View>
                  <LineChart
                    data={statistic}
                    width={chart_w}
                    height={chart_h * 0.80}
                    yAxisInterval={1}
                    yAxisLabel={"RM"}
                    chartConfig={chartConfig_1}
                    bezier
                    style={styles.chart}
                  />
                  <Text style={styles.dashboardB_Card_Text2}>{total_donation}{totalDonation}</Text>
                  <Text style={styles.dashboardB_Card_Text2}>{total_dispersion}{totalDispersion}</Text>
                </View>
              </View>
              <View style={styles.dashboardB_Card}>
                <View>
                  <Text style={styles.dashboardB_Card_TextHeader}>{title_analysis_2}</Text>
                  <Text style={styles.dashboardB_Card_Text1}>{update_by}{new Date().toDateString()}</Text>
                  <ProgressChart
                    marginTop={10}
                    data={categorydata}
                    width={chart_w}
                    height={chart_h}
                    strokeWidth={12}
                    radius={35}
                    chartConfig={chartConfig_2}
                    hideLegend={false}
                  />
                </View>
              </View>

              <View style={styles.dashboardB_Card}>
                <View>
                  <Text style={styles.dashboardB_Card_TextHeader}>{title_analysis_3a}</Text>
                  <Text style={styles.dashboardB_Card_TextHeader}>{title_analysis_3b}</Text>
                  <Text style={styles.dashboardB_Card_Text1}>{update_by}{new Date().toDateString()}</Text>
                  <BarChart
                    data={statedata}
                    width={chart_w * 0.95}
                    height={chart_h}
                    yAxisSuffix={"$"}
                    chartConfig={chartConfig_3}
                    verticalLabelRotation={30}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.endOfScrolltxt}>{end_of_analysis}</Text>
              </View>

              <View style={styles.dashboardB_Card}>
                <View>
                  <Text style={styles.dashboardB_Card_TextHeader}>For Testing</Text>
                  <Button
                    mode="contained"
                    color="#045de9"
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate(TestScreen)}
                  >
                    Navigate To Test Screen
                  </Button>

                  <Text style={styles.textStyle}> A break Line </Text>

                  <Button
                    icon={require('./assets/share_love.png')}
                    mode="contained"
                    style={styles.button}
                    onPress={() => this.setModalVisible(true)}
                  >
                    Pop Up Modal
                  </Button>

                  <Text style={styles.textStyle}> A break Line </Text>

                  <TouchableOpacity mode="contained" style={styles.stackedButtonStyle} activeOpacity={0.5}>
                    <Image
                      style={styles.ImageIconStyle}
                      source={require('./assets/share_love_icon.png')}
                      mode="contained"
                      color="#e4f2f7"
                    />
                    <View style={styles.SeparatorLine} />
                    <Text style={styles.IconTextStyle}>Visit JKM Official Portal</Text>
                  </TouchableOpacity>

                  <Text style={styles.textStyle}> A break Line </Text>

                </View>
              </View>

            </ScrollView>
          </View>
        </View>


        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={this.SampleFunction}
            style={styles.TouchableOpacityStyle}
          >
            <Image
              style={styles.FloatingButtonStyle}
              source={require('./assets/share_love_icon.png')}
            // source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png' }}
            />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  dashboardcontentA: {
    width,
    height: dashboardPartA,
    justifyContent: 'center',
    padding: 10,
  },
  dashboardcontentB: {
    marginTop: 5,
    marginBottom: 5,
    width,
    height: dashboardPartB
  },
  dashboardA_Card: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    flex: 1,
    width: 155,
    height: 100,
    resizeMode: "contain",
    opacity: 1,
    borderRadius: 15,
    alignContent: "center",
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  dashboardB_Card: {
    marginTop: 6,
    marginBottom: 6,
    opacity: 1,
    width: dashboardPartB_card_w,
    height: dashboardPartB_card_h,
    marginLeft: 15,
    resizeMode: "contain",
    alignContent: "center",
    backgroundColor: "#FFF",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  dashboardA_Card_TextHeader: {
    marginTop: 5,
    color: "white",
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  dashboardA_Card_Text1: {
    marginTop: 5,
    color: "white",
    fontSize: 16,
    lineHeight: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  dashboardB_Card_TextHeader: {
    marginTop: 5,
    color: "black",
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  dashboardB_Card_Text1: {
    marginBottom: 10,
    color: "black",
    fontSize: 14,
    lineHeight: 30,
    textAlign: "center"
  },
  dashboardB_Card_Text2: {
    marginRight: 15,
    textAlign: "right"
  },
  chart: {
    margin: 10,
    borderRadius: 16,
    textAlign: "center",
    alignContent: "center",
    justifyContent: 'center'
  },
  header_1: {
    marginLeft: 15,
    color: "white",
    fontSize: 26,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "left",
  },
  Text1: {
    marginLeft: 15,
    marginTop: 0,
    marginBottom: 10,
    color: "white",
    fontSize: 14,
    fontFamily: 'sans-serif-condensed'
  },
  header_2: {
    marginLeft: 15,
    color: "black",
    fontSize: 20,
    lineHeight: 40,
    fontWeight: "bold",
    textAlign: "left",
  },
  endOfScrolltxt: {
    marginBottom: 25,
    color: "grey",
    fontSize: 16,
    lineHeight: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    margin:0,
    flex: 1,
    opacity: 0.4,
    width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFAFA",
  },
  centeredView: {
    margin:0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#FFFAFA",
    borderColor: "grey",
    borderRadius: 30,
    borderWidth: 1,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 16
    },
    shadowOpacity: 0.75,
    shadowRadius: 40,
    elevation: 5
  },
  button: {
    width: 300,
    borderRadius: 30,
    marginLeft: 20,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize: 20,
    marginBottom: 15,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  stackedButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: .5,
    borderColor: '#fff',
    height: 60,
    width: 300,
    borderRadius: 5,
    marginLeft: 20,
    marginTop: 10,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 60,
    width: 60,
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 70
  },
  IconTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 20,
  },
  TouchableOpacityStyle: {
    // position: 'absolute',
    top: dashboardPartB_card_h * 0.02,
    left: dashboardPartB_card_w * 0.9,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    zIndex: 7
  }
});

export default DashboardScreen;
