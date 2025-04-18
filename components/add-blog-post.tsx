"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface BlogPost {
  id: string
  title: string
  content: string
  date: string
  thumbsUp: number
  thumbsDown: number
}

interface AddBlogPostProps {
  onAddPost: (post: BlogPost) => void
}

export function AddBlogPost({ onAddPost }: AddBlogPostProps) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title && content) {
      const newPost: BlogPost = {
        id: Date.now().toString(),
        title,
        content,
        date: new Date().toISOString(),
        thumbsUp: 0,
        thumbsDown: 0,
      }
      onAddPost(newPost)
      setTitle("")
      setContent("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-1" />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={6}
          className="mt-1"
        />
      </div>
      <Button type="submit">Add Blog Post</Button>
    </form>
  )
}
