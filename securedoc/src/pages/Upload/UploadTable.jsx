import { FiEye, FiMessageCircle, FiTrash, FiCheckCircle } from "react-icons/fi";

const documents = [
  "CSC321 Assignment.pdf",
  "SIWES Report.doc",
  "Academic Report.txt",
  "Group B Presentation.ppt",
  "Capstone Project.html",
];

export default function UploadTable({ role }) {
  return (
    <div className="overflow-x-auto mt-4">
      <h2 className="text-center font-medium mb-2 sm:mb-4 mt-2 sm:mt-4 text-sm sm:text-base">
        Your Recent Uploads
      </h2>

      <table className="w-full text-xs sm:text-sm border border-gray-200 rounded-lg min-w-[500px] sm:min-w-full">
        {/* TABLE HEADER */}
        <thead className="bg-[#e8be7b] text-white text-[10px] sm:text-sm">
          <tr>
            <th className="text-left px-4 sm:px-6 py-2 sm:py-3 font-medium">
              Document Name/Type
            </th>
            <th className="text-center px-4 sm:px-6 py-2 sm:py-3 font-medium">
              Status
            </th>
            <th className="text-center px-4 sm:px-6 py-2 sm:py-3 font-medium">
              Actions
            </th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody className="bg-white">
          {documents.map((doc, i) => (
            <tr
              key={i}
              className="border-b last:border-none hover:bg-gray-50 text-[10px] sm:text-sm"
            >
              <td className="px-4 sm:px-6 py-2 sm:py-4">{doc}</td>
              <td className="text-center text-green-700 font-medium">Sent</td>
              <td className="px-4 sm:px-6 py-2 sm:py-4">
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                  <Action icon={<FiEye />} label="View" />
                  <Action icon={<FiMessageCircle />} label="Comment" />
                  {role.canDelete && (
                    <Action
                      icon={<FiTrash className="text-red-600" />}
                      label="Delete"
                    />
                  )}
                  {role.canGrade && (
                    <Action
                      icon={<FiCheckCircle className="text-green-600" />}
                      label="Grade"
                    />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Action({ icon, label }) {
  return (
    <div className="flex flex-col items-center text-[9px] sm:text-xs text-gray-600 cursor-pointer hover:opacity-80">
      <div className="text-lg mb-1">{icon}</div>
      {label}
    </div>
  );
}
