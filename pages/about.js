import { Container, Typography, Box, Avatar } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import resume from './mehdiresume.json';

export default function About() {
  const { basics } = resume;

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ mt: 6 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Avatar
            src={basics.picture}
            alt={basics.name}
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            {basics.name}
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
          My Story
        </Typography>
        <Typography sx={{ mb: 3 }}>

          From the lively streets of Bangladesh to the calm innovation hubs of Sweden, my journey in technology has been driven by curiosity, perseverance, and a constant desire to learn.

          <br /><br />
          I began my career as a network engineer, working on the nuts and bolts of connectivity. Over time, I found myself drawn deeper into software—building mobile apps, designing backend systems, and helping teams deliver meaningful products.

          <br /><br />
          Each role taught me something new: how to design for scale, how to balance reliability with speed, and how to help others grow through mentorship and collaboration.

          <br /><br />
          Today, I focus on distributed systems and data engineering—designing data platforms that help organizations understand and act on information in real time. I enjoy solving hard problems, learning from peers, and exploring how technology can quietly make things better.

          <br /><br />
          Outside work, I love to travel, take photos, and explore new ideas—because every experience, technical or otherwise, adds another layer to the story I'm still writing.

        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 4 }}>
          Want to know more? Check out my <a href="/profile" style={{ color: '#1976d2' }}>full resume</a>.
        </Typography>
      </Container>
      <Footer />
    </>
  );
}
