import { GrDocumentMissing } from "react-icons/gr"
import style from "./secondForm.module.css"
import FromWrapper from "../../FormWrapper";
import CustomInput from "../../Input/CustomInput";

export default function SecondStep() {
   return <FromWrapper Step="Step2" heading="Upload Your Unit Mix">
      <div className={style.container}>
         <div className={style.inputFieldWrapper}>
            <lable className={style.label}>Number of Units</lable>
            <CustomInput className="primary" placeholder="The Carlyle" />
         </div>
         <div>
            <lable className={style.label}>Number of Floors</lable>
            <CustomInput className="primary" placeholder="35 East 76th Steet #3006" />
         </div>
         <div>
            <lable className={style.label}>Upload Unit Mix file</lable>
            {/* <GrDocumentMissing /> */}
            <i class="fa fa-user icon">
            </i>
            <CustomInput id="selectedFile" type="file" style={{ display: "none" }} />
            <CustomInput className="inputFileTypeFile" placeholder="" onClick={(e) => {
               document.getElementById("selectedFile").click();
            }} />
         </div>
      </div>
   </FromWrapper>
}