import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET(request: Request) {
  const zip = (new URL(request.url).searchParams.get("zip") || "").trim()
  if (!/^\d{5}$/.test(zip)) {
    return NextResponse.json({ error: "zip must be 5 digits" }, { status: 400 })
  }
  let zres: Response
  try {
    zres = await fetch(`https://api.zippopotam.us/us/${zip}`)
  } catch (err) {
    return NextResponse.json({ error: "ZIP lookup unavailable", detail: String(err) }, { status: 502 })
  }
  if (!zres.ok) return NextResponse.json({ error: "ZIP not found" }, { status: 404 })
  const data = await zres.json()
  const place = Array.isArray(data.places) && data.places[0]
  if (!place) return NextResponse.json({ error: "ZIP not found" }, { status: 404 })
  return NextResponse.json({ name: `${place["place name"]}, ${place["state abbreviation"]}`, population: null })
}
