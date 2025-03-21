import dynamic from "next/dynamic"

// Example of correct dynamic import
const DynamicComponent = dynamic(() => import("@/components/some-component"), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})

export default function ExamplePage() {
  return (
    <div>
      <DynamicComponent />
    </div>
  )
}

