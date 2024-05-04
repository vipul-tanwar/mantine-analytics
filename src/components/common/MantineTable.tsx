import { MantineProvider, Table } from "@mantine/core";
import { MantineTableProps } from "../../interfaces/dataTypes";

const MantineTable: React.FC<MantineTableProps> = ({ data, header }) => {
  const rows = data.map((element, i) => (
    <Table.Tr key={i}>
      {Object.values(element).map((value, i) => (
        <Table.Td key={i} className="text-center ">
          {value}
        </Table.Td>
      ))}
    </Table.Tr>
  ));

  return (
    <div className="drop-shadow">
      <MantineProvider>
        <Table>
          <Table.Thead>
            <Table.Tr>
              {data.length > 0 &&
                header.map((d: string, i: number) => (
                  <Table.Th className="text-center ">{d}</Table.Th>
                ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </MantineProvider>
    </div>
  );
};

export default MantineTable;
