import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-widest uppercase">Voyager Concierge</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Travel-консьерж для занятых профессионалов. Anti-Burnout Trip Plan под ваш психотип
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          {/* Архетипы */}
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">Архетипы</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#packages" className="hover:text-foreground transition-colors">Гедонист-Эстет</a></li>
              <li><a href="#packages" className="hover:text-foreground transition-colors">Исследователь</a></li>
              <li><a href="#packages" className="hover:text-foreground transition-colors">Созерцатель</a></li>
              <li><a href="#packages" className="hover:text-foreground transition-colors">Драйвер</a></li>
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">Услуги</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Anti-Burnout Trip Plan</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Маршрут под ключ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Карта миров (лид-магнит)</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Консультация</a></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Написать в Telegram</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Условия использования</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>2025 Voyager Concierge. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}