import NavBar from '../components/NavBar';


const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col bg-warm-50 overflow-hidden">
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        <NavBar />
        <main className="flex-1 overflow-y-auto p-8">
          <header className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-2xl font-bold text-warm-900">Lab Overview</h1>
              <p className="text-warm-500">Welcome back, here is your activity for today.</p>
            </div>
          </header>

          {/* Placeholder for File Uploader or Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white h-48 rounded-2xl shadow-warm-sm border border-warm-100 border-dashed flex items-center justify-center text-warm-300 font-medium">
                Metric Card {i}
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white p-8 rounded-3xl shadow-warm-md border border-warm-100 h-96">
             <p className="text-warm-400 font-medium">Main Workspace / Recent Uploads</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;