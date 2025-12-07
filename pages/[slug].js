// Enhanced dynamic blog article page with SEO and accessibility
import { Container, Typography, Box, Chip, Breadcrumbs, IconButton } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getPostData, getSortedPostsData } from '../lib/posts';
import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Gallery from '../components/Gallery';
// import LikeDislike from '../components/LikeDislike';
// import CommentBox from '../components/CommentBox';
import SEO, { generateArticleSEO } from '../components/SEO';
import { AccessibleHeading, Landmark } from '../components/Accessibility';
import { Home, Tag, Share as ShareIcon, Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import Link from 'next/link';
import Image from "next/image";
import Script from 'next/script';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function Post({ post }) {
  const seoProps = generateArticleSEO(post);

  return (
    <>
      <SEO {...seoProps} image={post.coverImage || '/betweensystems/banner.webp'} />
      <Navbar />

      <Landmark role="main" id="main-content" aria-label="Blog post content">
        <Container maxWidth="md" sx={{ mt: 4 }}>
          {/* Breadcrumb navigation for accessibility */}
          <Breadcrumbs
            aria-label="Breadcrumb navigation"
            sx={{ mb: 3 }}
            separator="›"
          >
            <Link href="/">
              <span style={{ display: 'flex', alignItems: 'center', color: 'var(--mui-palette-primary-main)', textDecoration: 'none' }}>
                <Home style={{ marginRight: '4px', fontSize: 20 }} />
                Home
              </span>
            </Link>

            <Typography color="text.primary">{post.title}</Typography>
          </Breadcrumbs>

          {/* Article header */}
          <Box component="header" sx={{ mb: 4 }}>
            <AccessibleHeading level={2} sx={{ mb: 2, fontSize: { xs: '1.5rem', sm: '2rem', md: '3.5rem' }, wordBreak: 'break-word' }}>
              {post.title}
            </AccessibleHeading>

            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 2,
              mb: 2,
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '100%',
              minWidth: 0,
              overflow: 'hidden'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', minWidth: 0, maxWidth: '100%' }}>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="time"
                  dateTime={post.date}
                >
                  Published: {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </Typography>

                {post.readingTime && (
                  <Typography variant="subtitle2" color="text.secondary">
                    • {post.readingTime} min read
                  </Typography>
                )}
              </Box>

              {/* Social share icons */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto', flexWrap: 'wrap', minWidth: 0, maxWidth: '100%' }}>
                <IconButton
                  component="a"
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://betweensystems.com/' + post.slug)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  aria-label="Share on Twitter"
                  sx={{
                    '&:hover svg': { color: '#00ABE4' }
                  }}
                >
                  <Twitter fontSize="small" />
                </IconButton>
                <IconButton
                  component="a"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://betweensystems.com/' + post.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  aria-label="Share on Facebook"
                  sx={{
                    '&:hover svg': { color: '#00ABE4' }
                  }}
                >
                  <Facebook fontSize="small" />
                </IconButton>
                <IconButton
                  component="a"
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://betweensystems.com/' + post.slug)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  aria-label="Share on LinkedIn"
                  sx={{
                    '&:hover svg': { color: '#00ABE4' }
                  }}
                >
                  <LinkedIn fontSize="small" />
                </IconButton>
              </Box>
            </Box>

            {/* Tags */}
            {post.tags && (
              <Box sx={{ mb: 3 }} role="navigation" aria-label="Article tags">
                {post.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    component={Link}
                    href={`/tag/${tag}`}
                    clickable
                    size="big"
                    icon={<Tag fontSize="small" sx={{ color: '#fff' }} />} // icon color white by default
                    sx={{
                      mr: 1,
                      mb: 1,
                      color: '#fff',
                      backgroundColor: 'primary.main',
                      transition: 'background 0.2s, color 0.2s, font-weight 0.2s',
                      '& .MuiChip-icon': {
                        color: '#fff', // ensure icon is white by default
                        transition: 'color 0.2s, font-weight 0.2s'
                      },
                      '&:hover': {
                        backgroundColor: '#0FFCBE',
                        color: '#000',
                        fontWeight: 'bold',
                        '& .MuiChip-icon': {
                          color: '#000' // icon color black on hover
                        }
                      }
                    }}
                    aria-label={`View all posts tagged with ${tag}`}
                  />
                ))}
              </Box>
            )}
          </Box>

          {/* Cover image with proper accessibility */}
          {post.coverImage && (
            <figure style={{ margin: '24px 0', textAlign: 'center', maxWidth: '100%', overflow: 'auto' }}>
              <Image
                src={post.coverImage}
                alt={post.imageAlt || `Cover image for "${post.title}"`}
                width={1200}
                height={630}  // common blog cover size
                priority
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: 8,
                  boxShadow: '0 2px 16px #00336622',
                  display: 'block',
                  minWidth: 0
                }}
              />
              {post.imageCaption && (
                <figcaption style={{
                  marginTop: 8,
                  fontSize: '0.875rem',
                  color: '#666',
                  fontStyle: 'italic'
                }}>
                  {post.imageCaption}
                </figcaption>
              )}
            </figure>
          )}

          {/* YouTube video with accessibility */}
          {post.youtube && (
            <Box sx={{ my: 3 }}>
              <iframe
                width="100%"
                height="530"
                src={post.youtube.replace('watch?v=', 'embed/')}
                title={`YouTube video: ${post.title}`}
                frameBorder="0"
                allowFullScreen
                aria-describedby="video-description"
              />
              <Typography
                id="video-description"
                variant="caption"
                sx={{ display: 'block', mt: 1, color: 'text.secondary' }}
              >
                Embedded video related to this article
              </Typography>
            </Box>
          )}

          {/* Article content */}
          <Box
            component="article"
            sx={{ mt: 3, mb: 4, width: '100%', maxWidth: '100%', overflowX: 'auto', minWidth: 0 }}
            aria-label="Article content"
          >
            <MarkdownWithGallery content={post.content} />
          </Box>

          {/* Reading progress indicator */}
          <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, height: 4, zIndex: 1000 }}>
            <ReadingProgress />
          </Box>

          {/* Article footer */}
          {/* <Box component="footer" sx={{ mt: 6 }}>
            <LikeDislike slug={post.slug} />
            <CommentBox slug={post.slug} />
          </Box> */}
        </Container>
      </Landmark>

      <Footer />
    </>
  );
}

