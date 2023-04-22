import styles from "./About.module.css";
import PdfFile from "../../assets/cv.pdf";

export default function About() {
	return (
		<>
			<div className={styles.aboutContainer}>
				<div className={styles.about}>
					<div className={styles.about_text}>
						<h2 className={styles.about_name_descr}>Hi, I am Nicolás.</h2>
						<h2 className={styles.about_profession}>Full-stack PERN developer</h2>
						<p className={styles.about_descript}>
							I am 22 years old and currently I am learning web development with tools
							such as Tailwind, Express and React. I have no experience working in IT
							yet, but I am interested in becoming a Software Developer in the near
							future. Previously, I studied Human Resources for 4 years and I have been
							a soccer referee for many years so my unique background will be a
							valuable asset to an IT company.
						</p>

						<figure className={styles.about_techno}>
							<h2 className={styles.social_techno_title}>Technologies I deal with</h2>
							<div>
								<img src={require("../../assets/icons/html.png")} alt="html img" />
								<img src={require("../../assets/icons/css.png")} alt="css img" />
								<img src={require("../../assets/icons/js.png")} alt="javascript img" />
								<img src={require("../../assets/icons/react.png")} alt="react img" />
								<img
									src={require("../../assets/icons/c_sharp.png")}
									alt="c sharp img"
								/>
								<br></br>
							</div>
							<div>
								<img src={require("../../assets/icons/node.png")} alt="node img" />
								<img src={require("../../assets/icons/sql.png")} alt="sql img" />
								<img src={require("../../assets/icons/mongo.png")} alt="mongo img" />
							</div>
						</figure>
						<figure className={styles.about_social_media}>
							<h2 className={styles.social_techno_title}>Social media and CV</h2>
							<a
								href="https://www.linkedin.com/in/nicol%C3%A1s-von-muhlinen-6a7727208/"
								target={"_blank"}
								rel="noreferrer"
							>
								<img
									src={require("../../assets/icons/linkedin.png")}
									alt="linkedin img"
								/>
							</a>
							<a
								href="https://github.com/nicovon24"
								target={"_blank"}
								rel="noreferrer"
							>
								<img src={require("../../assets/icons/github.png")} alt="github img" />
							</a>
							<img
								src={require("../../assets/icons/cv.png")}
								alt="cv img"
								onClick={() => window.open(PdfFile)}
							/>
						</figure>
					</div>
					<figure className={styles.about_pic_container}>
						<img src={require("../../assets/fondoMio.png")} alt="img about" />
						<p className={styles.about_name}>Nicolás Von Mühlinen</p>
					</figure>
				</div>
			</div>
		</>
	);
}
