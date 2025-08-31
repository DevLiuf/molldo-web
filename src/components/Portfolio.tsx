import Image from "next/image";

const apps = [
  {
    id: "motor-fuel-reminder",
    name: "MotoCare",
    tagline: "라이딩을 더 안전하고 편리하게",
    icon: "/globe.svg",
    iosUrl: "",
    androidUrl: "",
  },
  {
    id: "random-game-penalty",
    name: "Random Punish Game",
    tagline: "모임에 긴장감 한 스푼",
    icon: "/window.svg",
    iosUrl: "",
    androidUrl: "",
  },
  {
    id: "sc-build-book",
    name: "StarCraft BuildBook",
    tagline: "전략은 준비된 자의 것",
    icon: "/file.svg",
    iosUrl: "",
    androidUrl: "",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">Our Apps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <Card key={app.id} {...app} />
        ))}
      </div>
    </section>
  );
}

function Card({ name, tagline, icon, iosUrl, androidUrl }: any) {
  return (
    <a
      href={iosUrl || androidUrl || "#"}
      className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition will-change-transform"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-white/10 grid place-items-center border border-white/10">
          <Image src={icon} alt="app icon" width={24} height={24} />
        </div>
        <div>
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-white/70 text-sm">{tagline}</p>
        </div>
      </div>
      <div className="mt-4">
        <span className="inline-block px-3 py-2 text-sm rounded-md border border-white/15 text-white/90 group-hover:bg-white/10">
          다운로드
        </span>
      </div>
    </a>
  );
}


