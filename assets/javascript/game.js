var randoms = [];
var wins = 0;
var lose = 0;
var total;
var count;
var bet;
var coins = 900
var bets;
var ruun;
var plusminus;
var start =true;
function ran(pass) {
    return Math.floor((Math.random() * pass) + 1);
}
var ranGuess
reset()
function reset() {
    for (let i = 0; i < 4; i++) {
        var entered = 0;
        randoms[i] = ran(10)}
        ranGuess = ran(102) + 18
        count = 0;
        total = 0
        bet = true
        bets = 100
        if(coins === -100){
            alert( "You are out of coins and can no longer play!")
            start = false
            coins = 0
        }
        $("#rann").html(ranGuess)
        $("#winz").html(wins)
        $("#losez").html(lose)
        $("#countz").html(count)
        $("#totalz").html(total)
        $("#betz").html(bets)
        $("#coinCount").html(coins)
        
    
}
function los(){
    $("#losez").html(lose++)
    bet = false
    coins = coins -100
    console.log("entered")
    setTimeout(reset(),200)
}

$(".betts").on("click", function () {
   plusminus = $(this).attr('value')
   if (bet && start){
    var holder;
    if (plusminus === '0') {
        holder = bets - 100
        if (holder >= 0) {
            coins = coins + 100
            bets = bets - 100
            $("#betz").html(bets)
            $("#coinCount").html(coins)
        }
    }
    else {
        holder = bets + 100

        if ((coins - 100) >= 0) {
            coins = coins - 100
            bets = bets + 100
            $("#betz").html(bets)
            $("#coinCount").html(coins)
        }
        else {
            alert("Cannot bet more coins than you currently have!")
        }
    }
    }
})
$(".fin").on("click", function () {
    bet = false;
})
$(".chip").on("click", function () {
    if (!bet && start) {
        total = total + parseInt(randoms[$(this).attr('value')]);
        count++
        exit = count
        ruun = total
        $("#countz").html(count)
        $("#totalz").html(total)
        
        if (total == ranGuess) {
            
            $("#winz").html(wins++)
            bet = false
            coins = coins + (bets * 2)
            $("#coinCount").html(coins)
            reset()
        }
        else if (ranGuess <total) {
            los()
        }
        else if (count === 15) {
            console.log("heres")
            alert("you are out of cards")
            los()
        } 
    }
})

