import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col px-10 md:flex-row md:justify-between   gap-4 md:px-0">
          <div className="space-y-4 ">
            <h3 className="text-lg font-bold">Ethereum Bolivia</h3>
            <p className="text-sm text-muted-foreground">
              Comunidad de Ethereum en Bolivia desde 2020.
            </p>
            <a href="https://github.com/fabiola29298" className="text-sm text-muted-foreground underline ">
              Desarrollado por Fabi Async
            </a>
          </div>

          <div className="space-y-4 md:w-1/4 ">
            <h3 className="text-sm font-bold">Redes Sociales</h3>
            <nav aria-label="Social Networks Navigation">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://www.facebook.com/EthereumBo" className="text-muted-foreground hover:text-foreground">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/ethereumbo/" className="text-muted-foreground hover:text-foreground">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/EthereumBo" className="text-muted-foreground hover:text-foreground">
                    X/Twitter
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/ethereumbo/" className="text-muted-foreground hover:text-foreground">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Ethereum Bolivia. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/company/ethereumbo/"
              className="text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link
              href="https://x.com/EthereumBo"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link> 
          </div>
        </div>
      </div>
    </footer>
  )
}
