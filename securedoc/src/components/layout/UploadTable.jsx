import UploadItem from "./UploadItem";

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

      <table className="w-full text-xs sm:text-sm border border-gray-200 rounded-lg min-w-125 sm:min-w-full">
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
            <UploadItem key={i} role={role} doc={doc} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
