function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar h-full shadow-md">
      <nav className="p-4">
        <ul className="space-y-2">
          {['Dashboard', 'Workflows', 'Tools', 'History'].map((item) => (
            <li 
              key={item}
              className="p-2 text-surface-light hover:bg-accent/20 rounded-lg cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar; 