// Shared type definitions for the 3DPC application
// Based on backend entity structures

// Base entity interface with common fields
export interface BaseEntity {
  id: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

// Status entities
export interface PrinterStatus extends BaseEntity {
  name: string;
  description?: string;
}

export interface TaskStatus extends BaseEntity {
  name: string;
  description?: string;
}

export interface RequestStatus extends BaseEntity {
  name: string;
  description?: string;
}

// File entity with computed URLs
export interface File extends BaseEntity {
  originalName: string;
  fileName: string;
  filePath: string;
  mimeType: string;
  fileSize: number;
  uploadedBy?: number;
  type?: 'image' | 'model' | 'texture' | 'document' | 'other';
  description?: string;
  // Computed URLs
  url: string;
  fullUrl: string;
  // Relations
  uploader?: User;
}

// User entity
export interface User extends BaseEntity {
  email: string;
  name: string;
  gradeId?: number;
  roleId?: number;
  lastActive?: string;
}

// Material entity with file relations
export interface Material extends BaseEntity {
  name: string;
  hex: string;
  textureFileId?: number;
  imageFileId?: number;
  type?: string;
  vendor?: string;
  minTemp?: number;
  maxTemp?: number;
  details?: string;
  // Relations
  texture?: File;
  image?: File;
}

// Material slot for models
export interface MaterialSlot {
  slot: string;
  defaultMaterialId?: number;
  materialId?: number;
  defaultMaterial?: Material;
}

// Model entity with file relations
export interface Model extends BaseEntity {
  name: string;
  imageFileId?: number;
  modelFileId?: number;
  estimatedDuration?: number;
  estimatedFilament?: number;
  description?: string;
  tags?: string[];
  materialSlots?: MaterialSlot[];
  // Relations
  image?: File;
  modelFile?: File;
}

// Printer entity with relations
export interface Printer extends BaseEntity {
  name: string;
  location?: string;
  owner?: string;
  details?: string;
  statusId?: number;
  imageFileId?: number;
  currentMaterialId?: number;
  // Relations
  status?: PrinterStatus;
  imageFile?: File;
  material?: Material;
}

// Process template entity
export interface ProcessTemplate extends BaseEntity {
  name: string;
  description?: string;
  version?: string;
  isActive?: boolean;
  category?: 'printing' | 'maintenance' | 'quality_check' | 'post_processing';
  estimatedDuration?: number;
  steps?: WorkflowStep[];
}

// Step entity (core step definition)
export interface Step extends BaseEntity {
  title: string;
  description?: string;
  isCritical: boolean;
  isRequired: boolean;
  stepType: 'manual' | 'automatic' | 'conditional' | 'timer';
  
  // Relations
  stepContents?: StepContent[];
  stepActions?: StepAction[];
}

// Workflow step entity
export interface WorkflowStep extends BaseEntity {
  processTemplateId: number;
  stepOrder: number;
  title: string;
  description?: string;
  stepType?: 'manual' | 'automatic' | 'conditional' | 'timer';
  isRequired?: boolean;
  estimatedDuration?: number;
  completionCriteria?: any;
  validationRules?: any;
  content?: StepContent[];
  actions?: StepAction[];
  execution?: ProcessExecution;
  isCurrent?: boolean;
  isCompleted?: boolean;
  isAvailable?: boolean;
}

// Step content entity
export interface StepContent extends BaseEntity {
  workflowStepId: number;
  contentOrder: number;
  contentType: 'text' | 'image' | 'video' | 'file' | 'link' | 'template_variable';
  contentData: any;
  isRequired?: boolean;
}

// Step action entity
export interface StepAction extends BaseEntity {
  workflowStepId: number;
  actionOrder: number;
  label: string;
  actionType: 'complete_step' | 'skip_step' | 'go_to_step' | 'update_status' | 'start_timer' | 'capture_data' | 'send_notification';
  actionConfig?: any;
  buttonStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  icon?: string;
  isEnabled?: boolean;
  requiresConfirmation?: boolean;
  confirmationMessage?: string;
  triggers?: StepTrigger[];
}

// Step trigger entity
export interface StepTrigger extends BaseEntity {
  stepActionId: number;
  triggerOrder: number;
  triggerType: 'update_task_status' | 'update_printer_status' | 'send_notification' | 'schedule_timer' | 'create_subtask' | 'log_event';
  triggerConfig: any;
  conditionRules?: any;
  isEnabled?: boolean;
}

// Process instance entity (new execution system)
export interface ProcessInstance extends BaseEntity {
  name: string;
  description?: string;
  processTemplateId: number;
  status: 'pending' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled';
  priority: 'low' | 'normal' | 'high' | 'critical';
  assignedUserId?: number;
  currentStepOrder: number;
  estimatedDuration?: number; // in minutes
  actualDuration?: number; // in minutes
  startedAt?: string;
  completedAt?: string;
  dueDate?: string;
  metadata?: Record<string, any>;
  
