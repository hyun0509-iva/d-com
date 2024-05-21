// [...nextauth] -> catch-all segement

// GET /api/auth/a
// GET /api/auth/b
// GET /api/auth/a/b 
// 이 부분을 GET /api/auth/[...nextauth]로 다 접근됨
// 이걸 이용해 백엔드 서버 기능을 구현 가능 (풀스택)

export {GET, POST} from '@/auth';