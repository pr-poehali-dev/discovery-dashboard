import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { FeaturedDestinations } from "@/components/FeaturedDestinations"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { PopularPackages } from "@/components/PopularPackages"
import { Newsletter } from "@/components/Newsletter"
import { Footer } from "@/components/Footer"
import { QuizProvider } from "@/components/QuizContext"
import { Quiz } from "@/components/Quiz"

export default function Index() {
  return (
    <QuizProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <FeaturedDestinations />
        <WhyChooseUs />
        <PopularPackages />
        <Newsletter />
        <Footer />
        <Quiz />
      </main>
    </QuizProvider>
  )
}