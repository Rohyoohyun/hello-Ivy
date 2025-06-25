export interface ProjectFormData {
  authCode: string;
  title: string;
  startDate: string;
  endDate: string;
  link: string;
  description: string;
}

export interface ProjectAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ProjectFormData) => void;
}