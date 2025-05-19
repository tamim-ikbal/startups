export default function ViewsSkeleton() {
  return (
    <div className="fixed right-4 bottom-5 z-50 bg-gray-50 py-2 px-4 rounded-lg shadow-lg">
      <span className="w-3 h-3 bg-red-500 absolute -top-1.5 right-0 rounded-full animate-ping"></span>
      <span className="w-3 h-3 bg-red-500 absolute -top-1.5 right-0 rounded-full"></span>
      <span className="text-base font-normal text-black">0 views</span>
    </div>
  );
}
