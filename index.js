import express from "express";

const app = express();
const PORT = 5000;
import cors from "cors";

// Allow requests from http://localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const statesAndDistrictsAndUnionTerritories = {
  states: [
    {
      id: 1,
      unionTerritories: false,
      name: "Andhra Pradesh",
      iso2: "AP",
      districts: [
        { id: 101, name: "Anakapalli" },
        { id: 102, name: "Anantapur" },
        { id: 103, name: "Annamayya" },
        { id: 104, name: "Bapatla" },
        { id: 105, name: "Chittoor" },
        { id: 106, name: "East Godavari" },
        { id: 107, name: "Eluru" },
        { id: 108, name: "Guntur" },
        { id: 109, name: "Kakinada" },
        { id: 110, name: "Konaseema" },
        { id: 111, name: "Krishna" },
        { id: 112, name: "Kurnool" },
        { id: 113, name: "Nandyal" },
        { id: 114, name: "NTR District" },
        { id: 115, name: "Palnadu" },
        { id: 116, name: "Prakasam" },
        { id: 117, name: "Sri Potti Sriramulu Nellore" },
        { id: 118, name: "Srikakulam" },
        { id: 119, name: "Sri Sathya Sai" },
        { id: 120, name: "Tirupati" },
        { id: 121, name: "Visakhapatnam" },
        { id: 122, name: "Vizianagaram" },
        { id: 123, name: "West Godavari" },
        { id: 124, name: "YSR District (Kadapa)" },
        { id: 125, name: "Alluri Sitharama Raju" },
      ],
    },
    {
      id: 2,
      unionTerritories: false,
      name: "Arunachal Pradesh",
      iso2: "AR",
      districts: [
        { id: 201, name: "Anjaw" },
        { id: 202, name: "Changlang" },
        { id: 203, name: "Dibang Valley" },
        { id: 204, name: "East Kameng" },
        { id: 205, name: "East Siang" },
        { id: 206, name: "Kamle" },
        { id: 207, name: "Kra Daadi" },
        { id: 208, name: "Kurung Kumey" },
        { id: 209, name: "Lepa Rada" },
        { id: 210, name: "Lohit" },
        { id: 211, name: "Longding" },
        { id: 212, name: "Lower Dibang Valley" },
        { id: 213, name: "Lower Siang" },
        { id: 214, name: "Lower Subansiri" },
        { id: 215, name: "Namsai" },
        { id: 216, name: "Pakke-Kessang" },
        { id: 217, name: "Papum Pare" },
        { id: 218, name: "Shi Yomi" },
        { id: 219, name: "Siang" },
        { id: 220, name: "Tawang" },
        { id: 221, name: "Tirap" },
        { id: 222, name: "Upper Siang" },
        { id: 223, name: "Upper Subansiri" },
        { id: 224, name: "West Kameng" },
        { id: 225, name: "West Siang" },
        { id: 226, name: "Itanagar Capital Complex" },
      ],
    },
    {
      id: 3,
      unionTerritories: false,
      name: "Assam",
      iso2: "AS",
      districts: [
        { id: 301, name: "Bajali" },
        { id: 302, name: "Baksa" },
        { id: 303, name: "Barpeta" },
        { id: 304, name: "Biswanath" },
        { id: 305, name: "Bongaigaon" },
        { id: 306, name: "Cachar" },
        { id: 307, name: "Charaideo" },
        { id: 308, name: "Chirang" },
        { id: 309, name: "Darrang" },
        { id: 310, name: "Dhemaji" },
        { id: 311, name: "Dhubri" },
        { id: 312, name: "Dibrugarh" },
        { id: 313, name: "Dima Hasao" },
        { id: 314, name: "Goalpara" },
        { id: 315, name: "Golaghat" },
        { id: 316, name: "Hailakandi" },
        { id: 317, name: "Hojai" },
        { id: 318, name: "Jorhat" },
        { id: 319, name: "Kamrup" },
        { id: 320, name: "Kamrup Metropolitan" },
        { id: 321, name: "Karbi Anglong" },
        { id: 322, name: "Karimganj" },
        { id: 323, name: "Kokrajhar" },
        { id: 324, name: "Lakhimpur" },
        { id: 325, name: "Majuli" },
        { id: 326, name: "Morigaon" },
        { id: 327, name: "Nagaon" },
        { id: 328, name: "Nalbari" },
        { id: 329, name: "Sivasagar" },
        { id: 330, name: "Sonitpur" },
        { id: 331, name: "South Salmara-Mankachar" },
        { id: 332, name: "Tinsukia" },
        { id: 333, name: "Udalguri" },
        { id: 334, name: "West Karbi Anglong" },
        { id: 335, name: "Tamulpur" },
      ],
    },
    {
      id: 4,
      unionTerritories: false,
      name: "Bihar",
      iso2: "BR",
      districts: [
        {
          id: 401,
          name: "Araria",
        },
        {
          id: 402,
          name: "Arwal",
        },
        {
          id: 403,
          name: "Aurangabad",
        },
        {
          id: 404,
          name: "Banka",
        },
        {
          id: 405,
          name: "Begusarai",
        },
        {
          id: 406,
          name: "Bhagalpur",
        },
        {
          id: 407,
          name: "Bhojpur",
        },
        {
          id: 408,
          name: "Buxar",
        },
        {
          id: 409,
          name: "Darbhanga",
        },
        {
          id: 410,
          name: "East Champaran",
        },
        {
          id: 411,
          name: "Gaya",
        },
        {
          id: 412,
          name: "Gopalganj",
        },
        {
          id: 413,
          name: "Jamui",
        },
        {
          id: 414,
          name: "Jehanabad",
        },
        {
          id: 415,
          name: "Kaimur",
        },
        {
          id: 416,
          name: "Katihar",
        },
        {
          id: 417,
          name: "Khagaria",
        },
        {
          id: 418,
          name: "Kishanganj",
        },
        {
          id: 419,
          name: "Lakhisarai",
        },
        {
          id: 420,
          name: "Madhepura",
        },
        {
          id: 421,
          name: "Madhubani",
        },
        {
          id: 422,
          name: "Munger",
        },
        {
          id: 423,
          name: "Muzaffarpur",
        },
        {
          id: 424,
          name: "Nalanda",
        },
        {
          id: 425,
          name: "Nawada",
        },
        {
          id: 426,
          name: "Patna",
        },
        {
          id: 427,
          name: "Purnia",
        },
        {
          id: 428,
          name: "Rohtas",
        },
        {
          id: 429,
          name: "Saharsa",
        },
        {
          id: 430,
          name: "Samastipur",
        },
        {
          id: 431,
          name: "Saran",
        },
        {
          id: 432,
          name: "Sheikhpura",
        },
        {
          id: 433,
          name: "Sheohar",
        },
        {
          id: 434,
          name: "Sitamarhi",
        },
        {
          id: 435,
          name: "Siwan",
        },
        {
          id: 436,
          name: "Supaul",
        },
        {
          id: 437,
          name: "Vaishali",
        },
        {
          id: 438,
          name: "West Champaran",
        },
      ],
    },
    {
      id: 5,
      unionTerritories: false,
      name: "Chhattisgarh",
      iso2: "CT",
      districts: [
        { id: 501, name: "Balod" },
        { id: 502, name: "Baloda Bazar" },
        { id: 503, name: "Balrampur" },
        { id: 504, name: "Bastar" },
        { id: 505, name: "Bemetara" },
        { id: 506, name: "Bijapur" },
        { id: 507, name: "Bilaspur" },
        { id: 508, name: "Dantewada" },
        { id: 509, name: "Dhamtari" },
        { id: 510, name: "Durg" },
        { id: 511, name: "Gariaband" },
        { id: 512, name: "Gaurela-Pendra-Marwahi" },
        { id: 513, name: "Janjgir-Champa" },
        { id: 514, name: "Jashpur" },
        { id: 515, name: "Kabirdham" },
        { id: 516, name: "Kanker" },
        { id: 517, name: "Kondagaon" },
        { id: 518, name: "Korba" },
        { id: 519, name: "Koriya" },
        { id: 520, name: "Mahasamund" },
        { id: 521, name: "Mungeli" },
        { id: 522, name: "Narayanpur" },
        { id: 523, name: "Raigarh" },
        { id: 524, name: "Raipur" },
        { id: 525, name: "Rajnandgaon" },
        { id: 526, name: "Sukma" },
        { id: 527, name: "Surajpur" },
        { id: 528, name: "Surguja" },
      ],
    },
    {
      id: 6,
      unionTerritories: false,
      name: "Goa",
      iso2: "GA",
      districts: [
        { id: 601, name: "North Goa" },
        { id: 602, name: "South Goa" },
      ],
    },
    {
      id: 7,
      unionTerritories: false,
      name: "Gujarat",
      iso2: "GJ",
      districts: [
        { id: 701, name: "Ahmedabad" },
        { id: 702, name: "Amreli" },
        { id: 703, name: "Anand" },
        { id: 704, name: "Aravalli" },
        { id: 705, name: "Banaskantha" },
        { id: 706, name: "Bharuch" },
        { id: 707, name: "Bhavnagar" },
        { id: 708, name: "Botad" },
        { id: 709, name: "Chhota Udaipur" },
        { id: 710, name: "Dahod" },
        { id: 711, name: "Dang" },
        { id: 712, name: "Devbhumi Dwarka" },
        { id: 713, name: "Gandhinagar" },
        { id: 714, name: "Gir Somnath" },
        { id: 715, name: "Jamnagar" },
        { id: 716, name: "Junagadh" },
        { id: 717, name: "Kheda" },
        { id: 718, name: "Kutch" },
        { id: 719, name: "Mahisagar" },
        { id: 720, name: "Mehsana" },
        { id: 721, name: "Morbi" },
        { id: 722, name: "Narmada" },
        { id: 723, name: "Navsari" },
        { id: 724, name: "Panchmahal" },
        { id: 725, name: "Patan" },
        { id: 726, name: "Porbandar" },
        { id: 727, name: "Rajkot" },
        { id: 728, name: "Sabarkantha" },
        { id: 729, name: "Surat" },
        { id: 730, name: "Surendranagar" },
        { id: 731, name: "Tapi" },
        { id: 732, name: "Vadodara" },
        { id: 733, name: "Valsad" },
      ],
    },
    {
      id: 8,
      unionTerritories: false,
      name: "Haryana",
      iso2: "HR",
      districts: [
        { id: 801, name: "Ambala" },
        { id: 802, name: "Bhiwani" },
        { id: 803, name: "Charkhi Dadri" },
        { id: 804, name: "Faridabad" },
        { id: 805, name: "Fatehabad" },
        { id: 806, name: "Gurugram" },
        { id: 807, name: "Hisar" },
        { id: 808, name: "Jhajjar" },
        { id: 809, name: "Jind" },
        { id: 810, name: "Kaithal" },
        { id: 811, name: "Karnal" },
        { id: 812, name: "Kurukshetra" },
        { id: 813, name: "Mahendragarh" },
        { id: 814, name: "Nuh" },
        { id: 815, name: "Palwal" },
        { id: 816, name: "Panchkula" },
        { id: 817, name: "Panipat" },
        { id: 818, name: "Rewari" },
        { id: 819, name: "Rohtak" },
        { id: 820, name: "Sirsa" },
        { id: 821, name: "Sonipat" },
        { id: 822, name: "Yamunanagar" },
      ],
    },
    {
      id: 9,
      unionTerritories: false,
      name: "Himachal Pradesh",
      iso2: "HP",
      districts: [
        { id: 901, name: "Bilaspur" },
        { id: 902, name: "Chamba" },
        { id: 903, name: "Hamirpur" },
        { id: 904, name: "Kangra" },
        { id: 905, name: "Kinnaur" },
        { id: 906, name: "Kullu" },
        { id: 907, name: "Lahaul and Spiti" },
        { id: 908, name: "Mandi" },
        { id: 909, name: "Shimla" },
        { id: 910, name: "Sirmaur" },
        { id: 911, name: "Solan" },
        { id: 912, name: "Una" },
      ],
    },
    {
      id: 10,
      unionTerritories: false,
      name: "Jharkhand",
      iso2: "JH",
      districts: [
        { id: 1001, name: "Bokaro" },
        { id: 1002, name: "Chatra" },
        { id: 1003, name: "Deoghar" },
        { id: 1004, name: "Dhanbad" },
        { id: 1005, name: "Dumka" },
        { id: 1006, name: "East Singhbhum" },
        { id: 1007, name: "Garhwa" },
        { id: 1008, name: "Giridih" },
        { id: 1009, name: "Godda" },
        { id: 1010, name: "Gumla" },
        { id: 1011, name: "Hazaribagh" },
        { id: 1012, name: "Jamtara" },
        { id: 1013, name: "Khunti" },
        { id: 1014, name: "Koderma" },
        { id: 1015, name: "Latehar" },
        { id: 1016, name: "Lohardaga" },
        { id: 1017, name: "Pakur" },
        { id: 1018, name: "Palamu" },
        { id: 1019, name: "Ramgarh" },
        { id: 1020, name: "Ranchi" },
        { id: 1021, name: "Sahebganj" },
        { id: 1022, name: "Saraikela Kharsawan" },
        { id: 1023, name: "Simdega" },
        { id: 1024, name: "West Singhbhum" },
      ],
    },
    {
      id: 11,
      unionTerritories: false,
      name: "Karnataka",
      iso2: "KA",
      districts: [
        { id: 1101, name: "Bagalkot" },
        { id: 1102, name: "Ballari" },
        { id: 1103, name: "Belagavi" },
        { id: 1104, name: "Bengaluru Rural" },
        { id: 1105, name: "Bengaluru Urban" },
        { id: 1106, name: "Bidar" },
        { id: 1107, name: "Chamarajanagar" },
        { id: 1108, name: "Chikkaballapura" },
        { id: 1109, name: "Chikkamagaluru" },
        { id: 1110, name: "Chitradurga" },
        { id: 1111, name: "Dakshina Kannada" },
        { id: 1112, name: "Davanagere" },
        { id: 1113, name: "Dharwad" },
        { id: 1114, name: "Gadag" },
        { id: 1115, name: "Hassan" },
        { id: 1116, name: "Haveri" },
        { id: 1117, name: "Kalaburagi" },
        { id: 1118, name: "Kodagu" },
        { id: 1119, name: "Kolar" },
        { id: 1120, name: "Koppal" },
        { id: 1121, name: "Mandya" },
        { id: 1122, name: "Mysuru" },
        { id: 1123, name: "Raichur" },
        { id: 1124, name: "Ramanagara" },
        { id: 1125, name: "Shivamogga" },
        { id: 1126, name: "Tumakuru" },
        { id: 1127, name: "Udupi" },
        { id: 1128, name: "Uttara Kannada" },
        { id: 1129, name: "Vijayapura" },
        { id: 1130, name: "Yadgir" },
      ],
    },
    {
      id: 12,
      unionTerritories: false,
      name: "Kerala",
      iso2: "KL",
      districts: [
        { id: 1201, name: "Alappuzha" },
        { id: 1202, name: "Ernakulam" },
        { id: 1203, name: "Idukki" },
        { id: 1204, name: "Kannur" },
        { id: 1205, name: "Kasaragod" },
        { id: 1206, name: "Kollam" },
        { id: 1207, name: "Kottayam" },
        { id: 1208, name: "Kozhikode" },
        { id: 1209, name: "Malappuram" },
        { id: 1210, name: "Palakkad" },
        { id: 1211, name: "Pathanamthitta" },
        { id: 1212, name: "Thiruvananthapuram" },
        { id: 1213, name: "Thrissur" },
        { id: 1214, name: "Wayanad" },
      ],
    },
    {
      id: 13,
      unionTerritories: false,
      name: "Madhya Pradesh",
      iso2: "MP",
      districts: [
        { id: 1301, name: "Agar Malwa" },
        { id: 1302, name: "Alirajpur" },
        { id: 1303, name: "Anuppur" },
        { id: 1304, name: "Ashoknagar" },
        { id: 1305, name: "Balaghat" },
        { id: 1306, name: "Barwani" },
        { id: 1307, name: "Betul" },
        { id: 1308, name: "Bhind" },
        { id: 1309, name: "Bhopal" },
        { id: 1310, name: "Burhanpur" },
        { id: 1311, name: "Chhatarpur" },
        { id: 1312, name: "Chhindwara" },
        { id: 1313, name: "Damoh" },
        { id: 1314, name: "Datia" },
        { id: 1315, name: "Dewas" },
        { id: 1316, name: "Dhar" },
        { id: 1317, name: "Dindori" },
        { id: 1318, name: "Guna" },
        { id: 1319, name: "Gwalior" },
        { id: 1320, name: "Harda" },
        { id: 1321, name: "Hoshangabad" },
        { id: 1322, name: "Indore" },
        { id: 1323, name: "Jabalpur" },
        { id: 1324, name: "Jhabua" },
        { id: 1325, name: "Katni" },
        { id: 1326, name: "Khandwa" },
        { id: 1327, name: "Khargone" },
        { id: 1328, name: "Mandla" },
        { id: 1329, name: "Mandsaur" },
        { id: 1330, name: "Morena" },
        { id: 1331, name: "Narsinghpur" },
        { id: 1332, name: "Neemuch" },
        { id: 1333, name: "Panna" },
        { id: 1334, name: "Raisen" },
        { id: 1335, name: "Rajgarh" },
        { id: 1336, name: "Ratlam" },
        { id: 1337, name: "Rewa" },
        { id: 1338, name: "Sagar" },
        { id: 1339, name: "Satna" },
        { id: 1340, name: "Sehore" },
        { id: 1341, name: "Seoni" },
        { id: 1342, name: "Shahdol" },
        { id: 1343, name: "Shajapur" },
        { id: 1344, name: "Sheopur" },
        { id: 1345, name: "Shivpuri" },
        { id: 1346, name: "Sidhi" },
        { id: 1347, name: "Singrauli" },
        { id: 1348, name: "Tikamgarh" },
        { id: 1349, name: "Ujjain" },
        { id: 1350, name: "Umaria" },
        { id: 1351, name: "Vidisha" },
      ],
    },
    {
      id: 14,
      unionTerritories: false,
      name: "Maharashtra",
      iso2: "MH",
      districts: [
        { id: 1401, name: "Ahmednagar" },
        { id: 1402, name: "Akola" },
        { id: 1403, name: "Amravati" },
        { id: 1404, name: "Aurangabad" },
        { id: 1405, name: "Beed" },
        { id: 1406, name: "Bhandara" },
        { id: 1407, name: "Buldhana" },
        { id: 1408, name: "Chandrapur" },
        { id: 1409, name: "Dhule" },
        { id: 1410, name: "Gadchiroli" },
        { id: 1411, name: "Gondia" },
        { id: 1412, name: "Hingoli" },
        { id: 1413, name: "Jalgaon" },
        { id: 1414, name: "Jalna" },
        { id: 1415, name: "Kolhapur" },
        { id: 1416, name: "Latur" },
        { id: 1417, name: "Mumbai City" },
        { id: 1418, name: "Mumbai Suburban" },
        { id: 1419, name: "Nagpur" },
        { id: 1420, name: "Nanded" },
        { id: 1421, name: "Nandurbar" },
        { id: 1422, name: "Nashik" },
        { id: 1423, name: "Osmanabad" },
        { id: 1424, name: "Palghar" },
        { id: 1425, name: "Parbhani" },
        { id: 1426, name: "Pune" },
        { id: 1427, name: "Raigad" },
        { id: 1428, name: "Ratnagiri" },
        { id: 1429, name: "Sangli" },
        { id: 1430, name: "Satara" },
        { id: 1431, name: "Sindhudurg" },
        { id: 1432, name: "Solapur" },
        { id: 1433, name: "Thane" },
        { id: 1434, name: "Wardha" },
        { id: 1435, name: "Washim" },
        { id: 1436, name: "Yavatmal" },
      ],
    },
    {
      id: 15,
      unionTerritories: false,
      name: "Manipur",
      iso2: "MN",
      districts: [
        { id: 1501, name: "Bishnupur" },
        { id: 1502, name: "Chandel" },
        { id: 1503, name: "Churachandpur" },
        { id: 1504, name: "Imphal East" },
        { id: 1505, name: "Imphal West" },
        { id: 1506, name: "Jiribam" },
        { id: 1507, name: "Kakching" },
        { id: 1508, name: "Kamjong" },
        { id: 1509, name: "Kangpokpi" },
        { id: 1510, name: "Noney" },
        { id: 1511, name: "Pherzawl" },
        { id: 1512, name: "Senapati" },
        { id: 1513, name: "Tamenglong" },
        { id: 1514, name: "Tengnoupal" },
        { id: 1515, name: "Thoubal" },
        { id: 1516, name: "Ukhrul" },
      ],
    },
    {
      id: 16,
      unionTerritories: false,
      name: "Meghalaya",
      iso2: "ML",
      districts: [
        { id: 1601, name: "East Garo Hills" },
        { id: 1602, name: "East Jaintia Hills" },
        { id: 1603, name: "East Khasi Hills" },
        { id: 1604, name: "North Garo Hills" },
        { id: 1605, name: "Ri Bhoi" },
        { id: 1606, name: "South Garo Hills" },
        { id: 1607, name: "South West Garo Hills" },
        { id: 1608, name: "South West Khasi Hills" },
        { id: 1609, name: "West Garo Hills" },
        { id: 1610, name: "West Jaintia Hills" },
        { id: 1611, name: "West Khasi Hills" },
      ],
    },
    {
      id: 17,
      unionTerritories: false,
      name: "Mizoram",
      iso2: "MZ",
      districts: [
        { id: 1701, name: "Aizawl" },
        { id: 1702, name: "Champhai" },
        { id: 1703, name: "Hnahthial" },
        { id: 1704, name: "Khawzawl" },
        { id: 1705, name: "Kolasib" },
        { id: 1706, name: "Lawngtlai" },
        { id: 1707, name: "Lunglei" },
        { id: 1708, name: "Mamit" },
        { id: 1709, name: "Saitual" },
        { id: 1710, name: "Serchhip" },
      ],
    },
    {
      id: 18,
      unionTerritories: false,
      name: "Nagaland",
      iso2: "NL",
      districts: [
        { id: 1801, name: "Chümoukedima" },
        { id: 1802, name: "Dimapur" },
        { id: 1803, name: "Kiphire" },
        { id: 1804, name: "Kohima" },
        { id: 1805, name: "Longleng" },
        { id: 1806, name: "Mokokchung" },
        { id: 1807, name: "Mon" },
        { id: 1808, name: "Noklak" },
        { id: 1809, name: "Peren" },
        { id: 1810, name: "Phek" },
        { id: 1811, name: "Shamator" },
        { id: 1812, name: "Tseminyu" },
        { id: 1813, name: "Tuensang" },
        { id: 1814, name: "Wokha" },
        { id: 1815, name: "Zunheboto" },
      ],
    },
    {
      id: 19,
      unionTerritories: false,
      name: "Odisha",
      iso2: "OR",
      districts: [
        { id: 1901, name: "Angul" },
        { id: 1902, name: "Balangir" },
        { id: 1903, name: "Balasore" },
        { id: 1904, name: "Bargarh" },
        { id: 1905, name: "Bhadrak" },
        { id: 1906, name: "Boudh" },
        { id: 1907, name: "Cuttack" },
        { id: 1908, name: "Deogarh" },
        { id: 1909, name: "Dhenkanal" },
        { id: 1910, name: "Gajapati" },
        { id: 1911, name: "Ganjam" },
        { id: 1912, name: "Jagatsinghpur" },
        { id: 1913, name: "Jajpur" },
        { id: 1914, name: "Jharsuguda" },
        { id: 1915, name: "Kalahandi" },
        { id: 1916, name: "Kandhamal" },
        { id: 1917, name: "Kendrapara" },
        { id: 1918, name: "Kendujhar (Keonjhar)" },
        { id: 1919, name: "Khordha" },
        { id: 1920, name: "Koraput" },
        { id: 1921, name: "Malkangiri" },
        { id: 1922, name: "Mayurbhanj" },
        { id: 1923, name: "Nabarangpur" },
        { id: 1924, name: "Nayagarh" },
        { id: 1925, name: "Nuapada" },
        { id: 1926, name: "Puri" },
        { id: 1927, name: "Rayagada" },
        { id: 1928, name: "Sambalpur" },
        { id: 1929, name: "Subarnapur (Sonepur)" },
        { id: 1930, name: "Sundargarh" },
      ],
    },
    {
      id: 20,
      unionTerritories: false,
      name: "Punjab",
      iso2: "PB",
      districts: [
        { id: 2001, name: "Amritsar" },
        { id: 2002, name: "Barnala" },
        { id: 2003, name: "Bathinda" },
        { id: 2004, name: "Faridkot" },
        { id: 2005, name: "Fatehgarh Sahib" },
        { id: 2006, name: "Fazilka" },
        { id: 2007, name: "Ferozepur" },
        { id: 2008, name: "Gurdaspur" },
        { id: 2009, name: "Hoshiarpur" },
        { id: 2010, name: "Jalandhar" },
        { id: 2011, name: "Kapurthala" },
        { id: 2012, name: "Ludhiana" },
        { id: 2013, name: "Mansa" },
        { id: 2014, name: "Moga" },
        { id: 2015, name: "Muktsar" },
        { id: 2016, name: "Pathankot" },
        { id: 2017, name: "Patiala" },
        { id: 2018, name: "Rupnagar" },
        { id: 2019, name: "Sangrur" },
        { id: 2020, name: "SBS Nagar (Shaheed Bhagat Singh Nagar)" },
        { id: 2021, name: "Tarn Taran" },
      ],
    },
    {
      id: 21,
      unionTerritories: false,
      name: "Rajasthan",
      iso2: "RJ",
      districts: [
        { id: 2101, name: "Ajmer" },
        { id: 2102, name: "Alwar" },
        { id: 2103, name: "Banswara" },
        { id: 2104, name: "Baran" },
        { id: 2105, name: "Barmer" },
        { id: 2106, name: "Bharatpur" },
        { id: 2107, name: "Bhilwara" },
        { id: 2108, name: "Bikaner" },
        { id: 2109, name: "Bundi" },
        { id: 2110, name: "Chittorgarh" },
        { id: 2111, name: "Churu" },
        { id: 2112, name: "Dausa" },
        { id: 2113, name: "Dholpur" },
        { id: 2114, name: "Dungarpur" },
        { id: 2115, name: "Hanumangarh" },
        { id: 2116, name: "Jaipur" },
        { id: 2117, name: "Jaisalmer" },
        { id: 2118, name: "Jalore" },
        { id: 2119, name: "Jhalawar" },
        { id: 2120, name: "Jhunjhunu" },
        { id: 2121, name: "Jodhpur" },
        { id: 2122, name: "Karauli" },
        { id: 2123, name: "Kota" },
        { id: 2124, name: "Nagaur" },
        { id: 2125, name: "Pali" },
        { id: 2126, name: "Pratapgarh" },
        { id: 2127, name: "Rajsamand" },
        { id: 2128, name: "Sawai Madhopur" },
        { id: 2129, name: "Sikar" },
        { id: 2130, name: "Sirohi" },
        { id: 2131, name: "Sri Ganganagar" },
        { id: 2132, name: "Tonk" },
        { id: 2133, name: "Udaipur" },
      ],
    },
    {
      id: 22,
      unionTerritories: false,
      name: "Sikkim",
      iso2: "SK",
      districts: [
        { id: 2201, name: "East Sikkim" },
        { id: 2202, name: "North Sikkim" },
        { id: 2203, name: "South Sikkim" },
        { id: 2204, name: "West Sikkim" },
      ],
    },
    {
      id: 23,
      unionTerritories: false,
      name: "Tamil Nadu",
      iso2: "TN",
      districts: [
        { id: 2301, name: "Ariyalur" },
        { id: 2302, name: "Chengalpattu" },
        { id: 2303, name: "Chennai" },
        { id: 2304, name: "Coimbatore" },
        { id: 2305, name: "Cuddalore" },
        { id: 2306, name: "Dharmapuri" },
        { id: 2307, name: "Dindigul" },
        { id: 2308, name: "Erode" },
        { id: 2309, name: "Kallakurichi" },
        { id: 2310, name: "Kancheepuram" },
        { id: 2311, name: "Karur" },
        { id: 2312, name: "Krishnagiri" },
        { id: 2313, name: "Madurai" },
        { id: 2314, name: "Mayiladuthurai" },
        { id: 2315, name: "Nagapattinam" },
        { id: 2316, name: "Namakkal" },
        { id: 2317, name: "Nilgiris" },
        { id: 2318, name: "Perambalur" },
        { id: 2319, name: "Pudukkottai" },
        { id: 2320, name: "Ramanathapuram" },
        { id: 2321, name: "Ranipet" },
        { id: 2322, name: "Salem" },
        { id: 2323, name: "Sivaganga" },
        { id: 2324, name: "Tenkasi" },
        { id: 2325, name: "Thanjavur" },
        { id: 2326, name: "Theni" },
        { id: 2327, name: "Thoothukudi" },
        { id: 2328, name: "Tiruchirappalli" },
        { id: 2329, name: "Tirunelveli" },
        { id: 2330, name: "Tirupathur" },
        { id: 2331, name: "Tiruppur" },
        { id: 2332, name: "Tiruvallur" },
        { id: 2333, name: "Tiruvannamalai" },
        { id: 2334, name: "Tiruvarur" },
        { id: 2335, name: "Vellore" },
        { id: 2336, name: "Villupuram" },
        { id: 2337, name: "Virudhunagar" },
      ],
    },
    {
      id: 24,
      unionTerritories: false,
      name: "Telangana",
      iso2: "TG",
      districts: [
        { id: 2401, name: "Adilabad" },
        { id: 2402, name: "Bhadradri Kothagudem" },
        { id: 2403, name: "Hyderabad" },
        { id: 2404, name: "Jagtial" },
        { id: 2405, name: "Jangaon" },
        { id: 2406, name: "Jayashankar Bhupalpally" },
        { id: 2407, name: "Jogulamba Gadwal" },
        { id: 2408, name: "Kamareddy" },
        { id: 2409, name: "Karimnagar" },
        { id: 2410, name: "Khammam" },
        { id: 2411, name: "Komaram Bheem Asifabad" },
        { id: 2412, name: "Mahabubabad" },
        { id: 2413, name: "Mahabubnagar" },
        { id: 2414, name: "Mancherial" },
        { id: 2415, name: "Medak" },
        { id: 2416, name: "Medchal–Malkajgiri" },
        { id: 2417, name: "Mulugu" },
        { id: 2418, name: "Nagarkurnool" },
        { id: 2419, name: "Nalgonda" },
        { id: 2420, name: "Narayanpet" },
        { id: 2421, name: "Nirmal" },
        { id: 2422, name: "Nizamabad" },
        { id: 2423, name: "Peddapalli" },
        { id: 2424, name: "Rajanna Sircilla" },
        { id: 2425, name: "Rangareddy" },
        { id: 2426, name: "Sangareddy" },
        { id: 2427, name: "Siddipet" },
        { id: 2428, name: "Suryapet" },
        { id: 2429, name: "Vikarabad" },
        { id: 2430, name: "Wanaparthy" },
        { id: 2431, name: "Warangal Rural" },
        { id: 2432, name: "Warangal Urban" },
        { id: 2433, name: "Yadadri Bhuvanagiri" },
      ],
    },
    {
      id: 25,
      unionTerritories: false,
      name: "Tripura",
      iso2: "TR",
      districts: [
        { id: 2501, name: "Dhalai" },
        { id: 2502, name: "Gomati" },
        { id: 2503, name: "Khowai" },
        { id: 2504, name: "North Tripura" },
        { id: 2505, name: "Sepahijala" },
        { id: 2506, name: "South Tripura" },
        { id: 2507, name: "Unakoti" },
        { id: 2508, name: "West Tripura" },
      ],
    },
    {
      id: 26,
      unionTerritories: false,
      name: "Uttar Pradesh",
      iso2: "UP",
      districts: [
        { id: 2601, name: "Agra" },
        { id: 2602, name: "Aligarh" },
        { id: 2603, name: "Ambedkar Nagar" },
        { id: 2604, name: "Amethi" },
        { id: 2605, name: "Amroha" },
        { id: 2606, name: "Auraiya" },
        { id: 2607, name: "Ayodhya" },
        { id: 2608, name: "Azamgarh" },
        { id: 2609, name: "Baghpat" },
        { id: 2610, name: "Bahraich" },
        { id: 2611, name: "Ballia" },
        { id: 2612, name: "Balrampur" },
        { id: 2613, name: "Banda" },
        { id: 2614, name: "Barabanki" },
        { id: 2615, name: "Bareilly" },
        { id: 2616, name: "Basti" },
        { id: 2617, name: "Bhadohi" },
        { id: 2618, name: "Bijnor" },
        { id: 2619, name: "Budaun" },
        { id: 2620, name: "Bulandshahr" },
        { id: 2621, name: "Chandauli" },
        { id: 2622, name: "Chitrakoot" },
        { id: 2623, name: "Deoria" },
        { id: 2624, name: "Etah" },
        { id: 2625, name: "Etawah" },
        { id: 2626, name: "Farrukhabad" },
        { id: 2627, name: "Fatehpur" },
        { id: 2628, name: "Firozabad" },
        { id: 2629, name: "Gautam Buddh Nagar" },
        { id: 2630, name: "Ghaziabad" },
        { id: 2631, name: "Ghazipur" },
        { id: 2632, name: "Gonda" },
        { id: 2633, name: "Gorakhpur" },
        { id: 2634, name: "Hamirpur" },
        { id: 2635, name: "Hapur" },
        { id: 2636, name: "Hardoi" },
        { id: 2637, name: "Hathras" },
        { id: 2638, name: "Jalaun" },
        { id: 2639, name: "Jaunpur" },
        { id: 2640, name: "Jhansi" },
        { id: 2641, name: "Kannauj" },
        { id: 2642, name: "Kanpur Dehat" },
        { id: 2643, name: "Kanpur Nagar" },
        { id: 2644, name: "Kasganj" },
        { id: 2645, name: "Kaushambi" },
        { id: 2646, name: "Kheri" },
        { id: 2647, name: "Kushinagar" },
        { id: 2648, name: "Lalitpur" },
        { id: 2649, name: "Lucknow" },
        { id: 2650, name: "Mahoba" },
        { id: 2651, name: "Mainpuri" },
        { id: 2652, name: "Mathura" },
        { id: 2653, name: "Mau" },
        { id: 2654, name: "Meerut" },
        { id: 2655, name: "Mirzapur" },
        { id: 2656, name: "Moradabad" },
        { id: 2657, name: "Muzaffarnagar" },
        { id: 2658, name: "Pilibhit" },
        { id: 2659, name: "Pratapgarh" },
        { id: 2660, name: "Rae Bareli" },
        { id: 2661, name: "Rampur" },
        { id: 2662, name: "Saharanpur" },
        { id: 2663, name: "Sambhal" },
        { id: 2664, name: "Sant Kabir Nagar" },
        { id: 2665, name: "Shahjahanpur" },
        { id: 2666, name: "Shamli" },
        { id: 2667, name: "Shravasti" },
        { id: 2668, name: "Siddharthnagar" },
        { id: 2669, name: "Sitapur" },
        { id: 2670, name: "Sonbhadra" },
        { id: 2671, name: "Sultanpur" },
        { id: 2672, name: "Unnao" },
        { id: 2673, name: "Varanasi" },
      ],
    },
    {
      id: 27,
      unionTerritories: false,
      name: "Uttarakhand",
      iso2: "UT",
      districts: [
        { id: 2701, name: "Almora" },
        { id: 2702, name: "Bageshwar" },
        { id: 2703, name: "Chamoli" },
        { id: 2704, name: "Champawat" },
        { id: 2705, name: "Dehradun" },
        { id: 2706, name: "Haridwar" },
        { id: 2707, name: "Nainital" },
        { id: 2708, name: "Pauri Garhwal" },
        { id: 2709, name: "Pithoragarh" },
        { id: 2710, name: "Rudraprayag" },
        { id: 2711, name: "Tehri Garhwal" },
        { id: 2712, name: "Udham Singh Nagar" },
        { id: 2713, name: "Uttarkashi" },
      ],
    },
    {
      id: 28,
      unionTerritories: false,
      name: "West Bengal",
      iso2: "WB",
      districts: [
        { id: 2801, name: "Alipurduar" },
        { id: 2802, name: "Bankura" },
        { id: 2803, name: "Birbhum" },
        { id: 2804, name: "Cooch Behar" },
        { id: 2805, name: "Dakshin Dinajpur" },
        { id: 2806, name: "Darjeeling" },
        { id: 2807, name: "Hooghly" },
        { id: 2808, name: "Howrah" },
        { id: 2809, name: "Jalpaiguri" },
        { id: 2810, name: "Jhargram" },
        { id: 2811, name: "Kalimpong" },
        { id: 2812, name: "Kolkata" },
        { id: 2813, name: "Malda" },
        { id: 2814, name: "Murshidabad" },
        { id: 2815, name: "Nadia" },
        { id: 2816, name: "North 24 Parganas" },
        { id: 2817, name: "Paschim Bardhaman" },
        { id: 2818, name: "Paschim Medinipur" },
        { id: 2819, name: "Purba Bardhaman" },
        { id: 2820, name: "Purba Medinipur" },
        { id: 2821, name: "Purulia" },
        { id: 2822, name: "South 24 Parganas" },
        { id: 2823, name: "Uttar Dinajpur" },
      ],
    },
    {
      id: 29,
      unionTerritories: true,
      name: "Andaman and Nicobar Islands",
      iso2: "AN",
      districts: [
        { id: 2901, name: "Nicobar" },
        { id: 2902, name: "North and Middle Andaman" },
        { id: 2903, name: "South Andaman" },
      ],
    },
    {
      id: 30,
      unionTerritories: true,
      name: "Chandigarh",
      iso2: "CH",
      districts: [{ id: 3001, name: "Chandigarh" }],
    },
    {
      id: 31,
      unionTerritories: true,
      name: "Dadra and Nagar Haveli and Daman and Diu",
      iso2: "DN",
      districts: [
        { id: 3101, name: "Dadra and Nagar Haveli" },
        { id: 3102, name: "Daman" },
        { id: 3103, name: "Diu" },
      ],
    },
    {
      id: 32,
      unionTerritories: true,
      name: "Lakshadweep",
      iso2: "LD",
      districts: [{ id: 3201, name: "Lakshadweep" }],
    },
    {
      id: 33,
      unionTerritories: true,
      name: "Delhi",
      iso2: "DL",
      districts: [
        { id: 3301, name: "Central Delhi" },
        { id: 3302, name: "East Delhi" },
        { id: 3303, name: "New Delhi" },
        { id: 3304, name: "North Delhi" },
        { id: 3305, name: "North East Delhi" },
        { id: 3306, name: "North West Delhi" },
        { id: 3307, name: "Shahdara" },
        { id: 3308, name: "South Delhi" },
        { id: 3309, name: "South East Delhi" },
        { id: 3310, name: "South West Delhi" },
        { id: 3311, name: "West Delhi" },
      ],
    },
    {
      id: 34,
      unionTerritories: true,
      name: "Puducherry",
      iso2: "PY",
      districts: [
        { id: 3401, name: "Karaikal" },
        { id: 3402, name: "Mahe" },
        { id: 3403, name: "Puducherry" },
        { id: 3404, name: "Yanam" },
      ],
    },
  ],
};
// Endpoint to fetch all states and their districts
app.get("/api/states", (req, res) => {
  const states = statesAndDistrictsAndUnionTerritories.states.map((i) => {
    return {
      id: i.id,
      name: i.name,
      iso2: i.iso2
    }
  });

  res.json({states: states});
});

// Endpoint to fetch districts of a specific state
app.get("/api/districts/:state", (req, res) => {
  const state = req.params.state.split(":");
  const stateDetails = statesAndDistrictsAndUnionTerritories.states.filter(
    (i) => {
      if (i.iso2 === state[1]) {
        return i;
      }
    }
  );
  if (stateDetails) {
    res.json({
      state: stateDetails[0].name,
      districts: stateDetails[0].districts,
    });
  } else {
    res.status(404).json({ message: `State '${state}' not found` });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
