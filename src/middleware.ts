import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Basit bir bellek içi rate limiter (Sadece geliştirme amaçlı)
// Üretim ortamında Upstash Redis gibi dış bir servisin kullanılması önerilir.
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 dakika
const MAX_REQUESTS = 20; // Dakikada maks 20 istek

export function middleware(request: NextRequest) {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : (request as any).ip ?? "anonymous";
    const now = Date.now();

    // Request Logging
    console.log(`[${new Date().toISOString()}] ${request.method} ${request.nextUrl.pathname} - ${ip}`);

    // Sadece API rotaları ve auth rotaları için sınırlama uygula
    if (request.nextUrl.pathname.startsWith("/api/auth")) {
        const rateLimit = rateLimitMap.get(ip) ?? { count: 0, lastReset: now };

        if (now - rateLimit.lastReset > RATE_LIMIT_WINDOW) {
            rateLimit.count = 0;
            rateLimit.lastReset = now;
        }

        rateLimit.count++;
        rateLimitMap.set(ip, rateLimit);

        if (rateLimit.count > MAX_REQUESTS) {
            return new NextResponse("Çok fazla istek. Lütfen biraz bekleyin.", {
                status: 429,
                headers: {
                    "Retry-After": "60",
                },
            });
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/api/:path*"],
};
