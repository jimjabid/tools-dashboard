function Header() {
  return (
    <header className="bg-header shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-surface-light">Tools Dashboard</div>
        <div className="flex items-center gap-4">
          <input 
            type="search" 
            placeholder="Search..." 
            className="px-4 py-2 border rounded-lg bg-surface-light text-sidebar placeholder-sidebar/70"
          />
          <button className="px-4 py-2 bg-accent text-surface-light rounded-lg hover:bg-accent/90 transition-colors">
            Settings
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header; 