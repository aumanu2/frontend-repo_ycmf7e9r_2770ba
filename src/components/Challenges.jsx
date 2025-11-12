import { useEffect, useState } from 'react'
import ChallengeCard from './ChallengeCard'

export default function Challenges() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/challenges`)
        const data = await res.json()
        setItems(data.challenges || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="challenges" className="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Explore Challenges</h2>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-semibold">See all</a>
      </div>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c) => (
            <ChallengeCard key={c.id} {...c} />
          ))}
        </div>
      )}
    </section>
  )
}
