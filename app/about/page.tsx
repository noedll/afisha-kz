import type { Metadata } from "next";
import { Search, Ticket, Star, MapPin, Users, Zap } from "lucide-react";
import { FadeIn } from "./fade-in";

export const metadata: Metadata = {
  title: "О нас — Афиша KZ",
  description: "Узнайте больше об Афиша KZ — главной площадке событий Казахстана.",
};

const steps = [
  {
    icon: Search,
    title: "Найдите событие",
    description:
      "Просматривайте концерты, театры, спорт и выставки в вашем городе. Удобный поиск и фильтры помогут найти именно то, что вам интересно.",
  },
  {
    icon: Ticket,
    title: "Купите билет",
    description:
      "Оформите заказ за несколько кликов. Безопасная оплата картой или через мобильные сервисы — билет сразу у вас в телефоне.",
  },
  {
    icon: Star,
    title: "Наслаждайтесь",
    description:
      "Покажите QR-код на входе и наслаждайтесь мероприятием. После события оставьте отзыв и делитесь впечатлениями.",
  },
];

const reasons = [
  {
    icon: MapPin,
    title: "Все города Казахстана",
    description: "События от Алматы до Астаны, Шымкента и Актобе — в одном месте.",
  },
  {
    icon: Zap,
    title: "Мгновенное получение",
    description: "Электронные билеты без очередей и лишних ожиданий.",
  },
  {
    icon: Users,
    title: "Сообщество",
    description: "Более 500 000 активных пользователей доверяют Афиша KZ каждый месяц.",
  },
];

const team = [
  { name: "Айдана Сейткали", role: "CEO & Co-founder" },
  { name: "Ержан Бекенов", role: "CTO & Co-founder" },
  { name: "Мадина Нурланова", role: "Head of Design" },
  { name: "Тимур Абенов", role: "Head of Partnerships" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Hero */}
      <section className="px-6 py-24 sm:py-32 text-center bg-zinc-950 text-white">
        <div className="mx-auto max-w-2xl">
          <FadeIn delay={0}>
            <span className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1 text-sm font-medium tracking-wide uppercase">
              О нас
            </span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Главная афиша&nbsp;
              <span className="text-zinc-400">Казахстана</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
              Афиша KZ — это платформа, где тысячи событий встречаются с теми, кто их ищет.
              Мы делаем культурную жизнь страны доступной для каждого.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Как это работает</h2>
            <p className="text-center text-zinc-500 mb-14 max-w-lg mx-auto">
              Три простых шага — и вы на мероприятии.
            </p>
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <FadeIn key={idx} delay={idx * 100}>
                  <div className="flex flex-col items-start gap-4 p-6 rounded-2xl border border-zinc-100 bg-zinc-50 hover:border-zinc-200 transition-colors h-full">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-900 text-white shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Шаг {idx + 1}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Afisha KZ */}
      <section className="px-6 py-20 sm:py-24 bg-zinc-950 text-white">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Почему Афиша KZ</h2>
            <p className="text-center text-zinc-400 mb-14 max-w-lg mx-auto">
              Мы строим лучший опыт для зрителей и организаторов по всему Казахстану.
            </p>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-3">
            {reasons.map((r, idx) => {
              const Icon = r.icon;
              return (
                <FadeIn key={idx} delay={idx * 100}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 mb-4">
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-base mb-2">{r.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{r.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Наша команда</h2>
            <p className="text-center text-zinc-500 mb-14 max-w-lg mx-auto">
              Люди, которые создают Афиша KZ каждый день.
            </p>
          </FadeIn>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
            {team.map((member, idx) => (
              <FadeIn key={idx} delay={idx * 80}>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-colors h-full">
                  <div className="w-14 h-14 rounded-full bg-zinc-100 flex items-center justify-center text-xl font-bold text-zinc-700 mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <p className="font-semibold text-sm">{member.name}</p>
                  <p className="text-xs text-zinc-500 mt-1">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 sm:py-24 bg-zinc-50 text-center">
        <div className="mx-auto max-w-xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Готовы найти своё событие?</h2>
            <p className="text-zinc-500 mb-8">
              Тысячи мероприятий ждут вас прямо сейчас.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-8 py-3.5 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
            >
              Смотреть афишу
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
