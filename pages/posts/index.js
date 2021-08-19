// @ts-nocheck
import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS2 = [
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

function AllPostPage() {
	return <AllPosts posts={DUMMY_POSTS2} />;
}

export default AllPostPage;
