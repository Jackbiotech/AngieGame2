`use strict`

const words = [
    "vacation",
    "banana",
    "computer",
    "television",
    "flower",
    "penguin",
    "hospital",
    "school",
    "desk",
    "guitar",
    "airplane",
    "book",
    "glasses",
    "ice cream",
    "tree",
    "waterfall",
    "basket",
    "camera",
    "snowman",
    "basketball",
    "sock",
    "shoe",
    "hat",
    "bicycle",
    "pizza",
    "car",
    "train",
    "dog",
    "cat",
    "mouse",
    "bird",
    "butterfly",
    "fish",
    "dolphin",
    "turtle",
    "lighthouse",
    "tent",
    "castle",
    "whale",
    "shark",
    "octopus",
    "starfish",
    "crab",
    "lobster",
    "purse",
    "wallet",
    "key",
    "ring",
    "necklace",
    "bracelet",
    "watch",
    "crown",
    "scepter",
    "shield",
    "sword",
    "dagger",
    "bow and arrow",
    "spear",
    "axe",
    "hammer",
    "pliers",
    "screwdriver",
    "wrench",
    "saw",
    "drill",
    "ladder",
    "rope",
    "paintbrush",
    "crayon",
    "pencil",
    "marker",
    "eraser",
    "ruler",
    "scissors",
    "tape",
    "stapler",
    "glue",
    "paper clip",
    "envelope",
    "notebook",
    "journal",
    "calendar",
    "clock",
    "alarm",
    "timer",
    "thermometer",
    "barometer",
    "compass",
    "map",
    "globe",
    "ball",
    "Bible",
    "bikini",
    "book",
    "bucket",
    "camera",
    "church",
    "crayon",
    "fireworks",
    "high heel",
    "ice cream cone",
    "lamp",
    "mailbox",
    "recycle",
    "sandcastle",
    "stairs",
    "tire",
    "toothbrush",
    "bee",
    "bird",
    "butterfly",
    "cat",
    "dog",
    "dolphin",
    "elephant",
    "fish",
    "flower",
    "giraffe",
    "moon",
    "night",
    "ocean",
    "rainbow",
    "snow",
    "snowman",
    "spider",
    "star",
    "strawberry",
    "sun",
    "baby",
    "beard",
    "cry",
    "ears",
    "eye",
    "eyes",
    "face",
    "glasses",
    "happy",
    "mad",
    "man",
    "mouth",
    "nose",
    "sad",
    "woman",
    "shirt",
    "pants",
    "apple",
    "beans",
    "burger",
    "carrot",
    "cheese",
    "cherry",
    "corn",
    "donut",
    "egg",
    "popsicle",
    "sandwich",
    "spaghetti",
    "taco",
    "pumpkin",
    "pizza",
    "pyramid",
    "Angel",
    "Eyeball",
    "Pizza",
    "Angry",
    "Fireworks",
    "Pumpkin",
    "Baby",
    "Flower",
    "Rainbow",
    "Beard",
    "Flying saucer",
    "Recycle",
    "Bible",
    "Giraffe",
    "Sand castle",
    "Bikini",
    "Glasses",
    "Snowflake",
    "Book",
    "High heel",
    "Stairs",
    "Bucket",
    "Ice cream cone",
    "Starfish",
    "Bumble bee",
    "Igloo",
    "Strawberry",
    "Butterfly",
    "Lady bug",
    "Sun",
    "Camera",
    "Lamp",
    "Tire",
    "Cat",
    "Lion",
    "Toast",
    "Church",
    "Mailbox",
    "Toothbrush",
    "Crayon",
    "Night",
    "Toothpaste",
    "Dolphin",
    "Nose",
    "Truck",
    "Egg",
    "Olympics",
    "Volleyball",
    "Eiffel Tower",
    "Peanut",
    "Brain",
    "Kitten",
    "Playground",
    "Bubble bath",
    "King",
    "Queen"

];
console.log(words.length)

const generateBtn = document.getElementById(`generate-btn`)
const wordResult = document.getElementById(`word-result`)
const resetBtn = document.getElementById(`reset-btn`)

