import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col items-center justify-center space-y-8 text-center">
                    <Skeleton className="h-12 w-[300px] sm:w-[600px] sm:h-16" />
                    <Skeleton className="h-6 w-[250px] sm:w-[500px]" />

                    <div className="flex gap-4">
                        <Skeleton className="h-11 w-32" />
                        <Skeleton className="h-11 w-32" />
                    </div>
                </div>

                <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} className="h-[120px] w-full rounded-xl" />
                    ))}
                </div>
            </div>
        </main>
    )
}
