import style from "./thirdForm.module.css";
import FromWrapper from "../../FormWrapper";
import CustomInput from "../../Input/CustomInput";

export default function ThirdStep({
  numberOfFloors,
  floorPlans,
  updateFields,
  handleUpload,
  handleFloorPlanChange,
  handleDynamicUpload,
}) {
  return (
    <FromWrapper Step="Step3" heading="Upload Floor Plan">
      <div className={style.container}>
        {Array(Number(numberOfFloors))
          .fill(0)
          .map((_, i) => (
            <div className={style.inputFieldWrapper}>
              <div>
                {!i && <span className={style.label}>Type</span>}
                <CustomInput
                  type="text"
                  style={{ width: "100%" }}
                  className="primary"
                  placeholder=""
                  value={floorPlans[i]?.floor_type}
                  name={`floor_type`}
                  onChange={(e) => handleFloorPlanChange(e, i)}
                  required
                />
              </div>
              <div>
                {!i && <span className={style.label}># of units</span>}
                <CustomInput
                  type="number"
                  style={{ width: "40%" }}
                  name={`of_units`}
                  className="primary"
                  value={floorPlans[i]?.of_units}
                  placeholder=""
                  onChange={(e) => handleFloorPlanChange(e, i)}
                  required
                />
              </div>
              <div>
                {!i && <span className={style.label}>Upload Floor Plans</span>}
                <CustomInput
                  id="dynamicselectedFile"
                  type="file"
                  onChange={(e) => handleDynamicUpload(e, i)}
                  style={{ display: "none" }}
                />

                <div
                  style={{
                    cursor: "pointer",
                    border: "1px solid red",
                    width: "30%",
                    height: "35px",
                    display: "grid",
                    placeItems: "center",
                  }}
                  className="inputFileTypeFile"
                  placeholder=""
                  onClick={(e) => {
                    document.getElementById("dynamicselectedFile").click();
                  }}
                >
                  {" "}
                  <i class="fa-solid  fa fa-image"></i>
                </div>
              </div>
            </div>
          ))}
      </div>
    </FromWrapper>
  );
}
