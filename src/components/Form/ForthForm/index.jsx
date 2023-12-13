import { GrDocumentMissing } from "react-icons/gr";
import style from "./secondForm.module.css";
import FromWrapper from "../../FormWrapper";
import CustomInput from "../../Input/CustomInput";

export default function FourthStep() {
  return (
    <FromWrapper Step="Step2" heading="You're all Done">
      <div className={style.container}>
        <img src="./2.webp" height={250} width={250} alt="you are all done" />
        <div className={style.inputFieldWrapper}>
          <h3 style={{ color:"#f530a8"}}>Now Let Us Do Our Magin...</h3>
          <h3 style={{ color: "#f530a8" }}>Now Let Us Do Our Magin...</h3>
        </div>
      </div>
    </FromWrapper>
  );
}
