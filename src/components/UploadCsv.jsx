import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Select from "react-select";
import Excel from "../assets/comman/excel.svg";
import Upload from "../assets/comman/upload-icon.svg";

const UploadCsv = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [csvContent, setCsvContent] = useState([]);
  const [header, setHeader] = useState([]);

  const selectOptions = [
    { label: "Technology", value: "Technology" },
    { label: "Fashion", value: "Fashion" },
    { label: "Food", value: "Food" },
    { label: "Travel", value: "Travel" },
    { label: "Sports", value: "Sports" },
    { label: "Music", value: "Music" },
    { label: "Art", value: "Art" },
    { label: "Health", value: "Health" },
    { label: "Education", value: "Education" },
    { label: "Finance", value: "Finance" },
  ];

  const onDrop = useCallback((acceptedFiles) => {
    setIsLoading(true);

    setTimeout(() => {
      handleFileUpload(acceptedFiles[0]);
      setIsLoading(false);
    }, 2000);
  }, []);

  const isAbsoluteUrl = (url) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  const handleFileUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const content = event.target.result;
      const rows = content.split("\n");
      const headerRow = rows[0].split(",");

      setHeader(headerRow);

      const data = rows.slice(1).map((row) => {
        const values = row.split(",");
        return headerRow.reduce((acc, curr, index) => {
          acc[curr.trim()] = values[index].trim();
          return acc;
        }, {});
      });

      setCsvContent(data);
    };

    reader.readAsText(file);
  };

  const handleSelectChange = (rowIndex, selectedOption) => {
    const updatedCsvContent = [...csvContent];
    updatedCsvContent[rowIndex]["selected tags"] = selectedOption;
    setCsvContent(updatedCsvContent);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div className="text-center max-w-[600px] mx-auto mt-20 bg-white p-4">
        <div
          {...getRootProps()}
          className={`border-dashed border-2 rounded-md ${
            isDragActive ? "border-blue-500" : "border-gray-300"
          } p-8 mb-4 relative`}
        >
          <input
            {...getInputProps()}
            accept=".csv"
            className="hidden"
            id="fileInput"
          />
          <p className="py-12">
            <img src={Excel} className="mx-auto" alt="Excel" />
            Drop your Excel sheet here or{" "}
            <label htmlFor="fileInput" className="text-blue-500 cursor-pointer">
              browse
            </label>
          </p>
        </div>
        <button
          className="bg-blue-500 text-white p-2 flex justify-center mx-auto w-full gap-4 rounded"
          onClick={() => {
            const fileInput = document.getElementById("fileInput");
            if (fileInput) {
              fileInput.click();
            }
          }}
          disabled={isLoading}
        >
          {isLoading ? (
            "Uploading..."
          ) : (
            <div className="font-bold flex gap-6">
              <img src={Upload} alt="Upload" /> Upload
            </div>
          )}
        </button>
      </div>
      {csvContent.length > 0 && (
        <div className="mt-4 overflow-x-auto rounded-md bg-[#F5F5F5] p-4">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr>
                {header.map((headerItem, index) => (
                  <th key={index} className="p-2">
                    {headerItem}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvContent.map((row, rowIndex) => (
                <tr key={rowIndex} className="bg-white rounded-md p-20">
                  {header.map((headerItem, index) => (
                    <td key={index}>
                      {headerItem === "links" ? (
                        <a
                          className="text-blue-600 underline"
                          href={
                            isAbsoluteUrl(row[headerItem])
                              ? row[headerItem]
                              : `http://${row[headerItem]}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {row[headerItem]}
                        </a>
                      ) : headerItem === "select tags" ? (
                        <Select
                          options={selectOptions}
                          isMulti
                          onChange={(selectedOption) =>
                            handleSelectChange(rowIndex, selectedOption)
                          }
                        />
                      ) : (
                        row[headerItem]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UploadCsv;
