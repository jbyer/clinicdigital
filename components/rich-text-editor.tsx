"use client"

import { useMemo, useRef, useEffect, useState } from "react"
import dynamic from "next/dynamic"
import "react-quill-new/dist/quill.snow.css"

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div className="flex h-64 items-center justify-center rounded-lg border border-input bg-background">
      <p className="text-sm text-muted-foreground">Loading editor...</p>
    </div>
  ),
})

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function RichTextEditor({
  value,
  onChange,
  placeholder,
}: RichTextEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [editorHeight, setEditorHeight] = useState<number | string>("auto")

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["blockquote", "code-block"],
        ["link", "image"],
        [{ align: [] }],
        ["clean"],
      ],
    }),
    []
  )

  const formats = useMemo(
    () => [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "list",
      "blockquote",
      "code-block",
      "link",
      "image",
      "align",
    ],
    []
  )

  useEffect(() => {
    // Handle auto-expanding editor based on content
    const timer = setTimeout(() => {
      if (containerRef.current) {
        const editorElement = containerRef.current.querySelector(".ql-editor")
        if (editorElement) {
          const scrollHeight = (editorElement as HTMLElement).scrollHeight
          setEditorHeight(Math.max(320, scrollHeight))
        }
      }
    }, 0)

    return () => clearTimeout(timer)
  }, [value])

  return (
    <div className="quill-wrapper blog-content" ref={containerRef}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
      <style jsx global>{`
        .quill-wrapper {
          display: flex;
          flex-direction: column;
          border-radius: 0.5rem !important;
          overflow: hidden;
          border: 1px solid hsl(var(--input));
        }
        .quill-wrapper .ql-toolbar {
          border-color: hsl(var(--border)) !important;
          border-radius: 0 !important;
          background: hsl(var(--background)) !important;
          position: sticky;
          top: 0;
          z-index: 10;
          border-bottom: 1px solid hsl(var(--border)) !important;
          flex-shrink: 0;
        }
        .quill-wrapper .ql-container {
          border-color: transparent !important;
          border-radius: 0 !important;
          background: hsl(var(--background)) !important;
          font-family: inherit !important;
          font-size: 0.875rem !important;
          border: none !important;
          flex: 1;
          overflow: visible !important;
        }
        .quill-wrapper .ql-editor {
          min-height: 20rem;
          max-height: none !important;
          overflow-y: visible !important;
          color: hsl(var(--foreground)) !important;
          padding-bottom: 4rem;
        }
        .quill-wrapper .ql-editor.ql-blank::before {
          color: hsl(var(--muted-foreground)) !important;
          font-style: normal !important;
        }
        /* Apply shared blog-content formatting inside the editor */
        .quill-wrapper .ql-editor h1,
        .quill-wrapper .ql-editor h2,
        .quill-wrapper .ql-editor h3,
        .quill-wrapper .ql-editor p,
        .quill-wrapper .ql-editor blockquote,
        .quill-wrapper .ql-editor ul,
        .quill-wrapper .ql-editor ol,
        .quill-wrapper .ql-editor li,
        .quill-wrapper .ql-editor pre,
        .quill-wrapper .ql-editor code,
        .quill-wrapper .ql-editor a,
        .quill-wrapper .ql-editor img {
          /* Inherit from .blog-content via the wrapper */
        }
        .quill-wrapper .ql-snow .ql-stroke {
          stroke: hsl(var(--muted-foreground)) !important;
        }
        .quill-wrapper .ql-snow .ql-fill {
          fill: hsl(var(--muted-foreground)) !important;
        }
        .quill-wrapper .ql-snow .ql-picker-label {
          color: hsl(var(--muted-foreground)) !important;
        }
        .quill-wrapper .ql-snow .ql-picker-options {
          background: hsl(var(--card)) !important;
          border-color: hsl(var(--border)) !important;
          border-radius: 0.5rem !important;
        }
        .quill-wrapper .ql-snow .ql-picker-item {
          color: hsl(var(--foreground)) !important;
        }
        .quill-wrapper .ql-toolbar button:hover .ql-stroke,
        .quill-wrapper .ql-toolbar button.ql-active .ql-stroke {
          stroke: hsl(var(--primary)) !important;
        }
        .quill-wrapper .ql-toolbar button:hover .ql-fill,
        .quill-wrapper .ql-toolbar button.ql-active .ql-fill {
          fill: hsl(var(--primary)) !important;
        }
        .quill-wrapper
          .ql-snow
          .ql-container:focus-within
          + .ql-toolbar,
        .quill-wrapper .ql-container:focus-within {
          border-color: hsl(var(--primary)) !important;
        }
        /* Content formatting is handled by the .blog-content class in globals.css */
      `}</style>
    </div>
  )
}
