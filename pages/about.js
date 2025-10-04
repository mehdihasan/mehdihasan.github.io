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
          From the vibrant streets of Bangladesh to the innovative tech hubs of Sweden, my journey has been one of curiosity, resilience, and continuous learning.
          <br /><br />
          I started as a network engineer, solving real-world connectivity challenges, and soon found myself drawn to the world of software—building mobile apps, architecting backend systems, and leading teams across continents.
          <br /><br />
          Each chapter brought new lessons: launching products for startups, scaling data platforms for global enterprises, and mentoring others to grow alongside me.
          <br /><br />
          Today, I specialize in distributed systems and data engineering, passionate about designing solutions that empower people and organizations. My story is still being written, fueled by a love for technology, travel, and the endless possibilities of learning.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 4 }}>
          Want to know more? Check out my <a href="/profile" style={{ color: '#1976d2' }}>full resume</a>.
        </Typography>
      </Container>
      <Footer />
    </>
  );
}
