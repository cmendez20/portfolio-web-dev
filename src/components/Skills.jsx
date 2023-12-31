import { IconContext } from 'react-icons';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { FaUniversalAccess } from 'react-icons/fa6';
import { FaMobile } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold text-center mb-6 xl:text-start md:text-3xl">
        Skills
      </h2>
      <div className="grid-cols-2 grid gap-16 gap-x-0 md:grid-cols-4">
        <IconContext.Provider
          value={{
            className: 'shared-class',
            color: 'rgb(51 65 85)',
            size: 42,
          }}
        >
          <div className="flex flex-col gap-3 items-center">
            <FaHtml5 />
            <p>HTML</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <FaCss3Alt />
            <p>CSS</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <IoLogoJavascript />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <FaReact />
            <p>React</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <FaSass />
            <p>SCSS</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <FaGitAlt />
            <p>Git</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <FaUniversalAccess />
            <p>Web Accessibility</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <FaMobile />
            <p>Responsive Design</p>
          </div>
        </IconContext.Provider>
      </div>

      {/* HTML, CSS, JavaScript, Git, vite, SASS, React accessiblity jira responsive and mobile-first design */}
      {/* need Typescript, Node JS */}
    </section>
  );
};

export default Skills;
