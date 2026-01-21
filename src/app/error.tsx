'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center space-y-4 px-4 text-center">
            <h2 className="text-2xl font-bold text-destructive">Bir şeyler yanlış gitti!</h2>
            <p className="max-w-md text-muted-foreground">
                Beklenmedik bir hata oluştu. Lütfen sayfayı yenilemeyi deneyin.
            </p>
            <div className="flex gap-4">
                <Button onClick={() => reset()}>Tekrar Dene</Button>
                <Button variant="outline" asChild>
                    <a href="/">Ana Sayfa</a>
                </Button>
            </div>
        </div>
    )
}
