// material-ui
import { useTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

// project import
import Chip from 'components/ui-component/extended/Chip';
import { frameworks } from './FrameworkSection';
import { ThemeMode } from 'config';

// assets
import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

// Link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === ThemeMode.DARK ? theme.palette.text.secondary : theme.palette.text.hint,
  '&:hover': {
    color: theme.palette.primary.main
  },
  '&:active': {
    color: theme.palette.primary.main
  }
}));

// =============================|| LANDING - FOOTER SECTION ||============================= //

const FooterSection = () => {
  const theme = useTheme();
  const textColor = theme.palette.mode === ThemeMode.DARK ? 'text.secondary' : 'text.hint';

  return (
    <>
      <Container sx={{ mb: 15 }}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Grid container spacing={8}>
              <Grid item xs={12} md={4}>
                <Stack spacing={{ xs: 2, md: 5 }}>
                  <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                    About Berry
                  </Typography>
                  <Typography variant="body2" color={textColor}>
                    Berry React is a dashboard template that utilizes the Material-UI framework and the React JavaScript library. It offers
                    a range of features and customization options to help you create a powerful and user-friendly admin panel.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={{ xs: 5, md: 2 }}>
                  <Grid item xs={6} sm={3}>
                    <Stack spacing={{ xs: 3, md: 5 }}>
                      <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                        Help
                      </Typography>
                      <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                        <FooterLink href="https://links.codedthemes.com/HTIBc" target="_blank" underline="none">
                          Blog
                        </FooterLink>
                        <FooterLink href="https://codedthemes.gitbook.io/berry/" target="_blank" underline="none">
                          Documentation
                        </FooterLink>
                        <FooterLink href="https://codedthemes.gitbook.io/berry/changelog" target="_blank" underline="none">
                          Change Log
                        </FooterLink>
                        <FooterLink href="https://codedthemes.support-hub.io/" target="_blank" underline="none">
                          Support
                        </FooterLink>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Stack spacing={{ xs: 3, md: 5 }}>
                      <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                        Store Help
                      </Typography>
                      <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                        <FooterLink href="https://mui.com/store/license/" target="_blank" underline="none">
                          License
                        </FooterLink>
                        <FooterLink href="https://mui.com/store/customer-refund-policy/" target="_blank" underline="none">
                          Refund Policy
                        </FooterLink>
                        <FooterLink
                          href="https://support.mui.com/hc/en-us/sections/360002564979-For-customers"
                          target="_blank"
                          underline="none"
                        >
                          Submit a Request
                        </FooterLink>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Stack spacing={{ xs: 3, md: 5 }}>
                      <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                        Berry Eco-System
                      </Typography>
                      <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                        {frameworks.map((item, index) => (
                          <FooterLink href={item.link} target="_blank" underline="none" key={index}>
                            {item.title}
                            {item.isUpcoming && <Chip variant="outlined" size="small" label="Upcoming" sx={{ ml: 0.5 }} />}
                          </FooterLink>
                        ))}
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Stack spacing={{ xs: 3, md: 5 }}>
                      <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                        Free Versions
                      </Typography>
                      <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                        <FooterLink href="https://links.codedthemes.com/Yfkxg" target="_blank" underline="none">
                          Free React MUI
                        </FooterLink>
                        <FooterLink href="https://links.codedthemes.com/epTmN" target="_blank" underline="none">
                          Free Bootstrap 5
                        </FooterLink>
                        <FooterLink href="https://links.codedthemes.com/seQKN" target="_blank" underline="none">
                          Free Angular
                        </FooterLink>
                        <FooterLink href="https://links.codedthemes.com/Wfbiy" target="_blank" underline="none">
                          Free Django
                        </FooterLink>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ bgcolor: 'dark.dark', py: { xs: 3, sm: 1.5 } }}>
        <Container>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            spacing={{ xs: 1.5, sm: 1, md: 3 }}
          >
            <Typography color="text.secondary">
              © masch.{' '}
              <Link href="https://codedthemes.com/" target="_blank" underline="hover">
                Collaboration with WIT.ID
              </Link>
            </Typography>
            <Stack direction="row" alignItems="center" spacing={{ xs: 3, sm: 1.5, md: 2 }}>
              <IconButton size="small" aria-label="Berry Blog" component={Link} href="https://links.codedthemes.com/HTIBc" target="_blank">
                <PublicIcon sx={{ color: 'text.secondary', '&:hover': { color: 'error.main' } }} />
              </IconButton>
              <IconButton
                size="small"
                aria-label="codedTheme Twitter"
                component={Link}
                href="https://twitter.com/codedthemes"
                target="_blank"
              >
                <TwitterIcon sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }} />
              </IconButton>
              <IconButton
                size="small"
                aria-label="codedTheme Dribble"
                component={Link}
                href="https://dribbble.com/codedthemes"
                target="_blank"
              >
                <SportsBasketballIcon sx={{ color: 'text.secondary', '&:hover': { color: 'warning.main' } }} />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default FooterSection;
