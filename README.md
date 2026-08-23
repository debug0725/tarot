# Midnight Diary Tarot — Vercel 배포본

비밀코드를 입력한 방문자만 입장할 수 있는 Next.js 타로 사이트입니다.

## GitHub → Vercel 배포

1. 이 폴더의 파일을 GitHub 저장소에 올립니다.
2. Vercel에서 **Add New → Project**를 눌러 해당 저장소를 연결합니다.
3. Framework Preset은 **Next.js**로 둡니다.
4. Vercel의 **Settings → Environment Variables**에 아래 두 항목을 등록합니다.
   - `SITE_ACCESS_CODE`: 방문자에게 알려줄 입장 코드
   - `AUTH_SECRET`: 외부에 공유하지 않을 길고 무작위인 문자열
5. Production, Preview, Development에 모두 적용하고 배포합니다.

`AUTH_SECRET`은 비밀코드와 다른 값으로 만들고, 최소 32자 이상의 무작위 문자열을 권장합니다.

## 추천 친구 수정

`app/friends-data.ts`의 `friends` 배열을 수정합니다. 각 항목의 주요 필드는 다음과 같습니다.

- `image`: `/friends/파일명.jpg` 형식의 사진 경로
- `name`: 이름
- `song`: 노래
- `message`: 멘트

사진 파일은 `public/friends` 폴더에 넣으세요. 현재 예시 3명을 같은 형식으로 복사해 총 21명을 만들 수 있습니다.

## 로컬 실행

`.env.example`을 복사해 `.env.local`을 만들고 실제 값을 입력한 뒤 실행합니다.

```bash
npm install
npm run dev
```
