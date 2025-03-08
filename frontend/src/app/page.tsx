import {BlogHeader} from "@/components/blog-header/blog-header-component";
import {BlogCardComponent, BlogCardType} from "@/components/blog-card/blog-card-component";

export default function Home() {
  const blogPosts: Array<BlogCardType> = [
    {
      id: "1",
      title: "Classic Margherita Pizza",
      description: "A simple yet delicious traditional Italian pizza with fresh basil, mozzarella, and tomato sauce.",
      date: "2023-05-15",
      author: {
        name: "Chef Maria",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Italian",
      coverImage: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "2",
      title: "Creamy Mushroom Risotto",
      description: "A rich and creamy Italian rice dish with sautéed mushrooms, white wine, and parmesan cheese.",
      date: "2023-06-02",
      author: {
        name: "Chef Thomas",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Italian",
      coverImage: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "3",
      title: "Thai Green Curry",
      description: "A fragrant and spicy Thai curry with coconut milk, vegetables, and your choice of protein.",
      date: "2023-06-20",
      author: {
        name: "Chef Lily",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Thai",
      coverImage: "/placeholder.svg?height=400&width=600",
    },
  ]
  return (
    <div className="mx-0 px-0">
      <BlogHeader blogName={'Blog'} mainNavigationLinks={[{
        href: '/',
        text: 'Home'
      }, {
        href: '/recipes',
        text: 'Recipes'
      },
        {
          href: '/Contact',
          text: 'Contact'
        }]} searchButtonText={'Search'}/>

      <main className="container mx-auto px-4 py-12 ">
        <section className="mb-16 grid gap-y-14">
          <div className=" text-center grid gap-y-5">
            <h1 className="text-4xl font-bold mb-4">Recipes blog</h1>
            <p className="max-w-2xl mx-auto">
              Discover simple, tasty recipes that anyone can make. From quick weeknight dinners to impressive dinner party dishes.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
                <BlogCardComponent key={post?.id} {...post} />
            ))}
          </ul>

        </section>

        <section className="border-t pt-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
            <p className="mb-6">
              Get the latest recipes sent straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm"
              />
              <button className="sm:w-auto">Subscribe</button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© Copyright João Saraiva.</p>
        </div>
      </footer>
    </div>
  );
}
