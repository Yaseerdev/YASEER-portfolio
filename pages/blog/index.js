import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogIndex() {
  // This would typically fetch blog posts from a CMS or markdown files
  const posts = [
    {
      slug: 'first-post',
      title: 'My First Blog Post',
      excerpt: 'This is a summary of my first blog post about web development.',
      date: '2023-05-15',
    },
    {
      slug: 'second-post',
      title: 'Learning Next.js',
      excerpt: 'My journey learning Next.js and how it improved my development workflow.',
      date: '2023-06-20',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Blog</h1>
        
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              
              <Link 
                href={`/blog/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read more →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}