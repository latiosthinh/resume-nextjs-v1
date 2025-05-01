import BlockTitle from '../share/BlockTitle';
import Job from './Job';
import Project from './Project';

export default function Experience() {
  return (
    <section className="space-y-4">
      <BlockTitle text="Professional Experience" />

      <Job
        title="Frontend Tech Lead"
        company="Niteco"
        period="09/2021 - Present"
      >
        <Project
          name="Project: NorthShoreCare (E-commerce Platform)"
          title="Frontend Tech Lead"
        >
          <li>
            Led migration from Vue2/jQuery to Vue3/TypeScript, improving
            performance by 40%
          </li>
          <li>
            Implemented Azure CI/CD pipelines, reducing deployment time by 60%
          </li>
          <li>
            Established coding standards and implemented code review processes
          </li>
          <li>
            Integrated modern tooling: Vite, Husky, Commitlint, Prettier,
            ESLint, Jest
          </li>
          <li>
            Developed custom Vue plugins and directives to enhance functionality
          </li>
          <li>Achieved 85% unit test coverage across the codebase</li>
        </Project>

        <Project name="Project: B2B SASS Commerce" title="Frontend Tech Lead">
          <li>
            Designed and developed GraphQL plugin for component generation
          </li>
          <li>Created reusable component library serving multiple projects</li>
          <li>
            Integrated AI tools (Cursor, v0, bolt.new) to accelerate development
          </li>
          <li>Implemented automated testing solutions for GraphQL endpoints</li>
          <li>Reduced development time by 30% through automation</li>
        </Project>

        <Project
          name="Project: Electrolux EU (Multi-brand Platform)"
          title="Senior Frontend Developer"
        >
          <li>Developed Base UI library serving 4+ brand websites</li>
          <li>Implemented design system using CSS variables and modules</li>
          <li>Optimized Next.js performance, reducing page load time by 35%</li>
          <li>
            Collaborated with 14+ frontend developers across multiple teams
          </li>
          <li>Established component documentation and usage guidelines</li>
        </Project>

        <Project
          name="Project: Etex (Multi-brand Platform)"
          title="Senior Frontend Developer"
        >
          <li>Developed Base UI library serving 10+ brand websites</li>
          <li>Implemented design system using CSS variables and modules</li>
          <li>
            Collaborated with 6+ frontend developers across multiple teams
          </li>
          <li>Established component documentation and usage guidelines</li>
        </Project>

        <Project
          name="Project: Delaware (EPI CMS Platform)"
          title="Intermediate Frontend Developer"
        >
          <li>Optimized Next.js performance, reducing page load time by 70%</li>
          <li>Implemented design system using CSS variables and modules</li>
          <li>
            Collaborated with 6+ frontend developers across multiple teams
          </li>
          <li>Established component documentation and usage guidelines</li>
        </Project>
      </Job>

      <Job title="Full-stack Developer" company="Elightup" period="2019 - 2021">
        <Project name="Metabox Plugin Development">
          <li>Contributed to core functionality of popular WordPress plugin</li>
          <li>Developed custom field types and extensions</li>
          <li>Optimized plugin performance for high-traffic websites</li>
        </Project>

        <Project name="Elementor Widget Development">
          <li>Created custom widgets for page builder</li>
          <li>Developed theme builder functionality</li>
          <li>Optimized widget performance for complex layouts</li>
        </Project>

        <Project name="WooCommerce + CMS Theme Development">
          <li>Built custom themes for e-commerce platforms</li>
          <li>Implemented responsive designs and accessibility features</li>
          <li>Integrated with third-party APIs for payment and shipping</li>
        </Project>
      </Job>

      <Job
        title="Freelance Web Developer"
        company="Self-Employed"
        period="2018 - 2019"
      >
        <ul className="list-disc list-inside space-y-1">
          <li>Developed websites for various clients</li>
          <li>Built foundational skills in web development</li>
        </ul>
      </Job>
    </section>
  );
}
