import { Dimensions } from 'react-native';
import * as dummies from './dummy'

// Display Setting
export const { width } = Dimensions.get("window");
export const height = width * 0.6;
export const bannerheight = width * 0.28;
export const dashboardPartA = width * 0.55;
export const dashboardPartB = width * 1.25;
export const dashboardPartB_card_h = dashboardPartB * 0.80;
export const dashboardPartB_card_w = dashboardPartB * 0.74;
export const chart_h = dashboardPartB_card_h * 0.70;
export const chart_w = dashboardPartB_card_w * 0.99;
export const chartConfig_1 = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0.5,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 131, 176, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffddab"
    }
};
export const chartConfig_2 = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 131, 176, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};
export const chartConfig_3 = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 131, 176, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    resizeMode: "contain",
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};
export const chartConfig_4 = {
    type: "column2D",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
        chart: {
            caption: "Countries With Most Oil Reserves [2017-18]",
            subCaption: "In MMbbl = One Million barrels",
            xAxisName: "Country",
            yAxisName: "Reserves (MMbbl)",
            numberSuffix: "K",
            theme: "fusion",
            exportEnabled: 1 // to enable the export chart functionality
        },
        data: dummies.mapData
    }
};

// Color Resource
export const primary_c = 'white';
export const secondary_c = 'grey';
export const gradient_c = ['#0072ff', '#00c6ff'];
export const title_c = '#036675';
export const secondary_title_c = '#036675';
export const text_c = '#036675';

// Text Resource
export const dashboard_head_1 = 'JKM DASHBOARD';
export const card_title_1 = 'Total Donor';
export const card_title_2 = 'Donor Retention';
export const card_title_3 = 'Total Recipient';
export const card_title_4 = 'More Detail';
export const update_by = 'Last updated: ';
export const dashboard_head_2 = 'DONATION ANALYSIS';
export const title_analysis_1 = 'Receive Disperse Statistic';
export const title_analysis_2 = 'Donation Dispersion By Aspect';
export const title_analysis_3a = 'Donation Dispersion By State';
export const title_analysis_3b = '($ in thousands - All figures are rounded)';
export const end_of_analysis = '~ No More Analysis ~';
export const total_donation = 'Donation Recieved: RM';
export const total_dispersion = 'Donation Dispersed: RM';
export const jkm_misi = '"Empowering communities in need of social well-being"';
export const wlc_msg = '~ WELCOME TO EBANTUAN ~';
export const close_msg = 'Double Click Me To Get Started';


// Image Resource
export const jkm_logo = { uri: 'https://img.favpng.com/19/17/22/jabatan-kebajikan-masyarakat-logo-portable-network-graphics-vector-graphics-welfare-png-favpng-p8Dr3GPnWPybhL4VQABsvGLYk.jpg' }


// Icon Resource


// Video Resource


// Animation Resource

