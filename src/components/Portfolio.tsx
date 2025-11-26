import Image from "next/image";

type AppItem = {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  iosUrl: string;
  androidUrl: string;
  privacyPolicyUrl?: string;
};

const apps: AppItem[] = [
  {
    id: "motor-fuel-reminder",
    name: "MotoCare",
    tagline: "라이딩을 더 안전하고 편리하게",
    icon: "/globe.svg",
    iosUrl: "",
    androidUrl: "",
    privacyPolicyUrl: "https://elfin-asterisk-500.notion.site/MotoCare-2580c5caa00380c7b356e5e1c328007d",
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
          <Card key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
}

function Card({ app }: { app: AppItem }) {
  const { name, tagline, icon, iosUrl, androidUrl, privacyPolicyUrl } = app;
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-white/10 grid place-items-center border border-white/10">
          <Image src={icon} alt="app icon" width={24} height={24} />
        </div>
        <div>
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-white/70 text-sm">{tagline}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <a
          href={iosUrl || androidUrl || "#"}
          className="inline-block px-3 py-2 text-sm rounded-md border border-white/15 text-white/90 hover:bg-white/10 transition"
        >
          다운로드
        </a>
        {privacyPolicyUrl && (
          <a
            href={privacyPolicyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-2 text-sm rounded-md border border-white/15 text-white/70 hover:bg-white/10 hover:text-white/90 transition"
          >
            개인정보 처리방침
          </a>
        )}
      </div>
    </div>
  );
}


