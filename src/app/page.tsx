export default function Home() {
  return (
    <div className="p-8 font-mono max-w-6xl mx-auto">
      <div className="mb-8">
        <span className="text-[#569cd6]">const</span>{" "}
        <span className="text-[#9cdcfe]">greeting</span>{" "}
        <span className="text-[#d4d4d4]">=</span>{" "}
        <span className="text-[#ce9178]">&quot;Hello, World!&quot;</span>
        <span className="text-[#d4d4d4]">;</span>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-[#4ec9b0]">
          Welcome to My Portfolio
        </h1>
        
        <p className="text-[#d4d4d4] text-lg">
          <span className="text-[#6a9955]">&#47;&#47; Full Stack Developer</span>
        </p>

        <div className="mt-8 space-y-2 text-[#d4d4d4]">
          <p>
            <span className="text-[#c586c0]">export</span>{" "}
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#4ec9b0]">developer</span> = {"{"} 
          </p>
          <p className="pl-4">
            <span className="text-[#9cdcfe]">name</span>: 
            <span className="text-[#ce9178]"> &quot;Nicolas Giudi&quot;</span>,
          </p>
          <p className="pl-4">
            <span className="text-[#9cdcfe]">skills</span>: [
            <span className="text-[#ce9178]">&quot;JavaScript&quot;</span>, 
            <span className="text-[#ce9178]"> &quot;TypeScript&quot;</span>, 
            <span className="text-[#ce9178]"> &quot;React&quot;</span>, 
            <span className="text-[#ce9178]"> &quot;Next.js&quot;</span>],
          </p>
          <p className="pl-4">
            <span className="text-[#9cdcfe]">passion</span>: 
            <span className="text-[#ce9178]"> &quot;Building amazing experiences&quot;</span>
          </p>
          <p>{"}"}</p>
        </div>

        <div className="mt-8 flex gap-4">
          <button className="px-4 py-2 bg-[#007acc] text-white rounded hover:bg-[#005a9e] transition-colors">
            View Projects
          </button>
          <button className="px-4 py-2 border border-[#007acc] text-[#007acc] rounded hover:bg-[#007acc] hover:text-white transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
