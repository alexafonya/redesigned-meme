
var ALFru = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И',
    'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т',
    'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Э', 'Ю', 'Я'
];

var LEFT = 'Л';
var BOTH = 'О';
var RIGHT = 'П';

var FIRST_TIME;

var HANDru = ['Л', 'П', 'О'];

var HAND;
var ALF;
let set = 1600;
let currentIndex = 0;
let alfIndex = 0;
let SETH = 0;
let NEWHAND;
var TimesColor;
var TimesExtColor;
var colorSimle = document.getElementById("color");
var colorExtra = document.getElementById("ColorExt");
var Theme = document.getElementById("theme");

let set2 = (set * 3) + 100;
let set3 = set * 27;
let set4 = set * 26;
let set5 = set * 22;

let TIME = document.getElementById("start").value;
let INTERVAL1;


var RED = document.getElementById("alfavit").style.color = "red";
var ORANGE = document.getElementById("alfavit").style.color = "orange";
var YELLOW = document.getElementById("alfavit").style.color = "yellow";
var GREEN = document.getElementById("alfavit").style.color = "green";
var BLUE = document.getElementById("alfavit").style.color = "blue";
var INDIGO = document.getElementById("alfavit").style.color = "indigo";
var VIOLET = document.getElementById("alfavit").style.color = "violet";
var GRAY = document.getElementById("alfavit").style.color = "gray";
var BLACK = document.getElementById("alfavit").style.color = "black";

var colorNow = document.getElementById("color").value;

var menuItem = document.querySelector("#clean");
var dropDownMenu = document.querySelector("#top");
var menuItem2 = document.querySelector("#clean");
var dropDownMenu2 = document.querySelector("#top");

// Иврит

var ALFheb = [
   'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 
   'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'
]

HANDheb = ['ים', 'שם', 'יח'];

// inglish

var ALFeng = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
 ];
 
 var LEFTeng = 'L';
 var BOTHeng = 'B';
 var RIGHTeng = 'R';
 
 HANDeng = ['L', 'R', 'B'];


 addEventListener("DOMContentLoaded", function() {
    ALF = ALFeng;
    HAND = HANDeng;
    he.addEventListener("click", function () {
        if (alfIndex > 21){
            alfIndex -= 5;
        } 
        ALF = ALFheb;
        HAND = HANDheb;       
        newLetters();
        newHands();
        randomLetters();
        randomHands();
        document.getElementById("he").style.fontSize = "24px"
        document.getElementById("he").style.transition = "0.7s";
        document.getElementById("en").style.fontSize = "16px"
        document.getElementById("en").style.transition = "0.7s";
        document.getElementById("ru").style.fontSize = "16px"
        document.getElementById("ru").style.transition = "0.7s";
    
     })

    en.addEventListener("click", function () {
        if (alfIndex > 25){
            alfIndex -= 1;
        } 
        ALF = ALFeng;
        HAND = HANDeng;        
        newLetters();
        newHands();
        randomLetters();
        randomHands();
        document.getElementById("en").style.fontSize = "24px"
        document.getElementById("en").style.transition = "0.7s";
        document.getElementById("ru").style.fontSize = "16px"
        document.getElementById("ru").style.transition = "0.7s";
        document.getElementById("he").style.fontSize = "16px"
        document.getElementById("he").style.transition = "0.7s";
    
     })
    ru.addEventListener("click", function () {
        ALF = ALFru;
        HAND = HANDru;       
        newLetters();
        newHands();
        randomLetters();
        randomHands();
        document.getElementById("ru").style.fontSize = "24px"
        document.getElementById("ru").style.transition = "0.7s";
        document.getElementById("en").style.fontSize = "16px"
        document.getElementById("en").style.transition = "0.7s";
        document.getElementById("he").style.fontSize = "16px"
        document.getElementById("he").style.transition = "0.7s";

     })


 })


 var Play = document.getElementById("playTime");
 var Stop = document.getElementById("stopTime");
 var resTim = document.getElementById("start");

 resTim.addEventListener("click", function () {
    Stop.style.backgroundColor = "rgb(232, 232, 232)"
    Stop.style.width = "30px";
    Stop.style.height = "30px";
    Play.style.backgroundColor = "rgb(232, 232, 232)"
    Play.style.width = "30px";
    Play.style.height = "30px";

 })


