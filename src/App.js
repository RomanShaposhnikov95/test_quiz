import './App.css';
import {Header} from "./components/header/header";
import {StartPage} from "./components/startPage/startPage";
import {BonusPage} from "./components/bonusPage/bonusPage";
import {DepositPage} from "./components/depositPage/depositPage";
import {FinishPage} from "./components/finishPage/finishPage";
import {StepsEnum} from "./redux/GameEnum";
import {StepGame1} from "./components/StepGame1/StepGame1";
import {useSelector} from "react-redux";
import {StepQuiz} from "./components/StepQuiz/StepQuiz";



function App() {
    const {currentStep} = useSelector(state => state.data)

    const getCurrentStep = () => {
        switch (currentStep) {
            case StepsEnum.STEP_START:
                return <StartPage/>
            case StepsEnum.STEP_GAME_1:
                return <StepGame1/>
            case StepsEnum.STEP_GAME_2:
                return <StepGame1/>
            case StepsEnum.STEP_QUIZ_1:
                return  <StepQuiz/>
            case StepsEnum.STEP_QUIZ_2:
                return <StepQuiz/>
            case StepsEnum.STEP_BONUS:
                return <BonusPage/>
            case StepsEnum.STEP_DEPOSIT:
                return <DepositPage/>
            case StepsEnum.STEP_END:
                return <FinishPage/>
        }
    }

  return (
    <div className="App">
      <div className="container">
          <Header/>
          { getCurrentStep() }
      </div>
    </div>
  );
}

export default App;
