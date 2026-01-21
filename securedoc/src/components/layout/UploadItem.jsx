import React from 'react'
import { FiEye, FiMessageCircle, FiTrash, FiCheckCircle } from "react-icons/fi";
import ActionBtn from '../ui/ActionBtn'

const UploadItem = ( {role, doc} ) => {

  return (
    <tr className="border-b last:border-none hover:bg-gray-50 text-[10px] sm:text-sm">
      <td className="px-4 sm:px-6 py-2 sm:py-4">{doc}</td>
      <td className="text-center text-green-700 font-medium">Sent</td>
      <td className="px-4 sm:px-6 py-2 sm:py-4">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <ActionBtn icon={<FiEye />} label="View" />
          <ActionBtn icon={<FiMessageCircle />} label="Comment" />
          {role.canDelete && (
            <ActionBtn
              icon={<FiTrash className="text-red-600" />}
              label="Delete"
            />
          )}
          {role.canGrade && (
            <ActionBtn
              icon={<FiCheckCircle className="text-green-600" />}
              label="Grade"
            />
          )}
        </div>
      </td>
    </tr>
  )
}

export default UploadItem