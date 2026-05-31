import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/maldives-overwater-bungalows-crystal-clear-water.jpg"
          alt="Luxury travel"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-full px-5 py-2 text-sm tracking-widest uppercase text-primary/80 font-medium">
            Travel-консьерж для занятых профессионалов
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance">
            Отдых без
            <span className="block font-semibold mt-2">логистического стресса</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Персональный маршрут под ваш психотип — от скрытых локаций до лучших отелей планеты. Экономит 20+ часов поиска и гарантирует перезагрузку
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base group tracking-wide"
            >
              Узнать свой архетип
              <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-2 bg-transparent tracking-wide">
              Скрытые локации
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-24 pt-16 border-t border-border/50">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">20+</div>
            <div className="text-sm text-muted-foreground tracking-wide">часов экономии</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">4</div>
            <div className="text-sm text-muted-foreground tracking-wide">архетипа путешественника</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">5 000₽</div>
            <div className="text-sm text-muted-foreground tracking-wide">входной билет в план</div>
          </div>
        </div>
      </div>
    </section>
  )
}