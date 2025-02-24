import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {}
      <div className="bg-orange-400 py-2 px-4 text-center">
        <div className="flex items-center justify-center gap-4">
          <span>TBITN Premiere is this March! Tickets for sale!</span>
          <Button variant="secondary" size="sm" asChild>
            <Link href="http://tickets.adsfilms.org/" target="_blank">
              Book Here
            </Link>
          </Button>
        </div>
      </div>

      {}
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
              ADS Films
            </Link>
            <div className="flex gap-6">
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link
                href="https://quizzitymc.github.io/ADSFilms-Site/"
                target="_blank"
                className="text-white hover:text-gray-300"
              >
                Streaming Service
              </Link>
              <Link href="/enrol" className="text-white hover:text-gray-300">
                Enrol
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {}
      <div className="relative min-h-screen">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-ZzgiBq5MbHmnUcZOsLaqSYEao3P1Sz.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-6xl md:text-8xl font-bold mb-8">ADS Films</h1>
          <div className="animate-bounce mt-12">
            <div className="w-4 h-4 border-r-2 border-b-2 border-white rotate-45" />
          </div>
        </div>
      </div>

      {}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">🎉 5 YEARS OF ADS 🎉</h2>
            <p className="text-xl mb-8">Celebrating 27th of March</p>
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">"The Body in the Night" premiere in March</h3>
              <p className="text-gray-600 mb-8">Select "Book Now" Above!</p>

              {}
              <div className="mb-12">
                <iframe
                  src="https://drive.google.com/file/d/1GxnGuQDk6CN8BXaMKrd1aUDrKifCD-R_/preview"
                  width="800"
                  height="450"
                  className="mx-auto rounded-lg shadow-lg mb-8"
                  allow="autoplay"
                ></iframe>
              </div>

              {}
              <div className="mb-12">
                <iframe
                  width="800"
                  height="450"
                  src="https://www.youtube.com/embed/ZRBczG_25Hs"
                  className="mx-auto rounded-lg shadow-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tBitN%20Poster%20Chase%20A%20(1)-OaBvAp3ypV4plFLCn9yoH201qSz9tG.png"
              alt="The Body in the Night - Premiere March 21, 2025"
              width={1920}
              height={1080}
              className="w-full rounded-lg shadow-2xl"
              priority
            />
            <div className="mt-8 text-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="http://tickets.adsfilms.xyz/" target="_blank">
                  Book Tickets Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <h2 className="text-4xl font-bold">Our Films</h2>
            <Button variant="default" size="lg" asChild>
              <Link
                href="https://quizzitymc.github.io/ADSFilms-Site/"
                target="_blank"
                className="flex items-center gap-2"
              >
                Watch these films and see more at our streaming service
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4bPGqZz5Lw1TEo4SfjaYyG3PHqT5Gu.png"
                alt="The Body in the Night"
                width={800}
                height={450}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">The Body in the Night</h3>
                <p className="text-gray-600">2025</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EjppNGwhyn4hZetcTnEttYA3Z46F8J.png"
                alt="Goats in the Outback"
                width={800}
                height={450}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Goats in the Outback</h3>
                <p className="text-gray-600">2024</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X6OXGkeD00WEoaq86QOhTBElBoIojR.png"
                alt="Detectives at a Dead End"
                width={800}
                height={450}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Detectives at a Dead End</h3>
                <p className="text-gray-600">2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>© ADS Films 2020-2025</p>
        <Link href="/admin" className="text-xs text-gray-400 hover:text-gray-300 mt-1 inline-block">
          Admin Pages
        </Link>
      </footer>
    </main>
  )
}

