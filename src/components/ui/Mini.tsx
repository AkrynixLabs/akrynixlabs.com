import Card from "./Card";

export default function Mini({
  title,
  desc,
  tone = "light",
}: {
  title: string;
  desc: string;
  tone?: "light" | "dark";
}) {
  return (
    <Card tone={tone}>
      <h3 className="font-semibold tracking-tight">{title}</h3>
      <p className={tone === "dark" ? "mt-2 text-sm text-neutral-300" : "mt-2 text-sm text-neutral-600"}>
        {desc}
      </p>
    </Card>
  );
}
