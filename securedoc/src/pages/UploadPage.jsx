import { useState } from "react";
import UploadActions from "../components/layout/UploadActions";
import UploadTable from "../components/layout/UploadTable";
import useRole from "../hooks/useRole";
import { ROLE_LABELS } from "../utils/upload.constants";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function UploadPage({ user }) {
  const role = useRole(user);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <Header />

      {/* MAIN */}
      <main className="flex-1 px-4 sm:px-10 py-6 sm:py-8">
        <h2 className="text-lg font-medium mb-4">
          Welcome Back <span className="font-semibold">{user.name}</span>
        </h2>

        {/* UPLOAD CARD */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-8">
          <h3 className="text-center font-medium mb-4 sm:mb-6 text-sm sm:text-base">
            {ROLE_LABELS[user.role].title}
          </h3>

          {/* Upload actions */}
          {role.canUpload && <UploadActions />}

          {/* Table */}
          <UploadTable role={role} />
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

function NavItem({ icon, label }) {
  return (
    <div className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:opacity-80 text-xs sm:text-sm">
      {icon}
      <span>{label}</span>
    </div>
  );
}
