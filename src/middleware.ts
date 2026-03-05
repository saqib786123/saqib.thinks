import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    try {
        const response = await fetch(`${request.nextUrl.origin}/api/auth/get-session`, {
            headers: {
                cookie: request.headers.get("cookie") || "",
            },
            cache: "no-store",
        });

        const session = await response.json().catch(() => null);

        if (!session) {
            return NextResponse.redirect(new URL("/admin-login", request.url));
        }
        return NextResponse.next();
    } catch (err) {
        return NextResponse.redirect(new URL("/admin-login", request.url));
    }
}

export const config = {
    matcher: ["/admin", "/admin/:path*"],
};
