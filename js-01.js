var name = 'Adam' //data type name is string
var age = 30  //number
var address = '123 main street'
var emailAddress = 'adam@test.com'
var isVaccinated = true //boolean

console.log(name)
var cityName //declaration
cityName = 'san francisco' //initialization

console.log(cityName)

var x = 100
var y = 200

console.log(x + y) //addition

var a = 'Adam'
var b = 'Smith'

console.log(a + b) //concatenation 

console.log(x + a) //two different data types, then concatenation

var count = 0
var apples = 5
var oranges = 10

count = apples + oranges
console.log(count)

console.log((1 + 2) + (3 * 2))

console.log(apples != oranges)
console.log(5 < 10)

var small = 30
var big = 20
//if clause
if (small < big) {
    console.log('small is smaller than big')
} else {
    console.log('small is greater than big')
}

//for loop - doing something repeatably
var a = 1
console.log(a)
a = a + 1
console.log(a)
//if we want to do for 10 times, we cant repeat this code instead use for loop
for (var i = 1; i <= 10; i++)  //it will repeat till the condition is true
{
    console.log('now the value of i is: ' + i)
}

var i = 10

while (i < 15) //when condition fails it wont go inside the loop
{
    console.log(i)
    i = i + 1

}
var time = 10
while (time >= 1) {
    console.log(time)
    time = time - 1
}

//objects -- there is a person with properties like name,age,address,email and qualification
var name = 'Adam'
var age = 10
var address = '123 Main Street'
var email = 'adam@test.com'
var qualification = 'high school'

var person = {
    name: 'Adam',
    age: 10,
    address: '123 Main st',
    grade: 10,
    subjects: ['maths', 'science', 'social studies'],  //array is a collection of similar values -- type that holds multiple values of same data type
    hobbies: ['reading', 'writing', 'adventure'], //array of strings
    favoriteNumbers: [10, 100, 50, -7] //number array or array of numbers
}

//console.log(person)
//console.log(person.name)
//console.log(person['name'])
//console.log(person.hobbies)


function printSomething() {
    console.log("hello world!")
}

printSomething()

function addNumbers(a, b) {
    return (a + b)
}

console.log(addNumbers(300, 786))

function findSquares(a) {

    return (a * a)
}

console.log(findSquares(10))

function multiplyNumbers(a, b) {
    var c = a + b
    console.log('now the value is: ' + c)
    var d = c * 10
    console.log('now the value is:' + d)
    return d * d
}

var x = multiplyNumbers(3, 9) + 25
console.log(x)

//function to find longest string when string array is passed as parameter
function getLongestString(str) {
    var maxLength = str.length
    var temp = 0
    console.log("ml: " + maxLength)
    console.log("str: " + str[0])
    var longestString
    for (i = 0; i < maxLength; i++) {
        if (str[i].length >= temp) {
            temp = str[i].length
            longestString = str[i]
        } ``
    }
    return longestString
}
var s = ['a', 'aa', 'aaa', 'aaaa', 'fgfgfgfgf']
//var maxLength=s.length
//console.log("ml: " + maxLength)
console.log(getLongestString(s))



