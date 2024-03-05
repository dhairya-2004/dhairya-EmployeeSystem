import React, { useEffect, useState } from "react";
import "./EmployeeFormModal.css";
import {
  createEmployee,
  getEmployeeById,
  updateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeFormModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    contactNo: "",
    password: "",
    gender: "",
    age: "",
    salary: "",
    city: "",
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

    console.log("Form submitted:", formData);

    if (id) {
      // Update existing employee
      updateEmployee(id, formData)
        .then((response) => {
          console.log(response.data);
          navigate("/home");
          onClose();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // Create a new employee
      createEmployee(formData)
        .then((response) => {
          console.log(response.data);
          navigate("/home");
          onClose();
        })
        .catch((error) => {
          console.log(error);
        });
    }

    setFormData({
      firstName: "",
      lastName: "",
      emailId: "",
      contactNo: "",
      password: "",
      gender: "",
      age: "",
      salary: "",
      city: "",
      date: "",
    });
  };

  useEffect(() => {
    if (id) {
      getEmployeeById(id)
        .then((response) => {
          setFormData({
            // ... (your existing code)
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            emailId: response.data.emailId,
            contactNo: response.data.contactNo,
            password: response.data.password,
            gender: response.data.gender,
            age: response.data.age,
            salary: response.data.salary,
            city: response.data.city,
            date: response.data.date,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const title = () => {
    if (id) {
      return <h2 className="text-cemter">Update Employee</h2>;
    } else {
      return <h2 className="text-cemter">Add Employee</h2>;
    }
  };
  const title1 = () => {
    if (id) {
      return <button type="submit">Save Changes</button>;
    } else {
      return <button type="submit">Register Employee</button>;
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content1">
        <div className="head-title">
          {/* <h2 className="add">Add Employee</h2> */}
          {title()}

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
                    <div className="input-value">First Name:</div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      placeholder="Enter First Name"
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    <div className="input-value">Last Name:</div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      placeholder="Enter Last Name"
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="input-field1">
                  <label>
                    <div className="input-value">Email:</div>
                    <input
                      type="email"
                      name="emailId"
                      value={formData.emailId}
                      placeholder="Enter Email"
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    <div className="input-value">Contact No:</div>
                    <input
                      type="tel"
                      name="contactNo"
                      autoComplete="tel"
                      value={formData.contactNo}
                      placeholder="Enter Contact No"
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="input-field1">
                  <label>
                    <div className="input-value">Password:</div>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      placeholder="Enter Password"
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    <div className="input-value">Gender:</div>
                    <div className="radio-group">
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={formData.gender === "male"}
                          onChange={handleChange}
                          required
                        />
                        Male
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={formData.gender === "female"}
                          onChange={handleChange}
                          required
                        />
                        Female
                      </label>
                    </div>
                  </label>
                </div>
                <div className="input-field1">
                  <label>
                    <div className="input-value">Age:</div>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      placeholder="Enter Age"
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    <div className="input-value">Salary:</div>
                    <input
                      type="text"
                      name="salary"
                      value={formData.salary}
                      placeholder="Enter Salary"
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="input-field1">
                  <label>
                    <div className="input-value">City:</div>
                    <input
                      type="text"
                      autoComplete="home city"
                      name="city"
                      value={formData.city}
                      placeholder="Enter City"
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    <div className="input-value">Date Of Birth:</div>
                    <input
                      type="date"
                      name="date"
                      autoComplete="postal-code"
                      value={formData.date}
                      placeholder="Enter Date"
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="btn-form">
                {/* <button type="submit">Register Employee</button> */}
                {title1()}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeFormModal;
