import { createContext, useContext, useState, ReactNode } from "react"

type QuizContextType = {
  open: boolean
  openQuiz: () => void
  closeQuiz: () => void
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <QuizContext.Provider
      value={{ open, openQuiz: () => setOpen(true), closeQuiz: () => setOpen(false) }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  const ctx = useContext(QuizContext)
  if (!ctx) throw new Error("useQuiz must be used within QuizProvider")
  return ctx
}
