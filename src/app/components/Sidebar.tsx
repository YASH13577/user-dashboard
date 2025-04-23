function Sidebar() {
    return (
      <div className="w-64 bg-black shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li className="mb-2"><a href="/dashboard">Home</a></li>
          <li className="mb-2"><a href="/profile">Profile</a></li>
          <li className="mb-2"><a href="/settings">Settings</a></li>
        </ul>
      </div>
    )
  }
  export default Sidebar 