

var sign = ["Aries", "Capricorn", "Virgo", "Taurus", "Leo", "Sagittarius", "Libra", "Aquarius", "Cancer", "Gemini", "Pisces", "Scorpio", "NOT A VALID DATE"];
var description = [" you are attractive, funny, smart, and the best person ever. Keep going!",
    " you may be struggling through tough times, but your Capricorne persistence will get you through!",
    ", as a Virgo you are extremely passionate, keep that up going in to the week and you will find success.",
    " you are very confident in yourself and should continue to be.",
    ", as a leo you are really shy, but if you express yourself this week you will make a new friend.",
    " you are very clever, use your wit to get out of a big problem this week.",
    ", Libras are very cunning, don't back down from challenges.",
    ", as an Aquarius, you can breathe underwater, try submerging your face forever!",
    ", I know you have been down lately, cheer up.",
    ", as a Gemini you are naturally confident, continue to be.",
    ", as a Pisces, you need to catch up on a few things, don't let them slip away.",
    ", as a Scorpio, do your thing this week, be yourself."
];
var images = ["img/Aries.jpeg", "img/Capricorn.jpeg",
    "img/virgoqueen.jpg", "img/Taurus.jpeg", "img/Leo.png",
    "img/sag.jpg", "img/Libra.png", "img/Aquarius.jpg", "img/Cancer.jpg", "img/Gemini", "img/Pisces.jpeg",
    "img/Scorpio.jpeg", "img/x.png"
]

function onSubmit(){
    var name = document.getElementById("name").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var h = horoscope(month, day);

    document.getElementById("horoscope").innerHTML = sign[h];
    document.getElementById("description").innerHTML = name + description[h];

    document.getElementById("img").src = images[h];


}

function horoscope(month, day){
    if(month == 1){
        if(day <= 19){
            return 1
        }
        if(day >= 20){
            return 7
        }
    }
    if(month == 2){
        if(day <= 18){
            return 7
        }
        if(day >= 19 && day < 30){
            return 10
        }
        if(day >= 30){
            return 12
        }
    }
    if(month == 3){
        if(day <= 20){
            return 10
        }
        if(day >= 21)
            return 0
    }
    if(month == 4){
        if(day <= 19){
            return 0
        }
        if(day >= 20){
            return 3
        }
    }
    if(month == 5){
        if(day <= 21){
            return 3
        }
        if(day >= 20){
            return 9
        }
    }
    if(month == 6){
        if(day <= 21){
            return 9
        }
        if(day >= 22){
            return 8
        }
    }
    if(month == 7){
        if(day <= 23){
            return 8
        }
        if(day >= 22){
            return 4
        }
    }
    if(month == 8){
        if(day <= 23){
            return 4
        }
        if(day >= 22){
            return 2
        }
    }
    if(month == 9){
        if(day <= 23){
            return 2
        }
        if(day >= 22){
            return 6
        }
    }
    if(month == 10){
        if(day <= 23){
            return 6
        }
        if(day >= 21){
            return 11
        }
    }
    if(month == 11){
        if(day <= 22){
            return 11
        }
        if(day >= 21){
            return 5
        }
    }
    if(month == 12){
        if(day <= 22){
            return 5
        }
        if(day >= 19){
            return 1
        }
    }
}


