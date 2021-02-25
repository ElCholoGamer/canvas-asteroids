import Game from './game';
import GameObject from './game-object';

abstract class Scene {
	private _objects: GameObject[] = [];

	public constructor(protected readonly game: Game) {}

	public abstract start(): void;

	public instantiate<T extends GameObject, A extends any[]>(
		ctor: new (game: Game, ...args: A) => T,
		x: number,
		y: number,
		...args: A
	): T {
		const obj = new ctor(this.game, ...args);
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

export default Scene;
