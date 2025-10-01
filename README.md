# Who Are You?

<img width="114" height="48" alt="whoareyou" src="https://github.com/user-attachments/assets/54454f48-6eaa-422f-bd35-8e403945af60" />

**WAU**는 AI 필터를 이용하여 나만의 특별한 명함을 만들고, 인생네컷을 찍을 수 있는 서비스입니다.

실제 다양한 서비스 환경에서 운영되기보다 특정 환경(축전 및 대회 부스 운영 등)에서 시연을 목적으로 합니다.

## 🚀 Quick Start

```bash
# 저장소 클론
git clone https://github.com/themoment-team/who-are-you-client-v2.git

# 프로젝트 디렉토리로 이동
cd who-are-you-client-v2

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

개발 서버가 실행되면 [http://localhost:5173](http://localhost:5173)에서 확인할 수 있습니다.

## 🛠 Tech Stack

### Frontend
- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **Tailwind CSS v4** - 스타일링

### Form & Validation
- **React Hook Form** - 폼 상태 관리
- **Zod** - 스키마 기반 검증

### Development Tools
- **pnpm** - 패키지 매니저
- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅

## 💻 Development Guide

### 코드 스타일

프로젝트는 ESLint와 Prettier를 사용하여 일관된 코드 스타일을 유지합니다.

```bash
# 린트 검사
pnpm lint

# 린트 자동 수정
pnpm lint:fix

# 코드 포맷팅
pnpm format

# 포맷 검사
pnpm format:check
```
