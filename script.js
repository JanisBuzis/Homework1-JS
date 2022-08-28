//Задание 1
let a = 5
let b = 92
let c = 14

if (a > b){
  console.log (а)
} else if (b > c){
  console.log (b)
} else if (c > a) {
  console.log (c)
} else {
  console.log ('Все переменные равны')
}

//Задание 2
let word_1 = "клавиатура"
let word_2 = "мышь"

if (word_1.length > word_2.length ){
  console.log (word_1)
} else if (word_2.length > word_1.length ) {
  console.log (word_2)
}

//Задание 3
let temp = 17
let weather = 'clear'
let activity = 0

if (temp >= 30 && weather == 'clear') {
  console.log (activity = 'golf')
} else if (temp >= 10 && temp <= 25 && weather == 'clear') {
  console.log (activity = 'bowling')
} else {
  console.log (activity = 'hiking')
}