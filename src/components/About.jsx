import headshot from '../assets/HeadShot.jpg';
import '../App.css';

function About() {
  return (
    <section>
        <link rel="stylesheet" href="styles.css" />
        <div class="center">
            <img src={headshot} alt="Headshot" style={{ borderRadius: '50%', width: '300px', height: '300px', border: '5px solid #ccc' }} />
            <h2>About Me</h2>
        </div>
            <p>I recently graduated with a degree in Computer Science and love building clean, 
                practical software solutions. I'm currently looking for an entry-level developer 
                role where I can grow and contribute to real-world projects.</p>
    </section>
  );
}
export default About;
