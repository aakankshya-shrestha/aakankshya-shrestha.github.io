
var countG = 0; 
var countR = 0; 
var countS = 0; 
var countH = 0;

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function answerG(){ 
	countG = countG+1;
	console.log(countG);


}

function answerR(){
        countR = countR+1;
        console.log(countR);
      
        }

function answerS(){
        countS = countS+1;
        console.log(countS);
        }

function answerH(){
        countH = countH+1;
        console.log(countH);
        }
function retakeQuiz(){
        window.location="HPQlanding.html";
}

function getGryffindor() {
        document.getElementById("welcome-textGryffindor").style.display="block";
        document.getElementById("content").style.display = "none";
        document.getElementById("result").style.display = "none";
        
        
}
function getRavenclaw(){
        document.getElementById("welcome-textRavenclaw").style.display="block";
        document.getElementById("content").style.display = "none";
        document.getElementById("result").style.display = "none";
}
function getSlytherin(){
        document.getElementById("welcome-textSlytherin").style.display="block";
        document.getElementById("content").style.display = "none";
        document.getElementById("result").style.display = "none";
}
function getHufflepuff(){
        document.getElementById("welcome-textHufflepuff").style.display="block";
        document.getElementById("content").style.display = "none";
        document.getElementById("result").style.display = "none";
}

function calcResult(){
	on()
	validateForm()
        if(countG>countS && countG>countR && countG>countH){

                getGryffindor();
                console.log("Gryffinfdor!");
        }

        else if (countR>countG && countR>countH && countR>countS) {
                getRavenclaw();
                console.log("Ravenclaw!!");
        }

        else if (countH>countG && countH>countR && countH>countS){
                getHufflepuff();
                console.log("Hufflepuff!!");
        }

        else if (countS>countH && countS>countG&& countS>countR){
                getSlytherin();
                console.log("Slytherin!!");
        }

        else if(countG==countR || countG==countH || countG==countS){
                getGryffindor();
                console.log("Gryffinfdor!");

        } 
        else if (countS==countR|| countS==countH){
                getSlytherin();
                console.log("Slytherin!!");

        }
        else if (countH==countR){
                getHufflepuff();
                console.log("Hufflepuff!!");
        }

        else {
                getRavenclaw();
                console.log("Ravenclaw!!");
                
        }

        	
}
function validateForm() {
    var radios = document.getElementsByName("que");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) 
                { formValid = radios[i].value; }
        i++;        
    }

    if (!formValid) {
        alert("You haven't completed the quiz!");
        window.location="HPQquiz.html";
}


}


