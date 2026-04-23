export interface WorkExperience {
  title: string;
  icon: string;
  highlighted: boolean;
  description: string;
  startDate: string;
  endDate?: string;
  company: string;
  technologies: string[];
  responsibilities: string[];
  achievements: string[];
}

export function isRecent(exp: WorkExperience): boolean {
  if (!exp.endDate) {
    return true; // Ongoing experience is considered recent
  }
  const currentDate = new Date();
  const endDate = new Date(exp.endDate);
  return currentDate > endDate && currentDate.getFullYear() - endDate.getFullYear() < 2;
}

export function isCompleted(exp: WorkExperience): boolean {
  if (!exp.endDate) {
    return false; // Ongoing experience is not completed
  }
  const currentDate = new Date();
  const endDate = new Date(exp.endDate);
  return currentDate > endDate;
}
