import Player from '../objects/player';
import ControlManager from './control-manager';
import Scheduler from './scheduler';
import ResourceManager from './resource-manager';
import Scene from './scene';

class Game {
	public readonly scheduler = new Scheduler();
	public readonly controls = new ControlManager();

	public readonly sprites = new ResourceManager(Image);
	public readonly sounds = new ResourceManager(Audio, 'canplaythrough');

	public scene!: Scene;

	public constructor(public readonly canvas: HTMLCanvasElement) {}

	public start() {
		requestAnimationFrame(() => this.update());
	}

	private update() {
		this.scheduler.tick();

		const { objects } = this.scene;
		for (const obj of objects) {
			obj.tick();
		}

		const sorted = [...objects].sort((a, b) => a.layer - b.layer);

		const ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
		const { width, height } = this.canvas;

		ctx.clearRect(0, 0, width, height);

		for (const obj of sorted) {
			ctx.save();
			obj.render(ctx);
			ctx.restore();
		}

		this.controls.tick();
		requestAnimationFrame(() => this.update());
	}

	public loadScene(ctor: new (game: this) => Scene) {
		this.scene = new ctor(this);
		this.scene.start();
	}
}

export default Game;
