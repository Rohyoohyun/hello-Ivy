import React from "react";
import styles from "@/shared/css/Project/Project.module.css";

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    date: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, date}) => {
    return (
        <div className={styles.Card}>
            <p className={styles.Date}>{date}</p>
            <h3 className={styles.Title}>{title}</h3>
            <p className={styles.Description}>{description}</p>
        </div>
    );
};