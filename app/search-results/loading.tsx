export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="inline-block h-12 w-12 border-4 border-t-primary border-r-primary/30 border-b-primary/10 border-l-primary/60 rounded-full animate-spin mb-4"></div>
        <h2 className="text-xl font-semibold mb-2">Analyzing your request...</h2>
        <p className="text-slate-600">We're finding the perfect tools for your needs</p>
      </div>
    </div>
  )
}
