interface Math {
	radians(degrees: number): number;
	degrees(radians: number): number;
	mod(n1: number, n2: number): number;
}

declare module '*.png' {
	const url: string;
	export default url;
}

declare module '*.wav' {
	const url: string;
	export default url;
}
