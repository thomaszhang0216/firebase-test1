import style from "./app.module.css";
import { FirstStep, SecondStep } from "./components";
import { useMultiStepForm } from "./hook/useMultiStepForm";

function App() {
  const { steps, step, next, back, isFirstStep, isLastStep, currentStepIndex } =
    useMultiStepForm([<FirstStep />, <SecondStep />]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }

  return (
    <div className={style.container}>
      <form className={style.formContainer} onSubmit={onSubmit}>
        <div>
          <div>{"Add New Project"}</div>
          <div>
            {currentStepIndex + 1} / {steps.length}
          </div>
        </div>
        <div style={{ padding: "3rem 4rem", minHeight: "70vh", minWidth: "35vw" }}>
          {step}
          <div>
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
            <button type="submit">{isLastStep ? "Finish" : "Next Step"}</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
