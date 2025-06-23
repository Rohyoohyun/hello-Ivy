import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  github: string;
  url: string;
  category: number;
}

interface Props {
  onAdd: (newProject: Project) => void;
}

const generateId = () => {
  // 예: timestamp + 랜덤값 조합
  return `project_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
};

const ProjectAddModal: React.FC<Props> = ({ onAdd }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    github: "",
    url: "",
    category: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProject: Project = {
      id: generateId(),
      ...form,
      category: Number(form.category),
    };

    onAdd(newProject);
    navigate("/"); // 모달 닫고 메인 화면으로 복귀
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>프로젝트 추가</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="프로젝트 제목"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="설명"
            required
          />
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            placeholder="기간"
            required
          />
          <input
            name="github"
            value={form.github}
            onChange={handleChange}
            placeholder="GitHub URL"
          />
          <input
            name="url"
            value={form.url}
            onChange={handleChange}
            placeholder="프로젝트 URL"
          />
          <input
            name="category"
            type="number"
            value={form.category}
            onChange={handleChange}
            placeholder="카테고리 번호"
            required
          />
          <button type="submit">추가하기</button>
          <button type="button" onClick={handleClose}>취소</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectAddModal;