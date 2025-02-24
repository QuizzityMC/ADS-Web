import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const adminLinks = [
  {
    title: "Ticket Booking",
    description: "Manage ticket bookings and sales",
    url: "https://tickets.adsfilms.org/",
    category: "Tickets",
  },
  {
    title: "Cashier",
    description: "Process payments and transactions",
    url: "https://cashier.adsfilms.org/",
    category: "Finance",
  },
  {
    title: "Ticket Data Checker",
    description: "Verify and manage ticket data",
    url: "https://tickets.adsfilms.org/admin/login",
    category: "Tickets",
  },
  {
    title: "Cash Register Totals",
    description: "View financial summaries and reports",
    url: "https://cashier.adsfilms.org/totals",
    category: "Finance",
  },
  {
    title: "Streaming Service",
    description: "Manage streaming platform",
    url: "https://streaming.adsfilms.org",
    category: "Content",
  },
  {
    title: "Webmail",
    description: "Access company email",
    url: "https://mail.zoho.eu/",
    category: "Communication",
  },
  {
    title: "Google Drive",
    description: "Access shared documents and files",
    url: "https://drive.google.com/drive/folders/1MulvDXi3PWEbkJEI-ukSrMT8fIKQOVf2",
    category: "Storage",
  },
]

export default function AdminPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-white text-xl font-semibold flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tPOAhOTD8gGTvpYnVhvd89XFwj1BIV.png"
                alt="ADS Films Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              ADS Films Admin
            </Link>
            <div className="flex gap-6">
              <Link href="/" className="text-white hover:text-gray-300">
                Back to Main Site
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Admin Content */}
      <div className="flex-1 bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Admin Pages</h1>

          {/* Categories */}
          {["Tickets", "Finance", "Content", "Communication", "Storage"].map((category) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {adminLinks
                  .filter((link) => link.category === category)
                  .map((link) => (
                    <Card key={link.title}>
                      <CardHeader>
                        <CardTitle>
                          <Link href={link.url} target="_blank" className="hover:text-primary transition-colors">
                            {link.title}
                          </Link>
                        </CardTitle>
                        <CardDescription>{link.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>© ADS Films 2020-2025</p>
      </footer>
    </main>
  )
}

