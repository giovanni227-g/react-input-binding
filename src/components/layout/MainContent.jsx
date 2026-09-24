import FilterName from '../sections/FilterName.jsx'
import HelloControlled from '../sections/HelloControlled.jsx'

export default function MainContent() {
  return (
    <main className="py-5">
      <div className="container app-grid">
        <div className="app-panel">
          <HelloControlled />
        </div>
        <div className="app-panel">
          <FilterName />
        </div>
      </div>
    </main>
  )
}
