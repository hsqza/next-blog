//@ts-nocheck
import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

function PostItem(props) {
	const { title, image, excerpt, date, slug } = props;

	const formattedDate = new Date(date).toLocaleDateString("pl-PL", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const imagePath = `/images/posts/${slug}/${image}`;

	return (
		<li className={classes.post}>
			<Link>
				<a>
					<div className={classes.image}>
						<Image src={imagePath} alt={image} width={300} height={200} />
					</div>
					<div className={classes.content}>
						<h3>Title</h3>
						<time>{formattedDate}</time>
						<p>The excerpt</p>
					</div>
				</a>
			</Link>
		</li>
	);
}

export default PostItem;
