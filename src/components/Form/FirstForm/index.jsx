import FromWrapper from "../../FormWrapper";
import CustomInput from "../../Input/CustomInput";
import style from "./firstForm.module.css"

export default function FirstStep() {
  return (
    <FromWrapper Step="Step 1" heading="Enter Your Project Details">
      <div className={style.container}>
        <div className={style.inputFieldWrapper}>
          <lable className={style.label}>Name</lable>
          <CustomInput className="primary" placeholder="The Carlyle" />
        </div>
        <div>
          <lable className={style.label}>Address</lable>
          <CustomInput className="primary" placeholder="35 East 76th Steet #3006" />
        </div>
        <div>
          <lable className={style.label}>Type</lable>
          <CustomInput className="primary" placeholder="Residential" />
        </div>
        <div>
          <lable className={style.label}>Number of Buildings</lable>
          <CustomInput className="primary" placeholder="31" />
        </div>
        <div>
          <lable className={style.label}>Year Built</lable>
          <CustomInput className="primary" placeholder="1929" />
        </div>
      </div>
    </FromWrapper>
  );
}
