import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

function App() {

  return (
    <>
      <Header />
      <List
        title="Minhas listas"
        subtitleSecondList='Batata'
      />
      <List title="Agua" />
      <Footer />
    </>
  )

}

export default App
