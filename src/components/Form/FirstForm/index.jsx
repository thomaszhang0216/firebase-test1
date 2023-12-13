import FromWrapper from "../../FormWrapper";
import CustomInput from "../../Input/CustomInput";
import style from "./firstForm.module.css";

export default function FirstStep({
  name,
  address,
  type,
  numberOfBuildings,
  yearBuilt,
  updateFields,
}) {
  return (
    <FromWrapper Step="Step 1" heading="Enter Your Project Details">
      <div className={style.container}>
        <div className={style.inputFieldWrapper}>
          <span className={style.label}>Name</span>
          <CustomInput
            required
            type="text"
            value={name}
            onChange={(e) => updateFields({ name: e.target.value })}
            className="primary"
            placeholder="The Carlyle"
          />
        </div>
        <div>
          <span className={style.label}>Address</span>
          <CustomInput
            required
            type="text"
            value={address}
            onChange={(e) => updateFields({ address: e.target.value })}
            className="primary"
            placeholder="35 East 76th Steet #3006"
          />
        </div>
        <div>
          <span className={style.label}>Type</span>
          <CustomInput
            required
            type="text"
            value={type}
            onChange={(e) => updateFields({ type: e.target.value })}
            className="primary"
            placeholder="Residential"
          />
        </div>
        <div>
          <span className={style.label}>Number of Buildings</span>
          <CustomInput
            required
            type="number"
            value={numberOfBuildings}
            onChange={(e) =>
              updateFields({ numberOfBuildings: e.target.value })
            }
            className="primary"
            placeholder="31"
          />
        </div>
        <div>
          <span className={style.label}>Year Built</span>
          <CustomInput
            type="number"
            value={yearBuilt}
            onChange={(e) =>
              updateFields({ yearBuilt: e.target.value })
            }
            className="primary"
            placeholder="1929"
          />
        </div>
      </div>
    </FromWrapper>
  );
}
