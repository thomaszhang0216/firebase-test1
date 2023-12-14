import style from "./thirdForm.module.css";
import FromWrapper from "../../FormWrapper";
import CustomInput from "../../Input/CustomInput";

export default function ThirdStep({
  numberOfFloors,
  floorPlans,
  handleFloorPlanChange,
  handleDynamicUpload,
}) {
  return (
    <FromWrapper Step="Step3" heading="Upload Floor Plan">
      <div className={style.container}>
        {Array(Number(numberOfFloors))
          .fill(0)
          .map((_, i) => (
            <div key={i} className={style.inputFieldWrapper}>
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
                  id={`dynamicselectedFile-${i}`}
                  type="file"
                  onChange={(e) => handleDynamicUpload(e, i)}
                  style={{ display: "none" }}
                />

                <div
                  className={style.upload}
                  role="button"
                  onClick={(e) => {
                    document.getElementById(`dynamicselectedFile-${i}`).click();
                  }}
                >
                  {" "}
                  <i class="fa-solid  fa fa-image"></i>
                  <span
                  className={style.imageText}
                  >
                    {" "}
                    {floorPlans[i]?.uploadFloorPlanName}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </FromWrapper>
  );
}
