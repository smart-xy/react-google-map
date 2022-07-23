import React, {useState} from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Routes from './components/Routes'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100'>
        <NavBar />
        <Routes />
        <Footer />
    </div>
    </div>
    
  )
}

export default App