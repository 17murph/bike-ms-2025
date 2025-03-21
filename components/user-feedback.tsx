"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThumbsUp, Trash2, MessageSquare, DollarSign } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface Comment {
  id: string
  text: string
  type: "Podcast" | "Donation"
  timestamp: number
  author: string
  likes: number
  season?: number
  episode?: string
}

export function UserFeedback() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [commentType, setCommentType] = useState<"Podcast" | "Donation">("Podcast")
  const [userName, setUserName] = useState("")
  const [season, setSeason] = useState<number>(1)
  const [episode, setEpisode] = useState("")
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  useEffect(() => {
    const storedComments = localStorage.getItem("comments")
    if (storedComments) {
      setComments(JSON.parse(storedComments))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments))
  }, [comments])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim() === "" || userName.trim() === "") return

    const newCommentObj: Comment = {
      id: Date.now().toString(),
      text: newComment,
      type: commentType,
      timestamp: Date.now(),
      author: userName.trim(),
      likes: 0,
      season: commentType === "Podcast" ? season : undefined,
      episode: commentType === "Podcast" ? episode : undefined,
    }

    setComments([newCommentObj, ...comments])
    setNewComment("")
    setUserName("")
    setSeason(1)
    setEpisode("")
    setSuccessMessage("Feedback submitted successfully!")
  }

  const handleDelete = (id: string) => {
    setComments(comments.filter((comment) => comment.id !== id))
  }

  const handleLike = (id: string) => {
    setComments(comments.map((comment) => (comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment)))
  }

  const renderComment = (comment: Comment) => (
    <Card key={comment.id} className="mb-4">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="font-semibold">{comment.author}</p>
            <p className="text-sm text-gray-500">{new Date(comment.timestamp).toLocaleString()}</p>
            {comment.type === "Podcast" && comment.season && comment.episode && (
              <p className="text-sm text-gray-500">
                Season {comment.season} - {comment.episode}
              </p>
            )}
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="sm" onClick={() => handleLike(comment.id)}>
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>{comment.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => handleDelete(comment.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p>{comment.text}</p>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      {successMessage && (
        <Alert variant="default">
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{successMessage}</AlertDescription>
        </Alert>
      )}
      <Card>
        <CardHeader>
          <CardTitle>Leave Your Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Your Name" required />
            <Select value={commentType} onValueChange={(value) => setCommentType(value as "Podcast" | "Donation")}>
              <SelectTrigger>
                <SelectValue placeholder="Select comment type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Podcast">Podcast</SelectItem>
                <SelectItem value="Donation">Donation</SelectItem>
              </SelectContent>
            </Select>
            {commentType === "Podcast" && (
              <>
                <Input
                  type="number"
                  value={season}
                  onChange={(e) => setSeason(Number(e.target.value))}
                  placeholder="Season Number"
                  required
                />
                <Input
                  value={episode}
                  onChange={(e) => setEpisode(e.target.value)}
                  placeholder="Episode Title"
                  required
                />
              </>
            )}
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Your comment..."
              required
            />
            <Button type="submit">Submit Comment</Button>
          </form>
        </CardContent>
      </Card>

      <Tabs defaultValue="podcast">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="podcast">
            <MessageSquare className="w-4 h-4 mr-2" />
            Podcast Comments
          </TabsTrigger>
          <TabsTrigger value="donation">
            <DollarSign className="w-4 h-4 mr-2" />
            Donation Comments
          </TabsTrigger>
        </TabsList>
        <TabsContent value="podcast">
          {comments.filter((comment) => comment.type === "Podcast").map(renderComment)}
        </TabsContent>
        <TabsContent value="donation">
          {comments.filter((comment) => comment.type === "Donation").map(renderComment)}
        </TabsContent>
      </Tabs>
    </div>
  )
}

