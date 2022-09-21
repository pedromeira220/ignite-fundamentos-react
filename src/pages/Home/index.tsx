import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

export function Home() {
  return (
    <div>
      <Header />
      <div className="w-full">
        <Button text="Criar" />
      </div>
    </div>
  )
}
