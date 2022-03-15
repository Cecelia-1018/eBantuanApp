/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, StyleSheet, ScrollView, Dimensions } from 'react-native';

const dashboardPartB_1 = { uri: "https://www.qgiv.com/blog/wp-content/uploads/2018/08/Advanced-Statistics.png"}
const dashboardPartA_3 = { uri: "require('./dashboardContentA_Card3.png')"}
const donationHistory = { uri: "require('./profileDonationHistory.png')"}



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
const dashboardPartA = width * 0.4;
const dashboardPartB = width * 0.88;


class DashboardScreen extends Component {
  state = {
    active: 0
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
                
         

            </ImageBackground>
          </View>

          <View style={styles.dashboardcontentB}>
            <ImageBackground
              source={dashboardbg}
              resizeMode="cover"
              style={styles.dashboardbgB}>
              <Text style={styles.header_2}>DONATION ANALYSIS</Text>

              <Image
                    source={dashboardPartB_1}
                    style={styles.dashboardimage} />

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
  dashboardbgA: {
    flex: 1,
    opacity:0.8
  },
  dashboardbgB: {
    flex: 1,
    opacity:0.4
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
  }
});

export default DashboardScreen;
