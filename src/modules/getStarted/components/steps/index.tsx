import { Step } from "@modules/getStarted/types";
import styles from "./Steps.module.css";

const steps: Step[] = [
  {
    command: "pnpm run dev",
    description:
      "Start the development server with hot-reload to develop your application",
  },
  {
    command: "pnpm run build",
    description:
      "Build the application for production with optimizations and minification",
  },
  {
    command: "pnpm run start",
    description: "Start the production server",
  },
];

export const Steps: React.FC = () => {
  return (
    <ol className={styles.steps}>
      {steps.map((step, index) => (
        <li key={step.command} className={styles.step}>
          <div className={styles.stepNumber}>{index + 1}</div>
          <div className={styles.stepContent}>
            <div className={styles.stepCommand}>{step.command}</div>
            <div className={styles.stepDescription}>{step.description}</div>
          </div>
        </li>
      ))}
    </ol>
  );
};
