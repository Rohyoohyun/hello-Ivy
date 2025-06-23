import { atom } from "recoil";

export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  github: string;
  url: string;
  category: number;
}

export const projectListState = atom<Project[]>({
  key: "projectListState",
  default: [
    {
      id: "project001",
      title: "밥뭇나:Bob-mued-na",
      description: "부산시민을 위한 AI 맞춤 식단 추천 서비스...",
      date: "2024.07.30 ~ 2024.11.20",
      github: "https://github.com/bobneuj-jeu",
      url: "https://i-vill.notion.site/1aee7eb118e080bc8443fa4ba0e01637?pvs=74",
      category: 2,
    },
  ],
});
