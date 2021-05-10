import Game from '../../structures/game';
import Button from './button';

class PlayButton extends Button {
	public constructor(game: Game) {
		super(game, 'Play', 200, 50);
	}

	public onClick() {
		console.log('Starting game at tick ' + this.game.scheduler.time);
		this.game.loadScene('game');
	}
}

export default PlayButton;
