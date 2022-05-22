import React from "react";
import clsx from "clsx";
import styles from "./features.module.css";

const header = "Digital Workspace";
const subHeader = "Build a single tool to acces, share, organise and collaborate on douments of Architecure Projects";

const FeatureList = [
  {
    Svg: require("@site/static/img/chat.svg").default,
    primaryText: "Internal Communication Tools",
    secondaryText: (
      <>
        <ul>
          <li>
            <strong>Instant Chat and Communication</strong>
            <p>Social, and video conferencing features to share articles, postings, and chat with co-workers in real-time.</p>
          </li>
          <li>
            <strong>Team Discussions</strong>
            <p>Quick sharing of ideas and thoughts with team members through chats, calls, meetings, and group conversations.</p>
          </li>
          <li>
            <strong>Newsletters and Announcements</strong>
            <p>Publishing of company, department, and team-wide communication to keep your employees always updated.</p>
          </li>
        </ul>
      </>
    ),
  },
  {
    Svg: require("@site/static/img/tasks.svg").default,
    primaryText: "Task and Project Collaboration Tools",
    secondaryText: (
      <>
        <ul>
          <li>
            <strong>Task Management</strong>
            <p>Tracking of task issues, and custom tracking lists to complete all the listed tasks effectively.</p>
          </li>
          <li>
            <strong>Shared Calendar</strong>
            <p>Collaboration for team events, manage appointments and meetings using customized calendar overviews.</p>
          </li>
          <li>
            <strong>Shared To-Do list</strong>
            <p>Define project teams, assign tasks, and manage entire projects with a shared overview in a single window.</p>
          </li>
          <li>
            <strong>Resource Management</strong>
            <p>All informations and features to manage your ressources and their contracts.</p>
          </li>
          <li>
            <strong>Hours Entry</strong>
            <p>Time tracking and leave request will give allow to follow work in real-time.</p>
          </li>
          <li>
            <strong>Financial analysis</strong>
            <p>Gain insights and pilot your business with the financial analysis and reports</p>
          </li>
        </ul>
      </>
    ),
  },
  {
    Svg: require("@site/static/img/document.svg").default,
    primaryText: "Document & Content Management Tools",
    secondaryText: (
      <>
        <ul>
          <li>
            <strong>Secure Document Management</strong>
            <p>A single window to view, edit, co-author, share and publish documents to collaborate seamlessly. It allows you to manage document versioning, provide role-based permissions to users.</p>
          </li>
          <li>
            <strong>Library Management</strong>
            <p>Easy access to multiple libraries for every department and project site, filter your libraries with Document Sync features.</p>
          </li>
          <li>
            <strong>Construction Costs Benchmarks</strong>
            <p>The eCCC standard defines a cost type breakdown according to components and cost elements wich enables the verification and direct comparison of analogue components.</p>
          </li>
          <li>
            <strong>Construction Costs Estimate</strong>
            <p>Create cost estimates according to CFC anf eCCC, or your own construction cost plans. With IFC integration you can draw the quantities and dimensions directly from your BIM model.</p>
          </li>
        </ul>
      </>
    ),
  },
  {
    Svg: require("@site/static/img/integration.svg").default,
    primaryText: "Dynamic Integrations",
    secondaryText: (
      <>
        <ul>
          <li>
            <strong>Microsoft 365 Hub</strong>
            <p>Reap all the benefits of Office 365 with the productivity tools such as Outlook, OneDrive, Microsoft Teams, Delve, Yammer, Power BI (Business Intelligence), Power Apps, and OneNote.</p>
          </li>
          <li>
            <strong>Microsoft Dynamics 365</strong>
            <p>Easy CRM access to provide a connected view of data intelligence on customer records, transactions, behaviors, and predictive insight tools.</p>
          </li>
          <li>
            <strong>IFC viewer</strong>
            <p>View, analyse and share your 3D model.</p>
          </li>
        </ul>
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
