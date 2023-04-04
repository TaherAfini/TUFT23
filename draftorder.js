$("document").ready(() => {
    $("button").click(() => {
        $("button").remove()
        $(".list").css('display', 'block')
        draft()
    })
})


const draft = async() => {

    let captains = ['Burhanuddin Danish', 'Taha Lokhandwala', 'Ebraheem Raja', 'Ammar Zumkhawala', 'Ahmed Hussain', 'Mohammed Danish', 'Husain Udaipurwala', 'Hussain Bhagat', 'Mansoor Poonawala', 'Husain Attarwala']

    let captainsLeft = [...captains]
    
    while (captainsLeft.length > 0) {
        let i = Math.floor(Math.random()*captainsLeft.length)
        let captain = captainsLeft[i]
        let captainName = $("<li></li>").text(captain)
        $("#captainList").append(captainName) 
        console.log(captain)
        await new Promise(r => setTimeout(r, 2000));
        captainsLeft = captainsLeft.filter((e) => {
            return e != captain
        })
    }
}