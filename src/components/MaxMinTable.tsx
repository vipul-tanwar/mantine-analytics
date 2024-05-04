import { useEffect, useState } from "react";
import { getMinMaxProductionPerYear } from "../helper/dataCal";
import { MinMaxProdType } from "../interfaces/dataTypes";
import jsonData from "../data/data.json";
import MantineTable from "./common/MantineTable";

const MaxMinTable = () => {
  const [filterData, setFilterData] = useState<MinMaxProdType[]>([]);
  useEffect(() => {
    const dataTab = getMinMaxProductionPerYear(jsonData);
    setFilterData(dataTab);
  }, []);

  const heading = ["Year", "Crop with Maximum Production in that Year", "Crop with Minimum Production in that Year"]

  return (
    <div>
      <h2 className="text-center ">Maximum and Minimum Production in Years</h2>
      <MantineTable data={filterData} header={heading} />
    </div>
  );
};

export default MaxMinTable;
