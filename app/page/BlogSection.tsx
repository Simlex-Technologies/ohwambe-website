import images from "@/public/images"
import Image from "next/image"
import Link from "next/link"
import { sectionPadding } from "../styles/styles"

export default function BlogSection() {
  const posts = [
    {
      title: "The Ultimate Checklist for Planning Your Next Destination Celebration",
      image: images.blog1,
      date: "May 1, 2023",
      href: "#",
    },
    {
      title: "How Digital Initiatives Are Transforming Modern Event Planning",
      image: images.blog2,
      date: "June 23, 2025",
      href: "#",
    },
    {
      title: "5 Creative Ways to Personalize Your Event Without the Memorable Celebration",
      image: images.blog3,
      date: "August 15, 2023",
      href: "#",
    },
  ]

  return (
    <section className={` ${sectionPadding} mb-20 py-12`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">Visit Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Link key={index} href={post.href} className="group block space-y-3 hover:opacity-80 transition-opacity">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-sm font-medium leading-tight text-gray-900">{post.title}</h3>
              <span className="text-xs text-[#666666]">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

