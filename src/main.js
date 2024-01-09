'use-strict'

const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
const rockBtn = document.querySelector("#rock")
const rulesBtn = document.querySelector(".btn-rules")
const cancelRulesBtn = document.querySelector(".btn-cancel")
const scoreEl = document.querySelector("#score")
const rulesEl = document.querySelector(".rules-container")
const gameBts = document.querySelector(".main__game-btns")
const gamecontainer = document.querySelector(".main__game-container")
const gameResult = document.querySelector(".main__game-result")
const replayBtn = document.querySelector(".btn-replay")
const gameStats = document.querySelector(".main__game-stats")

const gameOptions = ["paper", "scissors", "rock"]

const getRandomInt = max => {
    return Math.floor(Math.random() * max);
}

const game = (playerPick ,housePickOption) => {
    const housePick = gameOptions[getRandomInt(gameOptions.length)]
    
    gameBts.classList.add('main--hidden')
    gamecontainer.classList.remove('main--hidden')

    gameResult.innerHTML= `
    <div class="btn-game btn-game--${playerPick}">
        <img src="src/svg/icon-${playerPick}.svg" alt="player">
        <p>you picked</p>
    </div>

    <div class="btn-game btn-game--${housePick}">
        <img src="src/svg/icon-${housePick}.svg" alt="house">
        <p>the house picked</p>
    </div>
    `
    
    if(housePick === housePickOption) {
        gameStats.textContent = "you win"
        scoreEl.textContent++
    } else {
        gameStats.textContent = "you lose"
        if(scoreEl.textContent <= 0) {
            scoreEl.textContent = 0
        } else {
            scoreEl.textContent--
        }
    }
}

rulesBtn.addEventListener("click", ()=>{
    rulesEl.classList.remove("rules-container--hidden")
})

cancelRulesBtn.addEventListener("click", ()=> {
    rulesEl.classList.add("rules-container--hidden")
})

paperBtn.addEventListener("click", () => {
    const playerPick = paperBtn.dataset.option
    game(playerPick ,gameOptions[0])
})

rockBtn.addEventListener("click", () => {
    const playerPick = rockBtn.dataset.option
    game(playerPick, gameOptions[1])
})

scissorsBtn.addEventListener("click", () => {
    const playerPick = scissorsBtn.dataset.option
    game(playerPick, gameOptions[2])
})

replayBtn.addEventListener("click", () => {
    gameBts.classList.remove('main--hidden')
    gamecontainer.classList.add('main--hidden')
})