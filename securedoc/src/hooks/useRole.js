export default function useRole(user) {
  const isStudent = user?.role === "student";
  const isLecturer = user?.role === "lecturer";

  return {
    isStudent,
    isLecturer,
    canUpload: isStudent || isLecturer,
    canDelete: true,
    canGrade: isLecturer,
  };
}
