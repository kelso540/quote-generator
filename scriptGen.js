class Time {
    constructor() {
      this.timeNow = new Date();
      this.timeList = this.timeNow.toString().split(" ");
    }
  }
  let getToday = () => {
    let todayDate = new Time();
    document.getElementById("time").innerHTML = todayDate.timeList[0] + " " + todayDate.timeList[1] + " " + todayDate.timeList[2];
  }
  
  document.querySelector(".smCopy").addEventListener("click", function() {
    let randQuote = document.getElementById("randQuote").innerHTML;
    let authorQuote = document.getElementById("authorQuote").innerHTML;
    navigator.clipboard.writeText(randQuote + " " + authorQuote).then(() => {
      alert("Quote copied to clipboard");
    })
  }
  );
  
  let selector = {
    starDiv: document.querySelector(".ratings"),
    randQuoteText: document.getElementById("randQuote"),
    randAuthorText: document.getElementById("authorQuote"),
    generate: document.querySelector(".generate"),
    btnList: document.querySelectorAll(".btn"),
    rateFill: document.getElementById("fill"),
    thankFill: document.getElementById("thank"),
    historyContainer: document.querySelector(".historyScrollContainer"),
    rateHistoryBtn: document.querySelector(".quoteHistory"),
    historyDiv: document.querySelector(".history"),
    clearHistoryBtn: document.querySelector(".histClear"),
    randomQuote: document.querySelector(".randomQuote"),
    clearLastBtn: document.querySelector(".lastClear"),
    rateButton: document.querySelector(".quotGenBtn"),
  };
  
  let values = {
    counter: 0,
    functions: [],
  };
  
  let star = {
    clear: function() {
      for (let i = 0; i < selector.btnList.length; i++) {
        selector.btnList[i].style.backgroundImage = "url('assets/starWhite.png')";
      }
      selector.rateFill.innerHTML = "";
      selector.rateButton.style.display = "none";
    },
    oneStar: function() {
      for (let i = 0; i < selector.btnList.length; i++) {
        if (i < 1) {
          selector.btnList[i].style.backgroundImage = "url('assets/star.png')";
        } else {
          selector.btnList[i].style.backgroundImage = "url('assets/starWhite.png')";
        }
      }
      selector.rateFill.innerHTML = "1 Star";
      selector.rateButton.style.display = "inline";
      selector.thankFill.innerHTML = "";
    },
    twoStar: function() {
      for (let i = 0; i < selector.btnList.length; i++) {
        if (i < 2) {
          selector.btnList[i].style.backgroundImage = "url('assets/star.png')";
        } else {
          selector.btnList[i].style.backgroundImage = "url('assets/starWhite.png')";
        }
      }
      selector.rateFill.innerHTML = "2 Stars";
      selector.rateButton.style.display = "inline";
      selector.thankFill.innerHTML = "";
    },
    threeStar: function() {
      for (let i = 0; i < selector.btnList.length; i++) {
        if (i < 3) {
          selector.btnList[i].style.backgroundImage = "url('assets/star.png')";
        } else {
          selector.btnList[i].style.backgroundImage = "url('assets/starWhite.png')";
        }
      }
      selector.rateFill.innerHTML = "3 Stars";
      selector.rateButton.style.display = "inline";
      selector.thankFill.innerHTML = "";
    },
    fourStar: function() {
      for (let i = 0; i < selector.btnList.length; i++) {
        if (i < 4) {
          selector.btnList[i].style.backgroundImage = "url('assets/star.png')";
        } else {
          selector.btnList[i].style.backgroundImage = "url('assets/starWhite.png')";
        }
      }
      selector.rateFill.innerHTML = "4 Stars";
      selector.rateButton.style.display = "inline";
      selector.thankFill.innerHTML = "";
    },
    fiveStar: function() {
      for (let i = 0; i < selector.btnList.length; i++) {
        if (i < 5) {
          selector.btnList[i].style.backgroundImage = "url('assets/star.png')";
        }
      }
      selector.rateFill.innerHTML = "5 Stars!";
      selector.rateButton.style.display = "inline";
      selector.thankFill.innerHTML = "";
    }
  }
  
  let quote = () => {
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=600")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fillInfo(data);
      });
  };
  let fillInfo = (data) => { 
    let randomNum = Math.floor(Math.random() * 600) + 0;
    let text = data.quotes[randomNum].text;
    let author = data.quotes[randomNum].author;
    selector.randQuoteText.innerHTML = text;
    selector.randAuthorText.innerHTML = author;
    star.clear();
  }
  
  class Function {
    constructor(value) {
      this.value = value;
      this.newDiv = document.createElement("div");
      this.newPLine1 = document.createElement("p");
      this.newPLine2 = document.createElement("p");
      this.newPLine3 = document.createElement("p");
      this.span = document.createElement("a");
      this.span2 = document.createElement("a");
      this.twitterLink = document.createElement("i");
      this.copyLink = document.createElement("i");
    }
    write() {
      this.newDiv.setAttribute("class", "historyLine");
      this.twitterLink.setAttribute("class", "fa-brands fa-twitter");
      this.copyLink.setAttribute("class", "fa-regular fa-copy");
      this.span.setAttribute("class", "smallTwitterIcon");
      this.span.setAttribute("href", "https://twitter.com/share?ref_src=twsrc%5Etfw");
      this.span2.setAttribute("class", "smallCopyIcon");
      this.span2.setAttribute("onclick", "values.functions[" + (this.value - 1) + "].copyMe(" + (this.value - 1) + ")");
      this.newPLine1.innerHTML = selector.randQuoteText.innerHTML;
      this.newPLine2.innerHTML = selector.randAuthorText.innerHTML;
      if (selector.rateFill.innerHTML === "") {
        selector.rateFill.innerHTML = "0 Stars";
      }
      this.newPLine3.innerHTML = "You rated with: " + selector.rateFill.innerHTML;
      this.span.appendChild(this.twitterLink);
      this.span2.appendChild(this.copyLink);
      this.newDiv.appendChild(this.newPLine1);
      this.newDiv.appendChild(this.newPLine2);
      this.newDiv.appendChild(this.newPLine3);
      this.newDiv.appendChild(this.span);
      this.newDiv.appendChild(this.span2);
      selector.historyDiv.appendChild(this.newDiv);
    }
    copyMe(value) {
      let list = document.querySelectorAll(".historyLine");
      let copyText = list[value].innerText;
      navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard");
      });
    }
  }
  
  let fillHistory = () => {
    values.counter++;
    selector.historyContainer.style.display = "block";
    selector.rateHistoryBtn.innerHTML = "Add Quote to List";
    let number = values.counter;
    let quote = new Function(number);
    values.functions.push(quote); //add new object to array to make each comment section separate function.
    quote.write();
    console.log(values.functions);
  };
  
  let clearHistory = () => {
    selector.rateHistoryBtn.innerHTML = "Make List";
    selector.rateFill.innerHTML = "";
    let historyList = document.querySelectorAll(".historyLine");
    for (let i = 0; i < historyList.length; i++) {
      selector.historyDiv.removeChild(historyList[i]);
    }
    star.clear();
    selector.historyContainer.style.display = "none";
    values.counter = 0;
    values.functions = [];
  };
  
  let removeLast = () => {
    let historyList = document.querySelectorAll(".historyLine");
    for (let i = 0; i < historyList.length; i++) {
      if (i === historyList.length - 1) {
        selector.historyDiv.removeChild(historyList[i]);
      }
    }
  }
  let fillThankYou = () => {
    selector.thankFill.innerHTML = "Thank You!";
    selector.rateButton.style.display = "none";
  }
  
  selector.generate.addEventListener("click", quote);
  selector.btnList[0].addEventListener("click", star.oneStar);
  selector.btnList[1].addEventListener("click", star.twoStar);
  selector.btnList[2].addEventListener("click", star.threeStar);
  selector.btnList[3].addEventListener("click", star.fourStar);
  selector.btnList[4].addEventListener("click", star.fiveStar);
  selector.rateHistoryBtn.addEventListener("click", fillHistory);
  selector.clearHistoryBtn.addEventListener("click", clearHistory);
  selector.clearLastBtn.addEventListener("click", removeLast);
  selector.starDiv.addEventListener("dblclick", star.clear);
  selector.rateButton.addEventListener("click", fillThankYou);
  quote();
  getToday();
  