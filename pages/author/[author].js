import { Container, Typography, Box, Card, CardContent, Chip } from '@mui/material';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getSortedPostsData, getPostsByAuthor } from '../../lib/posts';
import SEO from '../../components/SEO';
import { Landmark } from '../../components/Accessibility';
import Link from 'next/link';
import { Tag } from '@mui/icons-material';

export default function AuthorPage({ author, posts }) {
  const seoProps = {
    title: `Posts by ${author} | Between Systems`,
    description: `Read all articles by ${author}.`,
    canonical: `https://betweensystems.com/author/${encodeURIComponent(author.toLowerCase().replace(/\s+/g, '-'))}`,
  };

  return (
    <>
      <SEO {...seoProps} />
      <Navbar />

      <Landmark role="main" id="main-content" aria-label="Author archive">
        <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
          {/* Author header */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700 }}
            >
              {author}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </Typography>
          </Box>

          {/* Posts list */}
          {posts.length > 0 ? (
            <Box sx={{ display: 'grid', gap: 3 }}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/${post.slug}`} passHref legacyBehavior>
                  <Card
                    component="a"
                    sx={{
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease-out',
                      '&:hover': {
                        boxShadow: '0 8px 24px rgba(0, 171, 228, 0.15)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          mb: 1,
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
                          fontWeight: 600,
                        }}
                      >
                        {post.title}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                        <Typography variant="caption" color="text.secondary">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </Typography>
                        {post.readingTime && (
                          <Typography variant="caption" color="text.secondary">
                            • {post.readingTime} min read
                          </Typography>
                        )}
                      </Box>

                      {/* Tags */}
                      {post.tags && (
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          {post.tags.map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              size="small"
                              icon={<Tag fontSize="small" sx={{ color: '#fff' }} />}
                              sx={{
                                color: '#fff',
                                backgroundColor: 'primary.main',
                                fontSize: '0.75rem',
                              }}
                            />
                          ))}
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </Box>
          ) : (
            <Box sx={{ textAlign: 'center', py: 6 }}>
              <Typography variant="body1" color="text.secondary">
                No articles found for this author.
              </Typography>
            </Box>
          )}
        </Container>
      </Landmark>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  // Extract unique author names and slugify them
  const authors = new Set();
  posts.forEach((post) => {
    const name = typeof post.author === 'string' ? post.author : post.author?.name;
    if (name) authors.add(name);
  });

  const slugify = (s = '') =>
    String(s)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

  const paths = Array.from(authors).map((author) => ({
    params: { author: slugify(author) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const posts = getSortedPostsData();
  // Find the actual author name from the slug
  const slugify = (s = '') =>
    String(s)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

  const authorSlug = params.author;
  const authorPost = posts.find(
    (post) => slugify(typeof post.author === 'string' ? post.author : post.author?.name || '') === authorSlug
  );

  if (!authorPost) {
    return { notFound: true };
  }

  const authorName = typeof authorPost.author === 'string' ? authorPost.author : authorPost.author?.name;
  const authorPosts = getPostsByAuthor(authorName);

  return {
    props: {
      author: authorName,
      posts: authorPosts,
    },
  };
}
