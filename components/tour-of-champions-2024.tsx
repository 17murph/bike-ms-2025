import { PhotoCard } from "@/components/photo-card"

export function TourOfChampions2024() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Tour of Champions 2024</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PhotoCard
          id="toc-boardwalk"
          title="Group Photo at the Boardwalk"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tour%20of%20Champions%202024%20Group%20Photo.jpg-n673CF2DeSUtMUFJNxgbWmPG4KXu0y.jpeg"
          alt="Tour of Champions 2024 group photo at boardwalk"
          description="The Tour of Champions group gathered for a photo on the boardwalk"
        />
        <PhotoCard
          id="toc-evening-social"
          title="Evening Social with Jill"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tour%20of%20Champions%202024%20-%20Jill.jpg-lqEIBC9T5aJHrkoB5cL8tSNrC88W3o.jpeg"
          alt="Tour of Champions 2024 evening social with Jill"
          description="Enjoying the evening social event with Jill and other champions"
        />
        <PhotoCard
          id="toc-celebration-dinner"
          title="Celebration Dinner with Karyn of Georgia"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tour%20of%20Champions%202024%20-%20Casey%20and%20Karyn.jpg-pUJSwb90w1XxX7MJYHYAoxkMKeCU5R.jpeg"
          alt="Casey and Karyn at Tour of Champions 2024 celebration dinner"
          description="A special moment during the celebration dinner with Karyn from Georgia"
        />
        <PhotoCard
          id="toc-morning-ride"
          title="Morning Ride"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tour%20of%20Champions%202024%20-%20Bike%20Ride.jpg-g7G56BclILVRK1HAcFGg3KmyyjAqpt.jpeg"
          alt="Tour of Champions 2024 group bike ride"
          description="Starting the day with an invigorating group ride"
        />
      </div>
    </div>
  )
}

