export function Title({ name, description }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{name}</h2>
      <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">{description}</p>
    </div>
  );
}
