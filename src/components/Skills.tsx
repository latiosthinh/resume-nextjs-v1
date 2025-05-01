import BlockTitle from './share/BlockTitle';
import List from './share/List';

export default function Skills() {
  return (
    <section className="space-y-4">
      <BlockTitle text="Technical Skills" />
      <div>
        <h3 className="text-xl font-bold text-yellow-400 mb-2">Cores</h3>
        <List>
          <li>JavaScript, TypeScript</li>
          <li>React.js / Next.js</li>
          <li>HTML5 / CSS3</li>
          <li>UI/UX Implementation</li>
          <li>Component Design Systems</li>
        </List>
      </div>
      <div>
        <h3 className="text-xl font-bold text-yellow-400 mb-2">Additionals</h3>
        <List>
          <li>Language: PHP, DART, C#</li>
          <li>
            Framework: Vue.js, Qwik.js, Sveltkit, Flutter, Solid.js, Alpine.js,
            Astro.js, ReactNative
          </li>
          <li>CMS: Wordpress, Episerver, Optimizely</li>
          <li>Tools: Git, Webpack, Vite, Azure CI/CD, Jest, StoryBook</li>
          <li>Styling: SCSS, TailwindCSS, DesignTokens</li>
          <li>AI tools: GitHub Copilot, Cursor, v0, bolt.new</li>
          <li>
            Others: Performance Optimization, Accessibility, Responsive Design
          </li>
        </List>
      </div>
    </section>
  );
}
