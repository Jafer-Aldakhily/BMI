import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form'
import BMI from './BMI';
function App() {
  return (
    <div className="container">
    <Header />

    {/* <Form /> */}
    <BMI />
    </div>
  );
}

export default App;
