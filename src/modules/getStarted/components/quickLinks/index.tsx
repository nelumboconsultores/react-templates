import { DocsUrls } from "../../enums";
import { QuickLink } from "../../types";
import styles from "./QuickLinks.module.css";

const quickLinks: QuickLink[] = [
  {
    title: "Next.js",
    url: DocsUrls.NEXT_JS,
    description: "The React Framework for the Web",
  },
  {
    title: "React",
    url: DocsUrls.REACT,
    description: "JavaScript library for building user interfaces",
  },
  {
    title: "Next Intl",
    url: DocsUrls.NEXT_INTL,
    description: "Internationalization for Next.js",
  },
  {
    title: "TypeScript",
    url: DocsUrls.TYPESCRIPT,
    description: "JavaScript with static types for more robust development",
  },
];

export const QuickLinks: React.FC = () => {
  return (
    <div className={styles.links}>
      {quickLinks.map((link) => (
        <a
          key={link.title}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <div className={styles.linkTitle}>{link.title}</div>
          <div className={styles.linkDescription}>{link.description}</div>
        </a>
      ))}
    </div>
  );
};
