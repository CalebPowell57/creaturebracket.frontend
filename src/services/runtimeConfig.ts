export const getConfigVar = (key: string): string | undefined => {
	try {
		return new URL(window.env[key as keyof typeof window.env] as string).toString();
	} catch (err) {
		return (window.env[key as keyof typeof window.env] as string).toString();
	}
};