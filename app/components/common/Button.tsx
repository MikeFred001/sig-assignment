export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`px-6 py-[7px] rounded-full bg-tan2 text-green2 font-bold ${className}`}
    >
      {children}
    </button>
  );
}
