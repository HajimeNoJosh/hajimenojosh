import Contact from './Contact.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';

export default function Home() {

  return (
    <section>
      <section>
        <Contact></Contact>
      </section>
      <section>
        <About></About>
      </section>
      <section>
        <Projects></Projects>
      </section>
    </section>
  );
}