// Normal Import
import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, Linking, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LineChart, BarChart, PieChart, ProgressChart, } from "react-native-chart-kit";
//import FusionCharts from "react-native-fusioncharts";

// Data Import
import * as dummies from './assets/dummy'
import * as constants from './assets/constant'
import firestore from '@react-native-firebase/firestore';

// Constant Declaration
const Donor = dummies.Donor;
var DonorCount = dummies.DonorCount;
var totalDonation = dummies.totalDonation;
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
const bannerheight = constants.bannerheight;
const dashboardPartA = constants.dashboardPartA;
const dashboardPartB = constants.dashboardPartB;
const dashboardPartB_card_h = constants.dashboardPartB_card_h;
const dashboardPartB_card_w = constants.dashboardPartB_card_w;
const chart_h = constants.chart_h;
const chart_w = constants.chart_w;
const chartConfig_1 = constants.chartConfig_1;
const chartConfig_2 = constants.chartConfig_2;
const chartConfig_3 = constants.chartConfig_3;

// Actual Implementation
class DashboardScreen extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#0072ff', '#00c6ff']}
          style={styles.dashboardcontentA}
          start={{ x: 0, y: 0 }}>
          <Text style={styles.header_1}>JKM DASHBOARD</Text>
          <Text style={styles.Text1}>Last updated: {new Date().toDateString()}</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View backgroundColor="blue" style={styles.dashboardA_Card}>
              <View>
                <Text style={styles.dashboardA_Card_TextHeader}>Total Donor</Text>
                <Text style={styles.dashboardA_Card_Text1}>{uniqueDonorCount}</Text>
              </View>
            </View>
            <View backgroundColor="red" style={styles.dashboardA_Card}>
              <Text style={styles.dashboardA_Card_TextHeader}>Donor Retention</Text>
              <Text style={styles.dashboardA_Card_Text1}>{DonorRetention} %</Text>
            </View>
            <View backgroundColor="#52c234" style={styles.dashboardA_Card}>
              <Text style={styles.dashboardA_Card_TextHeader}>Total Receipt</Text>
              <Text style={styles.dashboardA_Card_Text1}>{RecipientCount}</Text>
            </View>
            <View backgroundColor="orange" style={styles.dashboardA_Card}>
              <Text
                style={styles.dashboardA_Card_TextHeader}
                onPress={() => Linking.openURL('https://www.jkm.gov.my/jkm/index.php')}>
                More details
              </Text>
              <Text style={styles.dashboardA_Card_Text1}
                onPress={() => Linking.openURL('https://www.jkm.gov.my/jkm/index.php')}>
                ➤
              </Text>
            </View>
          </ScrollView>
        </LinearGradient>

        <View style={styles.dashboardcontentB}>
          <Text style={styles.header_2}>DONATION ANALYSIS</Text>

          <ScrollView
            horizontal={false}
            showsVerticalScrollIndicator={false}
            minimumZoomScale={1}
            maximumZoomScale={5}
          >
            <View style={styles.dashboardB_Card}>
              <Text style={styles.dashboardB_Card_TextHeader}>Donation Statistic</Text>
              <Text style={styles.dashboardB_Card_Text1}>Last updated: {new Date().toDateString()}</Text>
              <View>
                <LineChart
                  data={statistic}
                  width={chart_w}
                  height={chart_h*0.95}
                  yAxisInterval={1}
                  chartConfig={chartConfig_1}
                  bezier
                  style={styles.chart}
                />
              </View>
            </View>
            <View style={styles.dashboardB_Card}>
              <View>
                <Text style={styles.dashboardB_Card_TextHeader}>Donation Dispersion By Aspect</Text>
                <Text style={styles.dashboardB_Card_Text1}>Last updated: {new Date().toDateString()}</Text>
                <ProgressChart
                  marginTop={10}
                  data={categorydata}
                  width={chart_w}
                  height={chart_h}
                  strokeWidth={12}
                  radius={20}
                  chartConfig={chartConfig_2}
                  hideLegend={false}
                />
                <Text style={styles.dashboardB_Card_Text2}>Total Donation: RM{totalDonation}</Text>
              </View>
            </View>

            <View style={styles.dashboardB_Card}>
              <View>
                <Text style={styles.dashboardB_Card_TextHeader}>Donation Dispersion By State</Text>
                <Text style={styles.dashboardB_Card_TextHeader}>($ in thousands - All figures are rounded)</Text>
                <Text style={styles.dashboardB_Card_Text1}>Last updated: {new Date().toDateString()}</Text>
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
              <Text style={styles.endOfScrolltxt}>~ No More Analysis ~</Text>
            </View>

            {/* <View style={styles.dashboardB_Card}>
              <View>
                <Text style={styles.dashboardB_Card_TextHeader}>For Testing</Text>
                <Text style={styles.dashboardB_Card_Text1}>Last updated: {new Date().toDateString()}</Text>
                <FusionCharts
                  type={this.fusionstate.type}
                  width={this.fusionstate.width}
                  height={this.fusionstate.height}
                  dataFormat={this.fusionstate.dataFormat}
                  dataSource={this.fusionstate.dataSource}
                  libraryPath={this.libraryPath} // set the libraryPath property
                />
              </View>
            </View> */}

          </ScrollView>
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
    marginTop: 5,
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
    fontSize: 15
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
  }
});

export default DashboardScreen;
