import {BlogHeader} from "@/components/blog-header/blog-header-component";
import Image from "next/image";
import {BlogCardType} from "@/components/blog-card/blog-card-component";

const post: BlogCardType = {

    id: "1",
    title: "Classic Margherita Pizza",
    description: "A simple yet delicious traditional Italian pizza with fresh basil, mozzarella, and tomato sauce.",
    content: `
      <p>The Margherita pizza is a classic Italian pizza that showcases the colors of the Italian flag: red (tomato), white (mozzarella), and green (basil). It's simple, yet incredibly delicious when made with quality ingredients.</p>
      
      <h2>Ingredients</h2>
      <ul>
        <li>1 pizza dough (about 250g)</li>
        <li>80ml tomato sauce</li>
        <li>125g fresh mozzarella cheese, torn into pieces</li>
        <li>Fresh basil leaves</li>
        <li>2 tablespoons extra virgin olive oil</li>
        <li>Salt and freshly ground black pepper, to taste</li>
      </ul>
      
      <h2>Instructions</h2>
      <ol>
        <li>Preheat your oven to the highest temperature (usually around 500°F/260°C) with a pizza stone or baking sheet inside.</li>
        <li>On a floured surface, stretch or roll out your pizza dough to about 12 inches in diameter.</li>
        <li>Transfer the dough to a piece of parchment paper or a floured pizza peel.</li>
        <li>Spread the tomato sauce evenly over the dough, leaving a small border around the edges for the crust.</li>
        <li>Distribute the torn mozzarella pieces evenly over the sauce.</li>
        <li>Season with salt and freshly ground black pepper.</li>
        <li>Carefully transfer the pizza to the preheated pizza stone or baking sheet in the oven.</li>
        <li>Bake for 8-10 minutes, or until the crust is golden and the cheese is bubbly and slightly browned.</li>
        <li>Remove from the oven and immediately drizzle with olive oil.</li>
        <li>Scatter fresh basil leaves over the top.</li>
        <li>Let cool for a minute before slicing and serving.</li>
      </ol>
      
      <h2>Tips</h2>
      <p>For the best flavor, use San Marzano tomatoes for the sauce and fresh, high-quality mozzarella. If you can find it, buffalo mozzarella is traditional and adds an extra creamy texture.</p>
      
      <p>You can add a clove of minced garlic to the tomato sauce for extra flavor, though this isn't traditional.</p>
      
      <p>If you don't have a pizza stone, you can use an inverted baking sheet. The key is to preheat it well to get a crispy crust.</p>
    `,
    date: "2023-05-15",
    author: {
      name: "Chef Maria",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    category: "Italian",
    coverImage: "/placeholder.svg?height=600&width=1200",
    tags: ["Pizza", "Italian", "Vegetarian", "Dinner"],
}

export default function BlogPage({params = {id: ''}}: {params: {id: string}}) {

  if (!post) {
    return <div>Post not found</div>
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
      <div className="min-h-screen">
        <BlogHeader blogName={'Blog'} mainNavigationLinks={[{
          href: '/home',
          text: 'Home'
        }, {
          href: '/articles',
          text: 'Articles'
        },
          {
            href: '/Contact',
            text: 'Contact'
          }]} searchButtonText={'Search'}/>

        <main className="container mx-auto px-4 py-12">
          <article className="max-w-3xl mx-auto">

            <div className="mb-12">
              <span className="mb-24 p-2 rounded-full bg-gray-200 text-xs">
                {post?.category}
              </span>
              <h1 className="text-4xl font-bold mb-4">{post?.title}</h1>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center">
                  <Image
                      src={post?.author?.avatar }
                      alt={post?.author?.name}
                      width={24}
                      height={24}
                      className="rounded-full mr-2"
                  />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>•</span>
                  <span>{formattedDate}</span>
                </div>

              </div>
            </div>

            <div className="aspect-[16/9] relative mb-8 rounded-lg overflow-hidden">
              <Image
                  src={post?.coverImage || "/placeholder.svg"}
                  alt={post?.title}
                  fill
                  className="object-cover"
                  priority
              />
            </div>

            <div className="font-large max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post?.content! }} />

            <ul className="flex flex-wrap gap-2 mb-8">
              {post?.tags?.map((tag: string) => (
                  <li key={tag} className={'text-xs p-2 border-[1px] rounded-full'}>
                    {tag}
                  </li>
              ))}
            </ul>

            <div className="border-t  py-8 my-8">
              <div className="flex items-center gap-4">
                <Image
                    src={post?.author?.avatar || "/placeholder.svg"}
                    alt={post?.author?.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                />
                <h3 className="font-bold">{post?.author?.name}</h3>

              </div>
            </div>

          </article>
        </main>

        <footer className="border-t py-12 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>© Copyright João Saraiva.</p>
          </div>
        </footer>
      </div>
  );
}
