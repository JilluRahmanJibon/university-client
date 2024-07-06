import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi"

 

const AcademicSemester = () => {
  const {data}=useGetAllSemestersQuery(undefined)
  console.log("🚀 ~ AcademicSemester ~ data:", data)
  return (
    <div>
      
    </div>
  )
}

export default AcademicSemester
