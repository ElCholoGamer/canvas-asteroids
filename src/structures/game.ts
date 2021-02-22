class Game {
	public constructor(public readonly canvas: HTMLCanvasElement) {}

	public start() {
		requestAnimationFrame(() => this.update());
	}

	private update() {
		console.log('Ticking');
		requestAnimationFrame(() => this.update());
	}
}

export default Game;
