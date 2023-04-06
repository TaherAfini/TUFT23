const fs = require('fs')

let captains = ['Burhanuddin Danish', 'Taha Lokhandwala', 'Ebraheem Raja', 'Ammar Zumkhawala', 'Ahmed Hussain', 'Mohammed Danish', 'Husain Udaipurwala', 'Hussain Bhagat', 'Mansoor Poonawala', 'Husain Attarwala', 'Taha Salim', 'Burhanuddin Tambawala']

rounds = 1000000

let stats = {}

captains.map((n) => {
    stats[n] = {
        1: 0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0,
        12:0
    }
})
    
for(let i = 0; i < rounds; i++) {

    let counter = 0
    let captainsLeft = [...captains]

    while (captainsLeft.length > 0) {
        let i = Math.floor(Math.random()*captainsLeft.length)
        let captain = captainsLeft[i]
        counter++
        // console.log(counter + ": " + captain);
        stats[captain][counter]++
        captainsLeft = captainsLeft.filter((e) => {
            return e != captain
        })
    }
}

captains.map((n) => {
    stats[n][1] = (stats[n][1]/rounds)*100
    stats[n][2] = (stats[n][2]/rounds)*100
    stats[n][3] = (stats[n][3]/rounds)*100
    stats[n][4] = (stats[n][4]/rounds)*100
    stats[n][5] = (stats[n][5]/rounds)*100
    stats[n][6] = (stats[n][6]/rounds)*100
    stats[n][7] = (stats[n][7]/rounds)*100
    stats[n][8] = (stats[n][8]/rounds)*100
    stats[n][9] = (stats[n][9]/rounds)*100
    stats[n][10] = (stats[n][10]/rounds)*100
    stats[n][11] = (stats[n][11]/rounds)*100
    stats[n][12] = (stats[n][12]/rounds)*100
})

console.log(stats);