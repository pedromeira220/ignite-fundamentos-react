import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

export function Home() {
  return (
    <div>
      <Header />
      <div className="w-full px-1">
        <Input placeholder="Adicione uma nova tarefa" />
      </div>
    </div>
  )
}
