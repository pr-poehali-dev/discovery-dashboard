import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { useQuiz } from "@/components/QuizContext"

type Energy = "high" | "low"
type Temper = "intro" | "extra"

const questions = [
  {
    key: "energy" as const,
    title: "Как вы себя чувствуете последние месяцы?",
    options: [
      { label: "Выжат, нужна перезагрузка", value: "high", hint: "Высокий стресс / низкий ресурс" },
      { label: "В ресурсе, хочу новых впечатлений", value: "low", hint: "Низкий стресс / высокий ресурс" },
    ],
  },
  {
    key: "temper" as const,
    title: "Какой отдых вам ближе?",
    options: [
      { label: "Уединение, тишина, эстетика", value: "intro", hint: "Интроверт" },
      { label: "Люди, события, движение", value: "extra", hint: "Экстраверт" },
    ],
  },
]

const archetypes: Record<string, {
  name: string
  offer: string
  desc: string
  icon: string
  tags: string[]
}> = {
  "high-intro": {
    name: "Гедонист-Эстет",
    offer: "Luxury Retreat",
    desc: "Отель-убежище, спа, гастрономия, минимум людей. Фокус на тактильности и вкусе — чтобы снова почувствовать себя.",
    icon: "Wine",
    tags: ["Отель-убежище", "Спа & детокс", "Гастрономия", "Тишина"],
  },
  "low-extra": {
    name: "Исследователь",
    offer: "Urban Adventure",
    desc: "Динамичные города, фестивали, новые гастро-точки, активные прогулки. Фокус на впечатлениях и открытиях.",
    icon: "Compass",
    tags: ["Города", "Фестивали", "Гастро-точки", "Прогулки"],
  },
  "low-intro": {
    name: "Созерцатель",
    offer: "Slow Travel",
    desc: "Природа, горы, книги, медитативные маршруты. Фокус на глубине и тишине — медленное путешествие в себя.",
    icon: "Mountain",
    tags: ["Природа", "Горы", "Медитация", "Глубина"],
  },
  "high-extra": {
    name: "Драйвер",
    offer: "Recharge Trip",
    desc: "Перезагрузка через смену деятельности: серфинг, джип-туры, активный спорт. Фокус на выплеске адреналина.",
    icon: "Waves",
    tags: ["Серфинг", "Джип-туры", "Спорт", "Адреналин"],
  },
}

export function Quiz() {
  const { open, closeQuiz } = useQuiz()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<{ energy?: Energy; temper?: Temper }>({})

  const reset = () => {
    setStep(0)
    setAnswers({})
  }

  const handleClose = () => {
    closeQuiz()
    setTimeout(reset, 300)
  }

  const handleAnswer = (key: "energy" | "temper", value: string) => {
    const next = { ...answers, [key]: value }
    setAnswers(next)
    setStep((s) => s + 1)
  }

  const result =
    answers.energy && answers.temper
      ? archetypes[`${answers.energy}-${answers.temper}`]
      : null

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent className="max-w-lg p-0 overflow-hidden border-0">
        {/* Progress */}
        {!result && (
          <div className="flex gap-1.5 px-8 pt-8">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= step ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        )}

        {/* Questions */}
        {!result && (
          <div className="p-8 space-y-8">
            <div className="space-y-2">
              <div className="text-xs tracking-widest uppercase text-primary/60 font-medium">
                Шаг {step + 1} из {questions.length}
              </div>
              <h3 className="text-3xl font-semibold leading-tight">{questions[step].title}</h3>
            </div>

            <div className="space-y-3">
              {questions[step].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(questions[step].key, opt.value)}
                  className="w-full text-left p-5 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-lg">{opt.label}</div>
                      <div className="text-sm text-muted-foreground">{opt.hint}</div>
                    </div>
                    <Icon
                      name="ArrowRight"
                      size={20}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="p-8 space-y-6 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mx-auto">
              <Icon name={result.icon} size={40} />
            </div>
            <div className="space-y-2">
              <div className="text-xs tracking-widest uppercase text-primary/60 font-medium">
                Ваш архетип
              </div>
              <h3 className="text-4xl font-semibold">{result.name}</h3>
              <div className="text-lg text-primary font-medium">{result.offer}</div>
            </div>
            <p className="text-muted-foreground leading-relaxed">{result.desc}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {result.tags.map((t) => (
                <span key={t} className="text-xs px-3 py-1 bg-muted rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="space-y-3 pt-2">
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-13 tracking-wide"
                onClick={handleClose}
              >
                Получить план под мой архетип
              </Button>
              <button
                onClick={reset}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Пройти заново
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
