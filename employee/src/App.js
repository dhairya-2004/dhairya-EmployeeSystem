import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/login';
import Home from './home/home';
import Add from './add/EmployeeFormModal'
import ListEmployeeComponent from './components/ListEmployee';
import Salary from './salary/salary';
import SalaryHome from './salaryHome/salaryHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<ListEmployeeComponent/>}/>
        <Route path='/salary' element={<Salary/>}/>
        <Route path='/salaryhome' element={<SalaryHome/>}/>
        <Route path="edit-employee/:id" element={<Add/>} />
        <Route path="edit-employeeSalary/:ids" element={<Salary/>} />
      </Routes>
    </Router>
  );
}

export default App;