generateBtn.addEventListener(`click`, function () {

    let random = Math.floor(Math.random() * words.length) + 1;
    wordResult.textContent = words[random]

})

resetBtn.addEventListener(`click`, function () {
    wordResult.textContent = ``
})

// + and - function
function plus(playerx) {
    playerx.textContent++;
}
function minus(playerx) {
    playerx.textContent -= 1;
}

// Player(x) Minus Button
const p1m = document.getElementById(`p1m`)
const p2m = document.getElementById(`p2m`)
const p3m = document.getElementById(`p3m`)
const p4m = document.getElementById(`p4m`)
const p5m = document.getElementById(`p5m`)

// Player(x) Plus Button
const p1p = document.getElementById(`p1p`)
const p2p = document.getElementById(`p2p`)
const p3p = document.getElementById(`p3p`)
const p4p = document.getElementById(`p4p`)
const p5p = document.getElementById(`p5p`)

// Player(x)Scores
const player1Score = document.getElementById(`player1-score`)
const player2Score = document.getElementById(`player2-score`)
const player3Score = document.getElementById(`player3-score`)
const player4Score = document.getElementById(`player4-score`)
const player5Score = document.getElementById(`player5-score`)

// Player names
const player1 = document.getElementById(`player1`)
const player2 = document.getElementById(`player2`)
const player3 = document.getElementById(`player3`)
const player4 = document.getElementById(`player4`)
const player5 = document.getElementById(`player5`)



// Player(x) Minus clicks / Player(x) Plus clicks

// Player 1
p1p.addEventListener(`click`, function () {
    plus(player1Score)
})
p1m.addEventListener(`click`, function () {
    minus(player1Score)
})

// Player 2
p2p.addEventListener(`click`, function () {
    plus(player2Score)
})
p2m.addEventListener(`click`, function () {
    minus(player2Score)
})

// Player 3
p3p.addEventListener(`click`, function () {
    plus(player3Score)
})
p3m.addEventListener(`click`, function () {
    minus(player3Score)
})

// Player 4
p4p.addEventListener(`click`, function () {
    plus(player4Score)
})
p4m.addEventListener(`click`, function () {
    minus(player4Score)
})

// Player 5
p5p.addEventListener(`click`, function () {
    plus(player5Score)
})
p5m.addEventListener(`click`, function () {
    minus(player5Score)
})


//Player 1 Name Change 
const player1Input = document.getElementById(`player1-name-input`)
const player1LockBtn = document.getElementById(`player1-lock-btn`)
const player1Name = document.getElementById(`player1-name`)

//Player 2 Name Change 
const player2Input = document.getElementById(`player2-name-input`)
const player2LockBtn = document.getElementById(`player2-lock-btn`)
const player2Name = document.getElementById(`player2-name`)

//Player 3 Name Change 
const player3Input = document.getElementById(`player3-name-input`)
const player3LockBtn = document.getElementById(`player3-lock-btn`)
const player3Name = document.getElementById(`player3-name`)

//Player 4 Name Change 
const player4Input = document.getElementById(`player4-name-input`)
const player4LockBtn = document.getElementById(`player4-lock-btn`)
const player4Name = document.getElementById(`player4-name`)

//Player 5 Name Change 
const player5Input = document.getElementById(`player5-name-input`)
const player5LockBtn = document.getElementById(`player5-lock-btn`)
const player5Name = document.getElementById(`player5-name`)

// Lock in name function
function lockPlayer(playerXName, playerXInput) {
    playerXName.textContent = playerXInput.value;
}



// Player 1 lock in button
player1LockBtn.addEventListener(`click`, function () {
    if (player1Input.value) {
        lockPlayer(player1Name, player1Input)
    }
    if (player1Input.value === `Angie` || player1Input.value === `angie`) {
        player1.style.color = `darkred`
        player1Score.color = `darkred`
    } else if (player1Input.value === `Peter` || player1Input.value === `peter`) {
        player1.style.color = `blue`
        player1Score.color = `blue`
    } else if (player1Input.value === `Matheus` || player1Input.value === `matheus`) {
        player1.style.color = `green`
        player1Score.color = `green`
    } else if (player1Input.value === `Elaine` || player1Input.value === `elaine`) {
        player1.style.color = `pink`
        player1Score.color = `pink`
    } else if (player1Input.value === `Raquel` || player1Input.value === `raquel`) {
        player1.style.color = `purple`
        player1Score.color = `purple`
    }
})

