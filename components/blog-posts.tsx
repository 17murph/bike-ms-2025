"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AddBlogPost } from "@/components/add-blog-post"

interface BlogPost {
  id: string
  title: string
  content: string
  date: string
  videoSrc?: string
}

const permanentPosts: BlogPost[] = [
  {
    id: "permanent-2",
    title: "Back in the Saddle for Another Bike MS Season",
    content: `I've completely lost track of how many Bike MS rides I've done at this point. I think it's somewhere around 35. It all started back in 1995 with my first ride in Colorado. I took a couple of years off for knee surgeries—because, well, I've had 17 knee surgeries—but otherwise, Bike MS has been a huge part of my life for nearly three decades.

In recent years, I've expanded my Bike MS portfolio through the Passport Program, which allows me to experience different rides across the country. Last year, I tackled six rides, including my home ride, Bike MS: PGA TOUR Cycle to the Shore here in North Florida. This year, I'm signed up for six more, with Kentucky being the newest addition. My goal is to continue adding new events each year, taking in different routes, meeting new people, and enjoying the unique energy each ride brings.

Starting 2025 Training—A Little Late

Every year, I tell myself I won't take time off after my last ride in October. Every year, life happens. Between the holidays and other commitments, I always end up with a longer break than planned. This year, I also got married in January (which, of course, was absolutely worth it), but that meant even more time off the bike.

Last week, I finally got back out for my first training ride of 2025. It was rough. I could feel the time off, and my knees—did I mention I've had 17 knee surgeries?—reminded me that I'm not as young as I used to be. As much as I hate to admit it, I've started looking at e-road bikes with pedal assist. My ego is struggling with this, but my knees are making a strong case. I want to emphasize that any e-road bike I consider would be pedal assist only and used sparingly. My regular road bike will still be my main ride, especially for Bike MS events.

Today's Ride—A Small Improvement

Today's ride was better than last week, but I still hit a wall around 22 miles. That tells me one thing: I need to be riding more than just a couple of times a week. I have a NordicTrack at home, and I really need to start using it more consistently. My hope is that with more training, my knees will feel better, and I can put off the e-road bike decision for a while.

The reality is, though, my knees have been hurting more than ever after riding. Actually, scratch that—they started hurting midway through last season after every ride. The last ride of the year was cut short to one day because of a hurricane. Normally, I would've been disappointed, but for the first time, I was grateful for the forced break. My body was exhausted.

I had made a commitment to ride the second day no matter what, because in my mind, those with MS don't get to take a day off. But I also knew it was going to be an extremely difficult ride. When the weather canceled it, I felt conflicted—sad that we couldn't ride but relieved that my body didn't have to endure another painful day.

Not a 'Woe is Me' Blog—This is a Fight

I know this post might sound a little more like a struggle than an inspiration, but let's be real: Bike MS isn't easy. It's not supposed to be. We ride because we believe in this cause, and we push through pain because people with MS don't have the luxury of simply "taking it easy."

Tomorrow is a new day, and I'll be back out on the bike. This fight isn't over, and neither am I.

Thank you to everyone who follows and supports this journey. Here's to another year of riding, fundraising, and pushing toward a cure.

See you on the road. 🚴‍♂️ #BikeMS #MSWarrior #KeepFighting`,
    date: "2025-02-08",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Feb%208%20Ride-YkcWZbUu8P6Wfhx8IG8of5pysBxZeI.mov",
  },
  {
    id: "permanent-1",
    title: "Why This Fight Matters – And Why You Should Care",
    content: `MS doesn't wait. Neither can we.

I ride for Kim Imus Schaefer, Karyn Laterza, Debbie Hamm, and Delaney Liskey. If you know them, you know their strength. If you don't, know this—each of them has faced days where their own body fought against them. Days when they couldn't walk, couldn't see clearly, couldn't even hold a pen.

They don't get to take a break from multiple sclerosis. So we don't take a break from fighting for them.

That's why I ride. That's why I fundraise. That's why this website exists.

What You Can Do Right Now

1. 🧡 Ride With Us – Join me in a Bike MS event and be part of the movement.

2. 🎙️ Listen & Share – The Other Side of MS podcast gives a voice to those living with MS. Hear their stories, understand their fight.

3. 💪 Donate to Make an Impact – Every dollar brings us closer to better treatments, better support, and one day, a cure.

Last year, funding from Bike MS helped reduce relapses and hospital visits for people living with MS. That's real progress. That's what your support makes possible. But there's still work to do.

You Can Be Part of This Fight

Because of you, someone with MS will wake up tomorrow with more hope than they had today.
Because of you, a breakthrough treatment could be one step closer.
Because of you, we keep riding forward.

We don't have to accept MS as it is. Together, we can change what it means for the future.`,
    date: "2025-02-07",
  },
]

export function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(permanentPosts)

  useEffect(() => {
    const savedPosts = localStorage.getItem("blogPosts")
    if (savedPosts) {
      const parsedPosts = JSON.parse(savedPosts)
      setPosts([...permanentPosts, ...parsedPosts])
    }
  }, [])

  const handleAddPost = (newPost: BlogPost) => {
    setPosts((prevPosts) => {
      const updatedPosts = [newPost, ...prevPosts]
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts.slice(permanentPosts.length)))
      return updatedPosts
    })
  }

  return (
    <div>
      <AddBlogPost onAddPost={handleAddPost} />
      <div className="space-y-8">
        {posts.map((post) => (
          <Card key={post.id} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">{post.title}</CardTitle>
              <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
            </CardHeader>
            <CardContent>
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {post.videoSrc && (
                <div className="mt-4">
                  <video src={post.videoSrc} controls className="w-full" />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

