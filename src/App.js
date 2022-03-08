import logo from './logo.svg';
import './App.css';
import About from './components/About.js';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Contact from './components/Contact.js';

function App() {
  const [currentCategory, setCurrentCategory] = useState('About');

  const renderCategory = () => {
    if (currentCategory === 'About') {
      return <About />
    }
    if (currentCategory === 'Portfolio') {
      return <Portfolio />
    }
    if(currentCategory === 'Contact') {
      return <Contact />
    }
    if (currentCategory === 'Resume') {
      return <Resume />
    }
  };

  const handleCategoryChange = (category) => setCurrentCategory(category);

  return (
    <div className="App">
      <Header />
        <About />
      
    </div>
  );
}

export default App;
