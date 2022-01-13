import { Contact, FeaturedProducts, Hero, Services } from '../components'

interface HomePageProps {}

function HomePage({}: HomePageProps) {
    return (
        <main>
            <Hero />
            <FeaturedProducts />
            <Services />
            <Contact />
        </main>
    )
}

export default HomePage
