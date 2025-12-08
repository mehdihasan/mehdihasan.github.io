import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import Link from 'next/link';

// Utility to strip markdown and code blocks for summary
function getPlainSummary(content) {
  if (!content) return '';
  // Remove code blocks (```...```)
  let text = content.replace(/```[\s\S]*?```/g, '');
  // Remove inline code (`...`)
  text = text.replace(/`[^`]*`/g, '');
  // Remove markdown images ![alt](url)
  text = text.replace(/!\[.*?\]\(.*?\)/g, '');
  // Remove markdown links [text](url)
  text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
  // Remove headings, lists, blockquotes, etc.
  text = text.replace(/^#+\s/gm, '');
  text = text.replace(/^\s*>\s?/gm, '');
  text = text.replace(/^\s*[-*+]\s?/gm, '');
  // Collapse multiple newlines
  text = text.replace(/\n+/g, ' ');
  // Trim and limit length
  return text.trim().slice(0, 200);
}

export default function ArticleCardHorizontal({ post }) {
  return (
    <Card sx={{ display: 'flex', mb: 3, minHeight: 150, flexDirection: { xs: 'column', md: 'row' } }}>
      {post.coverImage && (
        <CardMedia
          component="img"
          image={post.coverImage}
          alt={post.title}
          sx={{
            width: { xs: '100%', md: 270 },
            height: { xs: 200, md: 270 },
            objectFit: 'cover',
            borderRadius: { xs: '4px 4px 0 0', md: '4px 0 0 4px' }
          }}
        />
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, maxWidth: { xs: '100%', md: 700 }, width: '100%', minWidth: 0 }}>
        <CardContent sx={{ flex: '1 0 auto', minWidth: 0 }}>
          {/* Tags for mobile: show after image, before title */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1, flexWrap: 'wrap', mb: 1 }}>
            {post.tags && post.tags.slice(0, 3).map(tag => (
              <Button
                key={tag}
                component={Link}
                href={`/tag/${tag}`}
                size="small"
                variant="outlined"
                color="primary"
                sx={{ textTransform: 'none', fontSize: 13, px: 1.5, py: 0.5 }}
              >
                #{tag}
              </Button>
            ))}
          </Box>
          <Typography variant="h5" gutterBottom sx={{ wordBreak: 'break-word', minWidth: 0 }}>{post.title}</Typography>
          {post.author && (
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5, wordBreak: 'break-word' }}>
              By {post.author}
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              mb: 1,
              wordBreak: 'break-word',
              minWidth: 0,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontSize: { xs: '1.05rem', md: '1.01rem' }
            }}
          >
            {getPlainSummary(post.content)}...
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end', mt: 'auto', width: '100%' }}>
          {/* Tags for desktop: show to the left of Read More */}
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
            {post.tags && post.tags.slice(0, 3).map(tag => (
              <Button
                key={tag}
                component={Link}
                href={`/tag/${tag}`}
                size="small"
                variant="outlined"
                color="primary"
                sx={{ textTransform: 'none', fontSize: 13, px: 1.5, py: 0.5 }}
              >
                #{tag}
              </Button>
            ))}
          </Box>
          <Button
            component={Link}
            href={`/${post.slug}`}
            variant="contained"
            size="big"
            sx={{
              color: '#fff',
              backgroundColor: '#00ABE4',
              transition: 'background 0.2s, color 0.2s, font-weight 0.2s',
              '&:hover': {
                backgroundColor: '#0FFCBE',
                color: '#000',
                fontWeight: 'bold'
              }
            }}
          >
            Read More
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
