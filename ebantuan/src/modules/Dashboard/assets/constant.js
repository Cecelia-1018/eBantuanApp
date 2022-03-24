import { Dimensions } from 'react-native';

// Display Setting
export const { width } = Dimensions.get("window");
export const height = width * 0.4;
export const bannerheight = width * 0.28;
export const dashboardPartA = width * 0.55;
export const dashboardPartB = width * 1.25;
export const dashboardPartB_card_h = dashboardPartB * 0.80;
export const dashboardPartB_card_w = dashboardPartB * 0.74;
export const chart_h = dashboardPartB_card_h * 0.70;
export const chart_w = dashboardPartB_card_w * 1.00;
export const chartConfig_1 = {
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
};
export const chartConfig_2 = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
    
};
export const chartConfig_3 = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    resizeMode: "contain",
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};

// Color Resource
export const primary_c = 'white';
export const secondary_c = 'grey';
export const gradient_c = ['#0072ff', '#00c6ff'];
export const title_c = '#036675';
export const secondary_title_c = '#036675';
export const text_c = '#036675';

// Image Resource

// Icon Resource


// Video Resource


// Animation Resource

