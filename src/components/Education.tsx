import BlockTitle from './share/BlockTitle';

export default function Education() {
  return (
    <section className="space-y-4">
      <BlockTitle text="Education" />
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
        <p>Military Technology University, Vietnam (Graduated 10/2014)</p>
      </div>
    </section>
  );
}
