const Topbar = () => {
  return (
    <div className="top-0 right-0 left-0 h-12 bg-black">
      <div className="flex items-center justify-between px-28">
        <div className="text-white p-3 font-normal ">
          Abstract | Help Center
        </div>
        <button className="text-white p-1.5 rounded-lg border border-gray-500 px-4 bg-neutral-800 hover:border-gray-300 transition-colors duration-200 hover:bg-neutral-900">
          Submit a request
        </button>
      </div>
    </div>
  );
};
export default Topbar;
