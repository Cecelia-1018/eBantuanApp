/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, ScrollView, Dimensions, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import firestore from '@react-native-firebase/firestore';
import { black } from 'react-native-paper/lib/typescript/styles/colors';

const dashboardPartB_1 = { uri: "https://nonprofithub.org/wp-content/uploads/2018/11/blog-chart.png" }
const bannerimages = [
  "https://www.jkm.gov.my/jkm/uploads/images/home_slider/Banner-Helpdesk-Portal.png",
  "https://www.jkm.gov.my/jkm/uploads/images/home_slider/website-01.jpg",
  "https://www.jkm.gov.my/jkm/uploads/files/pro/GERAN%20TASKA%202022-01.png",
  "https://www.jkm.gov.my/jkm/uploads/files/info%20mydaftarOKU%20new-02.png",
  "https://www.jkm.gov.my/jkm/uploads/images/home_slider/Banner-Hari-Kerja-Sosial(1).png"
];
const { width } = Dimensions.get("window");
const height = width * 0.4;
const bannerheight = width * 0.28;
const dashboardPartA = width * 0.55;
const dashboardPartB = width * 1.25;
const dashboardPartB_card_h = dashboardPartB * 0.80;
const dashboardPartB_card_w = dashboardPartB * 0.74;
const chart_h = dashboardPartB_card_h * 0.70;
const chart_w = dashboardPartB_card_w * 1.00;
const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
const DummyDonor = [
  { id: 1, name: "Andy", amount: 1000, date: "3/16/2022" },
  { id: 2, name: "Jordan", amount: 500, date: "3/16/2022" },
  { id: 3, name: "Benard", amount: 500, date: "3/16/2022" },
  { id: 4, name: "Cecelia", amount: 200, date: "3/16/2022" },
  { id: 5, name: "Dennis", amount: 20000, date: "3/16/2022" },
  { id: 6, name: "WaiYi", amount: 500, date: "3/16/2022" },
  { id: 7, name: "Cecelia", amount: 200, date: "3/16/2022" },
  { id: 8, name: "Dennis", amount: 20000, date: "3/16/2022" },
  { id: 9, name: "Jordan", amount: 500, date: "3/16/2022" },
  { id: 10, name: "Benard", amount: 500, date: "3/16/2022" },
  { id: 11, name: "Cecelia", amount: 200, date: "3/16/2022" },
  { id: 12, name: "Dennis", amount: 20000, date: "3/16/2022" },
  { id: 13, name: "WaiYi", amount: 500, date: "3/16/2022" },
  { id: 14, name: "Cecelia", amount: 200, date: "3/16/2022" },
  { id: 15, name: "Dennis", amount: 20000, date: "3/16/2022" },
  { id: 16, name: "Jordan", amount: 30, date: "3/16/2022" },
  { id: 17, name: "Jordan", amount: 500, date: "3/16/2022" },
  { id: 18, name: "Benard", amount: 500, date: "3/16/2022" },
  { id: 19, name: "Cecelia", amount: 200, date: "3/16/2022" },
  { id: 20, name: "Dennis", amount: 20000, date: "3/16/2022" },
  { id: 21, name: "WaiYi", amount: 500, date: "3/16/2022" },
  { id: 22, name: "Cecelia", amount: 200, date: "3/16/2022" },
  { id: 23, name: "Dennis", amount: 20000, date: "3/16/2022" },
  { id: 24, name: "Jordan", amount: 30, date: "3/16/2022" },
  { id: 25, name: "Jordan", amount: 30, date: "3/16/2022" }
];
const DonorCount = DummyDonor.length;
const uniqueDonor = [];
DummyDonor.map(donor => {
  if (uniqueDonor.indexOf(donor.name) === -1) {
    uniqueDonor.push(donor.name)
  }
});

