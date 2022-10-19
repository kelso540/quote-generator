
  class Time {
    constructor(){
      this.timeNow = new Date();
      this.timeList = this.timeNow.toString().split(" ");  
    }
  }
let getToday = () => {
let todayDate = new Time();
document.getElementById("time").innerHTML = todayDate.timeList[0] + " " + todayDate.timeList[1] + " " + todayDate.timeList[2]; 
};


    let arrow1 = document.getElementById("arrow1");
    let arrow2 = document.getElementById("arrow2");
    let counter = 1; 
    let changeQuoteUp = () => {
        counter++; 
        if(counter === 1){
            document.getElementById("quoteLine1").style.display = "inline";
            document.getElementById("quoteLine2").style.display = "none";
            document.getElementById("quoteLine3").style.display = "none";  
        }
        if(counter === 2){
            document.getElementById("quoteLine1").style.display = "none";
            document.getElementById("quoteLine2").style.display = "inline";
            document.getElementById("quoteLine3").style.display = "none"; 
        }
        if(counter === 3){
            document.getElementById("quoteLine1").style.display = "none";
            document.getElementById("quoteLine2").style.display = "none";
            document.getElementById("quoteLine3").style.display = "inline"; 
        }
        if (counter >= 3){
            counter = 3; 
        }
    }
    let changeQuoteDown = () => {
        counter--;
        if(counter === 1){
            document.getElementById("quoteLine1").style.display = "inline";
            document.getElementById("quoteLine2").style.display = "none";
            document.getElementById("quoteLine3").style.display = "none";  
        }
        if(counter === 2){
            document.getElementById("quoteLine1").style.display = "none";
            document.getElementById("quoteLine2").style.display = "inline";
            document.getElementById("quoteLine3").style.display = "none"; 
        }
        if(counter === 3){
            document.getElementById("quoteLine1").style.display = "none";
            document.getElementById("quoteLine2").style.display = "none";
            document.getElementById("quoteLine3").style.display = "inline"; 
        }
        if (counter <= 1){
            counter = 1; 
        } 
    }
    arrow1.addEventListener("click", changeQuoteDown); 
    arrow2.addEventListener("click", changeQuoteUp);

    document.querySelector(".smCopy").addEventListener("click", function () {
        let randQuote;
        let authorQuote;
        if(counter === 1){
          randQuote = document.getElementById("quoteCopier1").innerHTML;
          authorQuote = document.getElementById("authorCopier1").innerHTML; 
        }
        if(counter === 2){
          randQuote = document.getElementById("quoteCopier2").innerHTML;
          authorQuote = document.getElementById("authorCopier2").innerHTML; 
        }
        if(counter === 3){
          randQuote = document.getElementById("quoteCopier3").innerHTML;
          authorQuote = document.getElementById("authorCopier3").innerHTML; 
        }
          navigator.clipboard.writeText(randQuote + " " + authorQuote).then(() => {
                        alert("Quote copied to clipboard");
                        })
                    }
                    );
getToday();