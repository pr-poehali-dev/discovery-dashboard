import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { useQuiz } from "@/components/QuizContext"

const packages = [
  {
    archetype: "Гедонист-Эстет",
    type: "Интроверт · Высокий стресс",
    title: "Luxury Retreat",
    duration: "7–10 дней",
    format: "Solo / Пара",
    rating: "4.9",
    image: "/maldives-overwater-bungalows-crystal-clear-water.jpg",
    highlights: ["Отель-убежище", "Спа & детокс", "Гастрономия", "Минимум людей"],
    description: "Тактильная роскошь и тишина. Для тех, кто выгорел и хочет почувствовать себя снова",
    price: "от 5 000 ₽",
  },
  {
    archetype: "Исследователь",
    type: "Экстраверт · Низкий стресс",
    title: "Urban Adventure",
    duration: "8–12 дней",
    format: "Малая группа",
    rating: "4.8",
    image: "/european-cities-paris-eiffel-tower-romantic.jpg",
    highlights: ["Динамичные города", "Фестивали", "Гастро-точки", "Активные прогулки"],
    description: "Максимум впечатлений и энергии. Для тех, кто в ресурсе и хочет новых открытий",
    price: "от 5 000 ₽",
  },
  {
    archetype: "Драйвер",
    type: "Экстраверт · Высокий стресс",
    title: "Recharge Trip",
    duration: "5–8 дней",
    format: "Solo / Компания",
    rating: "5.0",
    image: "/african-safari-wildlife-elephants-sunset.jpg",
    highlights: ["Серфинг", "Джип-туры", "Адреналин", "Смена деятельности"],
    description: "Перезагрузка через выплеск адреналина. Стресс сжигается физической активностью",
    price: "от 5 000 ₽",
  },
]

export function PopularPackages() {
  const { openQuiz } = useQuiz()
  return (
    <section id="packages" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-xs tracking-widest uppercase text-primary/60 mb-4 font-medium">Архетипы путешественника</div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Какой тип отдыха{" "}
            <span className="font-semibold">подходит вам?</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Определяем по двум осям: уровень стресса и темперамент — и строим маршрут, который реально восстанавливает
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Archetype Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="Star" size={14} className="fill-primary text-primary" />
                  <span className="text-xs font-semibold">{pkg.archetype}</span>
                </div>

                {/* Type on image bottom */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/80 text-xs tracking-wide">{pkg.type}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{pkg.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{pkg.description}</p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Icon name="Calendar" size={16} />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="Users" size={16} />
                      <span>{pkg.format}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-muted rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Стоимость плана</div>
                    <div className="text-2xl font-semibold text-primary">{pkg.price}</div>
                  </div>
                  <Button onClick={openQuiz} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full tracking-wide">
                    Хочу план
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}