  // Relations
  processInstanceSteps?: ProcessInstanceStep[];
  processLogs?: ProcessLog[];
  processTemplate?: ProcessTemplate;
  assignedUser?: User;
}

// Process instance step entity
export interface ProcessInstanceStep extends BaseEntity {
  processInstanceId: number;
  stepId: number;
  stepOrder: number;
  status: 'pending' | 'running' | 'waiting_user' | 'waiting_condition' | 'waiting_timer' | 'completed' | 'skipped' | 'failed';
  startedAt?: string;
  completedAt?: string;
  assignedUserId?: number;
  isRequired: boolean;
  dueDate?: string;
  notes?: string;
  inputData?: Record<string, any>;
  outputData?: Record<string, any>;
  metadata?: Record<string, any>;
  
  // Relations
  processInstance?: ProcessInstance;
  step?: Step;
  assignedUser?: User;
}

// Process log entity
export interface ProcessLog extends BaseEntity {
  processInstanceId: number;
  stepOrder?: number;
  level: 'debug' | 'info' | 'warn' | 'error';
  action: 'process_started' | 'process_completed' | 'process_failed' | 'process_paused' | 'process_resumed' | 'process_cancelled' | 'step_started' | 'step_completed' | 'step_failed' | 'step_assigned' | 'step_unassigned';
  message: string;
  data?: Record<string, any>;
  userId?: number;
  
