const companies =[{
    "id": 1,
    "first_name": "Mellicent",
    "last_name": "Yarnley",
    "email": "myarnley0@bbc.co.uk",
    "gender": "Female",
    "ip_address": "25.182.124.95"
}, {
    "id": 2,
    "first_name": "Kaylee",
    "last_name": "Real",
    "email": "kreal1@wikispaces.com",
    "gender": "Female",
    "ip_address": "200.240.117.2"
}, {
    "id": 3,
    "first_name": "Davis",
    "last_name": "Dolby",
    "email": "ddolby2@sun.com",
    "gender": "Male",
    "ip_address": "52.233.134.158"
}, {
    "id": 4,
    "first_name": "Matteo",
    "last_name": "Reen",
    "email": "mreen3@economist.com",
    "gender": "Male",
    "ip_address": "91.185.92.156"
}, {
    "id": 5,
    "first_name": "Emmott",
    "last_name": "Kleinstein",
    "email": "ekleinstein4@europa.eu",
    "gender": "Male",
    "ip_address": "120.100.248.64"
}, {
    "id": 6,
    "first_name": "Emmaline",
    "last_name": "Grono",
    "email": "egrono5@slideshare.net",
    "gender": "Female",
    "ip_address": "242.37.5.146"
}, {
    "id": 7,
    "first_name": "Tobin",
    "last_name": "Gelly",
    "email": "tgelly6@usatoday.com",
    "gender": "Male",
    "ip_address": "41.215.244.228"
}, {
    "id": 8,
    "first_name": "Freeman",
    "last_name": "Dansken",
    "email": "fdansken7@statcounter.com",
    "gender": "Male",
    "ip_address": "200.29.136.24"
}, {
    "id": 9,
    "first_name": "Hilly",
    "last_name": "Stigell",
    "email": "hstigell8@free.fr",
    "gender": "Male",
    "ip_address": "237.133.247.35"
}, {
    "id": 10,
    "first_name": "Dyana",
    "last_name": "Alyonov",
    "email": "dalyonov9@guardian.co.uk",
    "gender": "Female",
    "ip_address": "214.66.169.60"
}, {
    "id": 11,
    "first_name": "Patrizia",
    "last_name": "Cockin",
    "email": "pcockina@nytimes.com",
    "gender": "Female",
    "ip_address": "191.113.59.76"
}, {
    "id": 12,
    "first_name": "Saw",
    "last_name": "Farndon",
    "email": "sfarndonb@ucla.edu",
    "gender": "Male",
    "ip_address": "216.68.60.29"
}, {
    "id": 13,
    "first_name": "Mannie",
    "last_name": "Rotter",
    "email": "mrotterc@epa.gov",
    "gender": "Male",
    "ip_address": "130.168.6.226"
}, {
    "id": 14,
    "first_name": "Gillan",
    "last_name": "Lyness",
    "email": "glynessd@prnewswire.com",
    "gender": "Female",
    "ip_address": "135.91.52.36"
}, {
    "id": 15,
    "first_name": "Dannel",
    "last_name": "Witcherley",
    "email": "dwitcherleye@seattletimes.com",
    "gender": "Male",
    "ip_address": "67.235.44.16"
}, {
    "id": 16,
    "first_name": "Jerrie",
    "last_name": "Glandon",
    "email": "jglandonf@cnn.com",
    "gender": "Male",
    "ip_address": "178.83.86.119"
}, {
    "id": 17,
    "first_name": "Modesty",
    "last_name": "Dark",
    "email": "mdarkg@blogspot.com",
    "gender": "Female",
    "ip_address": "52.162.72.65"
}, {
    "id": 18,
    "first_name": "Dorolisa",
    "last_name": "Pudan",
    "email": "dpudanh@xinhuanet.com",
    "gender": "Female",
    "ip_address": "253.239.32.217"
}, {
    "id": 19,
    "first_name": "Creigh",
    "last_name": "Cuniam",
    "email": "ccuniami@cafepress.com",
    "gender": "Male",
    "ip_address": "31.230.33.251"
}, {
    "id": 20,
    "first_name": "Case",
    "last_name": "Moses",
    "email": "cmosesj@example.com",
    "gender": "Male",
    "ip_address": "199.219.108.97"
}];

const ages = [33,12,44,55,66,77,88,25,16,17,18,19];


// older way
/*for (let i=0; i<companies.length; i++) {
    console.log(companies[i]);
}*/
//foreach
companies.forEach(company => console.log(company));
//output will print all objects

//filter

// older way
/*let canDrink = [];
for (let i=0; i< ages.length; i++ ) {
    if (ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}*/
// using filter : Get 21 and older on age
const canDrink =ages.filter(age => age >= 21);
console .log('CanDrink Age', canDrink);

// using filter only gender : female

const onlyFemales = companies.filter(company => company.gender==='Female');
console .log('From Companies obj only female', onlyFemales);

// Get firstName starting with C

const getFirstName = companies.filter(company => company.first_name.startsWith('C'));
console .log('firstName starting with C ', getFirstName);

// Get email ends  with .com

const emailDotCom = companies.filter(company => (company.email.endsWith('.com')) && (company.first_name.startsWith('M')));
console .log('Email ends with .com and First Name starts with M  ', emailDotCom);


//map

//create new arrays of anything from the current array
//create array of genders

const maleCompanyNames = companies.map(company => `${company.gender} [${company.first_name}]`);
console.log('Only Gender', maleCompanyNames);
// if you use arrow no return is required just use template string

// create square root of ages

const agesSquare = ages.map(age => Math.sqrt(age));
const ageTimesTwo = ages.map(age => age * 2);
console.log('Age Square, Age Times Two', agesSquare, ageTimesTwo);

//sort
const sortedNames = companies.sort((a,b) => (a.first_name > b.first_name ? 1 : -1));

console.log('Sorted Names', sortedNames);
// output > it will sort all the first name by ascending


//sort ages

const sortAges = ages.sort((a,b) => a- b);
// a- b is ascending order
console.log('sortAges', sortAges);

//reduce

// all ages together

const ageSum =ages.reduce((total, age) => total + age,0 )  ;

// Get total of ids for all companies
const idTotal = companies.reduce((total,company) => total + company.id, 0 );

console.log(`AgeSum: ${ageSum}, idTotal:${idTotal}`);

// combined of all function examples

const combined = ages.map(age => age * 2)
    .filter(age => age >=50)
    .sort((a,b) => a -b)
    .reduce((a,b) => (a+b), 0);

console.log('combined', combined);
