import './index.css';
import './math';
import Game from './structures/game';
import ShipSprite from './assets/img/ship.png';

const canvas = document.getElementById('game') as HTMLCanvasElement;

const game = new Game(canvas);

(async () => {
	await game.sprites.load('ship', ShipSprite);
	game.start();
})();
