# 🐱 Dancing Cat - 춤추는 고양이

귀여운 고양이가 춤을 추는 인터랙티브 웹 애니메이션 페이지입니다.

## 🌐 데모

**Live Demo**: [https://jihodoo.github.io/cat-dancing-page/](https://jihodoo.github.io/cat-dancing-page/)

## ✨ 주요 기능

- **CSS Keyframes 애니메이션**: 부드러운 춤 동작 구현
- **인터랙티브 제어**: 버튼 클릭으로 애니메이션 시작/정지
- **키보드 접근성**: Space/Enter 키로 제어 가능
- **반응형 디자인**: 모바일, 태블릿, 데스크탑 모두 대응
- **성능 최적화**: GPU 가속 및 효율적인 애니메이션

## 🎨 기술 스택

- **Frontend**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **Styling**: CSS3 (Keyframes Animation)
- **Image**: SVG (벡터 그래픽)
- **Deployment**: GitHub Pages

## 📦 설치 및 실행

### 1. 저장소 클론

```bash
git clone https://github.com/jihodoo/cat-dancing-page.git
cd cat-dancing-page
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173/` 접속

### 4. 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

## 🎮 사용 방법

1. **버튼 클릭**: "춤추기" 버튼을 클릭하여 애니메이션 시작
2. **키보드 제어**: `Space` 또는 `Enter` 키로 토글 가능
3. **멈추기**: 다시 버튼을 클릭하거나 키를 눌러 정지

## 📂 프로젝트 구조

```
cat-dancing-page/
├── src/
│   ├── components/
│   │   └── DancingCat.jsx        # 메인 댄싱 컴포넌트
│   ├── assets/
│   │   └── images/
│   │       └── cat.svg            # 고양이 SVG 이미지
│   ├── styles/
│   │   └── DancingCat.css         # 애니메이션 스타일
│   ├── hooks/                     # 커스텀 훅 폴더
│   ├── App.jsx                    # 메인 앱 컴포넌트
│   └── main.jsx                   # 앱 진입점
├── public/                        # 정적 파일
├── package.json                   # 의존성 관리
└── vite.config.js                 # Vite 설정
```

## 🎭 애니메이션 세부사항

### CSS Keyframes
- **Duration**: 2초 주기 무한 반복
- **Effects**:
  - `translateY`: 점프 동작 (-40px 최대 높이)
  - `rotate`: 좌우 회전 (-10° ~ 10°)
  - `scale`: 크기 변화 (1.0 ~ 1.15)
- **Performance**: GPU 가속 (`will-change`, `backface-visibility`)

### 반응형 브레이크포인트
- **Mobile** (< 480px): 180px 고양이, 간소화된 애니메이션
- **Tablet** (481px - 768px): 220px 고양이
- **Desktop** (> 769px): 300px 고양이, 풀 애니메이션

## ♿ 접근성

- **ARIA 속성**: `aria-live`, `aria-pressed`, `aria-label` 지원
- **키보드 네비게이션**: 전체 기능 키보드로 제어 가능
- **스크린 리더**: 상태 변화 실시간 안내

## 🚀 배포

GitHub Pages를 사용한 자동 배포:

```bash
# gh-pages 패키지 설치
npm install gh-pages --save-dev

# 배포 실행
npm run build
npx gh-pages -d dist
```

배포 후 `https://[username].github.io/cat-dancing-page/` 에서 확인 가능

## 📝 라이선스

MIT License

## 👤 작성자

GitHub: [@jihodoo](https://github.com/jihodoo)

## 🙏 감사

- React 팀
- Vite 개발팀
- 모든 오픈소스 기여자들

---

**즐거운 코딩 되세요!** 🎉
