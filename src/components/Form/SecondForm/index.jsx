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
        <div className={style.relative}>
          <span className={style.label}>Upload Unit Mix file</span>
          <CustomInput
            id="selectedFile"
            type="file"
            onChange={handleUpload}
            style={{ display: "none" }}
          />
          <i className={`fa-solid  fa fa-image ${style.iconStyle}`}></i>
          <div
          role="button"
            className={style.uploadDiv}
            onClick={(e) => {
              document.getElementById("selectedFile").click();
            }}
          ></div>
          {uploadUnitMixFileName}
        </div>
      </div>
    </FromWrapper>
  );
}
