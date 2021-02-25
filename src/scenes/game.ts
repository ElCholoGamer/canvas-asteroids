import Player from '../objects/player';
import Scene from '../structures/scene';

class GameScene extends Scene {
	public start() {
		const { scene, canvas } = this.game;
		const { width, height } = canvas;

		scene.instantiate(Player, width / 2, height / 2);
	}
}

export default GameScene;
