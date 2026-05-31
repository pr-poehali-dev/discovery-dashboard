import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const destinations = [
  {
    name: "Гроты Капри",
    country: "Италия",
    image: "/santorini-sunset.png",
    description: "Малые гроты южного побережья с неоново-голубым свечением воды — не те, что в путеводителях",
    secret: "Лучшее время — 11:00, когда солнце под идеальным углом",
  },
  {
    name: "Бенг Мелеа",
    country: "Камбоджа",
    image: "/asian-temples-thailand-bangkok-golden-temple.jpg",
    description: "Нереставрированный храм, поглощённый джунглями. Деревья прорастают сквозь камни — как Индиана Джонс",
    secret: "Приезжайте на рассвете — туристов нет, атмосфера максимальная",
  },
  {
    name: "Invisible House",
    country: "Калифорния, США",
    image: "/dubai-modern-skyline-luxury-desert.jpg",
    description: "Дом-невидимка в пустыне Джошуа-Три: зеркальные стены сливаются с ландшафтом. Пик тихой роскоши",
    secret: "Золотой час за 40 минут до заката — фото как с другой планеты",
  },
  {
    name: "Озеро Хиллер",
    country: "Австралия",
    image: "/bali-indonesia-rice-terraces-tropical-paradise.jpg",
    description: "Ярко-розовое «зефирное» озеро: цвет не исчезает даже в стакане воды. Контраст с изумрудным лесом — визуальный шок",
    secret: "Видно только с воздуха — аренда вертолёта обязательна",
  },
  {
    name: "Альпийские долины в тумане",
    country: "Австрия / Швейцария",
    image: "/iceland-northern-lights-waterfalls-dramatic-landsc.jpg",
    description: "Скрытые деревушки, где утренний туман заполняет долину — видны лишь шпили церквей, парящие в небе",
    secret: "5:40 утра — свет мягкий, туристы спят, деревня ваша",
  },
  {
    name: "Мальдивские атоллы",
    country: "Индийский океан",
    image: "/maldives-overwater-bungalows-crystal-clear-water.jpg",
    description: "Частные острова без массового туризма: нетронутые рифы и виллы над водой только для вас",
    secret: "Выбирайте острова к северу от Мале — меньше людей, чище вода",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-xs tracking-widest uppercase text-primary/60 mb-4 font-medium">Карта миров</div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            5 локаций, которые выглядят как{" "}
            <span className="font-semibold">компьютерная графика</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Места, о которых молчат путеводители — только для тех, кто ценит уникальность
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Location Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="MapPin" size={14} className="text-primary" />
                  <span className="text-xs font-medium">{destination.country}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{destination.description}</p>
                </div>

                <div className="flex items-start gap-2 pt-4 border-t border-border">
                  <Icon name="KeyRound" size={14} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-xs text-primary/80 leading-relaxed italic">{destination.secret}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 bg-transparent tracking-wide">
            Получить полный лид-магнит
          </Button>
        </div>
      </div>
    </section>
  )
}