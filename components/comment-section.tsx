"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { ThumbsUp, MessageSquare } from "lucide-react"

interface CommentSectionProps {
  type: string
}

export function CommentSection({ type }: CommentSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Comment submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      comment: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="space-y-8">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input placeholder="Your name" name="name" value={formData.name} onChange={handleChange} required />
        <Input
          type="email"
          placeholder="Your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          placeholder="Your comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          rows={4}
          required
        />
        <Button type="submit">Post Comment</Button>
      </form>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Comments</h3>
        <Card className="p-4 mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold">Sarah M.</h4>
              <p className="text-sm text-gray-500">1/10/2024</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-700">
                <ThumbsUp className="w-4 h-4 mr-1" />0
              </Button>
            </div>
          </div>
          <p className="mt-2">
            The episode with Dr. Vanessa Marin Collazo was so informative. Thank you for sharing these stories.
          </p>
          <div className="mt-2">
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
              <MessageSquare className="w-4 h-4 mr-1" />
              Reply
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

