export default function Home() {
  return (
    <div className="flex flex-col gap-3 p-8">
      {/* default: bg-primary + text-primary-foreground */}
      <button className="bg-primary text-primary-foreground rounded-md px-4 py-2 hover:opacity-90">
        Default
      </button>

      {/* secondary: bg-secondary + text-secondary-foreground */}
      <button className="bg-secondary text-secondary-foreground rounded-md px-4 py-2 hover:opacity-90">
        Secondary
      </button>

      {/* destructive: bg-destructive + text-destructive-foreground */}
      <button className="bg-destructive text-destructive-foreground rounded-md px-4 py-2 hover:opacity-90">
        Destructive
      </button>

      {/* outline: 배경 투명, border만 적용 */}
      <button className="border-border hover:bg-muted rounded-md border px-4 py-2">
        Outline
      </button>

      {/* ghost: 배경 투명, hover 시 muted 적용 */}
      <button className="hover:bg-muted rounded-md px-4 py-2">Ghost</button>
    </div>
  );
}
