"use client";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center bg-grid overflow-hidden">
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <div className="text-white/95 font-semibold tracking-wide">molldo</div>
        <nav className="hidden sm:flex gap-6 text-sm text-white/75">
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <div className="relative z-0 w-full max-w-6xl mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-semibold text-white leading-tight">
            생활을 더 편리하게<br /> 취미를 더 즐겁게 
          </h1>
          <p className="mt-4 text-white/70">
            molldo는 라이프스타일에 딱 맞는 앱을 만드는 제작소입니다.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="#portfolio"
              className="px-5 py-3 rounded-md bg-[var(--color-accent-steel)] text-black font-medium hover:opacity-90 transition"
            >
              앱 보러가기
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-md border border-white/25 text-white font-medium hover:bg-white/10 transition"
            >
              문의하기
            </a>
          </div>
        </div>

        {/* 시각적 노이즈 제거: 부유 박스 비활성화 */}
      </div>
    </section>
  );
}




