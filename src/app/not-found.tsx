import Header from "@/components/header/Header";
import Link from "next/link";

export default function Notfound() {
  return (
    <>
      <Header />
      <div className="flex min-h-[400px] md:min-h-[600px] lg:min-h-[700px] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
            404
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {" Oops, it looks like the page you're looking for doesn't exist."}
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-primary px-8 py-4 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
