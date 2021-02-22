import Game from '../structures/game';
import GameObject from '../structures/game-object';

class Bullet extends GameObject {
	private readonly SPEED = 8;
	private readonly SIZE = 4;

	private life = 60;

	public constructor(game: Game, private readonly ROTATION: number) {
		super(game);
	}

	public tick() {
		if (--this.life <= 0) {
			this.destroy();
		}

		// Wrap bullet position
		const { width, height } = this.game.canvas;
		const half = this.SIZE / 2;

		if (this.x < -half) {
			this.x = width + half;
		} else if (this.x > width + half) {
			this.x = -half;
		}

		if (this.y < -half) {
			this.y = height + half;
		} else if (this.x > height + half) {
			this.y = -half;
		}

		const radians = Math.radians(this.ROTATION);
		this.x += Math.cos(radians) * this.SPEED;
		this.y += Math.sin(radians) * this.SPEED;
	}

	public render(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = 'white';
		ctx.fillRect(
			this.x - this.SIZE / 2,
			this.y - this.SIZE / 2,
			this.SIZE,
			this.SIZE
		);
	}
}

export default Bullet;
