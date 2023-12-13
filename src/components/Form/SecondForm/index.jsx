import { GrDocumentMissing } from "react-icons/gr";
import style from "./secondForm.module.css";
import FromWrapper from "../../FormWrapper";
import CustomInput from "../../Input/CustomInput";

export default function SecondStep({
  numberOfUnits,
  numberOfFloors,
  uploadUnitMixFileName,
  handleUpload,
  updateFields,
}) {
  return (
    <FromWrapper Step="Step2" heading="Upload Your Unit Mix">
      <div className={style.container}>
        <div className={style.inputFieldWrapper}>
          <span className={style.label}>Number of Units</span>
          <CustomInput
            autoFocus
            required
            type="number"
            value={numberOfUnits}
            onChange={(e) => updateFields({ numberOfUnits: e.target.value })}
            className="primary"
            placeholder="200"
          />
        </div>
        <div>
          <span className={style.label}>Number of Floors</span>
          <CustomInput
            autoFocus
            required
            type="number"
            value={numberOfFloors}
            onChange={(e) => updateFields({ numberOfFloors: e.target.value })}
            className="primary"
            placeholder="15"
            max={10}
          />
        </div>
        <div style={{ position: "relative" }}>
          <span className={style.label}>Upload Unit Mix file</span>
          {/* <GrDocumentMissing /> */}
          <CustomInput
            id="selectedFile"
            type="file"
            onChange={handleUpload}
            style={{ display: "none" }}
          />
          <i
            style={{
              position: "absolute",
              top: "33px",
              left: "5px",
              bottom: "0",
              color: "black",
            }}
            class="fa-solid  fa fa-image"
          ></i>

          <CustomInput
            style={{ marginBottom: "5px" }}
            className="inputFileTypeFile"
            placeholder=""
            onClick={(e) => {
              document.getElementById("selectedFile").click();
            }}
          />
          {uploadUnitMixFileName}
        </div>
      </div>
    </FromWrapper>
  );
}
