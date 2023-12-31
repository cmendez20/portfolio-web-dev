import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Header = () => {
  return (
    <header>
      <section className="mb-20">
        <p className="mb-7 text-xl md:text-3xl md:leading-relaxed leading-relaxed">
          👋 Hey I'm Chris, a dedicated Software Engineer specializing in
          frontend development. I'm passionate about building simple, beautiful
          user experiences. Beyond tech, you'll find me gaming, brewing coffee,
          and exploring the world. Let's get to work!
        </p>

        <IconContext.Provider
          value={{
            className: 'shared-class',
            color: 'rgb(51 65 85)',
            size: 42,
          }}
        >
          <div className="flex gap-8">
            <a href="https://github.com/cmendez20" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/cjmendez/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </IconContext.Provider>
      </section>
    </header>
  );
};

export { Header };
