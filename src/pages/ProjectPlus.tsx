import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectFormData } from '@/shared/Theme/types';
import { X, Plus, Key, FileText, Calendar, Link } from 'lucide-react';
import { RiKey2Line } from "react-icons/ri";

import styles from '@/shared/css/Project/ProjectPlus.module.css';

const ProjectPlus: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<ProjectFormData>({
    authCode: '',
    title: '',
    startDate: '',
    endDate: '',
    link: '',
    description: '',
  });

  const [errors, setErrors] = useState<Partial<ProjectFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ProjectFormData> = {};

    if (!formData.authCode || formData.authCode.length !== 8) {
      newErrors.authCode = '인증번호는 8자리여야 합니다.';
    }
    if (!formData.title.trim()) {
      newErrors.title = '프로젝트 제목을 입력해주세요.';
    }
    if (!formData.startDate) {
      newErrors.startDate = '시작일을 선택해주세요.';
    }
    if (!formData.endDate) {
      newErrors.endDate = '종료일을 선택해주세요.';
    }
    if (formData.startDate && formData.endDate && formData.startDate > formData.endDate) {
      newErrors.endDate = '종료일은 시작일보다 늦어야 합니다.';
    }
    if (!formData.link.trim()) {
      newErrors.link = '링크를 입력해주세요.';
    } else if (!isValidUrl(formData.link)) {
      newErrors.link = '올바른 URL 형식을 입력해주세요.';
    }
    if (!formData.description.trim()) {
      newErrors.description = '서비스 소개를 입력해주세요.';
    } else if (formData.description.length > 60) {
      newErrors.description = '서비스 소개는 60자 이하로 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (string: string): boolean => {
    try {
      new URL(string);
      return true;
    } catch {
      return false;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ProjectFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('제출된 데이터:', formData);
      // 여기에 서버 전송 로직
      navigate('/project');
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button
          onClick={() => navigate('/project')}
          className={styles.closeButton}
          aria-label="닫기"
        >
          <X />
        </button>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        noValidate
        className={styles.form}
      >
        {/* 인증번호 */}
        <label className={styles.label}>
          <p className={styles.bodyText}><RiKey2Line /> 인증번호 입력</p>
          <input
            type="text"
            name="authCode"
            value={formData.authCode}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.authCode ? styles.inputError : ''}`}
            placeholder="8자를 입력해주세요."
          />
          {errors.authCode && <p className={styles.errorText}>{errors.authCode}</p>}
        </label>

        {/* 프로젝트 제목 */}
        <label className={styles.label}>
        <p className={styles.bodyText}><FileText size={16} /> 프로젝트 제목</p>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.title ? styles.inputError : ''}`}
            placeholder="프로젝트 제목을 입력하세요"
          />
          {errors.title && <p className={styles.errorText}>{errors.title}</p>}
        </label>

        {/* 프로젝트 기간 */}
        <label className={styles.label}>
        <p className={styles.bodyText}><Calendar size={16} /> 프로젝트 기간</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className={`${styles.input} ${errors.startDate ? styles.inputError : ''}`}
            />
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className={`${styles.input} ${errors.endDate ? styles.inputError : ''}`}
            />
          </div>
          {errors.startDate && <p className={styles.errorText}>{errors.startDate}</p>}
          {errors.endDate && <p className={styles.errorText}>{errors.endDate}</p>}
        </label>

        {/* 링크 */}
        <label className={styles.label}>
        <p className={styles.bodyText}><Link size={16} /> 링크</p>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.link ? styles.inputError : ''}`}
            placeholder="https://example.com"
          />
          {errors.link && <p className={styles.errorText}>{errors.link}</p>}
        </label>

        {/* 서비스 소개 */}
        <label className={styles.label}>
        <p className={styles.bodyText}><FileText size={16} /> 서비스 소개 ({formData.description.length}/60자)</p>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            maxLength={60}
            rows={3}
            className={`${styles.textarea} ${errors.description ? styles.inputError : ''}`}
            placeholder="서비스를 간단히 소개해주세요"
          />
          {errors.description && <p className={styles.errorText}>{errors.description}</p>}
        </label>

        <button type="submit" className={styles.submitButton}>
          프로젝트 추가
        </button>
      </form>
    </div>
  );
};

export default ProjectPlus;