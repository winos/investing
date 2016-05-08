'use strict'
let N = require('numeral')

const months = 12
,     marketDays = 22

function calculateProfit (investment, percent) {
  var investment = investment
  let withdrawal = 0
  let fee = 0
  let profitability = (investment + fee) * percent
  return Math.round(profitability)
}

var i = 1
,   profit = 0
,   investment = 10000
,   total = investment
,   percent = 0.80
,   earnDay = 0

while (i <= months) {
  if (i == 1) {
    profit =  calculateProfit(total, 0.95)
  } else {
    profit =  calculateProfit(total, percent)
  }
  earnDay = profit / marketDays
  total += profit
  console.log(`Profitability in month ${i}:`+ N(profit).format('0,0') +
              ` Balance: `+ N(total).format('0,0') +
              ` Earning per day: `+ N(earnDay).format('0,0'))
  i++
}

console.log('total: ', N(total).format('0,0'));
