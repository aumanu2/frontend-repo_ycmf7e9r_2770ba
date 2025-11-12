export default function ChallengeCard({ title, category, difficulty, description }) {
  return (
    <div className="group bg-white/80 backdrop-blur rounded-xl p-5 shadow hover:shadow-lg transition border border-white/40">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-medium">{category}</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">{difficulty}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">{description}</p>
      <div className="mt-4 flex justify-between items-center">
        <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700">Preview</a>
        <button className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-1.5">Start</button>
      </div>
    </div>
  )
}
