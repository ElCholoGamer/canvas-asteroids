import Player from '../objects/player';
import ControlManager from './control-manager';
import GameObject from './game-object';
import Scheduler from './scheduler';
import ResourceManager from './resource-manager';

class Game {
	public readonly scheduler = new Scheduler();
	public readonly controls = new ControlManager();

	public readonly sprites = new ResourceManager(Image);
	public readonly sounds = new ResourceManager(Audio, 'canplaythrough');

	private _objects: GameObject[] = [];

	public constructor(public readonly canvas: HTMLCanvasElement) {}

	public start() {
		const { width, height } = this.canvas;

		this.instantiate(Player, width / 2, height / 2);
		requestAnimationFrame(() => this.update());
	}

	private update() {
		this.scheduler.tick();

		for (const obj of this._objects) {
			obj.tick();
		}

		const sorted = this._objects.sort((a, b) => b.layer - a.layer);

		const ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
		const { width, height } = this.canvas;

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
