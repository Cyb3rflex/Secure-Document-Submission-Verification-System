// src/services/upload.service.js

const API_BASE = import.meta.env.VITE_API_URL;

export async function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/uploads`, {
    method: "POST",
    body: formData,
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Upload failed");
  }

  return res.json();
}

export async function getUploads() {
  const res = await fetch(`${API_BASE}/uploads`, {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch uploads");
  }

  return res.json();
}

export async function deleteUpload(id) {
  const res = await fetch(`${API_BASE}/uploads/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Delete failed");
  }

  return true;
}
