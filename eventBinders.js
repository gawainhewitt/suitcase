class EventBinders {

  constructor() {
    this.stringsArray = [];
    for(let i = 0; i < 3; i++){
      this.stringsArray[i] = [];
      for(let j = 0; j < 10; j++){
        this.stringsArray[i][j] = document.querySelector(`#c${i}s${j}`);
      }
    }
    this.middlebox = document.querySelector("#middle-box");
    this.startscreen = document.querySelector("#startscreen");
    this.onechord = document.querySelector("#onechord");
    this.twochord = document.querySelector("#twochord");
    this.threechord = document.querySelector("#threechord");
  }

  bindChordButtons(handler) {
    this.onechord.addEventListener('click', () => {
      handler(0, "#onechord");
    })
    this.twochord.addEventListener('click', () => {
      handler(1, "#twochord");
    })
    this.threechord.addEventListener('click', () => {
      handler(2, "#threechord");
    })
  }

  bindStartScreen(handler) {
    this.startscreen.addEventListener('click', () => {
      handler();
    })
  }

  bindMouseEnter(handler) {
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 10; j++){
        this.stringsArray[i][j].addEventListener('mouseenter', () => { 
        handler("mouse", {chord: i, string: j});
        })
      }
    }
  }

  bindSelectStart(handler) {
    document.addEventListener('selectstart', (e) => {
      handler(e);
    })
  }

  bindMouseDown(handler) {
    document.addEventListener('mousedown', (e) => {
      handler(e);
    })
  }

  bindMouseUp(handler) {
    document.addEventListener('mouseup', (e) => {
      handler(e);
    })
  }

  bindTouchStart(handler) {
    this.middlebox.addEventListener('touchstart', handler);
  }

  bindTouchEnd(handler) {
    this.middlebox.addEventListener('touchend', handler);
  }

  bindTouchMove(handler) {
    this.middlebox.addEventListener('touchmove', handler);
  }

  bindTouchCancel(handler) {
    this.middlebox.addEventListener('touchcancel', handler);
  }

}
 

module.exports = EventBinders;
