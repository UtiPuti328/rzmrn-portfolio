# RZMRN.com — Integration Plan v0.2 → v1.0

## Автономные задачи — ВЫПОЛНЕНО

### Batch 1: Critical Fixes ✅
1. ~~Lenis RAF bug~~ — проверено, `time * 1000` корректно (GSAP даёт секунды, Lenis ждёт мс)
2. ✅ **GlitchHover gsap import** — исправлен на `@/lib/gsap`
3. ✅ **HomeCTA typo** — "Lets" → "Let's"
4. ✅ **Delete junk** — удалены `route.ts.bak`, пустая `src/app/api/`
5. ✅ **neon-pulse.mdx** — удалён (ссылался на несуществующую картинку)
6. ✅ **overflow-x: hidden** — добавлен на html и body
7. ✅ **sr-only class** — добавлен в globals.css
8. ✅ **Safe area insets** — добавлен на Header

### Batch 2: Performance ✅
9. ✅ **motion/react удалён** — ExpandableCard переведён на CSS transition-[height]
10. ✅ **@gsap/react удалён** — не использовался нигде
11. ✅ **ExpandableCard** — `<a>` → `<button>` (семантика), aria-expanded
12. ✅ **Image sizes** — добавлен sizes на hero image в case study, MDX images

### Batch 3: Mobile & A11y ✅
13. ✅ **MobileMenu** — animation (fade + staggered links), focus trap, aria-controls, Escape, 44px touch target
14. ✅ **Stats CountUp** — prefers-reduced-motion check, показывает финальное значение сразу
15. ✅ **MDX images** — responsive sizes вместо фиксированных 1440px
16. ✅ **404 page** — metadata export, уменьшен font-size (text-9xl вместо text-[12rem])
17. ✅ **ContactForm** — honeypot поле добавлено
18. ✅ **CLAUDE.md** — обновлён (motion/react удалён из документации)

**Deployed:** https://0127c61e.rzmrn-portfolio.pages.dev

---

## Задачи требующие участия Макса

### ⚠️ КРИТИЧНО: Formspree URL сломан
Текущий URL: `https://formspree.io/f/hello@rzmrn.com` — это **НЕ валидный Formspree endpoint**.
Формат должен быть: `https://formspree.io/f/{FORM_ID}` (например `f/xwkgveld`).
**Действие:** зарегистрироваться на formspree.io, создать форму, получить ID, заменить URL в `ContactForm.tsx:30`.

### Контент (v0.4 — проекты)
- [ ] Подготовить 4-6 реальных проектов (hero image/video, описание, теги)
- [ ] Предоставить медиа-файлы (WebP/AVIF для картинок, сжатое видео)
- [ ] Определить aspect ratio стратегию (mixed 16:9 + 9:16?)
- [ ] Удалить/обновить устаревшие проекты из projects.ts

### About (v0.5)
- [ ] Переписать текст About своим голосом
- [ ] Подтвердить "15 years" цифру
- [ ] Обновить статистику в TerminalProof (1000+, 298, 150+, 15+)
- [ ] Добавить AI/Automation в Skills секцию

### SEO & Social
- [ ] Предоставить URL соцсетей для JSON-LD sameAs (YouTube, LinkedIn, Fiverr, etc.)
- [ ] OG-image — нужен дизайн или скриншот для og:image (1200x630px)
- [ ] Выбрать аналитику (Plausible recommended — бесплатный self-hosted или $9/mo)

### Финал (v1.0)
- [ ] Тест на реальных устройствах (iPhone, Android)
- [ ] Финальный проход по всем страницам
- [ ] LinkedIn пост о запуске
