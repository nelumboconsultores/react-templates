"use client";

import { QuickLinks, Steps } from "@modules/getStarted/components";
import styles from "./GetStartedPage.module.css";
import nextLogo from "../../../../../public/next.svg";

const GetStartedPage: React.FC = () => {
  const version = "1.0.0";
  const environment = "development";

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={nextLogo.src} className={styles.logo} alt="Next logo" />
        <h1 className={styles.title}>Welcome to Next.js!</h1>
        <p className={styles.subtitle}>
          A simple template with Next.js, TypeScript and Next Intl
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Environment Information</h2>
        <div className={styles.envInfo}>
          <div className={styles.envItem}>
            <div className={styles.envLabel}>Mode</div>
            <div className={styles.envValue}>{environment}</div>
          </div>
          <div className={styles.envItem}>
            <div className={styles.envLabel}>Version</div>
            <div className={styles.envValue}>{version}</div>
          </div>
          {/* <div className={styles.envItem}>
            <div className={styles.envLabel}>Theme</div>
            <div className={styles.envValue}>{theme}</div>
          </div> */}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Getting Started</h2>
        <Steps />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Useful Links</h2>
        <p style={{ color: "var(--fg-secondary)", marginBottom: "1.5rem" }}>
          Essential documentation for development with this technology stack
        </p>
        <QuickLinks />
      </section>
    </div>
  );
};

export default GetStartedPage;
