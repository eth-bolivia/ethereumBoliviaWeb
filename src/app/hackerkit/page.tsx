import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react" 

export const metadata: Metadata = {
  title: "Privacy Policy | Enterprise AI Platform",
  description: "Our commitment to protecting your privacy and securing your data.",
}

export default function HackerKitPage() { 

  return ( 

      < >
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl">
            <div className="mb-8">
              <Button variant="ghost" size="sm" asChild className="mb-6">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
            </div>

            <h2> kit</h2>
          </div>
        </section>
      </>

        
  )
}
