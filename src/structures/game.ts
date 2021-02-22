import Player from '../objects/player';
import ControlManager from './control-manager';
import GameObject from './game-object';
import Scheduler from './scheduler';
import SpriteManager from './sprite-manager';

class Game {
	public readonly scheduler = new Scheduler();
	public readonly controls = new ControlManager();
	public readonly sprites = new SpriteManager();

	private loaded = false;
	private _objects: GameObject[] = [];

	public constructor(public readonly canvas: HTMLCanvasElement) {}

	public start() {
		this.loaded = true;
		const { width, height } = this.canvas;

		this.instantiate(Player, width / 2, height / 2);
		requestAnimationFrame(() => this.update());
	}

	private update() {
		const ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
		const { width, height } = this.canvas;

		if (!this.loaded) {
			// Loading screen
			ctx.fillStyle = 'white';
			ctx.textBaseline = 'middle';
			ctx.textAlign = 'center';
			ctx.font = '15px Arcade';

			ctx.clearRect(0, 0, width, height);
			ctx.fillText('Loading...', width / 2, height / 2);

			requestAnimationFrame(() => this.update());
			return;
		}

		this.scheduler.tick();

		for (const obj of this._objects) {
			obj.tick();
		}

		const sorted = this._objects.sort((a, b) => b.layer - a.layer);
		ctx.clearRect(0, 0, width, height);

		for (const obj of sorted) {
			ctx.save();
			obj.render(ctx);
			ctx.restore();
		}

		requestAnimationFrame(() => this.update());
	}

	public instantiate<T extends GameObject, A extends any[]>(
		ctor: new (game: this, ...args: A) => T,
		x: number,
		y: number,
		...args: A
	): T {
		const obj = new ctor(this, ...args);
		obj.x = x;
		obj.y = y;
		this._objects.push(obj);

		return obj;
	}

	public destroy(obj: GameObject) {
		this._objects = this._objects.filter(o => o !== obj);
	}

	public get objects(): ReadonlyArray<GameObject> {
		return this._objects;
	}
}

export default Game;
