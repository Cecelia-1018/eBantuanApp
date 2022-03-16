/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, StyleSheet, ScrollView, Dimensions, Linking } from 'react-native';
import { FlatList, Alert } from 'react-native-gesture-handler';


const dashboardPartB_1 = { uri: "https://nonprofithub.org/wp-content/uploads/2018/11/blog-chart.png" }
const dashboardPartB_2 = { uri: "https://www.savethechildren.org/content/dam/usa/reports/annual-report/annual-report/2020-annual-report-financials-giving-helps-rec.png/_jcr_content/renditions/cq5dam.thumbnail.768.768.png')" }
const donationHistory = { uri: "require('./profileDonationHistory.png')" }

const backgroundimage = { uri: "https://www.ilovewallpaper.co.uk/images/athena-floral-wallpaper-white-off-white-fd40395-p4464-10666_image.jpg" };
const headerimage = { uri: "https://www.jkm.gov.my/jkm/uploads/images/home_icon/header_bm.png" };
const dashboardbg = { uri: "https://cdn3.vectorstock.com/i/1000x1000/03/87/pale-blue-background-with-stains-vector-17790387.jpg" };
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
const dashboardPartA = width * 0.35;
const dashboardPartB = width * 0.92;
const DummyDonor = [
  { id: 1, name: "Andy", amount: 1000, date: "3/16/2022" },
  { id: 2, name: "Jordan", amount: 500, date: "3/16/2022" },
  { id: 3, name: "Benard", amount: 500, date: "3/16/2022" },
  { id: 4, name: "Cecelia", amount: 200, date: "3/16/2022" },
  { id: 5, name: "Dennis", amount: 20000, date: "3/16/2022" },
  { id: 6, name: "WaiYi", amount: 500, date: "3/16/2022" },
  { id: 7, name: "Cecelia", amount: 200, date: "3/16/2022" },
  { id: 8, name: "Dennis", amount: 20000, date: "3/16/2022" },
  { id: 9, name: "Jordan", amount: 30, date: "3/16/2022" }
];
const DonorCount = DummyDonor.length;
const uniqueDonor = [];
DummyDonor.map(donor => {
  if (uniqueDonor.indexOf(donor.name) === -1) {
    uniqueDonor.push(donor.name)
  }
});
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

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };
  //handling onPress action  
  getListViewItem = (item) => {
    Alert.alert(item.key);
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
        <ImageBackground
          source={backgroundimage}
          resizeMode="cover"
          style={styles.backgroundimage}>
          <Image
            source={headerimage}
            style={styles.headerimage} />
          <View style={styles.slider}>
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
          </View>

          <View style={styles.dashboardcontentA}>
            <ImageBackground
              source={dashboardbg}
              resizeMode="cover"
              style={styles.dashboardbgA}>
              <Text style={styles.header_1}>JKM DASHBOARD</Text>
              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >

                  <View backgroundColor="orange" style={styles.dashboardA_Card}>
                    <View>
                      <Text style={styles.dashboardA_Card_TextHeader}>Total Donor</Text>
                      <Text style={styles.dashboardA_Card_Text}>{uniqueDonorCount}</Text>
                    </View>
                  </View>
                  <View backgroundColor="purple" style={styles.dashboardA_Card}>
                    <Text style={styles.dashboardA_Card_TextHeader}>Donor Retention</Text>
                    <Text style={styles.dashboardA_Card_Text}>{DonorRetention} %</Text>
                  </View>
                  <View backgroundColor="green" style={styles.dashboardA_Card}>
                    <Text style={styles.dashboardA_Card_TextHeader}>Total Recipient</Text>
                    <Text style={styles.dashboardA_Card_Text}>{RecipientCount}</Text>
                  </View>
                  <View backgroundColor="blue" style={styles.dashboardA_Card}>
                    <Text
                      style={styles.dashboardA_Card_TextHeader}
                      onPress={() => Linking.openURL('https://www.jkm.gov.my/jkm/index.php')}>
                      More details
                    </Text>
                    <Text style={styles.dashboardA_Card_Text}
                      onPress={() => Linking.openURL('https://www.jkm.gov.my/jkm/index.php')}>
                      ➤
                    </Text>
                  </View>
                </ScrollView>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.dashboardcontentB}>
            <ImageBackground
              source={dashboardbg}
              resizeMode="cover"
              style={styles.dashboardbgB}>
              <Text style={styles.header_2}>DONATION ANALYSIS</Text>

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.dashboardB_Card}>
                  <View>
                    <Text style={styles.dashboardA_Card_TextHeader}>Total Donor</Text>
                    <Image
                      source={dashboardPartB_1}
                      style={styles.image} />
                  </View>
                </View>
                <View style={styles.dashboardB_Card}>
                  <Text style={styles.dashboardA_Card_TextHeader}>Donor Retention</Text>
                  <Text style={styles.dashboardA_Card_Text}>{DonorRetention} %</Text>
                </View>
              </ScrollView>

              <View style={styles.container}>
                <FlatList
                  data={DummyDonor}
                  renderItem={({ item }) =>
                    <Text style={styles.item}
                      onPress={this.getListViewItem.bind(this, item)}>{item.id}</Text>}
                  ItemSeparatorComponent={this.renderSeparator}
                />
              </View>

              {this.state.DummyDonor.map((item, index) => (
                <Text>Hello, {item.id} from {item.name}!</Text>
              ))}

            </ImageBackground>
          </View>
        </ImageBackground>
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
    marginTop: 5,
    marginBottom: 5,
    width,
    height: dashboardPartA
  },
  dashboardcontentB: {
    marginTop: 5,
    marginBottom: 5,
    width,
    height: dashboardPartB
  },
  dashboardimage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    opacity: 1
  },
  dashboardA_Card: {
    marginLeft: 8,
    marginRight: 8,
    flex: 1,
    width: 155,
    height: 80,
    resizeMode: "contain",
    opacity: 1,
    borderRadius: 15,
    alignContent: "center"
  },
  dashboardB_Card: {
    marginLeft: 8,
    marginRight: 8,
    flex: 1,
    width: 300,
    height: 200,
    resizeMode: "contain",
    opacity: 1,
    alignContent: "center"
  },
  dashboardA_Card_TextHeader: {
    marginTop: 5,
    color: "#FFF",
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  dashboardA_Card_Text: {
    marginTop: 5,
    color: "#FFB",
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  dashboardbgA: {
    flex: 1,
    opacity: 0.8
  },
  dashboardbgB: {
    flex: 1,
    opacity: 0.4
  },
  backgroundimage: {
    flex: 1
  },
  headerimage: {
    marginTop: -25,
    marginBottom: -25,
    width: "100%",
    height: 100,
    resizeMode: "contain"
  },
  bannerimage: {
    width,
    height,
    resizeMode: "contain",
    marginTop: -25
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    opacity: 1
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
    color: "#888",
    fontSize: 25,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "left",
  },
  header_2: {
    marginLeft: 15,
    color: "#899",
    fontSize: 20,
    lineHeight: 40,
    fontWeight: "bold",
    textAlign: "left",
  },
  head: { height: 40, backgroundColor: '#f1f8ff' }
});

export default DashboardScreen;
