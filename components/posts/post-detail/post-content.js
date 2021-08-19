// @ts-nocheck
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_CONTENT = {
	slug: "getting-started-with-nextjs1",
	title: "Getting started with nextJS",
	image: "getting-started-nextjs.png",
	date: "2022-02-10",
	content: "# This is a first post",
};

function PostContent() {
	const imagePath = `/images/posts/${DUMMY_CONTENT.slug}/${DUMMY_CONTENT.image}`;

	return (
		<article className={classes.content}>
			<PostHeader title={DUMMY_CONTENT.title} image={imagePath} />
			{DUMMY_CONTENT.content}
		</article>
	);
}

export default PostContent;
