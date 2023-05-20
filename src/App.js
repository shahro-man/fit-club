import './App.css';
import Hero from "./component/hero/Hero";
import Programs from './component/programs/Programs'
import Reasons from "./component/reasons/Reasons";
import Plans from "./component/plans/Plans";
import Testimonials from "./component/testimonials/Testimonials";
import Join from './component/join/Join';
import Footer from './component/footer/Footer.jsx';


function App() {
  return (
    <div className="App">
        <Hero></Hero>
        <Programs></Programs>
        <Reasons></Reasons>
        <Plans></Plans>
        <Testimonials></Testimonials>
        <Join></Join>
        <Footer></Footer>
    </div>
  );
}

export default App;
