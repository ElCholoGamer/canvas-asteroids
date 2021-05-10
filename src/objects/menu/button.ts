import Game from '../../structures/game';
import GameObject from '../../structures/game-object';

abstract class Button extends GameObject {
	private hovered = false;

	public constructor(
		game: Game,
		public readonly text: string,
		public readonly width: number,
		public readonly height: number
	) {
		super(game);
	}

	public abstract onClick(): void;
	public onHover() {}

	public tick() {
		const { canvas, controls } = this.game;

		if (!this.isHovered()) {
			canvas.style.cursor = 'auto';
			this.hovered = false;
		} else {
			if (!this.hovered) {
				this.hovered = true;
				this.onHover();
			}

			canvas.style.cursor = 'pointer';
			if (controls.mouse.clicked) {
				this.onClick();
			}
		}
	}

	public render(ctx: CanvasRenderingContext2D) {
		ctx.strokeStyle = 'white';
		ctx.fillStyle = 'white';
		ctx.lineWidth = 1;

		ctx.font = `${this.height * 0.5}px Arcade`;
		ctx.textBaseline = 'middle';
		ctx.textAlign = 'center';

		ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
		ctx.strokeRect(this.x + 0.5, this.y + 0.5, this.width, this.height);

		if (this.isHovered()) {
			ctx.globalAlpha = 0.5;
			ctx.fillRect(this.x + 0.5, this.y + 0.5, this.width, this.height);
		}
	}

	public isHovered() {
		const { x, y } = this.game.controls.mouse;
		return (
			x >= this.x &&
			x <= this.x + this.width &&
			y >= this.y &&
			y <= this.y + this.height
		);
	}
}

export default Button;
