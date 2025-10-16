// Home page with sections for top tags and latest articles
import { getSortedPostsData } from '../lib/posts';
import ArticleCardHorizontal from '../components/ArticleCardHorizontal';
import { Box, Typography, Container, Chip, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';
import { useState, useEffect, useRef } from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PsychologyIcon from '@mui/icons-material/Psychology'; // Brain
import SmartToyIcon from '@mui/icons-material/SmartToy'; // Robot
import PublicIcon from '@mui/icons-material/Public'; // Globe
import HubIcon from '@mui/icons-material/Hub'; // Communication
import ExtensionIcon from '@mui/icons-material/Extension'; // Puzzle

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

function getRandomColor() {
  const colors = ['#000000', '#FFFFFF', '#FFD700', '#FF4081', '#7C4DFF', '#FF9800', '#43A047'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function HeroQuestionsAnimation() {
  const [items, setItems] = useState([]);
  const containerRef = useRef();

  // Icon types and their components
  const iconTypes = [
    { type: 'question', render: (q) => <span style={{
      color: q.color, fontSize: `${q.size}px`, fontWeight: 'bold'
    }}>?</span> },
    { type: 'idea', render: (q) => <LightbulbIcon sx={{ fontSize: q.size, color: q.color, verticalAlign: 'middle' }} /> },
    { type: 'brain', render: (q) => <PsychologyIcon sx={{ fontSize: q.size, color: q.color, verticalAlign: 'middle' }} /> }
  ];

  useEffect(() => {
    let id = 0;
    const interval = setInterval(() => {
      id++;
      const left = Math.random() * 90;
      const top = Math.random() * 60 + 10;
      const color = getRandomColor();
      const size = Math.random() * 64 + 64;
      const iconIdx = Math.floor(Math.random() * iconTypes.length);
      const type = iconTypes[iconIdx].type;
      setItems(qs => [
        ...qs,
        { id, left, top, color, size, type }
      ]);
      setTimeout(() => {
        setItems(qs => qs.filter(q => q.id !== id));
      }, 10000);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2 }}>
      {items.map(q => {
        const icon = iconTypes.find(i => i.type === q.type);
        return (
          <span
            key={q.id}
            style={{
              position: 'absolute',
              left: `${q.left}%`,
              top: `${q.top}%`,
              opacity: 0.85,
              animation: 'popFade 10s linear forwards'
            }}
          >
            {icon ? icon.render(q) : null}
          </span>
        );
      })}
      <style jsx>{`
        @keyframes popFade {
          0% { opacity: 0; transform: scale(0.5); }
          10% { opacity: 1; transform: scale(1.2); }
          60% { opacity: 1; transform: scale(1); }
          90% { opacity: 0.7; transform: scale(0.7); }
          100% { opacity: 0; transform: scale(0.3); }
        }
      `}</style>
    </div>
  );
}

export default function Home({ posts, topTags }) {
  const [search, setSearch] = useState('');
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [heroTranslate, setHeroTranslate] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Fade out and move up hero section as user scrolls down
      const fadeStart = 0;
      const fadeEnd = 200; // px
      const opacity = 1 - Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);
      const translate = Math.min(scrollY, fadeEnd);
      setHeroOpacity(opacity);
      setHeroTranslate(-translate);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Make Navbar sticky/fixed */}
      <Box sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
        <Navbar />
      </Box>
      {/* Hero Section */}
      <Box sx={{
        width: '100%',
        minHeight: 250,
        background: `linear-gradient(120deg, #00ABE4 60%, #0FFCBE 100%)`,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        py: 8,
        mb: 4,
        position: 'relative',
        overflow: 'hidden',
        zIndex: 0,
        opacity: heroOpacity,
        transform: `translateY(${heroTranslate}px)`,
        transition: 'opacity 0.2s, transform 0.2s'
      }}>
        <HeroQuestionsAnimation />
        <Typography
          variant="h2"
          sx={{
            maxWidth: 600,
            mx: 'auto',
            textShadow: '0 2px 8px #00336699',
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            wordBreak: 'break-word',
            lineHeight: 1.3,
            position: 'relative',
            zIndex: 3
          }}
        >
          Where technology meets curiosity ...
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
                sx={{
                  mr: 1,
                  mb: 1,
                  fontSize: 18,
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  color: '#fff', // font color white by default
                  transition: 'background 0.2s, color 0.2s, font-weight 0.2s',
                  '&:hover': {
                    backgroundColor: '#0FFCBE', // your custom hover color
                    color: '#000',
                    fontWeight: 'bold'
                  }
                }}
              />
            </a>
          ))}
        </Box>
      </Container>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {/* Search Bar */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search articles..."
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              fontSize: '1.1rem',
              border: '1px solid #ccc',
              borderRadius: 6,
              outline: 'none',
              boxShadow: '0 2px 8px rgba(25, 118, 210, 0.04)'
            }}
          />
        </Box>
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}
        >
          Latest Articles
        </Typography>
        {filteredPosts.length === 0 ? (
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
            No articles found.
          </Typography>
        ) : (
          filteredPosts.map(post => (
            <ArticleCardHorizontal key={post.slug} post={post} />
          ))
        )}
      </Container>
      <Footer />
    </>
  );
}