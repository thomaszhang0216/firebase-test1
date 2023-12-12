import style from "./formWrapper.module.css"

export default function FromWrapper({ Step, heading, children }) {
  return (
    <>
      <div >
        <div className={style.textWrapper}>
          <h4>{Step}</h4>
          <h2>{heading}</h2>
        </div>
        {children}
      </div>
    </>
  );
}
