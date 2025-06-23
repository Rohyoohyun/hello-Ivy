import React from "react";
import styles from "@/shared/css/Project/Project.module.css";

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    date: string;
    onAddClick?: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    id,
    title,
    description,
    date,
    onAddClick
}) => {
    return (
        <div className={styles.Card}>
            <h3 className={styles.Title}>{title}</h3>
            <p className={styles.Description}>{description}</p>

            <div className={styles.CardOverlay}>
                <p className={styles.Date}>{date}</p>
                <button
                    className={styles.AddButton}
                    onClick={() => onAddClick?.(id)}
                >
                    Add
                </button>
            </div>
        </div>
    );
};
