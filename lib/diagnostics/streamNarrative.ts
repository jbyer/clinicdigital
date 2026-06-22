export interface ChatMessage { role: "system" | "user"; content: string }

export async function streamNarrative(
  messages: ChatMessage[],
  onToken: (t: string) => void,
): Promise<void> {
  const res = await fetch("/api/diagnostic-llm", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages, max_tokens: 300, temperature: 0.5 }),
  })
  if (!res.ok || !res.body) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error || `Server error ${res.status}`)
  }
  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ""
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buffer += decoder.decode(value, { stream: true })
    const lines = buffer.split("\n")
    buffer = lines.pop() ?? ""
    for (const line of lines) {
      if (!line.startsWith("data: ")) continue
      const data = line.slice(6)
      if (data === "[DONE]") return
      try {
        const obj = JSON.parse(data)
        if (obj.error) throw new Error(obj.error)
        if (obj.token) onToken(obj.token)
      } catch (e) {
        if (e instanceof Error && !e.message.startsWith("Unexpected")) throw e
      }
    }
  }
}
