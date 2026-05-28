const navItems = [
  { href: "#services", label: "服务" },
  { href: "#prices", label: "价格" },
  { href: "#process", label: "流程" },
  { href: "#contact", label: "到店" },
];

const stats = [
  { value: "2800+", label: "累计服务宠物" },
  { value: "45min", label: "小型犬基础洗护起" },
  { value: "100%", label: "工具清洁消毒记录" },
];

const services = [
  {
    icon: "浴",
    title: "基础洗护",
    body: "洗澡、吹干、梳毛、耳道清洁、脚底毛和指甲基础护理。",
  },
  {
    icon: "剪",
    title: "造型修剪",
    body: "泰迪装、比熊圆头、柴犬修边、猫咪局部修剪等日常造型。",
  },
  {
    icon: "护",
    title: "皮毛护理",
    body: "打结梳理、换毛季排浮毛、蓬松护理和敏感皮肤温和洗护。",
  },
  {
    icon: "猫",
    title: "猫咪安抚洗护",
    body: "单独猫区、低噪吹风和分段安抚，适合胆小或初次洗护的猫咪。",
  },
];

const standards = [
  {
    title: "到店先评估",
    body: "记录体重、毛发打结、皮肤异常和情绪状态，确认护理方案。",
    titleClassName: "text-sky-300",
  },
  {
    title: "宠物专用用品",
    body: "按犬猫、幼宠、敏感肌和长短毛分类使用洗护产品。",
  },
  {
    title: "护理后反馈",
    body: "同步毛发、皮肤、耳朵、指甲状态，并给出居家护理建议。",
  },
];

const slots = ["10:30 小型犬", "13:00 猫咪洗护", "15:30 造型修剪", "18:00 基础洗护"];

const prices = [
  {
    tag: "小型犬",
    title: "清爽基础洗护",
    price: "¥88",
    highlighted: false,
    items: ["温和洗澡与吹干", "耳朵、脚底、指甲护理", "基础梳毛与香氛护理"],
  },
  {
    tag: "热门",
    title: "精致造型洗剪",
    price: "¥168",
    highlighted: true,
    items: ["基础洗护全套", "全身造型修剪", "面部、尾部、四肢精修"],
  },
  {
    tag: "猫咪",
    title: "低应激猫洗护",
    price: "¥128",
    highlighted: false,
    items: ["独立猫咪护理时段", "低噪吹干与安抚", "浮毛梳理和状态反馈"],
  },
];

const processSteps = [
  {
    title: "预约确认",
    body: "沟通品种、体重、毛发和性格，安排合适护理师。",
  },
  {
    title: "到店检查",
    body: "确认皮肤、耳朵、指甲和打结情况，现场报价。",
  },
  {
    title: "洗护修剪",
    body: "按方案清洁、吹干、梳理、修剪，全程关注情绪。",
  },
  {
    title: "接宠反馈",
    body: "交付护理记录，并提醒后续梳毛、洗澡和复约周期。",
  },
];

const reviews = [
  {
    name: "糯米家长",
    body: "之前洗澡很紧张，这次护理师会慢慢安抚，接回家毛很蓬松，也没有一直躲起来。",
  },
  {
    name: "可乐家长",
    body: "剪得很清爽，脸型很自然。还提醒了耳朵有点红，让我们及时去检查。",
  },
  {
    name: "豆包家长",
    body: "报价清楚，不推销。每次都会发护理前后照片，周末预约也很准时。",
  },
];

const contactRows = [
  { label: "电话", value: "138-0000-0000" },
  { label: "时间", value: "周一至周日 10:00-20:00" },
  { label: "地址", value: "城市花园路 88 号 1 层 103 室" },
  { label: "提示", value: "初次到店请携带疫苗记录，幼宠建议完成免疫后再预约洗护。" },
];

const shell = "mx-auto w-[min(1160px,calc(100%_-_32px))]";
const card = "rounded-lg border border-[#dce8e7] bg-white shadow-[0_18px_48px_rgba(27,54,58,.14)]";
const button =
  "inline-flex min-h-11 items-center justify-center rounded-lg border border-transparent bg-[#ef765f] px-[18px] font-bold text-white shadow-[0_12px_24px_rgba(239,118,95,.28)] transition hover:-translate-y-0.5 hover:bg-[#c74f3f] hover:shadow-[0_16px_32px_rgba(239,118,95,.34)]";

