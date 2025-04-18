"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MessageSquare, Phone, Mail } from "lucide-react"

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSMS = () => {
    // Simpler SMS link format
    window.location.href = `sms:+19045041500`
    setIsOpen(false)
  }

  const handleCall = () => {
    window.location.href = `tel:+19045041500`
    setIsOpen(false)
  }

  const handleEmail = () => {
    window.location.href = `mailto:CMURPHY@SJMALAW.COM`
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="fixed bottom-4 right-4 z-50 bg-blue-500 hover:bg-blue-600 text-white">
          <MessageSquare className="mr-2 h-4 w-4" /> Contact Casey
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Casey</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <Button onClick={handleSMS} className="flex items-center justify-start">
            <MessageSquare className="mr-2 h-4 w-4" /> Send SMS
          </Button>
          <Button onClick={handleCall} className="flex items-center justify-start">
            <Phone className="mr-2 h-4 w-4" /> Call
          </Button>
          <Button onClick={handleEmail} className="flex items-center justify-start">
            <Mail className="mr-2 h-4 w-4" /> Send Email
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
