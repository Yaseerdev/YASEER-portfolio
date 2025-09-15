import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // This would typically fetch the blog post content based on the slug
  const post = {
    slug: slug,
    title: 'My First Blog Post',
    content: `
      <p>This is the content of my first blog post.</p>
      <p>I'm excited to share my thoughts and experiences with you.</p>
      <h2>Getting Started</h2>
      <p>When I first started learning web development, I found it challenging but rewarding.</p>
    `,
    date: '2023-05-15',
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">{post.title}</h1>
          
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          
          <div 
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12">
            <a 
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Back to all posts
            </a>
          </div>
        </motion.article>
      </div>
    </div>
  );
}