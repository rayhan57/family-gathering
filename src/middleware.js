import { NextResponse } from "next/server";
import { getSession } from "./utils/session";

export const middleware = (request) => {
  const session = getSession(request, "user");
  const isAuth = session !== undefined && session !== null;

  const { pathname } = request.nextUrl;

  if (isAuth && pathname === "/login") {
    const homeUrl = new URL("/", request.url);
    return NextResponse.redirect(homeUrl);
  }

  if (!isAuth && pathname !== "/login") {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/login", "/players/:path*", "/lottery/:path*"],
};
