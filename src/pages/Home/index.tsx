import { DeleteButton } from '../../components/DeleteButton'
import { Header } from '../../components/Header'

export function Home() {
  return (
    <div>
      <Header />
      <div className="w-full">
        <DeleteButton />
      </div>
    </div>
  )
}
