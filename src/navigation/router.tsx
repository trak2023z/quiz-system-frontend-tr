import { Route, Routes } from "react-router-dom"
import { PATHS } from "../consts/paths"
import { Auth } from "../sites/auth/Auth"
import { Panel } from "../sites/auth/Panel"
import { Home } from "../sites/Home"
import { EditTraining } from "../sites/trainings/EditTraining"
import { EditQuestion } from "../sites/trainings/EditQuestion"
import { TrainingList } from "../sites/trainings/TrainingList"
import { TrainingView } from "../sites/trainings/TrainingView"
import { CreateTraining } from "../sites/trainings/CreateTraining"
import { CreateQuestionWithAnswers } from "../sites/trainings/CreateQuestionWithAnswers"
import { TrainingSession } from "../sites/trainings/TrainingSession"
import { TrainingSessionQuestion } from "../sites/trainings/components/TrainingSessionQuestion"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={PATHS.home} element={<Home />} />
      <Route path={PATHS.login} element={<Auth variant="login" />} />
      <Route path={PATHS.register} element={<Auth variant="register" />} />
      <Route path={PATHS.panel} element={<Panel />} />
      <Route path={PATHS.trainings} element={<TrainingList />} />
      <Route path={PATHS.training} element={<TrainingView />} />
      <Route path={PATHS.editQuestion} element={<EditQuestion />} />
      <Route path={PATHS.editTraining} element={<EditTraining />} />
      <Route path={PATHS.trainingSession} element={<TrainingSession />} />
      <Route
        path={PATHS.trainingSessionQuestion}
        element={<TrainingSessionQuestion />}
      />
      <Route path={PATHS.createTraining} element={<CreateTraining />} />
      <Route
        path={PATHS.createQuestion}
        element={<CreateQuestionWithAnswers />}
      />
    </Routes>
  )
}
