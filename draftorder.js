$("#generate").click(() => {
    $("#generate").remove()
    $(".list").css('display', 'block')
    draft()
})

$(document).keypress((e) => {
    let key = (e.keyCode ? e.keyCode : e.which);
    console.log("key: " + key);
    if(key === 106) {
        promise = true;
    }
})

let promise = false;

const draft = async() => {

    let captains = ['Burhanuddin Danish', 'Taha Lokhandwala', 'Ebraheem Raja', 'Ammar Zumkhawala', 'Ahmed Hussain', 'Mohammed Danish', 'Husain Udaipurwala', 'Hussain Bhagat', 'Mansoor Poonawala', 'Husain Attarwala', 'Taha Salim', 'Burhanuddin Tambawala']

    let captainsLeft = [...captains]
    
    while (captainsLeft.length > 0) {
        let i = Math.floor(Math.random()*captainsLeft.length)
        let captain = captainsLeft[i]
        let captainName = $("<h3></h3>").text(captain)
        $(".list").append(captainName) 
        captainsLeft = captainsLeft.filter((e) => {
            return e != captain
        })
        while(!promise) {
            await new Promise(r => setTimeout(r, 50))
        }
        promise = false

        if(captainsLeft.length == 1) {
            $("#next").css('display', 'none')
        }
    }

    
}
