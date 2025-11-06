import { Step, StepContent } from "../../../../features/crud/steps/types";

  export const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'printing': return 'primary';
      case 'maintenance': return 'warning';
      case 'quality_check': return 'success';
      case 'post_processing': return 'secondary';
      default: return 'medium';
    }
  };

  export const getStepTypeIcon = (stepType?: string) => {
    switch (stepType) {
      case 'manual': return '👤';
      case 'automatic': return '🤖';
      case 'conditional': return '🔀';
      case 'timer': return '⏱️';
      default: return '📝';
    }
  };

  export const renderStepContent = (stepContent: StepContent) => {
    switch (stepContent.contentType) {
      case 'text':
        return <p>{stepContent.contentData}</p>;
      case 'image':
        return <img src={stepContent.contentData} alt="Step content" />;
      case 'video':
        return <video src={stepContent.contentData} controls />;
      case 'file':
        return <a href={stepContent.contentData} download>Download File</a>;
      case 'link':
        return <a href={stepContent.contentData} target="_blank" rel="noopener noreferrer">Open Link</a>;
      case 'template_variable':
        return <span>{stepContent.contentData}</span>;
      default:
        return null;
    }
  };