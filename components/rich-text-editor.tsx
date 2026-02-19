"use client"

import { useMemo } from "react"
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
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["blockquote"],
        ["link"],
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
      "link",
    ],
    []
  )

  return (
    <div className="quill-wrapper">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
      <style jsx global>{`
        .quill-wrapper .ql-toolbar {
          border-color: hsl(var(--input)) !important;
          border-radius: 0.5rem 0.5rem 0 0 !important;
          background: hsl(var(--background)) !important;
        }
        .quill-wrapper .ql-container {
          border-color: hsl(var(--input)) !important;
          border-radius: 0 0 0.5rem 0.5rem !important;
          background: hsl(var(--background)) !important;
          font-family: inherit !important;
          font-size: 0.875rem !important;
          min-height: 20rem;
        }
        .quill-wrapper .ql-editor {
          min-height: 20rem;
          color: hsl(var(--foreground)) !important;
          line-height: 1.7 !important;
        }
        .quill-wrapper .ql-editor.ql-blank::before {
          color: hsl(var(--muted-foreground)) !important;
          font-style: normal !important;
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
        .quill-wrapper .ql-editor h2 {
          font-size: 1.5rem !important;
          font-weight: 700 !important;
          margin-top: 1.5rem !important;
          margin-bottom: 0.75rem !important;
        }
        .quill-wrapper .ql-editor h3 {
          font-size: 1.25rem !important;
          font-weight: 600 !important;
          margin-top: 1.25rem !important;
          margin-bottom: 0.5rem !important;
        }
        .quill-wrapper .ql-editor p {
          margin-bottom: 0.75rem !important;
        }
        .quill-wrapper .ql-editor blockquote {
          border-left: 3px solid hsl(var(--primary)) !important;
          padding-left: 1rem !important;
          color: hsl(var(--muted-foreground)) !important;
          font-style: italic !important;
        }
      `}</style>
    </div>
  )
}
