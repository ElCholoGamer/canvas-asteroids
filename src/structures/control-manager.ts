import Game from './game';

export interface Mouse {
	x: number;
	y: number;
	down: boolean;
	clicked: boolean;
}

class ControlManager {
	private readonly keys = new Set<string>();
	private readonly keyPresses = new Set<string>();

	private _mouse: Mouse = { x: -1, y: -1, down: false, clicked: false };

	public constructor(public readonly game: Game) {
		document.addEventListener('keydown', e => this.handleKeyPress(e));
		document.addEventListener('keyup', e => this.handleKeyUp(e));

		window.addEventListener('blur', () => this.handleBlur());

		const { canvas } = game;
		canvas.addEventListener('mousemove', e => this.handleMouseMove(e));
		canvas.addEventListener('click', () => (this._mouse.clicked = true));
		canvas.addEventListener('mousedown', () => (this._mouse.down = true));
		canvas.addEventListener('mouseleave', () => this.handleMouseLeave());
		canvas.addEventListener('mouseup', () => (this._mouse.down = false));
	}

	public tick() {
		this.keyPresses.clear();
		this._mouse.clicked = false;
	}

	public isKeyDown(key: string): boolean {
		return this.keys.has(key);
	}

	public isKeyPressed(key: string): boolean {
		return this.keyPresses.has(key);
	}

	private handleKeyPress(e: KeyboardEvent) {
		this.keys.add(e.key);
		this.keyPresses.add(e.key);
	}

	private handleKeyUp(e: KeyboardEvent) {
		this.keys.delete(e.key);
	}

	private handleBlur() {
		this.keys.clear();
		this.keyPresses.clear();
	}

	private handleMouseLeave() {
		this._mouse.x = -1;
		this._mouse.y = -1;
		this._mouse.down = false;
	}

	private handleMouseMove(e: MouseEvent) {
		const { top, left } = this.game.canvas.getBoundingClientRect();
		this._mouse.x = e.clientX - left;
		this._mouse.y = e.clientY - top;
	}

	public get mouse(): Readonly<Mouse> {
		return this._mouse;
	}
}

export default ControlManager;
