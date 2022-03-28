//---Donor Entity
export const Donor = [
  { id: 1, email: "Andy", amount: 10000, date: "3/16/2022" , mnth: 10},
  { id: 2, email: "Jordan", amount: 5000, date: "3/16/2022" , mnth: 10},
  { id: 3, email: "Benard", amount: 5000, date: "3/16/2022" , mnth: 10},
  { id: 4, email: "Cecelia", amount: 20000, date: "3/16/2022" , mnth: 10},
  { id: 5, email: "Dennis", amount: 2000, date: "3/16/2022" , mnth: 11},
  { id: 6, email: "WaiYi", amount: 5000, date: "3/16/2022" , mnth: 11},
  { id: 7, email: "Cecelia", amount: 2000, date: "3/16/2022" , mnth: 11},
  { id: 8, email: "Dennis", amount: 20000, date: "3/16/2022" , mnth: 11},
  { id: 9, email: "Jordan", amount: 5000, date: "3/16/2022" , mnth: 12},
  { id: 10, email: "Benard", amount: 6000, date: "3/16/2022" , mnth: 12},
  { id: 11, email: "Cecelia", amount: 2000, date: "3/16/2022" , mnth: 12},
  { id: 12, email: "Dennis", amount: 20000, date: "3/16/2022" , mnth: 12},
  { id: 13, email: "WaiYi", amount: 5000, date: "3/16/2022" , mnth: 1},
  { id: 14, email: "Cecelia", amount: 2000, date: "3/16/2022" , mnth: 1},
  { id: 15, email: "Dennis", amount: 7000, date: "3/16/2022" , mnth: 1},
  { id: 16, email: "Jordan", amount: 3000, date: "3/16/2022" , mnth: 1},
  { id: 17, email: "Jordan", amount: 5000, date: "3/16/2022" , mnth: 2},
  { id: 18, email: "Benard", amount: 5000, date: "3/16/2022" , mnth: 2},
  { id: 19, email: "Cecelia", amount: 2000, date: "3/16/2022" , mnth: 2},
  { id: 20, email: "Dennis", amount: 2000, date: "3/16/2022" , mnth: 2},
  { id: 21, email: "WaiYi", amount: 5000, date: "3/16/2022" , mnth: 3},
  { id: 22, email: "Cecelia", amount: 2000, date: "3/16/2022" , mnth: 3},
  { id: 23, email: "Dennis", amount: 2000, date: "3/16/2022" , mnth: 3},
  { id: 24, email: "Jordan", amount: 3000, date: "3/16/2022" , mnth: 3},
  { id: 25, email: "Jordan", amount: 3000, date: "3/16/2022", mnth: 3}
];
var donation_sum = 0;
const uniqueDonor = [];
Donor.map(donor => {
  donation_sum += donor.amount;
  if (uniqueDonor.indexOf(donor.email) === -1) {
    uniqueDonor.push(donor.email)
  }
});
export var DonorCount = Donor.length;
export var totalDonation = donation_sum;
export var uniqueDonorCount = uniqueDonor.length;
export var DonorRetention = (uniqueDonorCount / DonorCount * 100).toFixed(0);;

//---Recipient Entity
export const Recipient = [
  { id: 1, name: "Alice", dispersion_id: 1},
  { id: 2, name: "Benard", dispersion_id: 3},
  { id: 3, name: "Cecelia", dispersion_id: 2},
  { id: 4, name: "Dennis", dispersion_id: 4},
  { id: 3, name: "Candy", dispersion_id: 5},
  { id: 4, name: "Daniel", dispersion_id: 7},
  { id: 5, name: "Elisha", dispersion_id: 6},
  { id: 6, name: "Alan", dispersion_id: 8},
  { id: 7, name: "Benard", dispersion_id: 10},
  { id: 8, name: "Catherine", dispersion_id: 11},
  { id: 9, name: "Danny", dispersion_id: 9},
  { id: 10, name: "Candy", dispersion_id: 12 },
  { id: 11, name: "Dennis", dispersion_id: 13 },
  { id: 12, name: "Jordan", dispersion_id: 14 },
  { id: 7, name: "Benard", dispersion_id: 15 },
  { id: 8, name: "Catherine", dispersion_id: 17 },
  { id: 9, name: "Danny", dispersion_id: 16 },
  { id: 10, name: "Candy", dispersion_id: 18 },
  { id: 11, name: "Dennis", dispersion_id: 20 },
  { id: 12, name: "Jordan", dispersion_id: 21 },
  { id: 11, name: "Dennis", dispersion_id: 19}
];
export var RecipientCount = Recipient.length;

