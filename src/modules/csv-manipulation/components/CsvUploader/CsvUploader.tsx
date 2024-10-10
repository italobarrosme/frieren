import React, { useState } from "react";
import Papa from "papaparse";
import {
  Button,
  InputCheckbox,
  InputText,
  Text,
} from "@developerskyi/react-components";
import { useDebounceCallback } from "usehooks-ts";
import { TypePayments, LaunchType } from "../../constants";

interface CsvRow {
  [key: string]: string;
}

export const CsvUploader = () => {
  const [csvData, setCsvData] = useState<CsvRow[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [renderData, setRenderData] = useState<CsvRow[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    setFile(e.target.files?.[0] || null);

    if (!e.target.files?.length) return;
  };

  const processFile = (file: File) => {
    Papa.parse(file, {
      header: true,
      complete: (results: any) => {
        const data = results.data as CsvRow[];

        console.log("Processando arquivo:", data);
        setCsvData(data);

        setRenderData(data);
      },
      error: (error: any) => {
        console.error("Erro ao processar o CSV:", error);
      },
    });
  };



  const filterData = (itensFilters: string) => {

    const listFilters: string[] = [];
    
    if (!itensFilters) {
      return setRenderData(csvData);
    }
    
    listFilters.push(itensFilters);

    if (listFilters.includes(LaunchType.DEFAULT)) {
      return setRenderData(csvData);
    }

    console.log(listFilters, 'listFilters');


    const filteredData = csvData.filter((row) => {
      const filter = listFilters.some((filter) => {
        if (filter === TypePayments.A_VISTA) {
          return row["Tipo"]
            .toLowerCase()
            .split(" ")
            .includes(TypePayments.A_VISTA);
        }

        if (filter === TypePayments.PARCELADO) {
          return row["Tipo"]
            .toLowerCase()
            .split(" ")
            .includes(TypePayments.PARCELADO);
        }


        return row["Lançamento"].toLowerCase().includes(filter.toLowerCase());
      });

      return filter;
    });

    console.log("Filtrando dados:", filteredData);

    if (filteredData.length === 0) {
      return setRenderData(csvData);
    }

    setRenderData(filteredData);
  };

  const TotalValue = () => {
    const sum = renderData.reduce((acc, row) => {
      if (row.Valor.includes("-")) {
        return acc;
      }

      const formatteValue = row.Valor.replace("R$", "").replace(",", ".");

      const value = parseFloat(formatteValue);

      const result = acc + value;

      return result;
    }, 0);

    const formattedResult = sum.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formattedResult;
  };

  const handlerFilterDebounce = useDebounceCallback(filterData, 800);

  const handlerFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    handlerFilterDebounce(value);
  };

  const clickToggleStyle = (e: React.MouseEvent<HTMLTableRowElement>) => {
    const target = e.currentTarget as HTMLTableRowElement;
    target.classList.toggle("bg-primary-regular");
    target.classList.toggle("text-neutral-white");
    target.classList.toggle("font-bold");
  };

  return (
    <div className="p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload de Fatura CSV</h2>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="border p-2"
      />
      {file && (
        <Button
          variant="medium/regular"
          className="mt-4"
          onClick={() => processFile(file)}
        >
          Processar
        </Button>
      )}
      {renderData.length > 0 && (
        <div className="mt-4 flex flex-col gap-4">
          <Text variant="medium/regular" className="text-xl font-bold">
            Dados Processados:
          </Text>
          <InputCheckbox
            label="Avista"
            onCheckedChange={(e) =>
              e
                ? filterData(TypePayments.A_VISTA)
                : filterData(LaunchType.DEFAULT)
            }
            className="mt-4"
          />
          <InputCheckbox
            label="Parcelado"
            onCheckedChange={(e) =>
              e
                ? filterData(TypePayments.PARCELADO)
                : filterData(LaunchType.DEFAULT)
            }
            className="mt-4"
          />
          <InputText
            label=""
            onChange={handlerFilter}
            className="my-4"
            placeholder="Filtro por lançamento"
          />
          <div className="h-140 relative overflow-x-hidden">
            <table className="table-auto border-collapse border border-neutral-white mt-4 w-full font-bold">
              <thead className="sticky top-0 bg-neutral-black border border-neutral-black">
                <tr>
                  {Object.keys(renderData[0]).map((key) => (
                    <th key={key} className="border px-4 py-2">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {renderData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-primary-regular hover:text-neutral-white hover:font-bold px-4 hover:cursor-pointer"
                    onClick={clickToggleStyle}
                  >
                    {Object.values(row).map((value, idx) => (
                      <td key={idx} className="border px-8 py-2">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {renderData && (
            <p className="mt-4 text-lg font-semibold">
              Soma dos valores {TotalValue()}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
