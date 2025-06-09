import styles from '@/shared/css/AboutMe/SkillInfo.module.css';

export default function SkillInfo() {
    return (
        <>
            <p className={styles.title}>스킬</p>
            <div className={styles.container}>
                <div className={styles.SkillCard}>
                    <p className={styles.Category}>Design</p>
                    <div className={styles.SkillItem}>
                        <img src="/SkillImg/Figma.svg" className={styles.SkillImg} alt="Figma" />
                        <span>Figma</span>
                    </div>
                    <div className={styles.SkillItem}>
                        <img src="/SkillImg/Photoshop.svg" className={styles.SkillImg} alt="Photoshop" />
                        <span>Photoshop</span>
                    </div>
                    <div className={styles.SkillItem}>
                        <img src="/SkillImg/Illustrator.svg" className={styles.SkillImg} alt="Illustrator" />
                        <span>Illustrator</span>
                    </div>
                </div>

                <div className={styles.SkillCard}>
                    <p className={styles.Category}>Web Publishing</p>
                    <div className={styles.SkillItem}>
                        <img src="/SkillImg/HTML.svg" className={styles.SkillImg} alt="HTML5" />
                        <span>HTML5</span>
                    </div>
                    <div className={styles.SkillItem}>
                        <img src="/SkillImg/CSS.svg" className={styles.SkillImg} alt="CSS3" />
                        <span>CSS3</span>
                    </div>
                    <div className={styles.SkillItem}>
                        <img src="/SkillImg/JS.svg" className={styles.SkillImg} alt="JavaScript" />
                        <span>JavaScript</span>
                    </div>
                    <div className={styles.SkillItem}>
                        <img src="/SkillImg/React.svg" className={styles.SkillImg} alt="React" />
                        <span>React</span>
                    </div>
                </div>

                <div className={styles.SkillCard}>
                    <p className={styles.Category}>Office</p>
                    <div className={styles.SkillItem}>
                        <img src="/SkillImg/MicrosoftOffice.svg" className={styles.SkillImg} alt="MicrosoftOffice" />
                        <span>Microsoft Office</span>
                    </div>
                    <div className={styles.SkillItem}>
                        <img src="/SkillImg/GoogleDocs.svg" className={styles.SkillImg} alt="GoogleDocs" />
                        <span>Google Docs</span>
                    </div>
                    <div className={styles.SkillItem}>
                        <img src="/SkillImg/Notion.svg" className={styles.SkillImg} alt="Notion" />
                        <span>Notion</span>
                    </div>
                    <div className={styles.SkillItem}>
                        <img src="/SkillImg/GitHub.svg" className={styles.SkillImg} alt="GitHub" />
                        <span>GitHub</span>
                    </div>
                </div>

                <div className={styles.SkillCard}>
                    <p className={styles.Category}>Before Used</p>
                    <div className={styles.SkillItem}>
                        <img src="/SkillImg/Spring.svg" className={styles.SkillImg} alt="MySQL" />
                        <span>Spring Boot</span>
                    </div>
                    <div className={styles.SkillItem}>
                        <img src="/SkillImg/NodeJS.svg" className={styles.SkillImg} alt="Docker" />
                        <span>Node.js</span>
                    </div>
                    <div className={styles.SkillItem}>
                        <img src="/SkillImg/MySQL.svg" className={styles.SkillImg} alt="MySQL" />
                        <span>MySQL</span>
                    </div>
                    <div className={styles.SkillItem}>
                        <img src="/SkillImg/Docker.svg" className={styles.SkillImg} alt="Docker" />
                        <span>Docker</span>
                    </div>
                </div>
            </div>
        </>
    );
}