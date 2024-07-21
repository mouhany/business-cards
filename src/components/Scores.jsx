function Scores({ value, max = 10 }) {
  return (
    <div className="flex flex-row gap-1">
      {Array.from({ length: max }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${
            index < value ? "bg-amber-700" : "bg-stone-300"
          }`}
        ></div>
      ))}
    </div>
  );
}

export default Scores;
