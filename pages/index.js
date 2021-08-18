import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
	{
		slug: "getting-started-with-nextjs1",
		title: "Getting started with nextJS",
		image: "getting-started-nextjs.png",
		excerpt: "NextJS is a the React framework for production",
		date: "2022-02-10",
	},
	{
		slug: "getting-started-with-nextjs2",
		title: "Getting started with nextJS",
		image: "getting-started-nextjs.png",
		excerpt: "NextJS is a the React framework for production",
		date: "2022-02-10",
	},
	{
		slug: "getting-started-with-nextjs3",
		title: "Getting started with nextJS",
		image: "getting-started-nextjs.png",
		excerpt: "NextJS is a the React framework for production",
		date: "2022-02-10",
	},
	{
		slug: "getting-started-with-nextjs4",
		title: "Getting started with nextJS",
		image: "getting-started-nextjs.png",
		excerpt: "NextJS is a the React framework for production",
		date: "2022-02-10",
	},
];

function HomePage() {
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</Fragment>
	);
}

export default HomePage;
