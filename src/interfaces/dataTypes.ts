export interface DataType {
  Country: string;
  Year: string;
  "Crop Name": string;
  "Crop Production (UOM:t(Tonnes))": string | number;
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": string | number;
  "Area Under Cultivation (UOM:Ha(Hectares))": string | number;
}

export interface MinMaxProdType {
  year: number;
  maxProduction: number;
  minProduction: number;
}

export interface AvgYieldAreaType {
  cropName: string;
  count?: number;
  averageArea: number;
  averageYield: number;
  totalYield?: number;
  totalArea?: number;
}

type DataTypeAny = MinMaxProdType | AvgYieldAreaType;

export interface MantineTableProps {
  data: DataTypeAny[];
  header: string[];
}
