import { createClient } from "@/lib/supabase/server"
import { MetadataRoute } from "next"

const baseUrl = "https://www.clinicdigital.co"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages with their priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book-a-call`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    // Services
    {
      url: `${baseUrl}/services/seo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/web-design`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-chatbots`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-marketing-automation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/appointment-automation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/client-management`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/website-maintenance`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Offers
    {
      url: `${baseUrl}/offers/seo`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/offers/smart-website`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/offers/chatbot`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Legal
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  // Fetch published blog posts from Supabase
  let blogPages: MetadataRoute.Sitemap = []
  
  try {
    const supabase = await createClient()
    const { data: posts } = await supabase
      .from("posts")
      .select("slug, updated_at, published_at")
      .eq("published", true)
      .order("published_at", { ascending: false })

    if (posts) {
      blogPages = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at || post.published_at),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }))
    }
  } catch (error) {
    // If Supabase fetch fails, continue with static pages only
    console.error("Failed to fetch blog posts for sitemap:", error)
  }

  return [...staticPages, ...blogPages]
}
