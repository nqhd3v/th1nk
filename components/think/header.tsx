const ThinkHeader: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-[800px] flex items-center justify-between h-16 backdrop-blur-sm pt-5 px-2 md:px-5">
      <div className="text-xl font-bold font-writer">
        {title ? (
          <span className="text-dark-900">{title}</span>
        ) : (
          <span className="text-gray-400">nothing to read...</span>
        )}
      </div>
    </div>
  );
};

export default ThinkHeader;
