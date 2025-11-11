# Workflow Management System

This directory contains a comprehensive workflow management interface for creating and managing reusable step definitions and process templates.

## Overview

The workflow management system consists of two main components:

### 1. Step Definition Manager (`StepDefinitionManager.tsx`)
- **Purpose**: Create and manage reusable workflow step definitions
- **Features**:
  - Dynamic form builder for step content (text, images, links, template variables)
  - Action builder with trigger configuration
  - Category and tag-based filtering
  - Rich step type support (manual, automatic, conditional, timer)
  - Content block management with different types
  - Action blocks with confirmation and trigger support

### 2. Process Template Manager (`ProcessTemplateManager.tsx`)
- **Purpose**: Design complete workflow templates using step definitions
- **Features**:
  - Drag and drop interface for adding steps from step bank
  - Reorderable step sequences
  - Template versioning and categorization
  - Duration estimation and step requirement configuration
  - Visual template preview and editing

## File Structure

```
WorkflowManagement/
├── index.tsx                          # Main component with tab navigation
├── StepDefinitionManager.tsx         # Step definition CRUD interface
├── ProcessTemplateManager.tsx        # Process template builder
└── components/
    └── WorkflowComponents.tsx        # Shared UI components
```

## API Integration

The system integrates with the NestJS backend through RTK Query (`workflowApi.ts`):

### Step Definitions Endpoints:
- `GET /step-definitions` - List all step definitions with filtering
- `POST /step-definitions` - Create new step definition
- `PUT /step-definitions/:id` - Update step definition
- `DELETE /step-definitions/:id` - Delete step definition

### Process Templates Endpoints:
- `GET /process-templates` - List all process templates
- `POST /process-templates` - Create new process template
- `PUT /process-templates/:id` - Update process template
- `DELETE /process-templates/:id` - Delete process template
- `POST /process-templates/:id/steps` - Add step to template
- `PATCH /process-templates/:id/reorder-steps` - Reorder template steps

## Key Features

### Dynamic Content Blocks
Step definitions support multiple content types:
- **Text**: Rich text content with markdown support
- **Images**: URL-based image references with alt text
- **Links**: External links with custom labels
- **Template Variables**: Dynamic content using placeholders like `{{taskId}}`

### Action System
Each step can have multiple actions with:
- **Action Types**: complete_step, skip_step, go_to_step, update_status, etc.
- **Button Styling**: primary, secondary, success, warning, danger
- **Confirmation**: Optional confirmation dialogs
- **Triggers**: Automated actions that fire when the action is executed

### Trigger System
Actions can trigger additional automated behaviors:
- **update_task_status**: Change task status
- **update_printer_status**: Update printer state
- **send_notification**: Send notifications
- **schedule_timer**: Set timers
- **create_subtask**: Generate new tasks
- **log_event**: Create audit logs

### Drag and Drop Interface
The process template manager features:
- **Step Bank**: Library of reusable step definitions
- **Visual Builder**: Drag steps from bank to template
- **Reordering**: Drag to reorder steps within template
- **Real-time Preview**: Live template preview with step details

## Usage

### Creating Step Definitions

1. Navigate to **Step Definitions** tab
2. Click **Create New Step**
3. Fill basic information (name, category, type, duration)
4. Add content blocks using **Add Content Block** button
5. Configure actions using **Add Action** button
6. For each action, add triggers as needed
7. Save the step definition

### Building Process Templates

1. Navigate to **Process Templates** tab
2. Click **Create New Template**
3. Fill template metadata (name, description, category)
4. Drag step definitions from the Step Bank to the workflow area
5. Reorder steps by dragging within the template
6. Configure individual step settings (duration, required status)
7. Save the template

### Navigation

The system is accessible through the main dashboard at `/dashboard/workflow-management` (admin only).

## Data Flow

1. **Step Definitions** are created as reusable building blocks
2. **Process Templates** combine multiple step definitions into workflows
3. **Process Instances** are created from templates when workflows are scheduled
4. **Process Executions** track individual step completions

## Integration Points

- **Task Management**: Templates can be applied to tasks
- **User Management**: Steps track who completed them
- **Printer Management**: Workflows can update printer status
- **Notification System**: Triggers can send notifications
- **Audit System**: All workflow actions are logged

## Styling

The interface uses Tailwind CSS classes for:
- Responsive grid layouts
- Drag and drop visual feedback
- Color-coded categories and status indicators
- Modern card-based design
- Hover and transition effects

## Technical Notes

- Built with React hooks for state management
- Uses RTK Query for API integration
- Implements HTML5 drag and drop API
- Type-safe with TypeScript interfaces
- Responsive design for mobile and desktop

## Future Enhancements

- **Conditional Logic**: Advanced branching based on step outcomes
- **Template Versioning**: Full version control for templates
- **Import/Export**: Template sharing between environments
- **Analytics**: Workflow performance metrics
- **Real-time Collaboration**: Multiple users editing templates simultaneously
