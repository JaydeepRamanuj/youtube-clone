import React from "react";

function TestPage() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Header */}
      <header className="h-16 bg-blue-500 text-white flex items-center justify-center">
        Header
      </header>

      {/* Main Content: Sidebar + Feed */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-200 overflow-auto">
          <div className="h-[2000px]">Sidebar Content (Scrollable)</div>
        </aside>

        {/* Feed */}
        <main className="flex-1 bg-gray-100 overflow-auto">
          <div className="h-[2000px]">Feed Content (Scrollable)</div>
        </main>
      </div>
    </div>
  );
}

export default TestPage;
