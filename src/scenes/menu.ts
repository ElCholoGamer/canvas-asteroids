import PlayButton from '../objects/menu/play-button';
import Scene from '../structures/scene';

class MenuScene extends Scene {
	public start() {
		const buttonWidth = 200;
		const buttonX = this.game.canvas.width / 2 - buttonWidth / 2;

		this.instantiate(PlayButton, buttonX, 200);
	}

	public tick() {
		const { canvas } = this.game;
		const ctx = canvas.getContext('2d')!;

		ctx.font = '30px Arcade';
		ctx.fillStyle = 'white';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'top';

		ctx.fillText('Canvas Asteroids', canvas.width / 2, 50);
	}
}

export default MenuScene;
