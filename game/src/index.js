import * as PIXI from 'pixi.js';
import bunnyImg from './bunny.png'

const app = new PIXI.Application(800, 600, {backgroundColor: 0x1099bb});
document.body.appendChild(app.view);

// create a new Sprite from an image path
const bunny = PIXI.Sprite.fromImage(bunnyImg);

// center the sprite's anchor point
bunny.anchor.set(0.5);
bunny.scale.x = 5;
bunny.scale.y = 5;

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

// Listen for animate update
app.ticker.add(function (dt) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    // bunny.rotation += 0.1 * dt;
    bunny.x = motionX(dt);
    bunny.y = motionY(dt);
});

let a = 0;
let vx = 0;
let vy = 0;
let rotation = 0;

document.onkeydown = function (e) {
    e = e || window.event;
    // use e.keyCode
    console.log('down',e.keyCode);
    if(e.keyCode === 83) { // tasto s
        a = 1;
    }
};

document.onkeyup = function (e) {
    e = e || window.event;
    // use e.keyCode
    console.log('up',e.keyCode);
    if(e.keyCode === 83) { // tasto s
        a = 0;
    }
};

// Cosa potrebbe fare ticker.add(...)
/*class APossibleTicker {
    constructor() {
        this._callbacks = [];
        this._previousT = 0;
        requestAnimationFrame((t) => this._onTick(t));
    }

    add(callback) {
        this._callbacks.push(callback);
    }

    _onTick(t) {
        requestAnimationFrame((t) => this._onTick(t));
        const delta = t - this._previousT;
        this._callbacks.forEach((cb) => {
            cb(delta);
        });
        this._previousT = t;
    }
}

const aTicker = new APossibleTicker();*/