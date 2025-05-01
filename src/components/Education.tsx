import BlockTitle from './share/BlockTitle';
import List from './share/List';

export default function Education() {
  return (
    <section className="space-y-4">
      <BlockTitle text="Education" />
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-yellow-400">Academic</h3>
        <div>
          <h4 className="text-lg font-semibold text-gray-300 mb-2 flex justify-between border-b border-gray-600">
            Big Data & Signal Analysis
          </h4>
          <p>
            East China University of Science and Technology, Shanghai, China
            (09/2015 - 06/2018)
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-300 mb-2 flex justify-between border-b border-gray-600">
            Computer Science & Networking Management
          </h4>
          <p>Military Technology Academy, Vietnam (Graduated 10/2014)</p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-yellow-400">Language</h3>
        <List>
          <li>English (Intermediate)</li>
          <li>Chinese (Basic)</li>
        </List>
      </div>
    </section>
  );
}
