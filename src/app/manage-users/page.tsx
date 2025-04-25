"use client";
import { useState } from "react";

interface User {
  id: number;
  name: string;
}

export default function ManageUsers() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]);
  const [newUser, setNewUser] = useState("");

  const addUser = () => {
    if (!newUser.trim()) return;
    const newEntry = { id: Date.now(), name: newUser };
    setUsers([...users, newEntry]);
    setNewUser("");
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-white">Manage Users</h1>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="New User Name"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          className="p-2 rounded border"
        />
        <button onClick={addUser} className="px-4 py-2 bg-blue-600 text-white rounded">
          Add User
        </button>
      </div>

      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center p-3 bg-gray-800 text-white rounded"
          >
            <span>{user.name}</span>
            <button
              onClick={() => deleteUser(user.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
