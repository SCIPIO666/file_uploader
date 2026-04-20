import Avatar from './Avatar';

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-warm-100 px-6 py-4 flex items-center justify-between shadow-warm-sm w-full">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-accent-600 rounded-lg shadow-lg"></div>
        <span className="text-xl font-bold text-warm-900 tracking-tight">NexusLab</span>
      </div>
      
      <div className="flex items-center gap-6">
        <ul className="hidden md:flex gap-8 text-sm font-medium text-warm-600">
          <li className="hover:text-accent-600 cursor-pointer transition-colors text-green-800" >Dashboard</li>
          <li className="hover:text-accent-600 cursor-pointer transition-colors text-green-800" >Storage</li>
          <li className="hover:text-accent-600 cursor-pointer transition-colors text-green-800" >Settings</li>
        </ul>
        <Avatar name="Admin" />
      </div>
    </nav>
  );
};

export default NavBar;