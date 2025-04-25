'use client';

import { useEffect, useState } from 'react';

interface Employee {
  id: number;
  name: string;
  email: string;
  status: string;
  department: string;
  age: number;
}

export default function EmployeeTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [newEmployee, setNewEmployee] = useState({
    name: '', email: '', status: '', department: '', age: ''
  });

  const fetchEmployees = async () => {
    const res = await fetch('/api/employees');
    const data = await res.json();
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const addEmployee = async () => {
    await fetch('/api/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEmployee),
    });
    setNewEmployee({ name: '', email: '', status: '', department: '', age: '' });
    fetchEmployees();
  };

  const deleteEmployee = async (id: number) => {
    await fetch('/api/employees', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchEmployees();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4 font-semibold">Employee List</h2>

      <table className="table-auto w-full border mb-6">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Department</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td className="border p-2">{emp.name}</td>
              <td className="border p-2">{emp.email}</td>
              <td className="border p-2">{emp.status}</td>
              <td className="border p-2">{emp.department}</td>
              <td className="border p-2">{emp.age}</td>
              <td className="border p-2 text-red-500 cursor-pointer" onClick={() => deleteEmployee(emp.id)}>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Employee */}
      <div className="space-y-2">
        <input className="border p-2 mr-2" placeholder="Name" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })} />
        <input className="border p-2 mr-2" placeholder="Email" value={newEmployee.email} onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })} />
        <input className="border p-2 mr-2" placeholder="Status" value={newEmployee.status} onChange={(e) => setNewEmployee({ ...newEmployee, status: e.target.value })} />
        <input className="border p-2 mr-2" placeholder="Department" value={newEmployee.department} onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })} />
        <input className="border p-2 mr-2" placeholder="Age" value={newEmployee.age} onChange={(e) => setNewEmployee({ ...newEmployee, age: e.target.value })} />
        <button onClick={addEmployee} className="bg-blue-600 text-white p-2 rounded">Add Employee</button>
      </div>
    </div>
  );
}
