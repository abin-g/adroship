import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || '';

//   if (hostname.startsWith('app.')) {
//     // Application routes
//     if (!url.pathname.startsWith('/application')) {
//       url.pathname = `/application${url.pathname}`;
//       return NextResponse.rewrite(url);
//     }
//   } else {
//     // Landing routes
//     if (!url.pathname.startsWith('/landing')) {
//       url.pathname = `/landing${url.pathname}`;
//       return NextResponse.rewrite(url);
//     }
//   }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
