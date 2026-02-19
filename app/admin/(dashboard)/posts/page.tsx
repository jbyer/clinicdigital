import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Plus, FileText, Eye, EyeOff, Pencil, ExternalLink } from "lucide-react"

export default async function AdminPostsPage() {
  const supabase = await createClient()

  const { data: posts } = await supabase
    .from("blog_posts")
    .select("id, title, slug, category, published, published_at, author, read_time, created_at")
    .order("created_at", { ascending: false })

  const allPosts = posts ?? []

  return (
    <div className="min-h-screen">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground">
            All Posts
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {allPosts.length} post{allPosts.length !== 1 ? "s" : ""} total
          </p>
        </div>
        <Link
          href="/admin/create"
          className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          New Post
        </Link>
      </div>

      {allPosts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
            No posts yet
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Create your first blog post to get started.
          </p>
          <Link
            href="/admin/create"
            className="mt-6 flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" />
            Create Post
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {/* Table header */}
          <div className="hidden border-b border-border bg-muted/30 px-6 py-3 md:grid md:grid-cols-12 md:gap-4">
            <span className="col-span-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Title
            </span>
            <span className="col-span-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Category
            </span>
            <span className="col-span-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Author
            </span>
            <span className="col-span-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Status
            </span>
            <span className="col-span-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground text-right">
              Date
            </span>
            <span className="col-span-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground text-right">
              Actions
            </span>
          </div>

          {/* Rows */}
          {allPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col gap-2 border-b border-border px-6 py-4 last:border-0 md:grid md:grid-cols-12 md:items-center md:gap-4"
            >
              <div className="col-span-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <Link
                    href={`/admin/posts/${post.id}`}
                    className="block truncate text-sm font-medium text-card-foreground hover:text-primary"
                  >
                    {post.title}
                  </Link>
                  <p className="truncate text-xs text-muted-foreground">
                    /blog/{post.slug}
                  </p>
                </div>
              </div>
              <div className="col-span-2">
                <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {post.category}
                </span>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">{post.author}</p>
              </div>
              <div className="col-span-1">
                {post.published ? (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <Eye className="h-3 w-3" />
                    Live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                    <EyeOff className="h-3 w-3" />
                    Draft
                  </span>
                )}
              </div>
              <div className="col-span-1 text-right">
                <p className="text-xs text-muted-foreground">
                  {new Date(post.published_at || post.created_at).toLocaleDateString(
                    "en-US",
                    { month: "short", day: "numeric", year: "numeric" }
                  )}
                </p>
              </div>
              <div className="col-span-1 flex items-center justify-end gap-1">
                <Link
                  href={`/admin/posts/${post.id}`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  title="Edit post"
                >
                  <Pencil className="h-3.5 w-3.5" />
                  <span className="sr-only">Edit</span>
                </Link>
                {post.published && (
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-emerald-50 hover:text-emerald-600"
                    title="View live post"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span className="sr-only">View</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
