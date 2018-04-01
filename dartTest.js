 function delay(ms) {
        var cur_d = new Date();
        var cur_ticks = cur_d.getTime();
        var ms_passed = 0;
        while(ms_passed < ms) {
            var d = new Date();  // Possible memory leak?
            var ticks = d.getTime();
            ms_passed = ticks - cur_ticks;
            // d = null;  // Prevent memory leak?
        }
    }








var score1 = 301;
var score2 = 301;
var bigPoints1 = 0;
var bigPoints2 = 0;

var i = 0;

var pointArr = [];
var pointArr2 = [];

//creator Name placement
/*document.getElementById('creatorName').style.position = "absolute";
document.getElementById('creatorName').style.top = "100px";
document.getElementById('creatorName').style.left = "100px" */

function undo(){
    document.getElementById("myTextBox").value = "undo";
    substitute();
    delay(200);
    substitute();
}


function undo2(){
    document.getElementById("ding").value = "undo";
    substitute();
}



//for 501
function fuenf() {
    score2 = 501;
    score1 = 501;

    document.getElementById('score1').innerHTML = 501;
    document.getElementById('score2').innerHTML = 501;
}



//replaces values
function substitute() {

    if(isNaN(document.getElementById('myTextBox').value) == false){

        if(isNaN(document.getElementById('ding').value) == false){

            if(score1 - document.getElementById('myTextBox').value > 0){

                if(score1 - document.getElementById('ding').value > 0){

                        pointArr[i] = document.getElementById('myTextBox').value;
                        pointArr2[i] = document.getElementById('ding').value;
                                    var title = document.getElementById('score1');
                                    var title2 = document.getElementById('score2');



                                    //zieht geworfene Punkte von gesamten ab (score1)
                                    score1 = score1 - pointArr[i];
                                    //zeigt an wie viele Punkte noch übrig sind für score1
                                    title.innerHTML = score1;
                                    document.getElementById("myTextBox").value = "";

                                    //zieht geworfene Punkte von gesamten ab (score2)
                                    score2 = score2 - pointArr2[i];
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


                                    console.log(pointArr);
                                    console.log(pointArr2);

                }

            }

        }
        else{
            if(document.getElementById("ding").value == "undo"){
            score2 = score2 + Number(pointArr2[i-1]);
            console.log("dings2 :" + pointArr2[i-1]);
            }
        }


    }
    else{
        if(document.getElementById("myTextBox").value == "undo"){
            score1 = score1 + Number(pointArr[i-1]);
            console.log("dings_:" + pointArr[i-1]);
        }
    }




    document.getElementById("myTextBox").value = "";
    document.getElementById("ding").value = "";

     i = i +1;

}
