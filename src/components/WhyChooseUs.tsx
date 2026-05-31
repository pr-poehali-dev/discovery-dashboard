import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Brain",
    title: "Анализ психотипа",
    description: "Коротая анкета определяет ваш уровень стресса и темперамент — и подбирает маршрут по одному из 4 архетипов",
  },
  {
    icon: "Map",
    title: "3 концепции отдыха",
    description: "Не один вариант, а три — чтобы выбрать именно то, что резонирует с вашим состоянием прямо сейчас",
  },
  {
    icon: "Clock",
    title: "Детальный тайминг",
    description: "Готовый план с тайм-кодами, must-visit под ваш психотип и проверенными отелями без случайного выбора",
  },
  {
    icon: "Shield",
    title: "Только проверенное",
    description: "Список сервисов и отелей, проверенных лично. Никаких «рейтингов» с накрученными отзывами",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs tracking-widest uppercase text-primary/60 mb-4 font-medium">Подход</div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Не просто подборка отелей —{" "}
            <span className="font-semibold">система перезагрузки</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Anti-Burnout Trip Plan основан на трёх осях: уровень стресса, темперамент, цель поездки
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                <Icon name={feature.icon} size={32} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}