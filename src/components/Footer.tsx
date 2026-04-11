export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-page px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-tertiary sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} Dhruv. Built with React &amp;
          Tailwind CSS.
        </p>
        <p className="text-xs text-faint">
          Designed with a little extra{" "}
          <span className="text-accent" title="You'll never see it coming">
            flair
          </span>
          .
        </p>
      </div>
    </footer>
  );
}
