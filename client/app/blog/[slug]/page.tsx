import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import blogs from "@/lib/data/blog.json";
import Image from "next/image";

type SlugProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: SlugProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Espresso Organic Blog",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blog.title} | Espresso Organic Blog`,
    description: blog.description,
  };
}

export default async function BlogPage({ params }: SlugProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

  const others = blogs.filter((b) => b.slug !== blog.slug);

  return (
    <main className=" text-black py-16 px-6 md:px-12">
      <div className="max-w-7xl mt-20 mx-auto grid md:grid-cols-[2fr_1fr] gap-12">
        <article>
          <h1 className="text-4xl md:text-5xl font-reporter mb-4">
            {blog.title}
          </h1>
          <p className="text-black/70 mb-2">
            By {blog.author} ·{" "}
            {new Date(blog.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <div className="flex gap-2 mb-4 flex-wrap">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/10 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <Image
            src={blog.heroImage || "/placeholder.svg?height=400&width=800"}
            alt={blog.title}
            width={1200}
            height={600}
            className="w-full rounded mb-8 object-cover"
          />

          <div className="space-y-4 leading-relaxed text-black/80 mb-10">
            {blog.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6">
            <h3 className="text-lg font-semibold mb-2">Share this post:</h3>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://www.espressocoffee.com.np/blog/${blog.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#c95618]"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=https://www.espressocoffee.com.np/blog/${
                  blog.slug
                }&text=${encodeURIComponent(blog.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#c95618]"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.espressocoffee.com.np/blog/${blog.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#c95618]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </article>

        <aside className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">More Stories</h2>
          {others.map((b) => (
            <Link key={b.slug} href={`/blog/${b.slug}`}>
              <div className="border-b border-white/10 pb-4 mb-4 hover:opacity-80 transition">
                <h3 className="text-lg font-bold">{b.title}</h3>
                <p className="text-black/60 text-sm">{b.excerpt}</p>
              </div>
            </Link>
          ))}

          <div className="mt-10 p-6 bg-white/5 rounded-lg border border-white/10">
            <h3 className="font-bold mb-2">Need help?</h3>
            <p className="text-black/70 mb-4">
              Talk to our team for insights, security, or consulting.
            </p>
            <Link href="/contact">
              <button className="px-4 py-2 bg-[#c95618] text-white rounded hover:bg-[#563d2e]">
                Contact Us
              </button>
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}
