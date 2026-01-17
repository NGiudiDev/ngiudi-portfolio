export function StatusBar() {
  return (
    <footer className="h-6 bg-[#007acc] flex items-center justify-between px-3 text-xs text-white">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <span>🌿</span>
          <span>main</span>
        </div>
        <div className="flex items-center gap-1">
          <span>⚠</span>
          <span>0</span>
        </div>
        <div className="flex items-center gap-1">
          <span>❌</span>
          <span>0</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <span>Next.js</span>
        <span>TypeScript React</span>
        <span>UTF-8</span>
        <span>Ln 1, Col 1</span>
      </div>
    </footer>
  );
}
