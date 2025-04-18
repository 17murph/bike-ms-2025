"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Play, ChevronDown, ChevronUp } from "lucide-react"

interface Episode {
  title: string
  guest: string
  link: string
}

interface PodcastSeasonProps {
  season: {
    number: number
    episodes: Episode[]
  }
  isComingSoon?: boolean
}

export function PodcastSeason({ season, isComingSoon = false }: PodcastSeasonProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedEpisode, setSelectedEpisode] = useState<string | null>(null)

  const handleEpisodeSelect = (value: string) => {
    setSelectedEpisode(value)
    // Open the episode link directly when selected
    window.open(value, "_blank", "noopener,noreferrer")
  }

  // Show only first 5 episodes when collapsed
  const displayedEpisodes = isExpanded ? season.episodes : season.episodes.slice(0, 5)
  const hasMoreEpisodes = season.episodes.length > 5

  return (
    <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <div className="bg-primary text-white p-3 sm:p-4 rounded-t-xl">
        <div className="text-lg sm:text-xl font-semibold leading-none tracking-tight text-center">
          Season {season.number}
        </div>
      </div>
      <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
        {isComingSoon ? (
          <>
            <p className="text-center font-medium">COMING SOON: Jasmine Hanna</p>
            <Button disabled className="w-full" variant="outline">
              COMING SOON - MARCH 2025
            </Button>
          </>
        ) : (
          <>
            <Select onValueChange={handleEpisodeSelect} value={selectedEpisode || undefined}>
              <SelectTrigger className="h-auto">
                <SelectValue placeholder="Select an episode to play" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {season.episodes.map((episode, index) => (
                  <SelectItem key={index} value={episode.link} className="flex items-center">
                    <div className="flex items-center w-full">
                      <Play className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      <span className="truncate">
                        {episode.title} - {episode.guest}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="space-y-2 mt-4">
              {displayedEpisodes.map((episode, index) => (
                <a
                  key={index}
                  href={episode.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Play className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm line-clamp-2">{episode.title}</div>
                    <div className="text-xs text-gray-500 line-clamp-1">Guest: {episode.guest}</div>
                  </div>
                </a>
              ))}
            </div>

            {hasMoreEpisodes && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full text-primary hover:text-primary/80 hover:bg-primary/10"
              >
                {isExpanded ? (
                  <span className="flex items-center">
                    Show Less <ChevronUp className="ml-2 h-4 w-4" />
                  </span>
                ) : (
                  <span className="flex items-center">
                    Show More ({season.episodes.length - 5} more) <ChevronDown className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
