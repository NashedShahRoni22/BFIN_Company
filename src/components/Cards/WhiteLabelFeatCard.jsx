export default function WhiteLabelFeatCard({ feat }) {
  return (
    <div className="rounded-md border p-5">
      <img
        src={feat.icon}
        alt={feat.title}
        loading="lazy"
        className="mb-4 size-10"
      />
      <h3 className="mb-2 text-xl font-semibold">{feat.title}</h3>
      <p className="text-gray-800">{feat.description}</p>
    </div>
  );
}
