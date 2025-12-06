# Workstation Updates - File Upload & Persistent Authentication

## Changes Made

### 1. WorkstationFileSelector Component

**Location**: `client/src/pages/workstation/main/components/WorkstationFileSelector.tsx`

A dedicated file selector component for the workstation interface with:

-   **Visual file selection**: Horizontal scrollable cards showing file previews
-   **Upload capability**: Inline file upload with drag-and-drop styling
-   **File filtering**: Filter by type (image, model, document, texture, other)
-   **Image previews**: Shows actual images for image files, emoji icons for others
-   **Selected state**: Visual checkmark overlay on selected files
-   **Loading states**: Spinner during file upload
-   **Error handling**: Display upload errors with friendly messages
-   **Desktop-optimized styling**: Clean cards with hover effects

**Features**:

-   Upload button with dashed border (+ icon)
-   File cards (120x120px) with image or icon
-   Checkmark overlay (✓) on selected file
-   Clear selection button
-   Smooth scrolling with custom scrollbar
-   Empty state message

**Props**:

```typescript
{
  selectedFileId?: number;
  onFileSelect: (fileId: number | undefined) => void;
  fileType?: "image" | "model" | "document" | "texture" | "other";
  label?: string;
  allowUpload?: boolean;
}
```

### 2. Persistent Authentication

**Location**: `client/src/pages/workstation/auth/WorkstationAuth.tsx`

Enhanced authentication with localStorage persistence:

**Features**:

-   **24-hour session**: Authentication persists for 24 hours
-   **Automatic check**: Validates existing session on mount
-   **Loading state**: Shows spinner while checking authentication
-   **Logout button**: Fixed position logout button (top-right)
-   **Timestamp tracking**: Stores auth timestamp for expiry calculation
-   **Auto-cleanup**: Removes expired authentication data

**localStorage Keys**:

-   `workstation_authenticated`: Boolean flag
-   `workstation_auth_timestamp`: Unix timestamp of login

**User Experience**:

1. First visit: User logs in normally
2. Return within 24h: Automatically authenticated
3. After 24h: Must log in again
4. Logout: Clears session and requires re-login

**Logout UI**:

-   Fixed position button (top-right of screen)
-   Shows 🚪 emoji + "Logout" text
-   Hover effect with border color change
-   Clears localStorage on click

### 3. Modal File Integration

All CRUD modals now include file upload/selection:

#### PrinterModal

-   **Image File Selector**: Select/upload printer image
-   Position: After status/material fields, before location
-   File type: `image`

#### MaterialModal

-   **Image File Selector**: Select/upload material image
-   Position: After color field, before description
-   File type: `image`

#### ModelModal

-   **Model File Selector**: Select/upload 3D model file (required)
-   **Image File Selector**: Select/upload model preview image
-   Position: Replace dropdown selectors with visual file selectors
-   File types: `model` and `image`

### 4. File Upload Flow

**Upload Process**:

1. Click upload card (dashed border with + icon)
2. File picker opens with appropriate filters
3. File uploads via FormData to `/files` endpoint
4. New file automatically selected in the form
5. RTK Query cache invalidates to show new file
6. Toast notification on success/error

**Accepted File Types**:

-   **Images**: `image/*` (jpg, png, gif, etc.)
-   **Models**: `.stl, .obj, .gcode, .3mf, .glb`
-   **Other**: `*` (all files)

### 5. Styling Updates

**New CSS File**: `WorkstationFileSelector.css`

-   Card-based layout with hover effects
-   Custom scrollbar (purple gradient)
-   Upload card with dashed border
-   Selected state with checkmark overlay
-   Loading spinner animation
-   Error message styling
-   Responsive breakpoints for mobile

**Auth CSS Updates**: `WorkstationAuth.css`

-   Loading screen with spinner
-   Logout button styling (fixed position)
-   Smooth animations

## Usage Examples

### In Modals

```tsx
<WorkstationFileSelector
    selectedFileId={formData.image_file_id}
    onFileSelect={(fileId: number | undefined) =>
        setFormData({ ...formData, image_file_id: fileId })
    }
    fileType="image"
    label="Printer Image"
    allowUpload={true}
/>
```

### Authentication Check

```tsx
// Component automatically checks localStorage on mount
useEffect(() => {
    const isAuth = localStorage.getItem("workstation_authenticated");
    const timestamp = localStorage.getItem("workstation_auth_timestamp");

    if (isAuth === "true" && timestamp) {
        const hoursPassed =
            (Date.now() - parseInt(timestamp)) / (1000 * 60 * 60);
        if (hoursPassed < 24) {
            setIsAuthenticated(true);
        }
    }
}, []);
```

## Benefits

### File Management

-   ✅ Visual file selection (no more dropdown IDs)
-   ✅ Upload files directly in modals
-   ✅ Preview images before selecting
-   ✅ Filter by file type automatically
-   ✅ Clear selection easily
-   ✅ Better UX with cards and icons

### Authentication

-   ✅ Don't need to log in every time
-   ✅ 24-hour session persistence
-   ✅ Easy logout with visible button
-   ✅ Loading state during auth check
-   ✅ Automatic session cleanup
-   ✅ Better security with timestamp validation

### Developer Experience

-   ✅ Reusable WorkstationFileSelector component
-   ✅ Consistent file handling across modals
-   ✅ Clean localStorage management
-   ✅ Type-safe with TypeScript
-   ✅ RTK Query integration
-   ✅ Proper error handling

## API Integration

All file operations use existing RTK Query endpoints:

```typescript
// Get all files
useGetFilesQuery();

// Upload new file
useAddFileMutation();
```

File uploads use FormData with multipart/form-data encoding. The API returns the new file object with ID, which is automatically selected.

## Technical Notes

### File Type Values

File types must be lowercase strings matching the database enum:

-   `"image"` (not "IMAGE")
-   `"model"` (not "MODEL")
-   `"document"`, `"texture"`, `"other"`

### LocalStorage Security

-   Simple boolean flag (not tokens)
-   24-hour expiry for security
-   Clears automatically on expiry
-   Manual logout available
-   Session-based, not permanent

### TypeScript

All components are fully typed with interfaces. The WorkstationFileSelector exports its props interface for reuse.

## Future Enhancements

Possible improvements:

-   Drag-and-drop file upload
-   Multiple file selection
-   File preview modal (zoom/view details)
-   Progress bar for large uploads
-   File size validation
-   File type icons based on MIME type
-   Remember me checkbox (extend session)
-   Session timeout warning