// Player 2 lock in button
player2LockBtn.addEventListener(`click`, function () {
    if (player2Input.value) {
        lockPlayer(player2Name, player2Input)
    }
    if (player2Input.value === `Angie` || player2Input.value === `angie`) {
        player1.style.color = `darkred`
        player1Score.color = `darkred`
    } else if (player2Input.value === `Peter` || player2Input.value === `peter`) {
        player2.style.color = `blue`
        player2Score.color = `blue`
    } else if (player2Input.value === `Matheus` || player2Input.value === `matheus`) {
        player2.style.color = `green`
        player2Score.color = `green`
    } else if (player2Input.value === `Elaine` || player2Input.value === `elaine`) {
        player2.style.color = `pink`
        player2Score.color = `pink`
    } else if (player2Input.value === `Raquel` || player2Input.value === `raquel`) {
        player2.style.color = `purple`
        player2Score.color = `purple`
    }
})

// Player 3 lock in button
player3LockBtn.addEventListener(`click`, function () {
    if (player3Input.value) {
        lockPlayer(player3Name, player3Input)
    }
    if (player3Input.value === `Angie` || player3Input.value === `angie`) {
        player1.style.color = `darkred`
        player1Score.color = `darkred`
    } else if (player3Input.value === `Peter` || player3Input.value === `peter`) {
        player3.style.color = `blue`
        player3Score.color = `blue`
    } else if (player3Input.value === `Matheus` || player3Input.value === `matheus`) {
        player3.style.color = `green`
        player3Score.color = `green`
    } else if (player3Input.value === `Elaine` || player3Input.value === `elaine`) {
        player3.style.color = `pink`
        player3Score.color = `pink`
    } else if (player3Input.value === `Raquel` || player3Input.value === `raquel`) {
        player3.style.color = `purple`
        player3Score.color = `purple`
    }
})

// Player 4 lock in button
player4LockBtn.addEventListener(`click`, function () {
    if (player4Input.value) {
        lockPlayer(player4Name, player4Input)
    }
    if (player4Input.value === `Angie` || player4Input.value === `angie`) {
        player1.style.color = `darkred`
        player1Score.color = `darkred`
    } else if (player4Input.value === `Peter` || player4Input.value === `peter`) {
        player4.style.color = `blue`
        player4Score.color = `blue`
    } else if (player4Input.value === `Matheus` || player4Input.value === `matheus`) {
        player4.style.color = `green`
        player4Score.color = `green`
    } else if (player4Input.value === `Elaine` || player4Input.value === `elaine`) {
        player4.style.color = `pink`
        player4Score.color = `pink`
    } else if (player4Input.value === `Raquel` || player4Input.value === `raquel`) {
        player4.style.color = `purple`
        player4Score.color = `purple`
    }
})

// Player 5 lock in button
player5LockBtn.addEventListener(`click`, function () {
    if (player5Input.value) {
        lockPlayer(player5Name, player5Input)
    }
    if (player5Input.value === `Angie` || player5Input.value === `angie`) {
        player1.style.color = `darkred`
        player1Score.color = `darkred`
    } else if (player5Input.value === `Peter` || player5Input.value === `peter`) {
        player5.style.color = `blue`
        player5Score.color = `blue`
    } else if (player5Input.value === `Matheus` || player5Input.value === `matheus`) {
        player5.style.color = `green`
        player5Score.color = `green`
    } else if (player5Input.value === `Elaine` || player5Input.value === `elaine`) {
        player5.style.color = `pink`
        player5Score.color = `pink`
    } else if (player5Input.value === `Raquel` || player5Input.value === `raquel`) {
        player5.style.color = `purple`
        player5Score.color = `purple`
    }
})



// angie red, peter blue, matt green, mom pink, raqel purple 
