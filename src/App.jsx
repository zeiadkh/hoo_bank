import styles from './style'
import './index.css'
import { Navbar,Hero, Business, Billing, Card, Testmonials, Clients, Service, Footer } from './components'

const App = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} p-4 overflow-hidden`}>
      <Navbar />
      <Hero />
      <Business />
      <Billing />
      <Card />
      <Testmonials />
      <Clients />
      <Service />
      <Footer />
    </div>

  
  )
}

export default App