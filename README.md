# Secure Document Submission & Verification System

A full-stack web application that allows students to securely submit documents, ensures integrity, prevents tampering, and provides lecturers/admins with a secure verification system. This project demonstrates authentication, authorization, file integrity checks, input validation, and basic cybersecurity best practices.

---

## Tech Stack

- **Frontend:** React / HTML + CSS + JavaScript  
- **Backend:** Node.js (Express) or Python (Flask)  
- **Database:** MongoDB / SQLite / JSON (for simplicity)  
- **Security Features:**  
  - Password hashing (bcrypt)  
  - File integrity checks (SHA-256)  
  - Role-based access control  
  - Input validation & audit logging  

---

## Project Features

### Student Features
- Upload PDF documents  
- View uploaded documents and status (Pending / Verified / Compromised)  

### Lecturer Features
- View all student submissions  
- Verify document integrity (hash comparison)  
- Update verification status  

### Admin Features
- Manage users (students, lecturers)  
- View audit logs of actions (uploads, verifications, logins)  

### Security Features
- Role-based authentication & authorization  
- Password hashing & secure login  
- File integrity verification (SHA-256)  
- Input validation (file type, file size, filename sanitization)  
- Audit trail of all actions  

---

## Team Roles & Tasks

### Frontend (UI/UX)
**Responsibilities**
- Design clean, responsive interfaces for:  
  - Login / Signup  
  - Student dashboard (upload, view documents)  
  - Lecturer dashboard (view & verify documents)  
  - Admin panel (user management & audit logs)  
- Show visual feedback for actions:  
  - Upload success / failure  
  - Verified / Compromised status  
- Integrate with backend APIs  
- Optional: Add animations or progress bars for better UX  

**Deliverables**
- Fully functional pages/components  
- Clear navigation & user flow  
- Proper display of verification results and alerts  

### Backend (Server/Database)
**Responsibilities**
- Implement API endpoints for:  
  - Authentication (login/signup)  
  - File upload & storage  
  - Document verification (hash computation)  
  - Role-based access control  
  - Audit logging  
- Connect to database and ensure proper data models:  
  - Users  
  - Documents  
  - Audit logs  
- Handle file uploads securely:  
  - Enforce size & type restrictions  
  - Store hashed filenames if needed  

**Deliverables**
- Fully functional backend server  
- APIs working with frontend  
- Secure file handling and hash verification logic  

### Cybersecurity
**Responsibilities**
- Ensure system security and integrity:  
  - Passwords hashed (bcrypt)  
  - Role-based access enforced (students cannot access others’ files)  
  - File integrity verified using SHA-256 hashes  
  - Input validation for all uploaded files  
- Maintain audit trail for all actions (upload, verify, login)  
- Test and simulate attacks during demo:  
  - Unauthorized access attempt  
  - Upload invalid/malicious file  
- Optional: Suggest enhancements like CSRF/XSS protection, encryption at rest  

**Deliverables**
- Security checks integrated in backend  
- Clear demonstration of blocked unauthorized actions  
- Documentation of implemented security measures  

---

## Folder Structure Example
```bash
secure-doc-system/
├─ backend/
│  ├─ app.js
│  ├─ routes/
│  │  ├─ auth.js
│  │  ├─ upload.js
│  │  └─ verify.js
│  ├─ controllers/
│  │  ├─ authController.js
│  │  ├─ uploadController.js
│  │  └─ verifyController.js
│  ├─ models/
│  │  ├─ User.js
│  │  └─ Document.js
│  ├─ utils/
│  │  └─ hashUtils.js
│  └─ database.js
├─ frontend/
│  ├─ index.html
│  ├─ css/
│  ├─ js/
│  └─ components/
├─ uploads/  (document storage)
├─ README.md
└─ package.json / requirements.txt
```

---

## Database Schema

**User**
```bash
{
  "name": "John Doe",
  "email": "john@example.com",
  "passwordHash": "<bcrypt hash>",
  "role": "student | lecturer | admin"
}
```

# Documents
```bash
{
  "filename": "assignment1.pdf",
  "ownerId": "<user_id>",
  "uploadDate": "2026-01-07T20:00:00Z",
  "hash": "<sha256 hash>",
  "status": "pending | verified | compromised"
}
```
# Audit Log
```bash
{
  "action": "upload | verify | login",
  "userId": "<user_id>",
  "timestamp": "2026-01-07T20:00:00Z",
  "details": "file uploaded / verification passed"
}
```
# Setup Instructions 
**Backend**
```bash
git clone https://github.com/Cyb3rflex/Secure-Document-Submission-Verification-System.git
cd secure-doc-system/backend
npm install  # or pip install -r requirements.txt for Flask
npm start    # or python app.py
```
# Demo Instructions
1. Student logs in → uploads PDF → hash generated

2. Lecturer logs in → views submission → clicks “Verify”
3. System recomputes hash → shows Verified / Compromised
4. Cybersecurity team simulates blocked attacks:
• Student tries accessing another student’s file → blocked
• Invalid file upload → blocked
