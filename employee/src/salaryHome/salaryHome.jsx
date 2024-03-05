import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import search from "../assets/search.png";
import Salary from "../salary/salary";
import {
  listEmployees,
  deleteEmployee,
} from "../services/EmployeeSalaryService";

const SalaryHome = () => {
  const [employeesSalary, setEmployeesSalary] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    listEmployees()
      .then((response) => {
        setEmployeesSalary(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddEmployee = () => {
    setShowModal(true); // show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // hide the modal
  };

  const deleteEmployees1 = (employeeId) =>{
    // console.log(employeeId);
    deleteEmployee(employeeId).then((response) => {
        getAllEmployees();
    }).catch(error =>{
      console.log(error);
    })
  }
  return (
    <div>
      <div className="navbar">
        <h1>Employee's Salary Details</h1>
        <button className="btn-logout">Logout</button>
      </div>

      <div className="main-container">
        <div className="add-employee-container">
          <button className="add-employee" onClick={handleAddEmployee}>
            Add Employee Salary
          </button>
        </div>
        <div className="add-snf">
          <div className="filters">Filter 1 | Filter 2 | Filter 3</div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <img src={search} alt="" className="search-icon" />
          </div>
        </div>
        <div className="employee-container">
          <div className="employee-background">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Bank Name</th>
                  <th>Bank Account no</th>
                  <th>IFSC code</th>
                  <th>Salary</th>
                  {/* <th>Pay Cycle</th> */}
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employeesSalary.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.bankName}</td>
                    <td>{employee.bankAcc}</td>
                    <td>{employee.ifsc}</td>
                    <td>{employee.salary}</td>
                    {/* <td>{employee.payCycle}</td> */}
                    <td>{employee.date}</td>
                    <td className="action-buttons">
                      {/* <button className="edit" onClick={handleAddEmployee}>
                        Edit
                      </button> */}
                      {/* <Link className="edit" to={`/edit-employee/${employee.id}`}>Update</Link> */}
                      <Link className="edit" to={`/edit-employeeSalary/${employee.id}`}>Update</Link>
                      <button
                        className="delete"
                        onClick={() => deleteEmployees1(employee.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showModal && <Salary onClose={handleCloseModal} />}
    </div>
  );
};

export default SalaryHome;
