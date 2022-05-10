import React from 'react';
import clsx from 'clsx';
import styles from './benefits.module.css';

const BenefitsList = [
  {
    title: 'Creates a more collaborative culture',
    Svg: require('@site/static/img/benefit-1.svg').default,
    description: (
      <>
        Providing your employees with the tools they need to communicate and coordinate with the team members in real-time can help you create a collaborative culture.
      </>
    ),
  },
  {
    title: 'Improves employee engagement',
    Svg: require('@site/static/img/benefit-2.svg').default,
    description: (
      <>
        With a digital workplace, you can drive employee engagement through customizable displays and notifications, visual communications, social networks, etc.
      </>
    ),
  },
  {
    title: 'Bring remote employees together',
    Svg: require('@site/static/img/benefit-3.svg').default,
    description: (
      <>
        A digital workplace solution can keep remote employees up to date on important company news, connect teams seamlessly, collaborate on projects, and much more.
      </>
    ),
  },
  {
    title: 'Increases productivity',
    Svg: require('@site/static/img/benefit-1.svg').default,
    description: (
      <>
        The digital workplace increase productivity by streamlining multiple components of workflow like instant messaging, video conferencing, and integrated communications.
      </>
    ),
  },
  {
    title: 'Allows self-service',
    Svg: require('@site/static/img/benefit-2.svg').default,
    description: (
      <>
        Implementing a digital workplace can help you access everything you need like information, social groups, and team projects help to cut down on increasing time, effort, and resources.
      </>
    ),
  },
  {
    title: 'Unites Workforce',
    Svg: require('@site/static/img/benefit-3.svg').default,
    description: (
      <>
        A transparent work environment is always preferable where the employees can track the status of tasks, track project progress, and alike. This in turn leads to fewer emails and follow-ups between employees.
      </>
    ),
  },
  {
    title: 'Save costs',
    Svg: require('@site/static/img/benefit-1.svg').default,
    description: (
      <>
        A transparent work environment is always preferable where the employees can track the status of tasks, track project progress, and alike. This in turn leads to fewer emails and follow-ups between employees.
      </>
    ),
  },
  {
    title: 'Highly customizable',
    Svg: require('@site/static/img/benefit-2.svg').default,
    description: (
      <>
        A modern digital workplace with Microsoft 365 offers easy customization features that allow you to choose from a set of themes, dictate everything from color scheme to widget without any coding requirements.
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
        <h2 className={styles.title}>What are the bendefits ?</h2>
        <h3 className={styles.description}>Creating a digital workplace involves implementing smart strategies, and providing employees the tools they require to connect, collaborate, and perform their core job responsibilities. </h3>
        <div className="row">
          {BenefitsList.map((props, idx) => (
            <Benefits key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
