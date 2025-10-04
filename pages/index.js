// Home page with sections for top tags and latest articles
import { getSortedPostsData } from '../lib/posts';
import ArticleCard from '../components/ArticleCard';
import ArticleCardHorizontal from '../components/ArticleCardHorizontal';
import { Box, Typography, Container, Chip, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';

export async function getStaticProps() {
  const posts = getSortedPostsData();
  // Count tags
  const tagCount = {};
  posts.forEach(post => {
    (post.tags || []).forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });
  // Get top 5 tags
  const topTags = Object.entries(tagCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([tag]) => tag);
  return { props: { posts, topTags } };
}

export default function Home({ posts, topTags }) {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <Box sx={{
        width: '100%',
        minHeight: 340,
        background: `url(/norrskensleder/banner.webp) center/cover no-repeat, linear-gradient(120deg, #005cbf 60%, #ffd700 100%)`,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        py: 8,
        mb: 4,
        position: 'relative',
      }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
            textShadow: '0 2px 16px #00336699',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
            wordBreak: 'break-word',
            lineHeight: 1.15
          }}
        >
          Norrskensleder
        </Typography>
        <Typography
          variant="h2"
          sx={{
            maxWidth: 600,
            mx: 'auto',
            textShadow: '0 2px 8px #00336699',
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            wordBreak: 'break-word',
            lineHeight: 1.3
          }}
        >
          Explore Northern Europe and Beyond ...
        </Typography>
      </Box>
      <Container maxWidth="lg">
        {/* Tag Bar */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mb: 4 }}>
          {topTags.map(tag => (
            <a
              key={tag}
              href={`/tag/${tag}`}
              style={{ textDecoration: 'none' }}
            >
              <Chip
                label={tag}
                color="primary"
                sx={{ mr: 1, mb: 1, fontSize: 18, px: 2, py: 1, borderRadius: 2 }}
              />
            </a>
          ))}
        </Box>
      </Container>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}
        >
          Latest Articles
        </Typography>
        {posts.map(post => (
          <ArticleCardHorizontal key={post.slug} post={post} />
        ))}
      </Container>
      <Footer />
    </>
  );
}