Play.addEventListener("click", function() {  
    Play.style.backgroundColor = " rgb(255, 255, 255)"
    Play.style.width = "40px";
    Play.style.height = "40px";
    Play.style.transition = "0.7s"
    Stop.style.backgroundColor = "rgb(196, 196, 196)"
    Stop.style.transition = "0.7s"
    Stop.style.width = "30px";
    Stop.style.height = "30px";    
    clearInterval(INTERVAL1); 
    INTERVAL1 = setInterval(function () { newCountDown() }, 1000) 
    
 })

Stop.addEventListener("click", function(){
    Stop.style.backgroundColor = "  rgb(255, 255, 255)"
    Stop.style.width = "40px";
    Stop.style.height = "40px";
    Stop.style.transition = "0.7s"
    Play.style.backgroundColor = "rgb(196, 196, 196)"
    Play.style.transition = "0.7s"
    Play.style.width = "30px";
    Play.style.height = "30px";
    clearInterval(INTERVAL1);
    this.removeEventListener;
})

let setTimes = document.getElementById("start");

setTimes.addEventListener("click", function() {
    clearInterval(INTERVAL1);
    setTimer();
    newCountDown();
})


 const newCountDown = () => {   
     while (TIME != -1) {
    let countDownEl = document.getElementById("countdown")
    let minutes = Math.floor(TIME / 60);
    let seconds = TIME % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let DUBLE = countDownEl.innerHTML = `${minutes} : ${seconds}`;
    document.getElementById("dublicate").value = DUBLE;
    TIME--;
    if (TIME == 10) {
        var Audio = document.getElementById("final")
        Audio.play()
    } if (TIME == 0) {
        stopAudio()
        
        clearInterval(INTERVAL1)
    }
    break
}  

}

// document.addEventListener('DOMContentLoaded', () => {
//     setTimer();
//     document.getElementById("countdown").value = TIME.value;
//   });



function setTimer() {
    TIME = document.getElementById("start").value
    console.log(TIME)
}

// Интервалы 


var Times_Alf = setInterval(function () { newLetters() }, set4)

var Times_1 = setInterval(function () { newHands() }, set2)

var Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, set);

colorSimle.addEventListener("click", function () {
    resetExtColor();
    clearInterval(TimesExtColor);
    clearInterval(TimesColor);
    clearInterval(Times_3);
    if (this.checked) {
        TimesColor = setInterval(function () {
            randomHands(), setFont(), setColor(),
                randomLetters()
        }, set);
    } else {
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, set);
    }
})

colorExtra.addEventListener("click", function () {
    resetColor();
    clearInterval(TimesExtColor);
    clearInterval(TimesColor);
    clearInterval(Times_3);
    if (this.checked) {
        TimesExtColor = setInterval(function () {
            randomHands(), setFont(),
                randomLetters(), setColorAlf(), setColorHand()
        }, set);
    } else {
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, set);
    }
})

// Перемешивание

window.addEventListener("load", () => { newLetters() });


// function newLetters() {
//     NEWLETT = ALF.sort(function () { return 0.5 - Math.random() })
//     console.log(`NEWAlfavit : ${ALF}`);
// }

function newLetters() {
    for (let i = ALF.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [ALF[i], ALF[j]] = [ALF[j], ALF[i]];
        console.log(`NEWALF = ${ALF}`)

    }
}



function newHands() {
    for (let i = HAND.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [HAND[i], HAND[j]] = [HAND[j], HAND[i]];
        console.log(`NEWHAND = ${HAND}`)

    }
}

function randomLetters() {
    document.getElementById("alfavit").innerText = ALF[alfIndex];
    alfIndex = (alfIndex + 1) % ALF.length;
    console.log(alfIndex)

}

