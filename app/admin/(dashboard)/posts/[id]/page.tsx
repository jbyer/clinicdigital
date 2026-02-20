"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import {
  ArrowLeft,
  X,
  Image as ImageIcon,
  Loader2,
  Eye,
  Save,
  Plus,
  Tag,
  Check,
  CalendarDays,
  Trash2,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { RichTextEditor } from "@/components/rich-text-editor"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const DEFAULT_CATEGORIES = [
  "AI & Automation",
  "Marketing",
  "SEO",
  "Patient Experience",
  "Industry Insights",
]

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

function estimateReadTime(html: string): string {
  const text = html.replace(/<[^>]*>/g, " ")
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
}

function countWords(html: string): number {
  const text = html.replace(/<[^>]*>/g, " ")
  return text.trim().split(/\s+/).filter(Boolean).length
}

export default function EditPostPage() {
  const router = useRouter()
  const params = useParams()
  const postId = params.id as string
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(true)
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")
  const [authorRole, setAuthorRole] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [published, setPublished] = useState(false)
  const [featured, setFeatured] = useState(false)
  const [publishDate, setPublishDate] = useState<Date | undefined>(undefined)

  const [allCategories, setAllCategories] = useState<string[]>(DEFAULT_CATEGORIES)
  const [showNewCategory, setShowNewCategory] = useState(false)
  const [newCategoryInput, setNewCategoryInput] = useState("")
  const newCategoryRef = useRef<HTMLInputElement>(null)

  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [showPreview, setShowPreview] = useState(false)

  // Load existing post
  useEffect(() => {
    async function loadPost() {
      try {
        const supabase = createClient()
        const { data: post, error: fetchError } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("id", postId)
          .single()

        if (fetchError || !post) {
          setError("Post not found.")
          setLoading(false)
          return
        }

        setTitle(post.title)
        setSlug(post.slug)
        setExcerpt(post.excerpt || "")
        setContent(post.content || "")
        setAuthor(post.author || "")
        setAuthorRole(post.author_role || "")
        setSelectedCategories(post.categories ?? [])
        setPublished(post.published)
        setFeatured(post.featured || false)
        setPublishDate(
          post.published_at ? new Date(post.published_at) : new Date()
        )
        if (post.image_url) {
          setExistingImageUrl(post.image_url)
          setImagePreview(post.image_url)
        }
        setLoading(false)
      } catch {
        setError("Failed to load post.")
        setLoading(false)
      }
    }
    loadPost()
  }, [postId])

  // Load categories
  useEffect(() => {
    async function loadCategories() {
      try {
        const supabase = createClient()
        const { data } = await supabase
          .from("blog_posts")
          .select("categories")
        if (data) {
          const dbCategories = data.flatMap((r) => r.categories ?? [])
          const merged = [...new Set([...DEFAULT_CATEGORIES, ...dbCategories])]
          setAllCategories(merged.filter(Boolean).sort())
        }
      } catch {
        // fallback to defaults
      }
    }
    loadCategories()
  }, [])

  useEffect(() => {
    if (showNewCategory && newCategoryRef.current) {
      newCategoryRef.current.focus()
    }
  }, [showNewCategory])

  function handleTitleChange(value: string) {
    setTitle(value)
    if (!slugManuallyEdited) setSlug(slugify(value))
  }

  function handleSlugChange(value: string) {
    setSlugManuallyEdited(true)
    setSlug(slugify(value))
  }

  function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.")
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be under 5MB.")
      return
    }
    setImageFile(file)
    setExistingImageUrl(null)
    setError(null)
    const reader = new FileReader()
    reader.onload = (ev) => setImagePreview(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  function removeImage() {
    setImageFile(null)
    setImagePreview(null)
    setExistingImageUrl(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  function toggleCategory(cat: string) {
    setSelectedCategories((prev) => {
      if (prev.includes(cat)) return prev.filter((c) => c !== cat)
      if (prev.length >= 3) return prev
      return [...prev, cat]
    })
  }

  function handleAddCategory() {
    const trimmed = newCategoryInput.trim()
    if (!trimmed) return
    const existing = allCategories.find(
      (c) => c.toLowerCase() === trimmed.toLowerCase()
    )
    const catName = existing || trimmed
    if (!existing) {
      setAllCategories((prev) => [...prev, trimmed].sort())
    }
    if (!selectedCategories.includes(catName) && selectedCategories.length < 3) {
      setSelectedCategories((prev) => [...prev, catName])
    }
    setShowNewCategory(false)
    setNewCategoryInput("")
  }

  async function handleStatusToggle() {
    const newStatus = !published
    setPublished(newStatus)
    setSaving(true)
    setError(null)
    setSuccessMessage(null)
    try {
      const supabase = createClient()
      const { error: updateError } = await supabase
        .from("blog_posts")
        .update({
          published: newStatus,
          published_at: newStatus
            ? (publishDate ?? new Date()).toISOString()
            : null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", postId)
      if (updateError) throw new Error(updateError.message)
      setSuccessMessage(
        newStatus
          ? "Post published successfully."
          : "Post reverted to draft."
      )
      setTimeout(() => setSuccessMessage(null), 3000)
    } catch (err) {
      setPublished(!newStatus)
      setError(err instanceof Error ? err.message : "Failed to update status.")
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete() {
    setDeleting(true)
    setError(null)
    try {
      const supabase = createClient()
      const { error: deleteError } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", postId)
      if (deleteError) throw new Error(deleteError.message)
      router.push("/admin/posts")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete post.")
      setDeleting(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccessMessage(null)
    if (!title.trim()) return setError("Title is required.")
    if (!slug.trim()) return setError("Slug is required.")
    if (!excerpt.trim()) return setError("Excerpt is required.")
    const cleanContent = content.replace(/<p><br><\/p>/g, "").trim()
    if (!cleanContent) return setError("Content is required.")
    if (!author.trim()) return setError("Author name is required.")
    if (selectedCategories.length === 0)
      return setError("Please select at least one category.")
    setSaving(true)
    try {
      const supabase = createClient()
      let imageUrl: string | null = existingImageUrl
      if (imageFile) {
        setUploading(true)
        const ext = imageFile.name.split(".").pop()
        const filePath = `${slug}-${Date.now()}.${ext}`
        const { error: uploadError } = await supabase.storage
          .from("blog-images")
          .upload(filePath, imageFile, { cacheControl: "3600", upsert: false })
        if (uploadError)
          throw new Error(`Image upload failed: ${uploadError.message}`)
        const { data: urlData } = supabase.storage
          .from("blog-images")
          .getPublicUrl(filePath)
        imageUrl = urlData.publicUrl
        setUploading(false)
      }
      const { error: updateError } = await supabase
        .from("blog_posts")
        .update({
          title: title.trim(),
          slug: slug.trim(),
          excerpt: excerpt.trim(),
          content,
          author: author.trim(),
          author_role: authorRole.trim() || null,
          categories: selectedCategories,
          image_url: imageUrl,
          read_time: estimateReadTime(content),
          published,
          featured,
          published_at: published
            ? (publishDate ?? new Date()).toISOString()
            : null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", postId)
      if (updateError) throw new Error(updateError.message)
      setSuccessMessage("Post saved successfully.")
      setTimeout(() => setSuccessMessage(null), 3000)
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
    } finally {
      setSaving(false)
      setUploading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading post...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-14 lg:pt-0">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/posts"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to posts</span>
          </Link>
          <div>
            <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground">
              Edit Post
            </h1>
            <p className="text-sm text-muted-foreground">
              <span className="text-balance">
                {title || "Untitled"}
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Status toggle button */}
          <button
            type="button"
            onClick={handleStatusToggle}
            disabled={saving}
            className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              published
                ? "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-400 dark:hover:bg-amber-950"
                : "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400 dark:hover:bg-emerald-950"
            }`}
          >
            {published ? (
              <>Revert to Draft</>
            ) : (
              <>
                <Eye className="h-4 w-4" />
                Publish Now
              </>
            )}
          </button>
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            <Eye className="h-4 w-4" />
            {showPreview ? "Edit" : "Preview"}
          </button>
        </div>
      </div>

      {/* Status badge */}
      <div className="mb-6 flex items-center gap-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
            published
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400"
              : "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              published ? "bg-emerald-500" : "bg-amber-500"
            }`}
          />
          {published ? "Published" : "Draft"}
        </span>
        {published && slug && (
          <Link
            href={`/blog/${slug}`}
            target="_blank"
            className="text-xs font-medium text-primary hover:text-primary/80"
          >
            View live post
          </Link>
        )}
      </div>

      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/50 dark:text-red-400">
          {error}
        </div>
      )}

      {successMessage && (
        <div className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400">
          {successMessage}
        </div>
      )}

      {showPreview ? (
        <div className="rounded-2xl border border-border bg-card p-6 lg:p-10">
          {imagePreview && (
            <div className="relative mb-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src={imagePreview}
                alt={title || "Post image"}
                fill
                className="object-cover"
              />
            </div>
          )}
          {selectedCategories.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {selectedCategories.map((cat) => (
                <span
                  key={cat}
                  className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
          <h2 className="font-heading text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
            <span className="text-balance">{title || "Untitled Post"}</span>
          </h2>
          {author && (
            <p className="mt-3 text-sm text-muted-foreground">
              {"By "}
              {author}
              {authorRole ? ` - ${authorRole}` : ""}
              {" \u00B7 "}
              {estimateReadTime(content)}
            </p>
          )}
          {excerpt && (
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {excerpt}
            </p>
          )}
          <hr className="my-6 border-border" />
          <div
            className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-heading prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-h2:font-bold prose-h2:tracking-tight prose-h2:text-foreground sm:prose-h2:text-3xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl prose-h3:font-semibold prose-h3:text-foreground prose-p:mb-4 prose-p:text-base prose-p:leading-relaxed prose-p:text-muted-foreground lg:prose-p:text-lg lg:prose-p:leading-8 prose-a:text-primary prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Post Details */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Post Details
            </h3>
            <div className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="title"
                  className="mb-1.5 block text-sm font-medium text-card-foreground"
                >
                  {"Title "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="How AI Is Transforming Healthcare Marketing"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="slug"
                  className="mb-1.5 block text-sm font-medium text-card-foreground"
                >
                  {"URL Slug "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">/blog/</span>
                  <input
                    id="slug"
                    type="text"
                    value={slug}
                    onChange={(e) => handleSlugChange(e.target.value)}
                    placeholder="ai-transforming-healthcare-marketing"
                    className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="excerpt"
                  className="mb-1.5 block text-sm font-medium text-card-foreground"
                >
                  {"Excerpt "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="A short summary that appears on the blog listing page..."
                  rows={3}
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Featured Image
            </h3>
            {imagePreview ? (
              <div className="relative">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
                  <Image
                    src={imagePreview}
                    alt="Image preview"
                    fill
                    className="object-cover"
                    unoptimized={imagePreview.startsWith("data:")}
                  />
                </div>
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/80 text-background transition-colors hover:bg-foreground"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove image</span>
                </button>
                {imageFile && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    {imageFile.name}
                    {" ("}
                    {((imageFile.size ?? 0) / 1024).toFixed(0)}
                    {" KB) - New upload"}
                  </p>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex w-full flex-col items-center gap-3 rounded-xl border-2 border-dashed border-border px-6 py-12 transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-card-foreground">
                    Click to upload an image
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    PNG, JPG, WebP up to 5MB
                  </p>
                </div>
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleImageSelect}
              className="hidden"
              aria-label="Upload featured image"
            />
          </div>

          {/* Content - Rich Text Editor */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Content
            </h3>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-card-foreground">
                {"Post Body "}
                <span className="text-red-500">*</span>
              </label>
              <p className="mb-3 text-xs text-muted-foreground">
                Use the toolbar to format headings, bold, italic, lists,
                blockquotes, and links.
              </p>
              <RichTextEditor
                value={content}
                onChange={setContent}
                placeholder="Write your blog post content here..."
              />
              <p className="mt-2 text-right text-xs text-muted-foreground">
                {countWords(content)}
                {" words \u00B7 "}
                {estimateReadTime(content)}
              </p>
            </div>
          </div>

          {/* Author + Publishing */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Author */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Author
              </h3>
              <div className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="author"
                    className="mb-1.5 block text-sm font-medium text-card-foreground"
                  >
                    {"Name "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="author"
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Marcus Chen"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="authorRole"
                    className="mb-1.5 block text-sm font-medium text-card-foreground"
                  >
                    Role
                  </label>
                  <input
                    id="authorRole"
                    type="text"
                    value={authorRole}
                    onChange={(e) => setAuthorRole(e.target.value)}
                    placeholder="Founder & CEO"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* Publishing */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Publishing
              </h3>
              <div className="flex flex-col gap-5">
                {/* Categories multi-select (max 3) */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-card-foreground">
                    {"Categories "}
                    <span className="text-red-500">*</span>
                    <span className="ml-1 text-xs font-normal text-muted-foreground">
                      (select up to 3)
                    </span>
                  </label>

                  {/* Selected pills */}
                  {selectedCategories.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {selectedCategories.map((cat) => (
                        <span
                          key={cat}
                          className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                        >
                          <Tag className="h-3 w-3" />
                          {cat}
                          <button
                            type="button"
                            onClick={() => toggleCategory(cat)}
                            className="ml-0.5 rounded-full p-0.5 transition-colors hover:bg-primary/20"
                          >
                            <X className="h-3 w-3" />
                            <span className="sr-only">Remove {cat}</span>
                          </button>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Category list */}
                  {selectedCategories.length < 3 && !showNewCategory && (
                    <div className="flex flex-col gap-2">
                      <div className="max-h-[160px] overflow-y-auto rounded-lg border border-input bg-background p-1.5">
                        {allCategories
                          .filter((c) => !selectedCategories.includes(c))
                          .map((cat) => (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => toggleCategory(cat)}
                              className="flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                            >
                              <Plus className="h-3 w-3 text-muted-foreground" />
                              {cat}
                            </button>
                          ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowNewCategory(true)}
                        className="flex items-center gap-1.5 self-start rounded-md px-2 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
                      >
                        <Plus className="h-3 w-3" />
                        Create new category
                      </button>
                    </div>
                  )}

                  {/* New category input */}
                  {showNewCategory && (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                          <Tag className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                          <input
                            ref={newCategoryRef}
                            type="text"
                            value={newCategoryInput}
                            onChange={(e) =>
                              setNewCategoryInput(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault()
                                handleAddCategory()
                              }
                              if (e.key === "Escape") {
                                setShowNewCategory(false)
                                setNewCategoryInput("")
                              }
                            }}
                            placeholder="e.g. Technology"
                            className="w-full rounded-lg border border-input bg-background py-2.5 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={handleAddCategory}
                          disabled={!newCategoryInput.trim()}
                          className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <Check className="h-4 w-4" />
                          <span className="sr-only">Add category</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShowNewCategory(false)
                            setNewCategoryInput("")
                          }}
                          className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg border border-border transition-colors hover:bg-accent"
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Cancel</span>
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Press Enter to add or Escape to cancel
                      </p>
                    </div>
                  )}

                  {selectedCategories.length >= 3 && !showNewCategory && (
                    <p className="text-xs text-muted-foreground">
                      Maximum 3 categories reached. Remove one to add another.
                    </p>
                  )}
                </div>

                {/* Publish Date Picker */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-card-foreground">
                    Publish Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="flex w-full items-center gap-2 rounded-lg border border-input bg-background px-4 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-accent focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        {publishDate ? (
                          publishDate.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        ) : (
                          <span className="text-muted-foreground">
                            Pick a date
                          </span>
                        )}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={publishDate}
                        onSelect={setPublishDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <p className="mt-1 text-xs text-muted-foreground">
                    The date that will appear on the published post.
                  </p>
                </div>

                {/* Publish toggle */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={published}
                    onClick={() => setPublished(!published)}
                    className={`relative h-6 w-11 rounded-full transition-colors ${
                      published ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-background shadow transition-transform ${
                        published ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                  <label className="text-sm font-medium text-card-foreground">
                    {published ? "Published" : "Draft"}
                  </label>
                </div>
                <p className="text-xs text-muted-foreground">
                  {published
                    ? "This post is visible to the public."
                    : "This post is saved as a draft and won\u2019t appear on the blog."}
                </p>

                {/* Featured Article toggle */}
                <div className="mt-1 rounded-lg border border-border bg-background p-4">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={featured}
                      onClick={() => setFeatured(!featured)}
                      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                        featured ? "bg-amber-500" : "bg-muted"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-background shadow transition-transform ${
                          featured ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                    <div>
                      <label className="text-sm font-medium text-card-foreground">
                        Featured Article
                      </label>
                      <p className="text-xs text-muted-foreground">
                        {featured
                          ? "This post is highlighted in the Featured Article section on the blog page."
                          : "Enable to showcase this post as the Featured Article."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Delete */}
            <div>
              {!showDeleteConfirm ? (
                <button
                  type="button"
                  onClick={() => setShowDeleteConfirm(true)}
                  className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/50"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete Post
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-red-600 dark:text-red-400">
                    Are you sure?
                  </span>
                  <button
                    type="button"
                    onClick={handleDelete}
                    disabled={deleting}
                    className="flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-50"
                  >
                    {deleting ? (
                      <Loader2 className="h-3 w-3 animate-spin" />
                    ) : (
                      <Trash2 className="h-3 w-3" />
                    )}
                    Confirm Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDeleteConfirm(false)}
                    className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-accent"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {/* Save */}
            <div className="flex items-center gap-3">
              <Link
                href="/admin/posts"
                className="flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={saving}
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {uploading ? "Uploading Image..." : "Saving..."}
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}
