import { NextResponse, type NextRequest } from "next/server";
import { jwt } from './utils';

  export async function middleware(req: NextRequest) {
    const previousPage = req.nextUrl.pathname;
   
    if (previousPage.startsWith("/checkout")) {
      const token = req.cookies.get("token")?.value;

      if (!token) {
        return NextResponse.redirect(
          new URL(`/auth/login?p=${previousPage}`, req.url)
        );
      }
    
  try {
    await jwt.isValidToken(
      token
      
      );
      return NextResponse.next();
  } catch (error) {
    
    return NextResponse.redirect(`/auth/login?p=${previousPage}`);
  }
}
  }
export const config = {
  matcher: ["/checkout/:path*"],
};