const randomHands = () => {
    document.getElementById("hand").innerText = HAND[currentIndex];
    currentIndex = (currentIndex + 1) % HAND.length;
    console.log(currentIndex)
    console.log(`HAND = ${HAND} + ${HAND}`)
}






colorExtra.addEventListener("click", function () {

    if (this.checked) {

    } else {

    }
})

// Расположение Букв

function setFont() {
    SISE_1 = document.getElementById("alfavit").style.fontSize;
    if (SISE_1 <= 60) {
        const LEFT = Math.floor(Math.random() * 90);
        const TOP = Math.floor(Math.random() * 80);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else {
        const LEFT = Math.floor(Math.random() * 84);
        const TOP = Math.floor(Math.random() * 67);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }

}

//  Размер Шрифта

function setSise() {
    const SHRIFT = document.getElementById("fill").value;
    console.log(SHRIFT)
    document.getElementById('alfavit').style.fontSize = SHRIFT + 'px';
    document.getElementById('hand').style.fontSize = SHRIFT + 'px';

}

function clear() {
    clearInterval(TimesColor);
    clearInterval(TimesExtColor);
    clearInterval(Times_3);
}

// Экстро

function startApp() {
    clear();
    const HOLD = document.getElementById("speed").value;
    document.querySelector("#time").innerText = HOLD;
    colorExtra.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () {
                    randomHands(), setFont(), randomLetters(),
                        extra(), setColorAlf(), setColorHand()
                }, set);
            } else {
                clear();
                Times_3 = setInterval(function () {
                    randomHands(), setFont(), randomLetters(),
                        extra(), setColorAlf(), setColorHand()
                }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                if(ALF == ALFheb) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 22;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } if (ALF == ALFeng) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 26;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } else {
                    clearInterval(Times_Alf)
                    NewAlfHOLD = HOLD * 27;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                }return Times_Alf
                
            };
        } else {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                if(ALF == ALFheb) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 22;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } if (ALF == ALFeng) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 26;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } else {
                    clearInterval(Times_Alf)
                    NewAlfHOLD = HOLD * 27;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                }return Times_Alf
                
            };
        }
    })
    TimesColor = colorSimle.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), extra() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), extra() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                if(ALF == ALFheb) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 22;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } if (ALF == ALFeng) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 26;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } else {
                    clearInterval(Times_Alf)
                    NewAlfHOLD = HOLD * 27;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                }return Times_Alf
                
            };

        } else {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                if(ALF == ALFheb) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 22;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } if (ALF == ALFeng) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 26;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } else {
                    clearInterval(Times_Alf)
                    NewAlfHOLD = HOLD * 27;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                }return Times_Alf
                
            };
        }

    })
    if (HOLD == Times_3) {
        clear();
        setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, set);
    } else {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, HOLD);
        clearInterval(Times_1)
        NewHOLD = HOLD * 3;
        Times_1 = setInterval(function () { newHands() }, NewHOLD);
        if(ALF == ALFheb) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 22;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } if (ALF == ALFeng) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 26;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } else {
            clearInterval(Times_Alf)
            NewAlfHOLD = HOLD * 27;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        }return Times_Alf
        
    };
}

var SUPER = document.getElementById("super").value;

function resetSuperExtr() {
    document.getElementById("super").checked = false;
}

