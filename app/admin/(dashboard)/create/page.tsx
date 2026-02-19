"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
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

export default function CreatePostPage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false)
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")
  const [authorRole, setAuthorRole] = useState("")
  const [category, setCategory] = useState("")
  const [published, setPublished] = useState(false)
  const [featured, setFeatured] = useState(false)
  const [publishDate, setPublishDate] = useState<Date | undefined>(new Date())

  const [categories, setCategories] = useState<string[]>(DEFAULT_CATEGORIES)
  const [showNewCategory, setShowNewCategory] = useState(false)
  const [newCategoryInput, setNewCategoryInput] = useState("")
  const newCategoryRef = useRef<HTMLInputElement>(null)

  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    async function loadCategories() {
      try {
        const supabase = createClient()
        const { data } = await supabase
          .from("blog_posts")
          .select("category")
          .order("category")
        if (data) {
          const dbCategories = [...new Set(data.map((r) => r.category))]
          const merged = [...new Set([...DEFAULT_CATEGORIES, ...dbCategories])]
          setCategories(merged.sort())
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
    setError(null)
    const reader = new FileReader()
    reader.onload = (ev) => setImagePreview(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  function removeImage() {
    setImageFile(null)
    setImagePreview(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  function handleAddCategory() {
    const trimmed = newCategoryInput.trim()
    if (!trimmed) return
    const existing = categories.find(
      (c) => c.toLowerCase() === trimmed.toLowerCase()
    )
    if (existing) {
      setCategory(existing)
      setShowNewCategory(false)
      setNewCategoryInput("")
      return
    }
    setCategories((prev) => [...prev, trimmed].sort())
    setCategory(trimmed)
    setShowNewCategory(false)
    setNewCategoryInput("")
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!title.trim()) return setError("Title is required.")
    if (!slug.trim()) return setError("Slug is required.")
    if (!excerpt.trim()) return setError("Excerpt is required.")
    const cleanContent = content.replace(/<p><br><\/p>/g, "").trim()
    if (!cleanContent) return setError("Content is required.")
    if (!author.trim()) return setError("Author name is required.")
    if (!category) return setError("Please select a category.")
    setSaving(true)
    try {
      const supabase = createClient()
      let imageUrl: string | null = null
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
      const { error: insertError } = await supabase.from("blog_posts").insert({
        title: title.trim(),
        slug: slug.trim(),
        excerpt: excerpt.trim(),
        content,
        author: author.trim(),
        author_role: authorRole.trim() || null,
        category,
        image_url: imageUrl,
        read_time: estimateReadTime(content),
        published,
        featured,
        published_at: published
          ? (publishDate ?? new Date()).toISOString()
          : null,
      })
      if (insertError) throw new Error(insertError.message)
      router.push("/admin")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
      setSaving(false)
      setUploading(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to dashboard</span>
          </Link>
          <div>
            <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground">
              Create New Post
            </h1>
            <p className="text-sm text-muted-foreground">
              Write and publish a new blog article
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
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

      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/50 dark:text-red-400">
          {error}
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
          {category && (
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {category}
            </span>
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
            className="prose prose-neutral max-w-none dark:prose-invert"
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
                <p className="mt-2 text-xs text-muted-foreground">
                  {imageFile?.name}
                  {" ("}
                  {((imageFile?.size ?? 0) / 1024).toFixed(0)}
                  {" KB)"}
                </p>
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
                {/* Category with dynamic creation */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-card-foreground">
                    {"Category "}
                    <span className="text-red-500">*</span>
                  </label>

                  {!showNewCategory ? (
                    <div className="flex flex-col gap-2">
                      <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={() => setShowNewCategory(true)}
                        className="flex items-center gap-1.5 self-start rounded-md px-2 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
                      >
                        <Plus className="h-3 w-3" />
                        Create new category
                      </button>
                    </div>
                  ) : (
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

                  {category && (
                    <div className="mt-2 flex items-center gap-2">
                      <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <Tag className="h-3 w-3" />
                        {category}
                      </span>
                      <button
                        type="button"
                        onClick={() => setCategory("")}
                        className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                      >
                        Change
                      </button>
                    </div>
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
                    ? "This post will be visible to the public immediately."
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
                          ? "This post will be highlighted in the Featured Article section on the blog page."
                          : "Enable to showcase this post as the Featured Article."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/admin"
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
                  {published ? "Publish Post" : "Save Draft"}
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
