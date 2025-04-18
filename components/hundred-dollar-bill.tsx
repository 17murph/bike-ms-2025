import Image from "next/image"

export function HundredDollarBill() {
  return (
    <div className="relative w-[280px] h-[120px]">
      <Image
        src="/images/hundred-dollar-bill.png"
        alt="One hundred dollar bill"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  )
}
