import './index.css';
import Game from './structures/game';

const canvas = document.getElementById('game') as HTMLCanvasElement;

const game = new Game(canvas);
game.start();
