import React from "react";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import { QuickLinks } from "@/components/QuickLinks";

export default function About({ aboutData = [] }) {
	return (
		<div className={styles.aboutContainer}>
			<Head>
				<title>Purushotham Reddy</title>
				<meta
					name="description"
					content="Learn more about my 17+ years of expertise in Oracle ERP technologies, technical leadership, system integration, and project management."
				/>
				<meta
					name="keywords"
					content="Oracle ERP, Oracle e-Business Suite R12, Cloud Integration, System Integration, Project Management, VBCS, REST Web Services"
				/>
				<meta name="author" content="Your Name" />
			</Head>
			<div className={styles.aboutContent}>
				<h1>About Me</h1>
				<div className={styles.aboutBody}>
					{aboutData.length > 0 ? (
						aboutData.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))
					) : (
						<p>No information available at the moment.</p>
					)}
				</div>
			</div>
			<div className={styles.sidebar}>
				<QuickLinks />
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const aboutData = [
			"With over 19 years of dynamic experience in the IT industry, I specialize in software development, DevOps, automation, and quality assurance. Throughout my career, I’ve mastered the full Software Development Life Cycle (SDLC), seamlessly operating in both Waterfall and Agile environments. My expertise spans cloud computing with AWS services like EC2, S3, Lambda, RDS, and Kubernetes clusters, alongside designing robust CI/CD pipelines using Jenkins, Ansible, and Docker.",
			"I am an AWS Certified Solutions Architect and Developer with extensive hands-on experience in infrastructure automation using Terraform and Ansible. My contributions include creating scalable cloud environments, automating resource usage data collection, and optimizing application performance monitoring with tools like Splunk and Datadog.",
			"As a leader, I have successfully managed diverse teams, mentored junior engineers, and delivered high-quality results within stringent timelines. My passion for innovation drives me to continuously refine processes, ensuring reliability, efficiency, and excellence in every project.",
		];

		return {
			props: { aboutData },
		};
	} catch (error) {
		console.error("Error fetching about data:", error);
		return {
			props: { aboutData: [] },
		};
	}
}
