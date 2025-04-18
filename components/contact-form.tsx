"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      reason: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleReasonChange = (value: string) => {
    setFormData((prev) => ({ ...prev, reason: value }))
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </Label>
        <Input id="name" value={formData.name} onChange={handleChange} className="mt-1" required />
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </Label>
        <Input type="email" id="email" value={formData.email} onChange={handleChange} className="mt-1" required />
      </div>

      <div>
        <Label htmlFor="reason" className="block text-sm font-medium text-gray-700">
          Reason for Contact
        </Label>
        <Select onValueChange={handleReasonChange}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="share-story">Share My Story</SelectItem>
            <SelectItem value="sponsorship">Sponsorship Inquiry</SelectItem>
            <SelectItem value="question">General Question</SelectItem>
            <SelectItem value="feedback">Feedback</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </Label>
        <Textarea id="message" value={formData.message} onChange={handleChange} className="mt-1" rows={4} required />
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
