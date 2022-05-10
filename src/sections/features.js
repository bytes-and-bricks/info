import React from "react";
import clsx from "clsx";
import styles from "./features.module.css";

const header = "Batteries Included";
const subHeader = "Everything you need to start organising your data today";

const FeatureList = [
  {
    Svg: require("@site/static/img/no-code.svg").default,
    primaryText: "The Power of a Theme, with the simplicity of a Starter",
    secondaryText: (
      <>
        Sophisticated no code solutions are easily created by extending them
        with low code and pro code extensions that operate in a similar way to
        the no code platform that staff are familiar with.
      </>
    ),
  },
  {
    Svg: require("@site/static/img/low-code.svg").default,
    primaryText: "Content Model Included",
    secondaryText: (
      <>
        Low code citizen developers use the hooks and extension points built by
        the pro code developers, and provide enhancements to no code. These are
        standardized, with defined integration points and embedded monitoring
        elements.
      </>
    ),
  },
  {
    Svg: require("@site/static/img/pro-code.svg").default,
    primaryText: "Lightweight",
    secondaryText: (
      <>
        Pro code develops extension points and components for no code/low code
        citizen developers to use. Examples include custom connectors for Power
        Platform or SPFx web parts for SharePoint and Teams.
      </>
    ),
  },
];

function Feature({ Svg, primaryText, secondaryText, orientation = "default" }) {
  const orientationStyle = orientation === "default" ? "" : styles.reverse;
  return (
    <div className={`${styles.featureContainer} ${orientationStyle}`}>
      <div className={styles.copyColumn}>
        <div className={styles.copyContainer}>
          <h3 className={styles.primaryText}>{primaryText}</h3>
          <p className={styles.secondaryText}>{secondaryText}</p>
        </div>
      </div>
      <div className={styles.imageColumn}>
        <Svg className={styles.image} role="img" />
      </div>
    </div>
  );
}

export default function SectionFeatures() {
  return (
    <section className={styles.content}>
      <div className="container text--center">
        <h2 className={styles.header}>{header}</h2>
        <h3 className={styles.subHeader}>{subHeader}</h3>
          {FeatureList.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
              orientation={idx % 2 === 0 ? "default" : "reverse"}
            />
          ))}
      </div>
    </section>
  );
}
