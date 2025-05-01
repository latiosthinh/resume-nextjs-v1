export default function BlockTitle({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="block w-6 border-t-2 border-yellow-400"></span>
      <h2 className="text-2xl font-semibold">{text}</h2>
    </div>
  );
}
