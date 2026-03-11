# Everyday Studio 메인 페이지

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 프로젝트 개요
**Everyday Studio** 팀의 공식 메인 페이지입니다. Astro 프레임워크를 기반으로 매우 빠른 정적 웹 사이트 생성 및 동적 컴포넌트 렌더링을 제공하며, Docker를 통해 일관된 개발/배포 환경을 구축합니다.

## 핵심 기술 스택
- **프론트엔드**: Astro, React (필요 시 연동), Tailwind CSS
- **인프라**: Docker, Docker Compose
- **패키지 매니저**: npm (혹은 pnpm/yarn)

## 실행 방법 (Getting Started)

### 사전 필수 조건
- Docker 및 Docker Compose 가 설치되어 있어야 합니다. (로컬 환경의 Node.js 설치 유무와 무관하게 Docker로 구동 가능하도록 설정되어 있습니다.)

### 로컬 개발 환경 띄우기
```bash
# 1. 저장소 클론
git clone <repository-url>
cd everyday-studio

# 2. Docker Compose로 애플리케이션 실행
docker-compose up -d
```
> 애플리케이션이 실행되면 [http://localhost:4321](http://localhost:4321) 에 접속하여 확인할 수 있습니다.

### 로컬 패키지 설치 (옵션)
로컬 IDE(IDE 인텔리센스, 자동완성 등) 지원을 위해 모듈을 설치할 경우:
```bash
npm install
```

## 개발 및 기여 가이드
- 메인 코드는 `src/` 디렉토리 내에 위치합니다.
- 페이지 컴포넌트는 `src/pages/` 디렉토리에 생성합니다.
- 공통 컴포넌트는 `src/components/`, 레이아웃은 `src/layouts/` 디폴트 구조를 사용합니다.

## 라이선스
이 프로젝트의 저작권 및 라이선스 관련 내용은 프로젝트 루트의 `LICENSE` 파일을 참고해 주세요.
