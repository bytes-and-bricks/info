import React from "react";
import styles from "./hero.module.css";
import Svg from "@site/static/img/hero.svg";

const secondaryHeader = "Digital Transformation";
const header = "Digital Transformation";
const description =
  "Digital transformation tends to take a back seat to other business priorities but luckily, 2020 has changed the way we work forever. In this day and age, the success of modern businesses depends on connectivity, collaboration, easy access to information, speed of response, and the ability to make decisions in real-time.";

const FeatureLinks = [
  {
    title: "Title",
    link: "https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-landing-page",
  },
];

function HeroContent({ title, link }) {
  return (
    <button className="button button--lg button--primary">{title}</button>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h3 className={styles.secondaryHeader}>{secondaryHeader}</h3>
            <h2 className={styles.header}>{header}</h2>
            <p className={styles.description}>{description}</p>
            {FeatureLinks.map((props, idx) => (
              <HeroContent key={idx} {...props} />
            ))}
          </div>
          <div className="col">
            <Svg className={styles.image} role="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
