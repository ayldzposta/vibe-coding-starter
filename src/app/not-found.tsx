import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center space-y-4 px-4 text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <h2 className="text-2xl font-semibold">Sayfa Bulunamadı</h2>
            <p className="max-w-md text-muted-foreground">
                Aradığınız sayfa mevcut değil veya taşınmış olabilir.
            </p>
            <Button asChild>
                <Link href="/">Ana Sayfaya Dön</Link>
            </Button>
        </div>
    )
}
