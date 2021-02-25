import './index.css';
import './math';
import Game from './structures/game';
import ShipSprite from './assets/img/ship.png';
import ShootSound from './assets/sound/shoot.wav';

const canvas = document.getElementById('game') as HTMLCanvasElement;

const game = new Game(canvas);

(async () => {
	const start = Date.now();
	await game.sprites.load('ship', ShipSprite);
	await game.sounds.load('shoot', ShootSound);

	const menuScene = (await import('./scenes/menu')).default;
	const gameScene = (await import('./scenes/game')).default;
	await game.loadScene(gameScene);

	console.log(`Game loaded in ${Date.now() - start}ms`);
	game.start();
})();
