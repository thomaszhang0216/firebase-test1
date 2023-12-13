import { useEffect, useState } from "react";
import style from "./dashboard.module.css";
import { collection, getDocs } from "firebase/firestore";
import { textDB } from "../../firebase";

function Dashboard() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const valref = collection(textDB, "txtData");

    const dataDb = await getDocs(valref);
    const allData = dataDb.docs.map((val) => ({ ...val.data(), id: val.id }));
    console.log(allData);
    setdata([...allData]);
  };
  console.log("data=>", data);
  return (
    <div className={style.tableContainer}>
      <table className={style.table}>
        <thead>
          <tr>
            <th className={style.tableHeader}>Name</th>
            <th className={style.tableHeader}>Address</th>
            <th className={style.tableHeader}>Type</th>
            <th className={style.tableHeader}>Number of buildings</th>
            <th className={style.tableHeader}>Year Built</th>
            <th className={style.tableHeader}>Number of Units</th>
            <th className={style.tableHeader}>Number of Floors</th>
            <th className={style.tableHeader}>Upload Unit Mix file</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              className={`${
                index % 2 === 0
                  ? style.even_row && style.table_row
                  : style.odd_row && style.table_row
              }`}
              key={index}
            >
              <td className={style.table_cell}>{item.name}</td>
              <td className={style.table_cell}>{item.address}</td>
              <td className={style.table_cell}>{item.type}</td>
              <td className={style.table_cell}>{item.numberOfBuildings}</td>
              <td className={style.table_cell}>{item.yearBuilt}</td>
              <td className={style.table_cell}>{item.numberOfUnits}</td>
              <td className={style.table_cell}>{item.numberOfFloors}</td>
              <td className={style.table_cell}>
                <img height={30} src={item.uploadUnitMixFile} alt={item.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