//---Dispersion Entity
export const Dispersion = [
  { id: 1, category: "OKU", state: "Sabah", amount: 10000, date: "3/16/2022", mnth: 3},
  { id: 2, category: "OKU", state: "Sabah", amount: 8000, date: "3/16/2022" , mnth: 3},
  { id: 3, category: "Elder", state: "Sarawak", amount: 6000, date: "3/16/2022", mnth: 3 },
  { id: 4, category: "Elder", state: "Pahang", amount: 2000, date: "3/16/2022", mnth: 2 },
  { id: 5, category: "Orphan", state: "Pahang", amount: 2000, date: "3/16/2022", mnth: 2 },
  { id: 6, category: "OKU", state: "Selangor", amount: 20000, date: "3/16/2022", mnth: 2 },
  { id: 7, category: "Orphan", state: "Sabah", amount: 3000, date: "3/16/2022", mnth: 2 },
  { id: 8, category: "Other", state: "Kedah", amount: 10000, date: "3/16/2022", mnth: 1 },
  { id: 9, category: "Other", state: "Pahang", amount: 5000, date: "3/16/2022", mnth: 1 },
  { id: 10, category: "Elder", state: "Pahang", amount: 4000, date: "3/16/2022", mnth: 1 },
  { id: 11, category: "Elder", state: "Kelantan", amount: 2000, date: "3/16/2022", mnth: 1 },
  { id: 12, category: "Orphan", state: "Sabah", amount: 8000, date: "3/16/2022", mnth: 12 },
  { id: 13, category: "OKU", state: "Sarawak", amount: 2000, date: "3/16/2022", mnth: 12 },
  { id: 14, category: "Orphan", state: "Sabah", amount: 3000, date: "3/16/2022", mnth: 12 },
  { id: 15, category: "OKU", state: "Perlis", amount: 10000, date: "3/16/2022", mnth: 11 },
  { id: 16, category: "OKU", state: "Sarawak", amount: 5000, date: "3/16/2022", mnth: 11 },
  { id: 17, category: "Elder", state: "Selangor", amount: 2000, date: "3/16/2022", mnth: 11 },
  { id: 18, category: "Elder", state: "Johor", amount: 2000, date: "3/16/2022", mnth: 10 },
  { id: 19, category: "Orphan", state: "Johor", amount: 2000, date: "3/16/2022", mnth: 10 },
  { id: 20, category: "OKU", state: "Perak", amount: 20000, date: "3/16/2022", mnth: 10 },
  { id: 21, category: "Orphan", state: "Johor", amount: 3000, date: "3/16/2022", mnth: 10 }
]
var dispersion_sum = 0;
Dispersion.map(disperse => {
  dispersion_sum += disperse.amount;
});
export var totalDispersion = dispersion_sum;
export function getCurrentDate(separator=''){
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}
export function getCurrentMonth(separator=''){
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${month<10?`0${month}`:`${month}`}`
}
export function getCurrentYear(separator=''){
  let newDate = new Date()
  let year = newDate.getFullYear();
  return `${year}`
}
const s_mnth_1 = "Oct";
const s_mnth_2 = "Nov";
const s_mnth_3 = "Dec";
const s_mnth_4 = "Jan";
const s_mnth_5 = "Feb";
const s_mnth_6 = "Mar";
var r_mnth_1 = 0;
var r_mnth_2 = 0;
var r_mnth_3 = 0;
var r_mnth_4 = 0;
var r_mnth_5 = 0;
var r_mnth_6 = 0;
Donor.map(item => {
  if (item.mnth == 3) {
    r_mnth_6 += item.amount;
  }
  else if (item.mnth == 2) {
    r_mnth_5 += item.amount;
  }
  else if (item.mnth == 1) {
    r_mnth_4 += item.amount;
  }
  else if (item.mnth == 12) {
    r_mnth_3 += item.amount;
  }
  else if (item.mnth == 11) {
    r_mnth_2 += item.amount;
  }
  else if (item.mnth == 10) {
    r_mnth_1 += item.amount;
  }
});
var mnth_1 = 0;
var mnth_2 = 0;
var mnth_3 = 0;
var mnth_4 = 0;
var mnth_5 = 0;
var mnth_6 = 0;
Dispersion.map(item => {
  if (item.mnth == 3) {
    mnth_6 += item.amount;
  }
  else if (item.mnth == 2) {
    mnth_5 += item.amount;
  }
  else if (item.mnth == 1) {
    mnth_4 += item.amount;
  }
  else if (item.mnth == 12) {
    mnth_3 += item.amount;
  }
  else if (item.mnth == 11) {
    mnth_2 += item.amount;
  }
  else if (item.mnth == 10) {
    mnth_1 += item.amount;
  }
});
export const statistic = 
{
  labels: [s_mnth_1, s_mnth_2, s_mnth_3, s_mnth_4, s_mnth_5, s_mnth_6],
  datasets: [
    {
      data: [r_mnth_1, r_mnth_2, r_mnth_3, r_mnth_4, r_mnth_5, r_mnth_6],
      strokeWidth: 2,
      color: (opacity = 1) => `rgba(0, 131, 176, ${opacity})` // green blue
    },
    {
      data: [mnth_1, mnth_2, mnth_3, mnth_4, mnth_5, mnth_6],
      strokeWidth: 2,
      color: (opacity = 1) => `rgba(230,0,0,${opacity})` // red
    }
  ],
  legend: ['Received', 'Dispersed'],
}
const s_cat_1 = "OKU";
const s_cat_2 = "Elder";
const s_cat_3 = "Orphan";
const s_cat_4 = "Others";
var cat_1 = 0;
var cat_2 = 0;
var cat_3 = 0;
var cat_4 = 0;
Dispersion.map(item => {
  if (item.category == s_cat_1) {
    cat_1 += item.amount;
  }
  else if (item.category == s_cat_2) {
    cat_2 += item.amount;
  }
  else if (item.category == s_cat_3) {
    cat_3 += item.amount;
  }
  else {
    cat_4 += item.amount;
  }
});
var cat_sum = (cat_1 + cat_2 + cat_3 + cat_4);
var p_cat_1 = (cat_1 / cat_sum);
var p_cat_2 = (cat_2 / cat_sum);
var p_cat_3 = (cat_3 / cat_sum);
var p_cat_4 = (cat_4 / cat_sum);

export const categorydata = {
  labels: [s_cat_1, s_cat_2, s_cat_3, s_cat_4],
  data: [p_cat_1, p_cat_2, p_cat_3, p_cat_4]
};
const s_sta_1 = "Terengganu";
const s_sta_2 = "Selangor";
const s_sta_3 = "Sarawak";
const s_sta_4 = "Sabah";
const s_sta_5 = "Penang";
const s_sta_6 = "Perlis";
const s_sta_7 = "Perak";
const s_sta_8 = "Pahang";
const s_sta_9 = "N. Sembilan";
const s_sta_10 = "Kelantan";
const s_sta_11 = "Kedah";
const s_sta_12 = "Johor";
const s_sta_13 = " ";
var sta_1 = 0;
var sta_2 = 0;
var sta_3 = 0;
var sta_4 = 0;
var sta_5 = 0;
var sta_6 = 0;
var sta_7 = 0;
var sta_8 = 0;
var sta_9 = 0;
var sta_10 = 0;
var sta_11 = 0;
var sta_12 = 0;
var sta_13 = 0;
Dispersion.map(item => {
  if (item.state == s_sta_1) {
    sta_1 += item.amount;
  }
  else if (item.state == s_sta_2) {
    sta_2 += item.amount;
  }
  else if (item.state == s_sta_3) {
    sta_3 += item.amount;
  }
  else if (item.state == s_sta_4) {
    sta_4 += item.amount;
  }
  else if (item.state == s_sta_5) {
    sta_5 += item.amount;
  }
  else if (item.state == s_sta_6) {
    sta_6 += item.amount;
  }
  else if (item.state == s_sta_7) {
    sta_7 += item.amount;
  }
  else if (item.state == s_sta_8) {
    sta_8 += item.amount;
  }
  else if (item.state == s_sta_9) {
    sta_9 += item.amount;
  }
  else if (item.state == s_sta_10) {
    sta_10 += item.amount;
  }
  else if (item.state == s_sta_11) {
    sta_11 += item.amount;
  }
  else if (item.state == s_sta_12) {
    sta_12 += item.amount;
  }
  else {
    sta_13 += item.amount;
  }
});
var sta_sum = (sta_1 + sta_2 + sta_3 + sta_4 + sta_5 + sta_6 + sta_7 + sta_8 + sta_9 + sta_10 + sta_11 + sta_12 + sta_13);
var p_sta_1 = ((sta_1 / sta_sum) * 100).toFixed(0);
var p_sta_2 = ((sta_2 / sta_sum) * 100).toFixed(0);
var p_sta_3 = ((sta_3 / sta_sum) * 100).toFixed(0);
var p_sta_4 = ((sta_4 / sta_sum) * 100).toFixed(0);
var p_sta_5 = ((sta_5 / sta_sum) * 100).toFixed(0);
var p_sta_6 = ((sta_6 / sta_sum) * 100).toFixed(0);
var p_sta_7 = ((sta_7 / sta_sum) * 100).toFixed(0);
var p_sta_8 = ((sta_8 / sta_sum) * 100).toFixed(0);
var p_sta_9 = ((sta_9 / sta_sum) * 100).toFixed(0);
var p_sta_10 = ((sta_10 / sta_sum) * 100).toFixed(0);
var p_sta_11 = ((sta_11 / sta_sum) * 100).toFixed(0);
var p_sta_12 = ((sta_12 / sta_sum) * 100).toFixed(0);
var p_sta_13 = ((sta_13 / sta_sum) * 100).toFixed(0);
var per_hundred = 100; 
var per_thousand = 1000; 
var per_ten_thousand = 10000; 
var to_divide = per_thousand; 
var dp = 0; 
export const statedata = {
  labels: [
    s_sta_1,
    s_sta_2,
    s_sta_3,
    s_sta_4,
    s_sta_5,
    s_sta_6,
    s_sta_7,
    s_sta_8,
    s_sta_9,
    s_sta_10,
    s_sta_11,
    s_sta_12,
    s_sta_13
  ],
  datasets: [
    {
      data: [
        (sta_1/to_divide).toFixed(dp),
        (sta_2/to_divide).toFixed(dp),
        (sta_3/to_divide).toFixed(dp),
        (sta_4/to_divide).toFixed(dp),
        (sta_5/to_divide).toFixed(dp),
        (sta_6/to_divide).toFixed(dp),
        (sta_7/to_divide).toFixed(dp),
        (sta_8/to_divide).toFixed(dp),
        (sta_9/to_divide).toFixed(dp),
        (sta_10/to_divide).toFixed(dp),
        (sta_11/to_divide).toFixed(dp),
        (sta_12/to_divide).toFixed(dp),
        (sta_13/to_divide).toFixed(dp)
      ]
    }
  ]
};

export const mapData = [
  { label: "Venezuela", value: "250" },
  { label: "Saudi", value: "260" },
  { label: "Canada", value: "180" },
  { label: "Iran", value: "140" },
  { label: "Russia", value: "115" },
  { label: "UAE", value: "100" },
  { label: "US", value: "30" },
  { label: "China", value: "30" },
];