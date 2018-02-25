var score1 = 301;
var score2 = 301;


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
        title.innerHTML = "Winner";
    }
    if(score2 === 0){
        title2.innerHTML = "Winner";
    }

}
