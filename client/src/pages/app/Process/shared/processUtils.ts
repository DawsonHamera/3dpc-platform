import { ProcessInstance, ProcessInstanceStep } from '../../../../types';

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'running': return 'success';
    case 'paused': return 'warning';
    case 'completed': return 'medium';
    case 'failed': return 'danger';
    case 'cancelled': return 'dark';
    default: return 'primary';
  }
};

export const getStatusIcon = (status: string) => {
  switch (status) {
    case 'running': return '🟢';
    case 'paused': return '⏸️';
    case 'completed': return '✅';
    case 'failed': return '❌';
    case 'cancelled': return '🚫';
    default: return '⏳';
  }
};

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'low': return 'success';
    case 'normal': return 'primary';
    case 'high': return 'warning';
    case 'critical': return 'danger';
    default: return 'medium';
  }
};

export const getCurrentStep = (
  processSteps: ProcessInstanceStep[] | undefined
): ProcessInstanceStep | null => {
  if (!processSteps) return null;
  return processSteps.find(step => step.status === 'pending') || null;
};

export const getCompletedStepsCount = (
  processSteps: ProcessInstanceStep[] | undefined
): number => {
  if (!processSteps) return 0;
  return processSteps.filter(step => step.status === 'completed').length;
};

export const getTotalStepsCount = (
  processSteps: ProcessInstanceStep[] | undefined
): number => {
  if (!processSteps) return 0;
  return processSteps.length;
};

export const getProgressPercentage = (
  processSteps: ProcessInstanceStep[] | undefined
): number => {
  const total = getTotalStepsCount(processSteps);
  const completed = getCompletedStepsCount(processSteps);
  return total > 0 ? (completed / total) * 100 : 0;
};

export const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString();
};

export const formatDateTime = (dateString: string | undefined): string => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleString();
};

export const getProcessDisplayName = (process: ProcessInstance): string => {
  return process.processTemplate?.name || process.name;
};

export const isProcessActive = (process: ProcessInstance): boolean => {
  return ['running', 'paused'].includes(process.status);
};

export const canResumeProcess = (process: ProcessInstance): boolean => {
  return process.status === 'paused';
};

export const canPauseProcess = (process: ProcessInstance): boolean => {
  return process.status === 'running';
};

export const canCancelProcess = (process: ProcessInstance): boolean => {
  return ['running', 'paused'].includes(process.status);
};
