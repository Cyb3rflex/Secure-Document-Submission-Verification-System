// src/pages/Upload/upload.constants.js

export const ROLES = {
  STUDENT: "student",
  LECTURER: "lecturer",
};

export const UPLOAD_STATUS = {
  SENT: "Sent",
  PENDING: "Pending",
  FAILED: "Failed",
};

export const MAX_FILE_SIZE_MB = 20;

export const ALLOWED_FILE_TYPES = [
  "pdf",
  "doc",
  "docx",
  "ppt",
  "pptx",
  "txt",
];

export const ROLE_LABELS = {
  student: {
    title: "Upload your assignment",
    emptyState: "No submissions yet",
  },
  lecturer: {
    title: "Upload course document",
    emptyState: "No documents uploaded",
  },
};
