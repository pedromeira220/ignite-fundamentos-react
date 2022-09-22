import { ClipboardText } from 'phosphor-react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

export function Home() {
  return (
    <div className="h-full">
      <Header />
      <div className="w-full px-4 -mt-8 ">
        <div className="w-full flex items-center justify-between gap-2">
          <Input placeholder="Adicione uma nova tarefa" />
          <Button text="Criar" />
        </div>
      </div>

      <section className="w-full h-full">
        <header className="w-full">
          <div className="w-full flex items-center justify-between px-4 mt-16">
            <div className="flex gap-2">
              <span className="font-bold text-blue text-sm">
                Tarefas criadas
              </span>
              <span className="px-2 py-[0.125rem] bg-gray-400 rounded-full flex items-center justify-center ">
                <span className="text-white text-xs">0</span>
              </span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-purple text-sm">Concluídas</span>
              <span className="px-2 py-[0.125rem] bg-gray-400 rounded-full flex items-center justify-center ">
                <span className="text-white text-xs">0</span>
              </span>
            </div>
          </div>
        </header>

        <main className="w-full rounded-2 overflow-hidden flex-1 border-t-2 border-gray-400 rounded-lg mt-6 flex items-center justify-center flex-col text-gray-300 ">
          <div className="flex items-center justify-center flex-col mt-20">
            <ClipboardText size={56} color="#333333" />
            <span className="font-bold mt-4">
              Você ainda não tem tarefas cadastradas
            </span>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </main>
      </section>
    </div>
  )
}