function SectionHead({ title, body }: { title: string; body?: string }) {
  return (
    <div className="mb-10 max-w-[720px]">
      <h2 className="m-0 text-[clamp(28px,4vw,44px)] font-extrabold leading-tight text-[#1f2a2e]">
        {title}
      </h2>
      {body ? <p className="mt-3 text-[17px] leading-7 text-[#66767b]">{body}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-10 border-b border-[rgba(31,143,138,.16)] bg-[rgba(255,255,255,.88)] backdrop-blur-2xl">
        <nav
          className={`${shell} flex h-[70px] items-center justify-between gap-5`}
          aria-label="主导航"
        >
          <a className="flex items-center gap-2.5 whitespace-nowrap font-extrabold" href="#top" aria-label="爪爪清爽屋首页">
            <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-[#1f8f8a] text-[19px] text-white shadow-[0_8px_18px_rgba(31,143,138,.24)]">
              爪
            </span>
            <span>爪爪清爽屋</span>
          </a>
          <div className="hidden items-center gap-7 text-[15px] text-[#3d4b4f] md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <a className={button} href="#contact">
            预约洗护
          </a>
        </nav>
      </header>

      <main id="top">
        <section
          className="grid min-h-[86vh] items-center bg-cover bg-center px-0 pb-16 pt-28"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(12, 35, 37, .84) 0%, rgba(12, 35, 37, .62) 38%, rgba(12, 35, 37, .22) 68%, rgba(12, 35, 37, .06) 100%), url('/assets/hero-pet-grooming.png')",
          }}
          aria-label="宠物洗护店首屏"
        >
          <div className={shell}>
            <div className="max-w-[620px] text-white">
              <p className="mb-[18px] inline-flex items-center gap-2 font-bold text-[#d7fbf8]">
                预约制洗护 · 一宠一消毒 · 温柔安抚
              </p>
              <h1 className="m-0 text-[clamp(40px,6vw,76px)] font-extrabold leading-[1.04]">
                让毛孩子干净、松软、舒服回家
              </h1>
              <p className="mb-8 mt-[22px] max-w-[540px] text-lg leading-8 text-[rgba(255,255,255,.9)]">
                犬猫洗澡、造型修剪、皮毛护理和基础健康观察一站完成。透明报价，护理过程可同步给家长。
              </p>
              <div className="flex flex-wrap gap-3">
                <a className={button} href="#contact">
                  立即预约
                </a>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[rgba(31,143,138,.22)] bg-[rgba(255,255,255,.92)] px-[18px] font-bold text-[#12615e] transition hover:-translate-y-0.5"
                  href="#services"
                >
                  查看服务
                </a>
              </div>
            </div>
          </div>
        </section>

        <div
          className={`${shell} relative z-[2] -mt-[34px] grid overflow-hidden rounded-lg border border-[#dce8e7] bg-[#dce8e7] shadow-[0_18px_48px_rgba(27,54,58,.14)] md:grid-cols-3`}
          aria-label="门店数据"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6">
              <strong className="block text-[28px] leading-tight text-[#12615e]">{stat.value}</strong>
              <span className="text-sm text-[#66767b]">{stat.label}</span>
            </div>
          ))}
        </div>

        <section id="services" className="py-[86px]">
          <div className={shell}>
            <SectionHead
              title="从清洁到造型，都按宠物状态定制"
              body="根据体型、毛量、皮肤状态和性格安排洗护节奏，减少应激，避免过度护理。"
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className={`${card} p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(27,54,58,.18)]`}
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-[#d9e8dc] text-xl font-extrabold text-[#12615e]">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-extrabold">{service.title}</h3>
                  <p className="text-[#66767b]">{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#d9e8dc] py-[86px]">
          <div className={`${shell} grid items-center gap-8 lg:grid-cols-[1fr_390px]`}>
            <div>
              <SectionHead title="门店护理标准" />
              <div className="grid gap-4">
                {standards.map((item, index) => (
                  <div key={item.title} className="flex gap-4 rounded-lg bg-[rgba(255,255,255,.72)] p-5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#1f8f8a] font-extrabold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className={`mb-1 text-lg font-extrabold ${item.titleClassName ?? ""}`}>
                        {item.title}
                      </h3>
                      <p className="text-[#66767b]">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <aside className={`${card} p-7`} aria-label="预约信息">
              <h3 className="mb-2 text-2xl font-extrabold">今日可约时段</h3>
              <p className="mb-5 text-[#66767b]">工作日建议提前 1 天预约，周末建议提前 2-3 天预约。</p>
              <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {slots.map((slot) => (
                  <div key={slot} className="rounded-lg border border-[#dce8e7] bg-[#fbf8f2] px-4 py-3 font-bold text-[#12615e]">
                    {slot}
                  </div>
                ))}
              </div>
              <a className={button} href="tel:13800000000">
                电话咨询
              </a>
            </aside>
          </div>
        </section>

        <section id="prices" className="py-[86px]">
          <div className={shell}>
            <SectionHead
              title="常用套餐价格"
              body="以下为参考价，长毛、打结、特殊体型或情绪安抚需求会在护理前确认。"
            />
            <div className="grid gap-5 lg:grid-cols-3">
              {prices.map((plan) => (
                <article
                  key={plan.title}
                  className={`rounded-lg border p-7 ${
                    plan.highlighted
                      ? "border-[#ef765f] bg-[#12615e] text-white shadow-[0_18px_48px_rgba(27,54,58,.14)]"
                      : "border-[#dce8e7] bg-white"
                  }`}
                >
                  <span
                    className={`mb-4 inline-flex rounded-full px-3 py-1 text-sm font-extrabold ${
                      plan.highlighted ? "bg-white text-[#12615e]" : "bg-[#d9e8dc] text-[#12615e]"
                    }`}
                  >
                    {plan.tag}
                  </span>
                  <h3 className="mb-3 text-2xl font-extrabold">{plan.title}</h3>
                  <div className={`mb-5 text-[42px] font-extrabold leading-none ${plan.highlighted ? "text-white" : "text-[#12615e]"}`}>
                    {plan.price} <small className="text-base font-bold">起</small>
                  </div>
                  <ul className={`grid gap-2 ${plan.highlighted ? "text-[rgba(255,255,255,.86)]" : "text-[#66767b]"}`}>
                    {plan.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-[86px]">
          <div className={shell}>
            <SectionHead
              title="一次洗护怎么完成"
              body="流程清晰，家长放心；宠物也能在熟悉节奏里更平稳地完成护理。"
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-lg border-l-4 border-[#1f8f8a] bg-white p-6 shadow-[0_14px_34px_rgba(27,54,58,.1)]">
                  <span className="mb-4 block text-sm font-extrabold text-[#ef765f]">
                    STEP {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 text-xl font-extrabold">{step.title}</h3>
                  <p className="text-[#66767b]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-[86px]">
          <div className={shell}>
            <SectionHead title="家长评价" body="稳定的护理体验，来自每一次准时、细致和有耐心的服务。" />
            <div className="grid gap-5 lg:grid-cols-3">
              {reviews.map((review) => (
                <article key={review.name} className={`${card} p-6`}>
                  <div className="mb-3 text-[#ef765f]">★★★★★</div>
                  <h3 className="mb-2 text-xl font-extrabold">{review.name}</h3>
                  <p className="text-[#66767b]">{review.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#12615e] py-[86px]">
          <div className={`${shell} grid overflow-hidden rounded-lg bg-white shadow-[0_18px_48px_rgba(27,54,58,.14)] lg:grid-cols-[1fr_1.1fr]`}>
            <div className="p-7 sm:p-10">
              <h2 className="mb-6 text-[clamp(28px,4vw,44px)] font-extrabold leading-tight">预约到店</h2>
              <div className="grid gap-4">
                {contactRows.map((row) => (
                  <div key={row.label} className="grid gap-1 border-b border-[#dce8e7] pb-4 sm:grid-cols-[72px_1fr]">
                    <strong>{row.label}</strong>
                    <span className="text-[#66767b]">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="grid min-h-[360px] place-items-center bg-cover bg-center p-8 text-center text-white"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(18, 97, 94, .68), rgba(18, 97, 94, .68)), url('/assets/hero-pet-grooming.png')",
              }}
              aria-label="门店位置示意"
            >
              <div>
                <strong className="block text-[32px] leading-tight">爪爪清爽屋</strong>
                <span className="mt-2 block text-[rgba(255,255,255,.86)]">城市花园路店 · 临街停车方便</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1f2a2e] py-7 text-white">
        <div className={`${shell} flex flex-col gap-2 text-sm text-[rgba(255,255,255,.72)] sm:flex-row sm:items-center sm:justify-between`}>
          <span>© 2026 爪爪清爽屋 Pet Grooming</span>
          <span>宠物洗护 · 造型修剪 · 皮毛护理</span>
        </div>
      </footer>
    </>
  );
}
