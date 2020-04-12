const lang0: object = require('./0.json')
const lang1: object = require('./1.json')
const lang2: object = require('./2.json')

const lang7: object = require('./7.json')
const lang10: object = require('./10.json')
const langdArray: object[] = [
    lang0, lang1, lang2, lang7, lang10
]
const langdArrayJs: object[] = [
    {
        hostoryData(name:string,award:string){
            return `<span class="text_overFlow">${name}</span>抽中<span class="text_overFlow_two">${award}</span>`
        },
        seaseUrl:"https://wscdn-activities.miniworldgame.com/sales/share/share/january-0.jpg",
        seaseUrlTest:"http://activities-test.mini.me/fe/sales-new-year-overseas/share/january-0.jpg",
        titleIcon:0,
        lotteryIcon:"lotteryIcon0",
        exchangeIcon:"exchangeIcon2",
        ruleIcon:"ruleIcon0"
    },
    {
        hostoryData(name:string,award:string){
            return `<span class="text_overFlow">${name}</span><span style="width:64px;">wins</span><span class="text_overFlow_two">${award}</span>`
        },
        seaseUrl:"https://wscdn-activities.miniworldgame.com/sales/share/january-1.jpg",
        seaseUrlTest:"http://activities-test.mini.me/fe/sales-new-year-overseas/share/january-1.jpg",
        titleIcon:1,
        lotteryIcon:"lotteryIcon1",
        exchangeIcon:"exchangeIcon1",
        ruleIcon:"ruleIcon1"
    },
    {
        hostoryData(name:string,award:string){
            return `<span class="text_overFlow">${name}</span>抽中<span class="text_overFlow_two">${award}</span>`
        },
        seaseUrl:"https://wscdn-activities.miniworldgame.com/sales/share/january-2.jpg",
        seaseUrlTest:"http://activities-test.mini.me/fe/sales-new-year-overseas/share/january-2.jpg",
        titleIcon:2,
        lotteryIcon:"lotteryIcon2",
        exchangeIcon:"exchangeIcon2",
        ruleIcon:"ruleIcon2"
    },
    {
        hostoryData(name:string,award:string){
            return `<span class="text_overFlow">${name}</span>獲得<span class="text_overFlow_two">${award}</span>`
        },
        seaseUrl:"https://wscdn-activities.miniworldgame.com/sales/share/january-7.jpg",
        seaseUrlTest:"http://activities-test.mini.me/fe/sales-new-year-overseas/share/january-7.jpg",
        titleIcon:7,
        lotteryIcon:"lotteryIcon7",
        exchangeIcon:"exchangeIcon7",
        ruleIcon:"ruleIcon7"
    },
    {
        hostoryData(name:string,award:string){
            return `<span class="text_overFlow">${name}</span> đã trúng <span class="text_overFlow_two">${award}</span>`
        },
        seaseUrl:"https://wscdn-activities.miniworldgame.com/sales/share/january-10.jpg",
        seaseUrlTest:"http://activities-test.mini.me/fe/sales-new-year-overseas/share/january-10.jpg",
        titleIcon:10,
        lotteryIcon:"lotteryIcon10",
        exchangeIcon:"exchangeIcon10",
        ruleIcon:"ruleIcon10"
    }
]
export default {
    langdArray,
    langdArrayJs
}