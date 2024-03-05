import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeSalaryService";
import { useNavigate } from "react-router-dom";


const Salary = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employeeid: "",
    bankName: "",
    bankAcc: "",
    ifsc: "",
    salary: "",
    name:"",
    date: "",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log("Form submitted:", formData);


    createEmployee(formData)
    .then((response) => {
      console.log(response.data);

      navigate("/salaryhome");
    })
    .catch((error) => {
      console.log(error);
    });
    // Reset the form after submission
    setFormData({
      employeeid: "",
      bankName: "",
      bankAcc: "",
      ifsc: "",
      salary: "",
      name: "",
      date: "",
    });
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content1">
        <div className="head-title">
        <h2> Employee's Salary</h2>   
          <span className="close" onClick={onClose}>
            &times;
          </span>

          
        </div>
        <div className="form-employee">
          <form onSubmit={handleSubmit}>
            <div className="form-div">
              <div className="input-fields">
                <div className="input-field1">
                  <label>
                    <div className="input-value">
                    Employee id:
                    </div>
                    <input
                      type="text"
                      name="employeeid"
                      value={formData.employeeid}
                      placeholder="Enter Employee Id"
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                  <div className="input-value">
                    Bank Name:
                    </div>
                    <input
                      type="text"
                      name="bankName"
                      value={formData.bankName}
                      placeholder="Enter Bank Name"
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="input-field1">
                  <label>
                  <div className="input-value">
                    Bank Account no:
                    </div>
                    <input
                      type="text"
                      name="bankAcc"
                      value={formData.bankAcc}
                      placeholder="Enter Account No"
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                  <div className="input-value">
                    Bank No:
                    </div>
                    <input
                      type="number"
                      name="ifsc"
                      value={formData.ifsc}
                      placeholder="Enter IFSC code"
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="input-field1">
                  <label>
                  <div className="input-value">
                    Salary:
                    </div>
                    <input
                      type="text"
                      name="salary"
                      value={formData.salary}
                      placeholder="Enter salary"
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                  <div className="input-value">
                    Employee Name:
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      placeholder="Enter payCycle"
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="input-field1">
                 
                  <label>
                  <div className="input-value">
                    Date:
                    </div>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      placeholder="Enter Date"
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                {/* <div className="input-field1">
                  <label>
                  <div className="input-value">
                    To Date:
                    </div>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      placeholder="Enter City"
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                  <div className="input-value">
                    Pincode:
                    </div>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      placeholder="Enter Pincode"
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div> */}
              </div>
              <div className="btn-form">
                <button type="submit">Register Employee</button>
              </div>
            </div>
          </form>
        </div>
      </div>
     </div>
  );
};

export default Salary;



