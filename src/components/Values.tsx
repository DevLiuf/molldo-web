export function Values() {
  const items = [
    { title: "단단하게", desc: "안정적 구조 & 성능" },
    { title: "빠르게", desc: "짧은 제작 사이클" },
    { title: "심플하게", desc: "사용하기 쉬운 UX" },
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">Our Value</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-white font-semibold">{it.title}</div>
            <div className="text-white/70 mt-2 text-sm">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