// each value represents a goal ring in Progress chart
const categorydata = {
  labels: ["Education", "Health", "Disaster", "OKU", "Elder", "Orphan"], // optional
  data: [0.3, 0.3, 0.3, 0.04, 0.03, 0.03]
};
// each value represents a goal ring in Progress chart
const statedata = [
  {
    name: "% Sabah",
    population: 23,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "% Sarawak",
    population: 13,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];

const uniqueDonorCount = uniqueDonor.length;
var DonorRetention = (uniqueDonorCount / DonorCount * 100).toFixed(0);;

const DummyRecipient = [
  { id: 1, name: "A", amount: 1000, date: "3/16/2022" },
  { id: 2, name: "B", amount: 500, date: "3/16/2022" },
  { id: 3, name: "C", amount: 200, date: "3/16/2022" },
  { id: 4, name: "D", amount: 200, date: "3/16/2022" },
  { id: 3, name: "C", amount: 200, date: "3/16/2022" },
  { id: 4, name: "D", amount: 2000, date: "3/16/2022" },
  { id: 5, name: "E", amount: 30, date: "3/16/2022" }
];
const RecipientCount = DummyRecipient.length;
const uniqueRecipient = [];
DummyRecipient.map(recipient => {
  if (uniqueRecipient.indexOf(recipient.name) === -1) {
    uniqueRecipient.push(recipient.name)
  }
});

class DashboardScreen extends Component {

  state = {
    active: 0
  }

  constructor(props) {
    super(props);
    this.state = { DummyDonor };
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Image
          source={headerimage}
          style={styles.headerimage} /> */}
        {/* <View style={styles.slider}>
          <ScrollView
            pagingEnabled
            horizontal
            onScroll={this.change}
            showsHorizontalScrollIndicator={false}
            style={{ width, height }}>
            {
              bannerimages.map((image, index) => (
                <Image
                  key={index}
                  source={{ uri: image }}
                  style={styles.bannerimage} />
              ))
            }
          </ScrollView>
          <View style={styles.pagination}>
            {
              bannerimages.map((i, k) => (
                <Text key={k} style={k == this.state.active ? styles.pagingActivetext : styles.pagingtext}>⬤</Text>
              ))
            }
          </View>
        </View> */}

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
                  data={{
                    labels: ["January", "February", "March", "April"],
                    datasets: [
                      {
                        data: [
                          Math.random() * 10000,
                          Math.random() * 10000,
                          Math.random() * 10000,
                          Math.random() * 10000,
                        ]
                      }
                    ],
                    legend: ["Amount(RM)"]
                  }}
                  width={chart_w}
                  height={chart_h}
                  yAxisInterval={1}
                  chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16
                    },
                    propsForDots: {
                      r: "6",
                      strokeWidth: "2",
                      stroke: "#ffddab"
                    }
                  }}
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
                  data={categorydata}
                  width={chart_w}
                  height={chart_h * 1.1}
                  strokeWidth={12}
                  radius={30}
                  chartConfig={chartConfig}
                  hideLegend={false}
                />
              </View>
            </View>

            <View style={styles.dashboardB_Card}>
              <View>
                <Text style={styles.dashboardB_Card_TextHeader}>Donation Dispersion By State</Text>
                <Text style={styles.dashboardB_Card_Text1}>Last updated: {new Date().toDateString()}</Text>
                <PieChart
                  data={statedata}
                  width={chart_w}
                  height={chart_h}
                  chartConfig={chartConfig}
                  accessor={"population"}
                  backgroundColor={"transparent"}
                  center={[35, 0]}
                  absolute
                />
              </View>
            </View>

            <View style={styles.dashboardB_Card}>
              <View>
                <Text style={styles.dashboardB_Card_TextHeader}>For Testing</Text>
                <Text style={styles.dashboardB_Card_Text1}>Last updated: {new Date().toDateString()}</Text>
                {this.state.DummyDonor.map((item, index) => (
                  <Text>Hello, {item.id} from {item.name}!</Text>
                ))}
              </View>
            </View>
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
  slider: {
    marginTop: 0,
    width,
    height: bannerheight
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
    color: "black",
    fontSize: 14,
    lineHeight: 30,
    textAlign: "center"
  },
  chart: {
    margin: 10,
    borderRadius: 16,
    textAlign: "center",
    alignContent: "center",
    justifyContent: 'center'
  },
  bannerimage: {
    width,
    height,
    resizeMode: "contain",
    marginTop: -25
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center"
  },
  pagingtext: {
    fontSize: (width / 50),
    color: "#888",
    margin: 3
  },
  pagingActivetext: {
    fontSize: (width / 50),
    color: "#fff",
    margin: 3
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
  }
});

export default DashboardScreen;