function superExtra() {
    clear();
    const HOLD = document.getElementById("speed").value;
    document.querySelector("#time").innerText = HOLD;
    colorExtra.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                Times_3 = setInterval(function () {
                    randomHands(), setFont(), randomLetters(), superExtraLet(),
                    superExtraHan(), setColorAlf(), setColorHand()
                }, set);
            } else {
                clear();
                Times_3 = setInterval(function () {
                    randomHands(), setFont(), randomLetters(), superExtraLet(),
                    superExtraHan(), setColorAlf(), setColorHand()
                }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                if(ALF == ALFheb) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 22;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } if (ALF == ALFeng) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 26;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } else {
                    clearInterval(Times_Alf)
                    NewAlfHOLD = HOLD * 27;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                }return Times_Alf
            }
        } else {
            if (HOLD == Times_3) {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                if(ALF == ALFheb) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 22;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } if (ALF == ALFeng) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 26;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } else {
                    clearInterval(Times_Alf)
                    NewAlfHOLD = HOLD * 27;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                }  return Times_Alf
            }
        }
    })
    TimesColor = colorSimle.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), superExtraLet(), superExtraHan() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), superExtraLet(), superExtraHan() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                if(ALF == ALFheb) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 22;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } if (ALF == ALFeng) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 26;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } else {
                    clearInterval(Times_Alf)
                    NewAlfHOLD = HOLD * 27;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                }           return Times_Alf    
            }
        } else {
            if (HOLD == Times_3) {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                if(ALF == ALFheb) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 22;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } if (ALF == ALFeng) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 26;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } else {
                    clearInterval(Times_Alf)
                    NewAlfHOLD = HOLD * 27;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                }         return Times_Alf     
            }
        }
    })
    if (HOLD == Times_3) {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, set);
    } else {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, HOLD);
        clearInterval(Times_1)
        NewHOLD = HOLD * 3;
        Times_1 = setInterval(function () { newHands() }, NewHOLD);
        if(ALF == ALFheb) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 22;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } if (ALF == ALFeng) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 26;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } else{
            clearInterval(Times_Alf)
            NewAlfHOLD = HOLD * 27;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        }return Times_Alf
        
    }
}

function superExtraLet() {
    const SISE = Math.floor((Math.random() * 70) + 36);
    document.getElementById("alfavit").style.fontSize = SISE + 'px';

}

function superExtraHan() {
    const SISE = Math.floor((Math.random() * 70) + 36);
    document.getElementById("hand").style.fontSize = SISE + 'px';
}

function extra() {
    const SISE = Math.floor((Math.random() * 70) + 36);
    document.getElementById("alfavit").style.fontSize = SISE + 'px';
    document.getElementById("hand").style.fontSize = SISE + 'px';
    console.log(SISE)
}

function resetExtra() {
    document.getElementById("On").checked = false;
}

function setTime() {
    clear();
    setSise();
    const HOLD = document.getElementById("speed").value;
    document.querySelector("#time").innerText = HOLD;
    colorExtra.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), randomLetters(), setColorAlf(), setColorHand() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColorAlf(), setColorHand() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                if(ALF == ALFheb) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 22;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } if (ALF == ALFeng) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 26;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } else {
                      clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                }return Times_Alf
            }

        } else {
            resetExtColor();
        }
    })
    TimesColor = colorSimle.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), setColor(), randomLetters() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), setColor(), randomLetters() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                if(ALF == ALFheb) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 22;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } if (ALF == ALFeng) {
                    clearInterval(Times_Alf);
                    NewAlfHOLD = HOLD * 26;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                } else {
                    clearInterval(Times_Alf)
                    NewAlfHOLD = HOLD * 27;
                    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
                }return Times_Alf
               
            }

        } else {
            resetColor();
        }
    })
   
    if (HOLD == Times_3) {
        clear();
        setInterval(function () { randomHands(), setFont(), randomLetters() }, set);
    } else {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, HOLD);
        clearInterval(Times_1)
        NewHOLD = HOLD * 3;
        Times_1 = setInterval(function () { newHands() }, NewHOLD);
        if(ALF == ALFheb) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 22;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } if (ALF == ALFeng) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 26;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } else {
             clearInterval(Times_Alf)
             NewAlfHOLD = HOLD * 27;
             Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        }return Times_Alf
       
    }


}

// Полный экран

// var elem = document.documentElement;
// function openFullscreen() {
//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//         document.getElementById("window").style.height = "88.9vh";
//     } else if (elem.mozRequestFullScreen) { /* Firefox */
//         elem.mozRequestFullScreen();
//         document.getElementById("window").style.height = "88.9vh";
//     } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
//         elem.webkitRequestFullscreen();
//         document.getElementById("window").style.height = "88.9vh";
//     } else if (elem.msRequestFullscreen) { /* IE/Edge */
//         elem.msRequestFullscreen();
//         document.getElementById("window").style.height = "88.9vh";
//     }
// }

