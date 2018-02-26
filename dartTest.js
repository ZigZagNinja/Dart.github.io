var score1 = 301;
var score2 = 301;
var bigPoints1 = 0;
var bigPoints2 = 0;

//creator Name placement
/*document.getElementById('creatorName').style.position = "absolute";
document.getElementById('creatorName').style.top = "100px";
document.getElementById('creatorName').style.left = "100px" */


//for 501
function fuenf() {
    score2 = 501;
    score1 = 501;

    document.getElementById('score1').innerHTML = 501;
    document.getElementById('score2').innerHTML = 501;
}


//replaces values
function substitute() {

    var value = document.getElementById('myTextBox').value;
    var value2 = document.getElementById('ding').value;
    var title = document.getElementById('score1');
    var title2 = document.getElementById('score2');


    //zieht geworfene Punkte von gesamten ab (score1)
    score1 = score1 - value;
    //zeigt an wie viele Punkte noch übrig sind für score1
    title.innerHTML = score1;
    document.getElementById("myTextBox").value = "";

    //zieht geworfene Punkte von gesamten ab (score2)
    score2 = score2 - value2;
    //zeigt an wie viele Punkte noch übrig sind für score2
    title2.innerHTML = score2;
    document.getElementById("ding").value = "";



    if(score1 === 0){
        score1 = 301;
        score2 = 301;

        bigPoints1 = bigPoints1 +1;
        var bigPointsTitle = document.getElementById("bigPoints1");
        bigPointsTitle.innerHTML = bigPoints1;
    }
    if(score2 === 0){
        score2 = 301;
        score1 = 301;

        bigPoints2 = bigPoints2 +1;
        var bigPointsTitle2 = document.getElementById("bigPoints2");
        bigPointsTitle2.innerHTML = bigPoints2;
    }


}
