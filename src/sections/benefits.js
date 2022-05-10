import React from 'react';
import clsx from 'clsx';
import styles from './benefits.module.css';

const BenefitsList = [
  {
    title: 'No Code',
    Svg: require('@site/static/img/no-code.svg').default,
    description: (
      <>
        Sophisticated no code solutions are easily created by extending them with low code and pro code extensions that operate in a similar way to the no code platform that staff are familiar with.
      </>
    ),
  },
  {
    title: 'Low Code',
    Svg: require('@site/static/img/low-code.svg').default,
    description: (
      <>
        Low code citizen developers use the hooks and extension points built by the pro code developers, and provide enhancements to no code. These are standardized, with defined integration points and embedded monitoring elements.
      </>
    ),
  },
  {
    title: 'Pro Code',
    Svg: require('@site/static/img/pro-code.svg').default,
    description: (
      <>
        Pro code develops extension points and components for no code/low code citizen developers to use. Examples include custom connectors for Power Platform or SPFx web parts for SharePoint and Teams.
      </>
    ),
  },
];

function Benefits({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function SectionBenefits() {
  return (
    <section className={styles.features}>
      <div className="container text--center">
        <h2 className={styles.title}>Customization and Development Competency</h2>
        <h3 className={styles.description}>An essential ingredient to get the most value from Microsoft 365</h3>
        <div className="row">
          {BenefitsList.map((props, idx) => (
            <Benefits key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
