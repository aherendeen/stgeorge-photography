export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean;
	author: {
		name: string;
		email: string;
		twitter: string;
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "St. George Photography",
	// Your website's title and description (meta fields)
	title: "St. George Photography - bringing your moments to life",
	description:
		"St. George Photography is a professional photography service specializing in capturing life's most precious moments. From weddings and family portraits to corporate events and personal milestones, we bring your moments to life with stunning imagery and exceptional service.",
	// Enable Astro 3.0 view transitions (optional)
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Andrew Herendeen",
		email: "support@stgeorgephotography.vercel.app",
		twitter: "_aherendeen",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/stgeorgephoto-logo.jpg",
		alt: "Logo",
	},
};

export default siteData;
