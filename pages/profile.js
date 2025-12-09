// About page
import { Container, Typography, Box, Avatar, Chip, Link, Divider, List, ListItem, ListItemText, Tooltip } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import resume from './mehdiresume.json';

export default function Profile() {
  const { basics, work, certification, skills } = resume;

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {/* Profile Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar
            src={basics.picture}
            alt={basics.name}
            sx={{ width: 80, height: 80, mr: 3 }}
          />
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {basics.name}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1 }}>
              {basics.label}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
              {basics.profiles?.map(profile => (
                <Chip
                  key={profile.network}
                  label={profile.network}
                  component={Link}
                  href={profile.url}
                  clickable
                  sx={{
                    mr: 1,
                    color: '#fff',
                    backgroundColor: 'primary.main',
                    transition: 'background 0.2s, color 0.2s',
                    '&:hover': {
                      backgroundColor: '#0FFCBE',
                      color: '#000'
                    }
                  }}
                />
              ))}
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {basics.location.city}, {basics.location.region}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />

        {/* Summary */}
        <Typography variant="h6" sx={{ mb: 1 }}>Summary</Typography>
        {/* ADD whiteSpace here */}
        <Typography sx={{ mb: 3, whiteSpace: 'pre-line' }}>
          {basics.summary}
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Skills */}
        <Typography variant="h6" sx={{ mb: 2 }}>Skills</Typography>
        {skills && skills.length > 0 && (
          <Box sx={{ mb: 3 }}>
            {skills.map(skill => (
              <Box key={skill.name} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {/* {skill.name} <span style={{ fontSize: '0.95rem', color: '#888' }}>{skill.level}</span> */}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {skill.keywords.map(keyword => (
                    <Chip
                      key={keyword}
                      label={keyword}
                      size="small"
                      sx={{
                        mb: 0.5,
                        color: '#fff',
                        backgroundColor: 'primary.main',
                        transition: 'background 0.2s, color 0.2s',
                        '&:hover': {
                          backgroundColor: '#0FFCBE',
                          color: '#000'
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        )}
        <Divider sx={{ my: 2 }} />

        {/* Work Experience */}
        <Typography variant="h6" sx={{ mb: 2 }}>Work Experience</Typography>
        {work.map(job => (
          <Box key={job.company} sx={{ mb: 4 }}>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {job.position} @ <Link href={job.website} target="_blank" rel="noopener">{job.company}</Link>
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {job.location} &nbsp;|&nbsp; {job.startDate} - {job.endDate || 'Present'}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 1 }}>{job.summary}</Typography>
            {job.highlights && job.highlights.length > 0 && (
              <Box component="ul" sx={{ marginTop: 1.5, marginBottom: 0, paddingLeft: 3 }}>
                {job.highlights.map((hl, idx) => (
                  <li key={idx} style={{ fontSize: '0.95rem', marginBottom: 4 }}>
                    {hl}
                  </li>
                ))}
              </Box>
            )}
            <Divider sx={{ my: 2 }} />
          </Box>
        ))}

        {/* Certifications */}
        <Typography variant="h6" sx={{ mb: 2 }}>Certifications</Typography>
        {certification && certification.length > 0 && (
          <List>
            {certification.map(cert => (
              <ListItem key={cert.certificate} sx={{ mb: 2 }} alignItems="flex-start">
                <ListItemText
                  primary={
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {cert.studyType} @ <Link href={cert.certificate} target="_blank" rel="noopener">{cert.institution}</Link>
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {cert.issueDate}
                      </Typography>
                      {/* Show full description, not truncated */}
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {cert.area}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
        <Divider sx={{ my: 2 }} />

      </Container>
      <Footer />
    </>
  );
}