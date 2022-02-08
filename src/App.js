import React from "react";
import { useState } from "react";
// import Container from '../components/common/container';

const Inputcsv = () => {
  const [formData, setFormData] = useState({ enteredValue: "", fileName: "" });

  const setFileHandler = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, fileName: file });
  };

  const submitHandler = () => {
    console.log(formData, "formdata");
  };
  return (
    <>
      <div>
        <div className="content__container">
          <div style={{ gap: "20px" }} className="input_content d-flex">
            <h2>Event Name:</h2>
            <input
              type="text"
              className="custom_border"
              name=""
              id=""
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, enteredValue: e.target.value })
              }
            />
          </div>

          <div className="uploader py-5">
            <label className="custom_upload_styling" htmlFor="selectCsvFile">
              Upload a file
            </label>
            <input
              className="custom_input_styling"
              type="file"
              id="selectCsvFile"
              onChange={setFileHandler}
              accept=".csv,.xlsx,.xls"
              hidden
            />
            <p className="py-3">{formData.fileName.name}</p>
          </div>

          <div className="button">
            <button
              className="button_styling"
              type="submit"
              onClick={submitHandler}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .d-flex {
            display: flex;
          }
          .pr-3 {
            padding-right: 1rem;
          }

          .py-5 {
            padding: 3rem 0;
          }
          .py-3 {
            padding: 1rem 0;
          }

          .button_styling {
            font-size: 16px;
            letter-spacing: 2px;
            font-weight: 400 !important;
            background-color: #e63946ff;
            color: #fff;
            padding: 23px 50px;
            margin: auto;
            text-align: center;
            display: inline-block !important;
            text-decoration: none;
            border-radius: 10px;
          }
          .custom_border {
            border: 1px solid;
          }

          .custom_upload_styling {
            margin: 20px 0;
            padding: 10px;
            border: 1px solid grey;
            cursor: pointer;
          }

          @media (max-width: 425px) {
            .input_content {
              display: block;
            }

            .custom_border {
              padding: 10px 5px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Inputcsv;
