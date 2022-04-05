export const slugMatchUrl = (url: string, slug: string): boolean => {
	if (url.includes(slug)) return true;
	return false;
};