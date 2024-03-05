import React, {useState, useEffect} from 'react'
import './ListEmployee.css';
import {listEmployees} from '../services/EmployeeService'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])


    useEffect(() => {
        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        listEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <>
        <HeaderComponent/>

        <div className = "container1">
            <h2 className = "text-center"> List Employees </h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Employee Id </th>
                    <th> Employee First Name </th>
                    <th> Employee Last Name </th>
                    <th> Employee Email Id </th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}> 
                                <td> {employee.id} </td>
                                <td> {employee.firstName} </td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        <FooterComponent/>
        </>
    )
}

export default ListEmployeeComponent