  // Relations
  processInstance?: ProcessInstance;
  user?: User;
}

// Legacy process interface (kept for backward compatibility)
export interface Process extends BaseEntity {
  processTemplateId: number;
  taskId: number;
  currentStepId?: number;
  status?: 'not_started' | 'in_progress' | 'paused' | 'completed' | 'failed' | 'cancelled';
  startedAt?: string;
  completedAt?: string;
  progressPercentage?: number;
  processData?: any;
  template?: ProcessTemplate;
  executions?: ProcessExecution[];
}

// Process execution entity
export interface ProcessExecution extends BaseEntity {
  processId: number;
  workflowStepId: number;
  status?: 'pending' | 'in_progress' | 'completed' | 'skipped' | 'failed';
  startedAt?: string;
  completedAt?: string;
  completedBy?: number;
  executionData?: any;
  notes?: string;
  durationMinutes?: number;
}

// Task entity with all relations
export interface Task extends BaseEntity {
  requestId: number;
  modelId: number;
  printerId?: number;
  materialSlots?: Record<string, { defaultMaterialId?: number; materialId?: number }>;
  quality?: string;
  quantity: number;
  statusId: number;
  currentStepId?: number;
  assignedUserId?: number;
  notes?: string;
  scheduledDate?: string;
  processId?: number;
  // Relations
  model?: Model;
  printer?: Printer;
  status: TaskStatus;
  assignedUser?: User;
  currentStep?: WorkflowStep;
  process?: Process;
}

// Request entity with relations
export interface Request extends BaseEntity {
  name: string;
  description?: string;
  requestedBy: number;
  statusId?: number;
  dueDate?: string;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  // Relations
  requester?: User;
  status?: RequestStatus;
  tasks?: Task[];
}

// Event entity
export interface Event extends BaseEntity {
  title: string;
  description?: string;
  startDate: string;
  endDate?: string;
  allDay?: boolean;
  userId?: number;
  // Relations
  user?: User;
}

// Event day entity (for calendar)
export interface EventDay extends BaseEntity {
  eventId: number;
  date: string;
  // Relations
  event?: Event;
}

// API Response types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
  status?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Form types
export interface CreateTaskData {
  requestId: number;
  modelId: number;
  printerId?: number;
  materialSlots?: Record<string, { defaultMaterialId?: number }>;
  quality?: string;
  quantity: number;
  notes?: string;
  scheduledDate?: string;
}

export interface CreateRequestData {
  submitted_by: string;
  email: string;
  requested_date?: string;
  comments?: string;
  model_id: number;
  material_slots?: MaterialSlot[] | string;
  quality?: string;
  quantity?: number;
}

export interface CreateModelData {
  name: string;
  imageFileId?: number;
  modelFileId?: number;
  estimatedDuration?: number;
  estimatedFilament?: number;
  description?: string;
  tags?: string[];
  materialSlots?: MaterialSlot[];
}

export interface CreateMaterialData {
  name: string;
  hex: string;
  textureFileId?: number;
  imageFileId?: number;
  type?: string;
  vendor?: string;
  minTemp?: number;
  maxTemp?: number;
  details?: string;
}

export interface CreatePrinterData {
  name: string;
  location?: string;
  owner?: string;
  details?: string;
  statusId?: number;
  imageId?: number;
  currentMaterialId?: number;
}

export interface FileUploadData {
  originalName: string;
  type?: string;
  description?: string;
}

export interface ProcessTemplateStep extends BaseEntity {
  processTemplateId: number;
  stepDefinitionId: number;
  stepOrder: number;
  isRequired?: boolean;
  estimatedDuration?: number;
  customContent?: any;
  customActions?: any;
  conditionalRules?: any;
  stepDefinition?: Step;
}

export interface CreateStepDefinitionData {
  name: string;
  description?: string;
  category?: 'printing' | 'maintenance' | 'quality_check' | 'post_processing' | 'custom';
  stepType?: 'manual' | 'automatic' | 'conditional' | 'timer';
  isReusable?: boolean;
  estimatedDuration?: number;
  defaultContent?: StepContentData[];
  defaultActions?: StepActionData[];
  icon?: string;
  tags?: string[];
  metadata?: any;
}

export interface CreateProcessTemplateData {
  name: string;
  description?: string;
  version?: string;
  isActive?: boolean;
  category?: 'printing' | 'maintenance' | 'quality_check' | 'post_processing';
  estimatedDuration?: number;
  steps?: ProcessTemplateStepData[];
}

export interface ProcessTemplateStepData {
  stepDefinitionId: number;
  stepOrder: number;
  isRequired?: boolean;
  estimatedDuration?: number;
  customContent?: any;
  customActions?: any;
  conditionalRules?: any;
}

export interface StepContentData {
  contentType: 'text' | 'image' | 'video' | 'file' | 'link' | 'template_variable';
  contentData: any;
  isRequired?: boolean;
  contentOrder?: number;
}

export interface StepActionData {
  label: string;
  actionType: 'complete_step' | 'skip_step' | 'go_to_step' | 'update_status' | 'start_timer' | 'capture_data' | 'send_notification';
  actionConfig?: any;
  buttonStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  icon?: string;
  isEnabled?: boolean;
  requiresConfirmation?: boolean;
  confirmationMessage?: string;
  actionOrder?: number;
  triggers?: StepTriggerData[];
}

export interface StepTriggerData {
  triggerType: 'update_task_status' | 'update_printer_status' | 'send_notification' | 'schedule_timer' | 'create_subtask' | 'log_event';
  triggerConfig: any;
  conditionRules?: any;
  isEnabled?: boolean;
  triggerOrder?: number;
}
