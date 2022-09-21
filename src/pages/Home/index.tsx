import { Header } from '../../components/Header'
import { Task } from '../../components/Task'

export function Home() {
  return (
    <div>
      <Header />
      <div className="w-full">
        <Task />
      </div>
    </div>
  )
}