var elem = document.getElementById("fullScr");

elem.addEventListener("click", function () {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
            document.getElementById("window").style.height = "88.9vh";
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
            document.getElementById("window").style.height = "88.9vh";
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
            document.getElementById("window").style.height = "88.9vh";
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
            document.getElementById("window").style.height = "88.9vh";
        }
    this.removeEventListener("click",function(){})
    if (document.exitFullscreen) {
        document.exitFullscreen();
        document.getElementById("window").style.height = "87vh";
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        document.getElementById("window").style.height = "87vh";
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        document.getElementById("window").style.height = "87vh";
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        document.getElementById("window").style.height = "87vh";
    }

})

menuItem.addEventListener("click", function () {
    dropDownMenu.style.display = "none";
    document.getElementById("window").style.height = "100vh";
});

menuItem2.addEventListener("dblclick", function () {
    dropDownMenu2.style.display = "grid";
    document.getElementById("window").style.height = "87vh";
});


function resetColor() {
    document.getElementById("color").checked = false;   
    let black = document.querySelector("body").style.backgroundColor
    if (black == "black" ){
            document.getElementById("alfavit").style.color = "white";
            document.getElementById("hand").style.color = "white";
    } else {
        document.getElementById("alfavit").style.color = "black";
        document.getElementById("hand").style.color = "black";
    }   
}

function setColor() {
    const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'GRAY'];
    var color = Math.floor(Math.random() * 8);
    newColor1 = document.getElementById("alfavit").style.color = COLORS[color];
    newColor2 = document.getElementById("hand").style.color = COLORS[color];

}

function setColorAlf() {
    const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'GRAY'];
    var color = Math.floor(Math.random() * 8);
    newColor1 = document.getElementById("alfavit").style.color = COLORS[color];
}

function setColorHand() {
    const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'GRAY'];
    var color = Math.floor(Math.random() * 8);
    newColor2 = document.getElementById("hand").style.color = COLORS[color];
}

function resetExtColor() {
    document.getElementById("ColorExt").checked = false;
    let black = document.querySelector("body").style.backgroundColor
    if (black == "black" ){
            document.getElementById("alfavit").style.color = "white";
            document.getElementById("hand").style.color = "white";
    } else {
        document.getElementById("alfavit").style.color = "black";
        document.getElementById("hand").style.color = "black";
    }  
}

function closeTheme() {
    Theme.checked = false;
    document.querySelector("body").style.backgroundColor = "white";
    document.getElementById("alfavit").style.color = "black"
    document.getElementById("hand").style.color = "black"
}

function setTheme() {
    document.querySelector("body").style.backgroundColor = "black";
    document.getElementById("alfavit").style.color = "white"
    document.getElementById("hand").style.color = "white"
}

Theme.addEventListener("click", function () {
    if (this.checked) {
        setTheme()
    } else {
        closeTheme();
    }

})

// Инструкция

const modal = document.querySelector('#modal');
const btn = document.querySelector('#openModal');
const close = document.querySelector('.close');

btn.onclick = function () {
  modal.style.display = 'block';
  modal.style.backgroundColor = 'rgba(211, 210, 210, 0.94)';
  modal.style.top = '17%';
  modal.style.left = '10%';

};

close.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// function setThemeColor() {
//     const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'WHITE', 'GRAY'];
//     var color = Math.floor(Math.random() * 9);
//     newColor1 = document.getElementById("alfavit").style.color = COLORS[color];
//     newColor2 = document.getElementById("hand").style.color = COLORS[color];
    
// }

// function setThemeColorHand() {
//     const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'WHITE', 'GRAY'];
//     var color = Math.floor(Math.random() * 9);
//     newColor2 = document.getElementById("hand").style.color = COLORS[color];
// }

// function setThemeColorAlf() {
//     const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'WHITE', 'GRAY'];
//     var color = Math.floor(Math.random() * 9);
//     newColor1 = document.getElementById("alfavit").style.color = COLORS[color];
// }
