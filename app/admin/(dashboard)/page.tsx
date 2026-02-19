import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { FilePlus, FileText, Eye, Clock } from "lucide-react"

export default async function AdminDashboardPage() {
  const supabase = await createClient()

  const { count: totalCount } = await supabase
    .from("blog_posts")
    .select("*", { count: "exact", head: true })

  const { count: publishedCount } = await supabase
    .from("blog_posts")
    .select("*", { count: "exact", head: true })
    .eq("published", true)

  const { data: recentPosts } = await supabase
    .from("blog_posts")
    .select("id, title, slug, published, category, published_at")
    .order("created_at", { ascending: false })
    .limit(5)

  const draftCount = (totalCount ?? 0) - (publishedCount ?? 0)

  const stats = [
    {
      label: "Total Posts",
      value: totalCount ?? 0,
      icon: FileText,
      color: "text-primary bg-primary/10",
    },
    {
      label: "Published",
      value: publishedCount ?? 0,
      icon: Eye,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      label: "Drafts",
      value: draftCount,
      icon: Clock,
      color: "text-amber-600 bg-amber-50",
    },
  ]

  return (
    <div className="pt-14 lg:pt-0">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your blog content
          </p>
        </div>
        <Link
          href="/admin/create"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <FilePlus className="h-4 w-4" />
          New Post
        </Link>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-lg ${stat.color}`}
            >
              <stat.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-card-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="rounded-xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-heading text-base font-semibold text-card-foreground">
            Recent Posts
          </h2>
          <Link
            href="/admin/posts"
            className="text-sm font-medium text-primary hover:text-primary/80"
          >
            View all
          </Link>
        </div>

        {recentPosts && recentPosts.length > 0 ? (
          <ul className="divide-y divide-border">
            {recentPosts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/admin/posts/${post.id}`}
                  className="flex items-center justify-between px-5 py-3.5 transition-colors hover:bg-muted/50"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-card-foreground">
                      {post.title}
                    </p>
                    <div className="mt-1 flex items-center gap-3">
                      <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.published_at
                          ? new Date(post.published_at).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )
                          : "No date"}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`ml-4 shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      post.published
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {post.published ? "Published" : "Draft"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="px-5 py-10 text-center">
            <FileText className="mx-auto h-8 w-8 text-muted-foreground/50" />
            <p className="mt-2 text-sm text-muted-foreground">
              No posts yet. Create your first post!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
