import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import download from "../assets/download.png";
import { PDFDownloadLink, Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import "./home.css";
import search from "../assets/search.png";


import {
  listEmployees,
  deleteEmployee,
  updateEmployee,
} from "../services/EmployeeService";
import EmployeeFormModal from "../add/EmployeeFormModal";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
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

  const deleteEmployees = (employeeId) => {
    // console.log(employeeId);
    deleteEmployee(employeeId)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleDropdownOption = (option, employee) => {
  //   console.log(`Selected option "${option}" for employee ${employee.id}`);
  // };

  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      padding: 20,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  const MyDocument = () => (
    <Document>
      {employees.map((employee) => (
        <Page key={employee.id} size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{`ID: ${employee.id}`}</Text>
            <Text>{`First Name: ${employee.firstName}`}</Text>
            <Text>{`Last Name: ${employee.lastName}`}</Text>
            {/* Add other details as needed */}
          </View>
        </Page>
      ))}
    </Document>
  );

  return (
    <div>
      <div className="navbar">
        <h1>Employee Management System</h1>
        <button className="btn-logout">Logout</button>
      </div>

      <div className="main-container">
        <div className="add-employee-container">
          <button className="add-employee" onClick={handleAddEmployee}>
            Add Employee
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
                  <th>Id.</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Salary</th>
                  <th>Date</th>
                  <th>Contact No</th>
                  <th>Age</th>
                  <th>City</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emailId}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.date}</td>
                    <td>{employee.contactNo}</td>
                    <td>{employee.age}</td>
                    <td>{employee.city}</td>
                    <td className="action-buttons">
                      {/* <button className="edit">Edit</button> */}
                      <Link
                        className="edit"
                        to={`/edit-employee/${employee.id}`}
                      >
                        Update
                      </Link>
                      <button
                        className="delete"
                        onClick={() => deleteEmployees(employee.id)}
                      >
                        Delete
                      </button>
                      {/* <img src={download} alt="" /> */}

                      <PDFDownloadLink
                        document={<MyDocument />}
                        fileName="employee_details.pdf"
                      >
                        {({ blob, url, loading, error }) =>
                          loading ? (
                            "Loading document..."
                          ) : (
                            <img src={download} alt="Download PDF" />
                          )
                        }
                      </PDFDownloadLink>
                      <div className="vertical-ellipsis">
                        <button className="ellipsis-btn">&#8942;</button>
                      </div>
                      {/* <div className="dropdown">
                        
                        <div className="dropdown-content">
                          <button
                            onClick={() =>
                              handleDropdownOption("downloadPDF", employee)
                            }
                          >
                            Download PDF
                          </button>
                          <button
                            onClick={() =>
                              handleDropdownOption("manageSalary", employee)
                            }
                          >
                            Manage Salary Details
                          </button>
                        </div>
                      </div> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showModal && <EmployeeFormModal onClose={handleCloseModal} />}
    </div>
  );
};

export default EmployeeTable;

<div className="dropdown-content">
  <span>Download PDF</span>
  <span>Manage Salary</span>
</div>;

// import React, { useState, useEffect } from "react";
// import "./home.css";
// import search from "../assets/search.png";
// import { listEmployees } from "../services/EmployeeService";
// import EmployeeFormModal from "../add/EmployeeFormModal";

// const EmployeeTable = () => {
//   const [employees, setEmployees] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);

//   useEffect(() => {
//     getAllEmployees();
//   }, []);

//   const getAllEmployees = () => {
//     listEmployees()
//       .then((response) => {
//         setEmployees(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleAddEmployee = () => {
//     setIsEditing(false);
//     setShowModal(true); // show the modal for adding employee
//   };

//   const handleEditEmployee = (employee) => {
//     setIsEditing(true);
//     setSelectedEmployee(employee);
//     setShowModal(true); // show the modal for editing employee
//   };

//   const handleCloseModal = () => {
//     setIsEditing(false);
//     setSelectedEmployee(null);
//     setShowModal(false); // hide the modal
//   };

//   return (
//     <div>
//       <div className="navbar">
//         <h1>Employee Management System</h1>
//       </div>

//       <div className="main-container">
//         <div className="add-employee-container">
//           <button className="add-employee" onClick={handleAddEmployee}>
//             Add Employee
//           </button>
//         </div>
//         <div className="add-snf">
//           <div className="filters">Filter 1 | Filter 2 | Filter 3</div>
//           <div className="search-bar">
//             <input type="text" placeholder="Search..." />
//             <img src={search} alt="" className="search-icon" />
//           </div>
//         </div>
//         <div className="employee-container">
//           <div className="employee-background">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Id.</th>
//                   <th>First Name</th>
//                   <th>Last Name</th>
//                   <th>Email</th>
//                   <th>Salary</th>
//                   <th>Date</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {employees.map((employee) => (
//                   <tr key={employee.id}>
//                     <td>{employee.id}</td>
//                     <td>{employee.firstName}</td>
//                     <td>{employee.lastName}</td>
//                     <td>{employee.emailId}</td>
//                     <td>{employee.salary}</td>
//                     <td>{employee.date}</td>
//                     <td className="action-buttons">
//                       <button className="edit" onClick={() => handleEditEmployee(employee)}>
//                         Edit
//                       </button>
//                       <button className="delete">Delete</button>
//                       <div className="vertical-ellipsis">...</div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       {showModal && (
//         <EmployeeFormModal
//           onClose={handleCloseModal}
//           isEditing={isEditing}
//           employee={selectedEmployee}
//           modalTitle={isEditing ? "Edit Employee":"Add Employee"}
//         />
//       )}
//     </div>
//   );
// };

// export default EmployeeTable;
