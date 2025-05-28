"use client";
import { FC, HTMLAttributes } from "react";
import styles from "./Projects.module.css";
import classNames from "classnames";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import { projectsData } from "./ProjectsData";
import { ProjectsCard } from "../ProjectsCard/ProjectsCard";

interface ProjectsProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Projects: FC<ProjectsProps> = ({ className, ...props }) => {
  return (
    <section className={classNames(styles.projects, className)} {...props}>
      <Container className={styles.container}>
        <Title
          type="h2"
          className={styles.title}
          aria-label="Примеры наших работ"
        >
          Примеры наших работ
        </Title>
        <ul className={styles.list}>
          {projectsData.map((item, i) => (
            <ProjectsCard
              key={i}
              image={item.image}
              title={item.title}
              alt={item.alt}
              text={item.text}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};
