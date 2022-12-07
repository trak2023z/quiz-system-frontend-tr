import axios, { AxiosResponse } from "axios"
import { useQuery } from "react-query"
import { useNavigate } from "react-router"
import QuizListItem from "./components/QuizListItem"
import { GetAllTrainingsResponse } from "../../models/Api"
import { toast } from "react-toastify"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
export interface GetAllTrainingsProps {
  onlyLiked?: boolean
  search?: string
  tags?: string[]
}
export const GetAllTrainings = ({
  onlyLiked = false,
  search = "",
  tags = [],
}: GetAllTrainingsProps) => {
  const userContext = useContext(UserContext)

  console.log(userContext.userId)

  const { data } = useQuery<any, any, GetAllTrainingsResponse>(
    "/training/all",
    async () => {
      const res = await axios.get(
        `/training/all?onlyLiked=${onlyLiked}?search=${search}`
      )
      return res.data
    },
    {
      onSuccess: async (response) => {
        toast.success("Trainings loaded succesfully", { autoClose: 3000 })
      },
      onError: (error) => {
        toast.error(
          error?.response?.data?.message ||
            "There was an error while getting trainings",
          {
            autoClose: 2000,
          }
        )
      },
    }
  )

  return (
    <div className="space-y-2">
      {data
        ?.filter((e) => e.visibility === true)
        .map((e) => (
          <div key={e.name}>
            <QuizListItem
              id={e.id}
              name={e.name}
              withButtons={userContext.userId === e.userId}
              userId={e.userId}
            />
          </div>
        ))}
    </div>
  )
}
