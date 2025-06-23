import React, { useState } from "react";

import styles from '@/shared/css/Project/Project.module.css';

import Navbar from '@/widgets/NavBar';
import { Posts } from "@/shared/Theme/Project";
import { CategoryTabs } from "@/features/ProjectComponets/CategoryTabs";
import { ProjectCard } from "@/features/ProjectComponets/ProjectCard";

type CategoryKey = "전체" | "My" | "Team" | "2024" | "2025";

interface Post {
    id: string;
    title: string;
    description: string;
    date: string;
    category: number;
    url: string;
}

const categoryMap: Record<CategoryKey, number> = {
    전체: 0,
    My: 1,
    Team: 2,
    "2024": 3,
    "2025": 4,
};

export const Project: React.FC = () => {
    const [selectCategory, setSelectedCategory] = useState<CategoryKey>("전체");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const filteredByCategory: Post[] =
        selectCategory === "전체"
            ? Posts
            : Posts.filter((post: Post) => post.category === categoryMap[selectCategory]);

    const filteredPosts: Post[] = filteredByCategory.filter((post: Post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCardClick = (url: string): void => {
        if (url) {
            window.open(url, "_blank");
        } else {
            alert("해당 프로젝트는 아직 배포된 URL이 없습니다.");
        }
    };
    

    return (
        <>
            <Navbar />
            <p className={styles.MainText}>Project</p>
            <div className={styles.container}>
                <CategoryTabs
                    selected={selectCategory}
                    onSelect={setSelectedCategory}
                    onSearch={setSearchQuery}
                />
                <div className={styles.CardContainer}>
                    {filteredPosts.map((post: Post) => (
                        <div
                            key={post.id}
                            onClick={() => handleCardClick(post.url)}
                            style={{ cursor: "pointer" }}
                        >
                            <ProjectCard
                                id={post.id}
                                title={post.title}
                                description={post.description}
                                date={post.date}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Project;