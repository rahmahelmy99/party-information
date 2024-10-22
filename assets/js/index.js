// & slide bar code
$(".openBtn").on("click",function(){
    $(".hidden").animate({width:"252px"},600);
    $(".openBtn").animate({left:"268px"},600);
})
$(".closeBtn").on("click",function(){
    $(".hidden").animate({width:"0px"},600)
    $(".openBtn").animate({left:"20px"},600)
})


// & section singers
const singer1Height = $(".singerInfo>.singer1").innerHeight()
$(".singerInfo>.content").css({height:"0px"})
$(".singerInfo>.singer1").css({height:`${singer1Height+18}`})
let closed = true;
$(".singerInfo>.title").each(function(){
    $(this).next().children().addClass("py-2");
    let pHeight = $(this).next().children().innerHeight();
    
    $(this).on("click",function(){
        if (closed == true){
            $(this).next().animate({height:`${pHeight }px`},600)
            closed = false;
        }else{
            $(this).next().animate({height:`0px`},600)
            closed = true
        }
        $(".singerInfo>.title").next().css({height:"0px"})
        // ^ for all elements hide the content exept the clicked one

    })
});



// & section countdown

window.onload = function(){    
    countUntil("25 october 2025 5:48:18");
}
function countUntil(date) {

    let endDate = (new Date(date)).getTime();
    let now = (new Date()).getTime();
    difference = (endDate- now);

    var days = Math.round(difference / (1000*60*60*24))
    var hours = Math.round(difference / (days*(1000 * 60 *60)) % 24)
    var minutes = Math.round(difference / (days*(1000 * 60)) % 60)
    var seconds = Math.round(difference / (days*(1000)) % 60)
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
            hours--;
            minutes = 59;
            if (hours < 0) {
                days--;
                hours = 23;
                if (days < 0) {
                    days = 0;
                    hours = 0;
                    minutes = 0;
                    seconds = 0;
                }
            }
        }
    }
    console.log(days);
    
    $(".countDay").children().html(`${days} D`)
    $(".countHours").children().html(`${hours} h`)
    $(".countMinutes").children().html(`${minutes} m`)
    $(".countseconds").children().html(`${seconds} s`)
    
    setInterval(function() {countUntil(date); }, 1000);

}
// ^ date is day of (24) + 17hours means on day 25 at 6pm

// & section contact
$("textarea").on("input",function(){
    let counter = 100 - $(this).val().length
    if(counter <= 100 && counter > 0){
        $(".countChar").html( `${counter}`)
    }else if(counter == 0){
        $(".countChar").html("your available character finished")
    }
})











// const specificDate = new Date("July 29, 2025 05:15:00");
// const day = specificDate.getDate();
// const year = specificDate.getFullYear();
// const hours = specificDate.getHours();
// const nowDate = Date.now(); 
// console.log(nowDate/2024);


// console.log(day,year,hours);
// 