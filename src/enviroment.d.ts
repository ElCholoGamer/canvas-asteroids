interface Math {
	radians(degrees: number): number;
	degrees(radians: number): number;
}

declare module '*.png' {
	const url: string;
	export default url;
}

declare module '*.wav' {
	const url: string;
	export default url;
}
