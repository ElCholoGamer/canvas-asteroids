import Game from './game';

abstract class GameObject {
	public x = 0;
	public y = 0;

	public constructor(protected readonly game: Game, public layer = 0) {}

	public abstract tick(): void;
	public abstract render(ctx: CanvasRenderingContext2D): void;

	public destroy() {
		this.game.destroy(this);
	}
}

export default GameObject;
