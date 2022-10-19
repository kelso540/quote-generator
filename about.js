class Time { //gets time and displays it. 
    constructor(){
      this.timeNow = new Date();
      this.timeList = this.timeNow.toString().split(" ");  
    }
  }
let getToday = () => {
let todayDate = new Time();
document.getElementById("time").innerHTML = todayDate.timeList[0] + " " + todayDate.timeList[1] + " " + todayDate.timeList[2]; 
};
getToday(); 