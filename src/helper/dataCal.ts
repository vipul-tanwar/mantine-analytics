import {
  AvgYieldAreaType,
  DataType,
  MinMaxProdType,
} from "../interfaces/dataTypes";

export function getMinMaxProductionPerYear(data: DataType[]) {
  const yearData: MinMaxProdType[] = [];

  for (const item of data) {
    const year = parseInt(item["Year"].split(",")[1]);

    const production = parseInt(
      (item["Crop Production (UOM:t(Tonnes))"] as any) || -1
    );

    const existYearData = yearData.find((yearObj) => yearObj.year === year);

    if (existYearData) {
      existYearData.maxProduction = Math.max(
        existYearData.maxProduction,
        production
      );
      existYearData.minProduction =
        existYearData.minProduction !== -1
          ? Math.min(existYearData.minProduction, production)
          : production;
    } else {
      yearData.push({
        year: year,
        maxProduction: production,
        minProduction: production,
      });
    }
  }
  // console.log(yearData);
  return yearData;
}

export function getAvgYieldAndAreaPerCrop(data: DataType[]) {
  const avgData: AvgYieldAreaType[] = [];

  for (const item of data) {
    const year = parseInt(item["Year"].split(",")[1]);
    const cropName = item["Crop Name"];

    if (year >= 1950 && year <= 2020) {
      const yielder = parseFloat(
        (item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] as any) || 0
      );
      const area = parseFloat(
        (item["Area Under Cultivation (UOM:Ha(Hectares))"] as any) || 0
      );

      const existingCropData = avgData.find(
        (crop) => crop.cropName === cropName
      );

      if (existingCropData) {
        existingCropData.count = (existingCropData.count ?? 0) + 1;
        existingCropData.totalYield =
          (existingCropData.totalYield ?? 0) + yielder;
        existingCropData.totalArea = (existingCropData.totalArea ?? 0) + area;
      } else {
        avgData.push({
          cropName: cropName,
          count: 1,
          totalYield: yielder,
          totalArea: area,
          averageArea: 0,
          averageYield: 0,
        });
      }
    }
  }

  for (const cropData of avgData) {
    if (cropData.count && cropData.count > 0) {
      cropData.averageYield = +(cropData.totalYield! / cropData.count).toFixed(
        3
      );
      cropData.averageArea = +(cropData.totalArea! / cropData.count).toFixed(3);
    } else {
      cropData.averageYield = 0;
      cropData.averageArea = 0;
    }
    delete cropData.totalYield;
    delete cropData.count;
    delete cropData.totalArea;
  }

  // console.log(avgData);
  return avgData;
}
