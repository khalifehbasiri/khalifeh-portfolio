import Link from "next/link";

const resumePath = "/Khalifeh_Basiri_Resume.pdf";

export const metadata = {
  title: "Resume - Khalifeh Basiri",
  description: "Preview and download Khalifeh Basiri's resume.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-8 md:h-screen">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link
              href="/"
              className="font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              Back to portfolio
            </Link>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight">
              Khalifeh Basiri Resume
            </h1>
          </div>

          <a
            href={resumePath}
            download
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Download PDF
          </a>
        </div>

        <div className="min-h-[70vh] flex-1 overflow-hidden rounded-lg border border-border bg-surface md:min-h-0">
          <object
            data={`${resumePath}#toolbar=1&navpanes=0`}
            type="application/pdf"
            className="h-full min-h-[70vh] w-full md:min-h-0"
          >
            <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 text-center">
              <p className="max-w-md text-muted">
                This browser cannot preview the PDF inline. You can still
                download it directly.
              </p>
              <a
                href={resumePath}
                download
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Download PDF
              </a>
            </div>
          </object>
        </div>
      </section>
    </main>
  );
}
