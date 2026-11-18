export default function Page({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed">{children}</div>
    </div>
  );
}
