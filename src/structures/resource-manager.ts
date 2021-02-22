class ResourceManager<T extends HTMLElement & { src: string }> {
	private readonly resouces = new Map<string, T>();

	public constructor(
		private readonly ctor: new () => T,
		private readonly loadEvent: keyof HTMLElementEventMap = 'load'
	) {}

	public load(key: string, src: string) {
		return new Promise<T>((resolve, reject) => {
			const resource = new this.ctor();

			resource.src = src;

			resource.addEventListener(this.loadEvent, () => {
				this.resouces.set(key, resource);
				resolve(resource);
			});

			resource.addEventListener('error', reject);
		});
	}

	public get(key: string): T {
		const resource = this.resouces.get(key);
		if (!resource) throw new Error(`"${key}" resource missing`);

		return resource;
	}
}

export default ResourceManager;
