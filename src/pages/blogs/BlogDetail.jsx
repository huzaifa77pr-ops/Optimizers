import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../../data/blogs";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = useMemo(() => blogs.find((b) => b.slug === slug), [slug]);

  if (!post) {
    return (
      <main className="w-full bg-white">
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm text-slate-600">Blog not found.</p>
          <Link to="/blogs" className="mt-4 inline-block text-rose-600 font-extrabold">
            ← Back to Blogs
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="w-full bg-white">
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <Link to="/blogs" className="text-sm font-extrabold text-rose-600 hover:text-rose-700">
          ← Back to Blogs
        </Link>

        <p className="mt-6 text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
          {post.category}
        </p>

        <h1 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.read}</span>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-[0_18px_55px_rgba(2,6,23,0.10)]">
          <img src={post.cover} alt={post.title} className="w-full object-cover" />
        </div>

        {/* ✅ Article body */}
        <div className="mt-10 space-y-5 text-slate-700 leading-relaxed">
          {post.content?.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} className="pt-6 text-xl font-extrabold text-slate-950">
                  {block.text}
                </h2>
              );
            }
            return <p key={i}>{block.text}</p>;
          })}
        </div>
      </section>
    </main>
  );
}