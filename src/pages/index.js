import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { QuickLinks } from "@/components/QuickLinks";
import Link from "next/link";

export default function Home({ user }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>{user.name}</title>
				<meta
					name="description"
					content={`Welcome to ${user.name} portfolio`}
				/>
			</Head>
			<div className={styles.home}>
				<section className={styles.hero}>
					<div className={styles.heroText}>
						<h1>Hi, I&apos;m {user.name}</h1>
						<p>{user.title}</p>
					</div>
					<div className={styles.heroImage}>
						<img src={user.profileImage} alt="Profile" />
					</div>
				</section>
				<div className={styles.mainContent}>
					<div className={styles.contentPanel}>
						<section id="about" className={styles.about}>
							<div className={styles.aboutText}>
								<h2>About Me</h2>
								<p>{user.about}</p>
							</div>
						</section>
						<div className={styles.heroButtons}>
							<Link href="/about" className={styles.heroButton}>
								Read More ...
							</Link>
						</div>
					</div>
					<div className={styles.quickLinksPanel}>
						<QuickLinks />
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const user = {
		name: "Purushotham Reddy",
		title: "AWS Certified Solutions Architect | DevOps & Cloud Expert | CI/CD & Automation Specialist | Kubernetes | Terraform | Software Development Leader",
		profileImage: "/img/pic.jpg",
		about: `
		With over 19 years of IT experience, I specialize in software development, DevOps, cloud
computing, and automation. Proficient in AWS services, Kubernetes, CI/CD pipelines, and
infrastructure tools like Terraform and Ansible, I excel at designing scalable, automated
solutions. My expertise extends to application performance monitoring with tools like Splunk and
Datadog, and I am certified as an AWS Solutions Architect and Developer. I have a proven track
record of leading teams, mentoring engineers, and delivering high-quality results within tight
deadlines, driving innovation and efficiency in every project.

		`,
	};

	return {
		props: { user },
	};
}
