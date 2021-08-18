// @ts-nocheck
import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/man.jpg"
					alt="An image showing Man"
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I&apos;m Man</h1>
			<p>
				I blog about web development - especially frontend frameworks like React
				or Vue
			</p>
		</section>
	);
}

export default Hero;
