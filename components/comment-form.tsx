"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CommentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Bike MS",
    comment: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Prepare email content
    const emailSubject = `New ${formData.type} Comment from ${formData.name}`
    const emailBody = `
Type: ${formData.type}
Name: ${formData.name}
Email: ${formData.email}
Comment: ${formData.comment}
    `

    // Create mailto link with encoded subject and body
    const mailtoLink = `mailto:CMURPHY@SJMALAW.COM?subject=${encodeURIComponent(
      emailSubject,
    )}&body=${encodeURIComponent(emailBody)}`

    // Open email client
    window.location.href = mailtoLink

    // Reset form
    setFormData({
      name: "",
      email: "",
      type: "Bike MS",
      comment: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="type">Comment Type</Label>
        <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Bike MS">Bike MS</SelectItem>
            <SelectItem value="Podcast">Podcast</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="comment">Comment</Label>
        <Textarea
          id="comment"
          required
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          className="min-h-[100px]"
        />
      </div>

      <Button type="submit" className="w-full">
        Submit Comment
      </Button>
    </form>
  )
}
