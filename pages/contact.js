// Contact page
import { Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Contact</Typography>
        <Typography>
          You can reach us via email at <a href="mailto:contact@betweensystems.com">contact@betweensystems.com</a>.
        </Typography>
      </Container>
      <Footer />
    </>
  );
}