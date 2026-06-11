import Nav from './components/Nav';
import Hero from './components/Hero';
import Story from './components/Story';
import Curriculum from './components/Curriculum';
import AISuite from './components/AISuite';
import Comparison from './components/Comparison';
import Deliverables from './components/Deliverables';
import Mentor from './components/Mentor';
import Closing from './components/Closing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default function App() {
  return (
    <div
      className="min-h-screen bg-paper tracking-[-0.02em] overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Nav />
      <Hero />
      <Story />
      <Curriculum />
      <AISuite />
      <Comparison />
      <Deliverables />
      <Mentor />
      <Closing />
      <FAQ />
      <Contact />
    </div>
  );
}
