import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MotoCare 개인정보처리방침 | molldo",
  description: "MotoCare 앱의 개인정보처리방침입니다.",
};

export default function MotoCarePrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <article className="prose prose-invert prose-sm sm:prose-base max-w-none">
        <h1>MotoCare 개인정보처리방침</h1>
        <p className="text-white/70">
          <strong>시행일자: 2025년 11월 24일</strong>
        </p>
        <p>
          MotoCare(이하 &quot;본 앱&quot;)는 사용자의 개인정보를 중요하게
          생각하며, 개인정보 보호법 및 관련 법령을 준수합니다. 본
          개인정보처리방침은 본 앱이 수집, 이용, 보관, 공유하는 개인정보에 관한
          내용을 설명합니다.
        </p>

        <hr />

        <h2>1. 수집하는 개인정보 항목 및 수집 방법</h2>

        <h3>1.1 필수 수집 정보</h3>
        <p>
          <strong>본 앱은 기본적으로 개인정보를 수집하지 않습니다.</strong> 모든
          데이터는 사용자의 기기에 로컬로 저장되며, 외부 서버로 전송되지
          않습니다.
        </p>
        <p>
          사용자가 입력하는 다음 정보는 <strong>기기 내부에만 저장</strong>
          됩니다:
        </p>
        <ul>
          <li>
            오토바이 정보 (별명, 브랜드, 모델, 연식, 배기량, VIN, 번호판, 구입일,
            구입 주행거리)
          </li>
          <li>주유 기록 (날짜, 주행거리, 주유량, 금액, 유종, 메모)</li>
          <li>정비 기록 (정비 항목, 날짜, 주행거리, 메모)</li>
          <li>정비 주기 설정 정보</li>
          <li>
            앱 설정 정보 (단위 시스템, 뷰 모드, 튜토리얼 표시 여부 등)
          </li>
        </ul>

        <h3>1.2 선택적 수집 정보</h3>

        <h4>1.2.1 구글 드라이브 백업/복원 서비스 (선택)</h4>
        <p>
          사용자가 구글 드라이브 백업 기능을 사용할 경우, 다음 정보가
          수집됩니다:
        </p>
        <ul>
          <li>
            <strong>구글 계정 정보</strong>: 이메일 주소 (인증 및 백업 파일 관리
            목적)
          </li>
          <li>
            <strong>백업 데이터</strong>: 오토바이 정보, 주유 기록, 정비 기록, 앱
            설정 정보 (구글 드라이브 AppDataFolder에 저장)
          </li>
        </ul>
        <p>
          <strong>구글 드라이브 백업 데이터 처리 방식</strong>:
        </p>
        <ul>
          <li>사용자가 구글 계정 연동 시에만 백업 수행</li>
          <li>구글 드라이브 AppDataFolder에 gzip 압축 형태로 저장</li>
          <li>사용자가 직접 백업/복원 실행 시에만 업로드/다운로드</li>
          <li>
            구글 계정 연동 해제 시 로컬 동기화 데이터 삭제 (구글 드라이브 백업
            파일은 사용자가 직접 삭제 필요)
          </li>
        </ul>

        <h4>1.2.2 광고 서비스 (선택)</h4>
        <p>
          앱 내 광고 표시를 위해 <strong>Google Mobile Ads SDK</strong>를
          사용합니다:
        </p>
        <ul>
          <li>
            <strong>광고 식별자</strong>: Google 광고 ID (GAID - Android), 광고
            식별자 (IDFA - iOS)
          </li>
          <li>
            <strong>앱 추적 투명성(iOS)</strong>: iOS 14.5 이상에서 사용자 동의
            후에만 추적
          </li>
          <li>
            <strong>광고 제거 구매</strong>: 인앱 구매로 광고 제거 가능 (구매
            이력은 Apple/Google 스토어에서 관리)
          </li>
        </ul>
        <p>
          <strong>광고 데이터 처리 방식</strong>:
        </p>
        <ul>
          <li>광고 제공 및 타겟팅 목적으로만 사용 (Google AdMob 정책 준수)</li>
          <li>앱 자체는 광고 데이터를 저장하거나 분석하지 않음</li>
          <li>
            광고 제거 구매 시 광고 표시 중단 (구매 정보는 로컬 저장소에만 저장)
          </li>
        </ul>

        <h4>1.2.3 푸시 알림 (선택)</h4>
        <p>사용자가 정비 알림을 활성화할 경우:</p>
        <ul>
          <li>
            <strong>알림 권한</strong>: 기기의 알림 권한 (정비 주기 도달 시 알림
            전송)
          </li>
          <li>
            <strong>알림 데이터</strong>: 로컬에서만 스케줄링되며, 외부 서버로
            전송되지 않음
          </li>
        </ul>

        <hr />

        <h2>2. 개인정보의 수집 및 이용 목적</h2>
        <p>본 앱은 다음 목적으로 개인정보를 수집 및 이용합니다:</p>

        <h3>2.1 서비스 제공</h3>
        <ul>
          <li>
            오토바이 정비 추적 기능 제공 (주유 기록, 정비 기록, 통계 보고서)
          </li>
          <li>사용자 설정 유지 (단위 시스템, 뷰 모드 등)</li>
          <li>정비 주기 알림 발송</li>
        </ul>

        <h3>2.2 구글 드라이브 백업/복원</h3>
        <ul>
          <li>사용자 데이터 백업 및 복원 (기기 변경 시 데이터 이전)</li>
          <li>구글 계정 인증 및 백업 파일 관리</li>
        </ul>

        <h3>2.3 광고 서비스 제공</h3>
        <ul>
          <li>무료 서비스 유지를 위한 광고 표시</li>
          <li>광고 제거 인앱 구매 처리</li>
        </ul>

        <hr />

        <h2>3. 개인정보의 보유 및 이용 기간</h2>

        <h3>3.1 로컬 저장 데이터</h3>
        <ul>
          <li>
            <strong>보유 기간</strong>: 앱 삭제 시까지 (사용자가 앱을 삭제하면
            모든 로컬 데이터가 영구 삭제됨)
          </li>
          <li>
            <strong>삭제 방법</strong>: 앱 삭제 또는 앱 내 &quot;바이크
            관리&quot; 메뉴에서 개별 데이터 삭제
          </li>
        </ul>

        <h3>3.2 구글 드라이브 백업 데이터</h3>
        <ul>
          <li>
            <strong>보유 기간</strong>: 사용자가 구글 드라이브에서 수동으로
            삭제할 때까지
          </li>
          <li>
            <strong>삭제 방법</strong>:
            <ul>
              <li>
                앱 내 &quot;구글 드라이브 백업&quot; 메뉴에서 &quot;연동
                해제&quot; (로컬 동기화 데이터만 삭제)
              </li>
              <li>
                구글 드라이브 웹/앱에서 MotoCare 백업 파일 직접 삭제
              </li>
            </ul>
          </li>
        </ul>

        <h3>3.3 광고 관련 데이터</h3>
        <ul>
          <li>
            <strong>보유 기간</strong>: Google AdMob 정책에 따름 (본 앱은 광고
            데이터를 직접 보유하지 않음)
          </li>
          <li>
            <strong>삭제 방법</strong>: 기기 설정에서 광고 추적 차단 또는 광고 ID
            재설정
          </li>
        </ul>

        <hr />

        <h2>4. 개인정보의 제3자 제공</h2>
        <p>본 앱은 다음의 경우에만 개인정보를 제3자에게 제공합니다:</p>

        <h3>4.1 구글 드라이브 백업 서비스</h3>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>항목</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>제공받는 자</td>
                <td>Google LLC</td>
              </tr>
              <tr>
                <td>제공 목적</td>
                <td>사용자 데이터 백업 및 복원</td>
              </tr>
              <tr>
                <td>제공 항목</td>
                <td>오토바이 정보, 주유 기록, 정비 기록, 앱 설정 정보</td>
              </tr>
              <tr>
                <td>보유 및 이용 기간</td>
                <td>사용자가 구글 드라이브에서 삭제할 때까지</td>
              </tr>
              <tr>
                <td>법적 근거</td>
                <td>사용자 동의 (구글 계정 연동 시)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>4.2 광고 서비스</h3>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>항목</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>제공받는 자</td>
                <td>Google AdMob (Google LLC)</td>
              </tr>
              <tr>
                <td>제공 목적</td>
                <td>맞춤형 광고 제공</td>
              </tr>
              <tr>
                <td>제공 항목</td>
                <td>
                  광고 식별자 (GAID/IDFA), 앱 사용 패턴 (Google AdMob SDK가 자동
                  수집)
                </td>
              </tr>
              <tr>
                <td>보유 및 이용 기간</td>
                <td>Google AdMob 정책에 따름</td>
              </tr>
              <tr>
                <td>법적 근거</td>
                <td>
                  사용자 동의 (iOS: ATT 프롬프트, Android: 앱 설치 시 동의)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>4.3 인앱 구매 처리</h3>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>항목</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>제공받는 자</td>
                <td>Apple Inc. (iOS), Google LLC (Android)</td>
              </tr>
              <tr>
                <td>제공 목적</td>
                <td>광고 제거 인앱 구매 처리</td>
              </tr>
              <tr>
                <td>제공 항목</td>
                <td>구매 이력 (Apple/Google 스토어에서 관리)</td>
              </tr>
              <tr>
                <td>보유 및 이용 기간</td>
                <td>Apple/Google 정책에 따름</td>
              </tr>
              <tr>
                <td>법적 근거</td>
                <td>사용자 동의 (구매 시)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>5. 개인정보의 파기 절차 및 방법</h2>

        <h3>5.1 파기 절차</h3>
        <ul>
          <li>
            <strong>로컬 데이터</strong>: 앱 삭제 시 자동 파기
          </li>
          <li>
            <strong>구글 드라이브 백업</strong>: 사용자가 구글 드라이브에서 수동
            삭제 (앱은 백업 파일 자동 삭제 기능 미제공)
          </li>
        </ul>

        <h3>5.2 파기 방법</h3>
        <ul>
          <li>
            <strong>전자적 파일</strong>: 파일 삭제 및 복구 불가능하게 처리
          </li>
          <li>
            <strong>인쇄물</strong>: 해당 없음 (본 앱은 인쇄물을 생성하거나
            보관하지 않음)
          </li>
        </ul>

        <hr />

        <h2>6. 이용자 및 법정대리인의 권리와 행사 방법</h2>
        <p>사용자는 다음 권리를 행사할 수 있습니다:</p>

        <h3>6.1 개인정보 열람 및 수정</h3>
        <ul>
          <li>
            <strong>로컬 데이터</strong>: 앱 내에서 직접 열람 및 수정 가능
          </li>
          <li>
            <strong>구글 드라이브 백업</strong>: 구글 드라이브에서 백업 파일
            다운로드 및 열람 가능
          </li>
        </ul>

        <h3>6.2 개인정보 삭제</h3>
        <ul>
          <li>
            <strong>로컬 데이터</strong>: 앱 내 &quot;바이크 관리&quot; 메뉴에서
            개별 데이터 삭제 또는 앱 삭제
          </li>
          <li>
            <strong>구글 드라이브 백업</strong>: 구글 드라이브에서 백업 파일 직접
            삭제
          </li>
        </ul>

        <h3>6.3 개인정보 처리 정지</h3>
        <ul>
          <li>
            <strong>구글 드라이브 백업</strong>: 앱 내 &quot;구글 드라이브
            백업&quot; 메뉴에서 &quot;연동 해제&quot;
          </li>
          <li>
            <strong>광고</strong>: 기기 설정에서 광고 추적 차단 또는 광고 제거
            구매
          </li>
        </ul>

        <h3>6.4 동의 철회</h3>
        <ul>
          <li>
            <strong>구글 드라이브</strong>: 앱 내 &quot;연동 해제&quot; 또는 구글
            계정 설정에서 앱 권한 해제
          </li>
          <li>
            <strong>광고</strong>: 기기 설정에서 광고 추적 차단
          </li>
          <li>
            <strong>푸시 알림</strong>: 기기 설정에서 알림 권한 해제
          </li>
        </ul>

        <hr />

        <h2>7. 개인정보의 안전성 확보 조치</h2>
        <p>본 앱은 다음과 같은 기술적·관리적 조치를 취하고 있습니다:</p>

        <h3>7.1 기술적 조치</h3>
        <ul>
          <li>
            <strong>로컬 저장</strong>: 모든 데이터는 기기 내부의 암호화된
            저장소(Hive)에 저장
          </li>
          <li>
            <strong>구글 드라이브 백업</strong>: gzip 압축 및 HTTPS 암호화 전송
          </li>
          <li>
            <strong>최소 권한 원칙</strong>: 앱이 필요한 최소한의 권한만 요청
            (알림, 구글 드라이브 AppDataFolder)
          </li>
        </ul>

        <h3>7.2 관리적 조치</h3>
        <ul>
          <li>
            <strong>개인정보 접근 제한</strong>: 본 앱 개발자는 사용자 데이터에
            접근할 수 없음 (로컬 저장 및 구글 드라이브 AppDataFolder 사용)
          </li>
          <li>
            <strong>개인정보처리방침 공개</strong>: 앱 내 &quot;설정&quot;
            메뉴에서 언제든지 열람 가능
          </li>
        </ul>

        <hr />

        <h2>8. 개인정보 자동 수집 장치의 설치·운영 및 거부</h2>

        <h3>8.1 광고 식별자 수집</h3>
        <ul>
          <li>
            <strong>수집 방식</strong>: Google AdMob SDK가 자동 수집
          </li>
          <li>
            <strong>수집 목적</strong>: 맞춤형 광고 제공
          </li>
          <li>
            <strong>거부 방법</strong>:
            <ul>
              <li>
                <strong>iOS</strong>: 설정 → 개인정보 보호 → 추적 → MotoCare 추적
                차단
              </li>
              <li>
                <strong>Android</strong>: 설정 → Google → 광고 → 광고 ID 재설정
                또는 맞춤 광고 선택 해제
              </li>
              <li>
                <strong>앱 내</strong>: 광고 제거 인앱 구매
              </li>
            </ul>
          </li>
        </ul>

        <h3>8.2 쿠키 사용</h3>
        <p>본 앱은 쿠키를 사용하지 않습니다.</p>

        <hr />

        <h2>9. 개인정보 보호책임자</h2>
        <p>
          본 앱의 개인정보 처리에 관한 문의는 아래 연락처로 문의해 주시기
          바랍니다:
        </p>
        <ul>
          <li>
            <strong>이메일</strong>:{" "}
            <a href="mailto:molldo2025@gmail.com">molldo2025@gmail.com</a>
          </li>
        </ul>

        <hr />

        <h2>10. 개인정보처리방침의 변경</h2>
        <p>
          본 개인정보처리방침은 법령 및 정책 변경에 따라 수정될 수 있습니다.
          개인정보처리방침이 변경될 경우, 앱 업데이트를 통해 공지하며, 중요한
          변경사항은 앱 내 팝업으로 안내합니다.
        </p>
        <p>
          <strong>변경 이력</strong>:
        </p>
        <ul>
          <li>2025년 11월 24일: 최초 작성</li>
        </ul>

        <hr />

        <h2>11. 관련 법령 및 참고 링크</h2>
        <ul>
          <li>
            <strong>개인정보 보호법</strong>:{" "}
            <a
              href="https://www.law.go.kr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.law.go.kr/
            </a>
          </li>
          <li>
            <strong>Google AdMob 개인정보처리방침</strong>:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
          </li>
          <li>
            <strong>Google Drive API 약관</strong>:{" "}
            <a
              href="https://developers.google.com/drive/api/guides/api-specific-auth"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developers.google.com/drive/api/guides/api-specific-auth
            </a>
          </li>
          <li>
            <strong>Apple 개인정보 보호</strong>:{" "}
            <a
              href="https://www.apple.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.apple.com/privacy/
            </a>
          </li>
          <li>
            <strong>Google Play 개인정보 보호</strong>:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
          </li>
        </ul>

        <hr />

        <p className="text-white/70 text-center">
          <strong>
            본 개인정보처리방침은 사용자의 권리를 보호하기 위해 작성되었으며, 본
            앱은 사용자의 개인정보를 최대한 보호하기 위해 노력하고 있습니다.
          </strong>
        </p>
      </article>
    </main>
  );
}
