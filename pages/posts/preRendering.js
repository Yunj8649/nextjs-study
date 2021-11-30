export default function preRendering() {
    return (
        <div>
            기본적으로 Next.js는 모든 페이지를 미리 렌더링합니다. 
            즉, Next.js 는 클라이언트 측 JavaScript로 모든 작업을 수행하는 대신 각 페이지에 대해 미리 HTML을 생성 합니다. 
            사전 렌더링은 더 나은 성능과 SEO를 제공 할 수 있습니다 .
            Next.js에는 정적 생성 과 서버 측 렌더링의 두 가지 사전 렌더링 형식이 있습니다. 차이점은 페이지에 대한 HTML을 생성 할 때 입니다.
            정적 생성 은 빌드 시 HTML을 생성하는 사전 렌더링 방법입니다. 사전 렌더링된 HTML은각 요청에서 재사용 됩니다.
            서버 측 렌더링 은 각 요청 에 대해 HTML을 생성하는 사전 렌더링 방법입니다.
        </div>
    )
}
