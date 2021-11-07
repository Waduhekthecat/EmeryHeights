import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

// Query data array to populate cards
const data = [
  {
    platform: 'Hegic',
    underlying: 'WBTC',
    strike: '$60,000',
    amount: '1wbtc',
    expiry: '11/01/21',
    premium: '$2000',
  },
  {
    platform: 'Premia',
    underlying: 'WBTC',
    strike: '$60,000',
    amount: '1wbtc',
    expiry: '11/01/21',
    premium: '$2000',
  },
  {
    platform: 'Hegic',
    underlying: 'WBTC',
    strike: '$60,000',
    amount: '1wbtc',
    expiry: '11/01/21',
    premium: '$2000',
  },
];

interface MediaProps {
    loading?: boolean;
  }

  function Media(props: MediaProps) {
    const { loading = false } = props;
  
    return (
      <Grid container wrap="nowrap">
        {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
          <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
            {item ? (<img style={{ width: 210, height: 118 }} alt={item.platform}
          />
            ) : (<Skeleton variant="rectangular" width={210} height={118} /> )}
            {item ? (
              <Box sx={{ pr: 2 }}>
                <Typography gutterBottom variant="body2">
                  {item.platform}
                </Typography>
                <Typography display="block" variant="caption" color="text.secondary">
                  {item.underlying}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {`${item.strike} • ${item.amount}`}
                </Typography>
              </Box>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            )}
          </Box>
        ))}
      </Grid>
    );
  }

  export default function YouTube() {
    return (
      <Box sx={{ overflow: 'hidden' }}>
        <Media loading />
        <Media />
      </Box>
    );
  }