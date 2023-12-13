import { useEffect, useState } from "react";
import style from "./app.module.css";
import {
  CustomButton,
  FirstStep,
  FourthStep,
  SecondStep,
  ThirdStep,
} from "../../components";
import { useMultiStepForm } from "../../hook/useMultiStepForm";
import { textDB, imgDB } from "../../firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

const INITIAL_DATA = {
  name: "",
  address: "",
  type: "",
  numberOfBuildings: "",
  yearBuilt: "",
  numberOfUnits: "",
  numberOfFloors: "",
  uploadUnitMixFile: "",
  uploadUnitMixFileName: "",
  floorPlans: [],
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [buttonDisable, setButtonDisable] = useState(false);

  console.log(data);

  useEffect(() => {
    checkFields();
  }, [data]);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const handleUpload = (e) => {
    updateFields({ uploadUnitMixFileName: e.target.files[0].name });
    const imgs = ref(imgDB, `imgs${v4()}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      getDownloadURL(data.ref).then((val) => {
        updateFields({ uploadUnitMixFile: val });
      });
    });
  };

  const handleDynamicUpload = (e, i) => {
    const imgs = ref(imgDB, `imgs${v4()}`);
    debugger
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      getDownloadURL(data.ref).then((val) => {
        setData((prev) => {
          let newArr = [...prev.floorPlans];
          newArr[i]["uploadFloorPlan"] = val;
          newArr[i]["uploadFloorPlanName"] = e.target.files[0].name;
          return { ...prev, floorPlans: newArr };
        });
      });
    });
  };

  const handleFloorPlanChange = (e, i) => {
    const { name, value } = e.target;
    setData((prev) => {
      let newArr = [...prev.floorPlans];
      newArr[i][name] = value;
      return { ...prev, floorPlans: newArr };
    });
  };

  const { step, next, back, isFirstStep, isLastStep, currentStepIndex } =
    useMultiStepForm([
      <FirstStep {...data} updateFields={updateFields} />,
      <SecondStep
        {...data}
        updateFields={updateFields}
        handleUpload={handleUpload}
      />,
      <ThirdStep
        {...data}
        updateFields={updateFields}
        handleFloorPlanChange={handleFloorPlanChange}
        handleDynamicUpload={handleDynamicUpload}
      />,
      <FourthStep />,
    ]);
  const addData = () => {
    if (currentStepIndex === 1) {
      let samplePayload = Array(Number(data.numberOfFloors))
        .fill(0)
        .map((_, i) => {
          return {
            floor_type: "",
            of_units: "",
            uploadFloorPlan: "",
            uploadFloorPlanName: "",
          };
        });
      setData((prev) => {
        return {
          ...prev,
          floorPlans: samplePayload,
        };
      });
    }
    next();
  };
  async function onSubmit(e) {
    e.preventDefault();
    checkFields();
    if (!isLastStep) return addData();

    const valref = collection(textDB, "txtData");
    await addDoc(valref, { ...data });

    alert("Successful Account Creation");
  }

  function checkFields() {
    if (currentStepIndex === 0) {
      let requiredFieldNames = {
        name: data.name,
        address: data.address,
        type: data.type,
        numberOfBuildings: data.numberOfBuildings,
        yearBuilt: data.yearBuilt,
      };
      let emptyField = Object.values(requiredFieldNames).some(
        (field) => field === ""
      );
      return setButtonDisable(emptyField);
    } else if (currentStepIndex === 1) {
      let requiredFieldNames = {
        numberOfUnits: data.numberOfUnits,
        numberOfFloors: data.numberOfFloors,
      };
      let emptyField = Object.values(requiredFieldNames).some(
        (field) => field === ""
      );
      return setButtonDisable(emptyField);
    }

    // disable the button when there are empty fields and enable it otherwise
  }

  return (
    <div className={style.container}>
      <form className={style.formContainer} onSubmit={onSubmit}>
        <div style={{ padding: "3rem 1.5rem" }}>
          <div class="container">
            <div class="custom-colum">
              <p className={`${currentStepIndex >= 0 ? "noBg" : ""}`}>1</p>
              <h4>Building ID</h4>
            </div>
            <div class="custom-colum-id">
              <p className={`${currentStepIndex >= 1 ? "noBg" : ""}`}>2</p>
              <h4>Unit Mix</h4>
            </div>
            <div class="custom-colum-mix">
              <p className={`${currentStepIndex >= 2 ? "noBg" : ""}`}>3</p>
              <h4>Unit Mix</h4>
            </div>
          </div>
        </div>
        <div className={style.formWrapper}>
          {step}
          <div className={style.buttonContainer}>
            {!isFirstStep && (
              <CustomButton type="button" onClick={back}>
                {" "}
                Previous Step{" "}
              </CustomButton>
            )}
            <CustomButton type="submit" disabled={buttonDisable}>
              {isLastStep ? "Finish" : "Next Step"}
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
