export class Game {
  constructor() {
    this.score = 0;
    this.viewGoblins = 0;
    this.sells = [];

    this.randomSellActive = this.randomSellActive.bind(this);
    this.gameStart = document.querySelector(".gameStart");
    this.gameStart.addEventListener("click", (e) => {
      e.preventDefault();
      this.newGame();
    });

    document.addEventListener("click", (e) => {
      const target = e.target;

      if (target.classList.contains("goblin")) {
        target.classList.remove("goblin");
        this.score++;
        this.renderScore();
      }
    });
  }

  newGame() {
    this.score = 0;
    this.viewGoblins = 0;
    this.sells = [];
    const game = document.querySelector(".game");

    const gameControl = document.querySelector(".game-control");
    gameControl.classList.add("game-control-close");

    const renderCells = `
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>`;
    game.innerHTML = renderCells;
    this.sells = Array.from(document.querySelectorAll(".cell"));
    this.renderScore();
    this.randomSellActive();
  }

  randomSellActive() {
    if (this.viewGoblins - this.score >= 5) {
      clearTimeout(this._timeout);
      this.gameOver();
      return;
    }

    if (document.querySelector(".goblin")) {
      document.querySelector(".goblin").classList.remove("goblin");
    }

    let randomIndex = Math.floor(Math.random() * this.sells.length);

    this.sells[randomIndex].classList.add("goblin");
    this.viewGoblins++;

    this._timeout = setTimeout(() => this.randomSellActive(), 1000);
  }

  renderScore() {
    const score = document.querySelector(".score");
    score.textContent = `Счет: ${this.score}`;
    score.classList.remove("score-close");
  }

  gameOver() {
    const gameInfo = document.querySelector(".gameInfo");
    gameInfo.innerHTML = `Игра окончена! Ваш счет: ${this.score}`;
    const gameControl = document.querySelector(".game-control");
    gameControl.classList.remove("game-control-close");
    const game = document.querySelector(".game");
    game.innerHTML = "";
    const gameScore = document.querySelector(".score");
    gameScore.classList.add("score-close");
  }
}

const game = new Game();
