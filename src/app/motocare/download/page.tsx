import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MotoCare 다운로드 | molldo",
  description:
    "MotoCare 앱을 다운로드하세요. 오토바이 정비 관리의 시작, MotoCare.",
  openGraph: {
    title: "MotoCare 다운로드",
    description:
      "MotoCare 앱을 다운로드하세요. 오토바이 정비 관리의 시작, MotoCare.",
    type: "website",
    url: "https://molldo-web.vercel.app/motocare/download",
  },
};

export default function MotoCareDownloadPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-grid">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo / Title */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">MotoCare</h1>
          <p className="text-white/70 text-lg">
            오토바이 정비 관리의 시작
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4">
          {/* Google Play Store */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.molldo.motocare"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.609 1.814L13.792 12 3.61 22.186a1.046 1.046 0 01-.609-.939V2.753c0-.397.222-.745.609-.94zM14.852 13.06l2.39 2.39-10.95 6.29 8.56-8.68zM18.293 9.73l2.858 1.643a1.045 1.045 0 010 1.804l-2.858 1.643-2.746-2.546 2.746-2.544zM6.292 2.26l10.95 6.29-2.39 2.39-8.56-8.68z" />
            </svg>
            Google Play에서 다운로드
          </Link>

          {/* Apple App Store */}
          <Link
            href="https://apps.apple.com/kr/app/motocare/id6751438774"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store에서 다운로드
          </Link>
        </div>

      </div>
    </main>
  );
}
