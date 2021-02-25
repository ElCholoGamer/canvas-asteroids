class ControlManager {
	private readonly keys = new Set<string>();
	private readonly keyPresses = new Set<string>();

	public constructor() {
		document.addEventListener('keydown', e => this.handleKeyPress(e));
		document.addEventListener('keyup', e => this.handleKeyUp(e));
		window.addEventListener('blur', () => this.handleBlur());
	}

	public tick() {
		this.keyPresses.clear();
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
}

export default ControlManager;
