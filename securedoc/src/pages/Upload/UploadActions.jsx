import { useState } from "react";
import { uploadFile } from "../../services/upload.service";
import { MAX_FILE_SIZE_MB, ALLOWED_FILE_TYPES } from "./upload.constants";

export default function UploadActions({ onSuccess }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSelect(e) {
    const selected = e.target.files[0];
    if (!selected) return;

    const ext = selected.name.split(".").pop().toLowerCase();
    if (!ALLOWED_FILE_TYPES.includes(ext)) {
      alert("Invalid file type");
      return;
    }

    if (selected.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert(`File must be under ${MAX_FILE_SIZE_MB}MB`);
      return;
    }

    setFile(selected);
  }

  async function handleUpload() {
    if (!file) return;

    try {
      setLoading(true);
      await uploadFile(file);
      setFile(null);
      onSuccess?.();
      alert("Upload successful");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-gray-100 rounded-lg py-8 flex flex-col items-center gap-4">
      <label className="cursor-pointer">
        <input type="file" hidden onChange={handleSelect} />
        <span className="bg-gradient-to-b from-[#e3b56a] to-[#c18b3a] text-white px-8 py-2 rounded-md text-sm font-medium">
          Select File
        </span>
      </label>

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className={`px-8 py-2 rounded-md text-sm font-medium text-white
          ${loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-b from-green-600 to-green-800"}
        `}
      >
        {loading ? "Uploading..." : "Upload File"}
      </button>
    </div>
  );
}
