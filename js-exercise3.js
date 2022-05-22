// JavaScript Exercise

//  1. Counting the number of characters in a string

function countChars(str) {
  return (str.length)
}

console.log('No.of.Characters: ' + countChars('welcome'))

// 2. function that accepts two numbers and return the largest of the two

function largest(a, b) {
  // return Math.max(a,b)
  if (a > b) {
    return (a)
  }
  else {
    return (b)
  }

}

console.log('The largest number is:' + largest(562, 40))

// 3. function that returns boolean flag if a number is between 5000 and 9999

function rangeNumbers(r) {
  if (r >= 5000 && r <= 9999) {
    return true
  }
  else {
    return false
  }
}

console.log(rangeNumbers(6000))
console.log(rangeNumbers(5000))

// 4. function that accepts a number and returns the cube root of the number

function cubeRoot(c) {
  var cr
  cr = Math.cbrt(c)
  return cr
}

console.log('Cuberoot: ' + cubeRoot(27))

// 5. function that converts inches into feet ; feet = inches / 12
function inchFeet(val) {

  return (val / 12)

}

console.log(inchFeet(20))

// 6. function that converts degrees to fahrenheit fah=(deg*9/5)+32
function degtoFah(deg) {
  return (deg * 9 / 5) + 32
}

console.log(degtoFah(5))

// 7. function that converts kilograms to pounds and vice versa

function kgTopd(k)  // pd=kg*2.205
{
  return (k * 2.205)
}
function pdTokg(p)//kg=pd/2.205
{
  return (p / 2.205)
}
var e = pdTokg(72);
e = e.toFixed(4)
var f = kgTopd(52);
f = f.toFixed(4);
console.log('Kilogram to Pound: ' + f)
console.log('Pound to Kilogram: ' + e)

// 8. create a json file that has a list of atleast 10 states in USA with atleast 8 properties

var usStates = [
  {
    name: 'California',
    abbr: 'CA',
    nickName: "The Golden Gate",
    capital: "Sacramento",
    population: 524943,

    importantCities: [
      {
        name: "Los Angeles",
        languagesSpoken: [
          "english",
          "spanish"
        ],
        popularSports: "Baseball"
      },
      {
        name: "San Francisco",
        languagesSpoken: [
          "english",
          "chinese "
        ],
        popularSports: "Soccer"
      }
    ],
    area: 163696,
    attractions: [
      "San Francisco and the Golden Gate Bridge",
      "Yosemite National Park",
      " Disneyland"
    ],
    popularDish: "Avacado Toast",
    timeZone: "PST"
  },

  {
    name: "Washington",
    abbr: "WA",
    nickName: "The Evergreen Gate",
    capital: "Olympia",
    population: 46478,
    importantCities: [
      {
        name: "Seattle",
        languagesSpoken: [
          "english",
          "chinese"
        ],
        popularSports: "Football"
      },
      {
        name: "Vancouver",
        languagesSpoken: [
          "english",
          "french"
        ],
        popularSports: "Hockey"
      }
    ],
    area: 71298,
    attractions: [
      "Olympic National Park",
      "Seattle Center and the Space Needle",
      " San Juan Islands"
    ],
    popularDish: "Seafood Chowder",
    timeZone: "EST"
  }
]

console.log(usStates[1].nickName)

console.log(usStates[0].importantCities[0].name)
console.log(usStates[1].attractions[1])

// 9.create a json object for cricket team. it should contain details about team and its players

var cricketTeams =
  [
    {
      name: "India",
      board: "BCCI",
      headcoach: "Ravi Shastri",
      captain: "Virat Kohli",
      worldcupwon: 1,
      wicketkeeper: "Rishab Pant",
      players: [
        {
          name: "Virat Kohli",
          dob: "1988-11-05",
          batting: "Right",
          bowlingstyle: "Right-arm medium"
        },
        {
          name: "Rohit Sharma",
          dob: "1987-30-04",
          batting: "Right",
          bowlingstyle: "Right-arm off-spin"
        },

      ]
    },
    {
      name: "England",
      board: "ECB",
      headcoach: "Brendon McCullum",
      captain: "Eoin Morgan",
      worldcupwon: 1,
      wicketkeeper: "Alan Knott",
      players: [
        {
          name: "Eoin Morgan",
          dob: "1986-10-09",
          batting: "Left",
          bowlingstyle: "Right-arm medium"
        },
        {
          name: "Jos Buttler",
          dob: "1990-08-09",
          batting: "Right",
          bowlingstyle: "-"
        }

      ]
    }
  ]

console.log(cricketTeams[1].captain)
console.log(cricketTeams[0].players[1].name)

// 10. function that returns the longest string if two strings are given as input

function longestString(str1, str2) {
  var i = str1.length
  var j = str2.length
  if (i > j) {
    return str1
  }

  else {
    return str2

  }
}

console.log("Longest String is: " + longestString('hello', 'welcome'))

// 11. function that returns the string of shortest length if an array is passed as a parameter

function getLongestString(str) {
  var maxLength = str.length
  var smallest

  smallest = str[0]

  for (i = 0; i < maxLength; i++) {
    if (str[i].length <= smallest.length) {
      smallest = str[i]
    }
  }
  return smallest
}
var s = ['aa', 'aaa', 'aaaa', 'fgfgfgfgf']
//var maxLength=s.length
//console.log("ml: " + maxLength)
console.log(getLongestString(s))

