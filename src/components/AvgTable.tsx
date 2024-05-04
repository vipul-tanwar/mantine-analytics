import  { useEffect, useState } from "react";
import { AvgYieldAreaType } from "../interfaces/dataTypes";
import { getAvgYieldAndAreaPerCrop } from "../helper/dataCal";
import jsonData from "../data/data.json";
import MantineTable from "./common/MantineTable";

const AvgTable = () => {
  const [filterData, setFilterData] = useState<AvgYieldAreaType[]>([]);

  useEffect(() => {
    const dataTab = getAvgYieldAndAreaPerCrop(jsonData);
    setFilterData(dataTab);
  }, []);

  const heading = [
    "Crop",
    "Average Yield of the Crop between 1950-2020",
    "Average Cultivation Area of the Crop between 1950-2020",
  ];

  return (
    <div>
      <h2 className="text-center ">
        Average Yield and Cultivation Area between 1950-2020
      </h2>
      <MantineTable data={filterData} header={heading} />
    </div>
  );
};

export default AvgTable;
