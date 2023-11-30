import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Header = () => {
  return (
    <header>
      <section className="mb-14">
        <p className="leading-relaxed mb-7 text-xl md:text-3xl">
          👋 Hey I'm Chris, a Frontend Web Developer dedicated to turning design
          into seamless digital experiences. Let's create something amazing
          together!
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