// Reading progress indicator component
function ReadingProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        width: `${progress}%`,
        height: '100%',
        background: 'linear-gradient(90deg, #00ABE4 0%, #0070f3 100%)',
        transition: 'width 0.1s ease-out'
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    />
  );
}

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostData(params.slug);
  return { props: { post } };
}

// Replaced MarkdownWithGallery: convert GFM tables to HTML and use rehypeRaw.
// Do NOT split content before running ReactMarkdown.
function MarkdownWithGallery({ content }) {
  // Improved convertTablesToHtml: more robust separator detection and column handling
  const convertTablesToHtml = (md) => {
    if (!md) return md;
    const lines = md.split('\n');
    const out = [];

    const trimPipes = (s) => s.trim().replace(/^\||\|$/g, '');
    const splitRow = (s) => trimPipes(s).split('|').map(cell => cell.trim());

    // Separator line is valid if each cell contains only :, -, and spaces and at least one '-'
    const isSeparatorLine = (s, expectedCols) => {
      const parts = splitRow(s);
      if (parts.length < expectedCols) return false;
      return parts.every(p => p.length > 0 && /^[:\-\s]+$/.test(p) && /-/.test(p));
    };

    const parseAligns = (sepRow, count) => {
      const parts = splitRow(sepRow);
      return parts.slice(0, count).map(p => {
        const left = /^\s*:-/.test(p);
        const right = /-:\s*$/.test(p);
        if (left && right) return 'center';
        if (right) return 'right';
        if (left) return 'left';
        return null;
      });
    };

    const buildTableHtml = (headers, aligns, rows) => {
      const ths = headers.map((h, i) => {
        const style = aligns[i] ? ` style="text-align:${aligns[i]}"` : '';
        return `<th${style}>${h}</th>`;
      }).join('');
      const trs = rows.map(r => {
        const cells = r.map((c, i) => {
          const style = aligns[i] ? ` style="text-align:${aligns[i]}"` : '';
          return `<td${style}>${c}</td>`;
        }).join('');
        return `<tr>${cells}</tr>`;
      }).join('');
      return `<div style="overflow-x:auto;margin:16px 0;"><table style="width:100%;border-collapse:collapse;">` +
             `<thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const next = lines[i + 1] ?? '';

      // Candidate header must contain at least one '|' and not be just code fence
      if (line.includes('|') && next.includes('|')) {
        const headers = splitRow(line);
        // Use isSeparatorLine with expected header count
        if (isSeparatorLine(next, headers.length)) {
          const aligns = parseAligns(next, headers.length);
          const rows = [];
          let j = i + 2;
          // Collect following pipe-rows until break (blank line or non-pipe line)
          while (j < lines.length && lines[j].trim() !== '' && lines[j].includes('|')) {
            rows.push(splitRow(lines[j]).slice(0, headers.length));
            j++;
          }
          out.push(buildTableHtml(headers, aligns, rows));
          i = j - 1;
          continue;
        }
      }

      out.push(line);
    }

    return out.join('\n');
  };

  const processed = useMemo(() => convertTablesToHtml(content), [content]);

  // Custom image renderer for non-gallery images
  const markdownImg = ({ src, alt, title, ...props }) => (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={800}
      height={600}
      style={{
        maxWidth: '100%',
        height: 'auto',
        borderRadius: 8,
        boxShadow: '0 2px 16px #00336622',
        margin: '16px 0',
        minWidth: 0
      }}
      {...props}
    />
  );

  // Custom link renderer to embed YouTube videos
  const markdownLink = ({ href, children, ...props }) => {
    const ytMatch = href && href.match(/^https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
    if (ytMatch) {
      const videoId = ytMatch[3];
      return (
        <iframe
          width="100%"
          height="513"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          frameBorder="0"
          allowFullScreen
          style={{ display: 'block', margin: '24px 0' }}
          {...props}
        />
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  };

  // Fixed paragraph renderer: if the child is a React element (e.g., iframe or other block element),
  // return it directly (no <p> wrapper). Otherwise return a normal <p>.
  const markdownP = ({ node, children, ...props }) => {
    if (React.isValidElement(children) || (Array.isArray(children) && children.length === 1 && React.isValidElement(children[0]))) {
      return <>{children}</>;
    }
    return <p {...props}>{children}</p>;
  };

  // Custom code block renderer
  const markdownCode = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={oneLight}
        language={match[1]}
        PreTag="div"
        customStyle={{
          borderRadius: 8,
          fontSize: '1rem',
          margin: '16px 0',
          background: '#ffffff',
        }}
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code
        style={{
          background: '#ffffff',
          color: '#0FFCBE',
          borderRadius: 4,
          padding: '2px 6px',
          fontSize: '0.95em',
        }}
        {...props}
      >
        {children}
      </code>
    );
  };

  // Styles for table elements (still used when HTML is parsed by rehype-raw)
  const thStyle = { borderBottom: '1px solid #ddd', textAlign: 'left', padding: '8px', background: '#fafafa' };
  const tdStyle = { borderBottom: '1px solid #eee', padding: '8px' };

  return (
    <ReactMarkdown
      // remarkPlugins left empty to avoid the mdast-util-gfm-table runtime issue
      rehypePlugins={[rehypeRaw]}
      components={{
        img: markdownImg,
        a: markdownLink,
        p: markdownP,
        code: markdownCode,
        table: ({ node, children, ...props }) => (
          <div style={{ overflowX: 'auto', margin: '16px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }} {...props}>
              {children}
            </table>
          </div>
        ),
        thead: ({ node, children, ...props }) => <thead {...props}>{children}</thead>,
        tbody: ({ node, children, ...props }) => <tbody {...props}>{children}</tbody>,
        tr: ({ node, children, ...props }) => <tr {...props}>{children}</tr>,
        th: ({ node, children, ...props }) => <th style={thStyle} {...props}>{children}</th>,
        td: ({ node, children, ...props }) => <td style={tdStyle} {...props}>{children}</td>,
      }}
    >
      {processed}
    </ReactMarkdown>
  );
}
