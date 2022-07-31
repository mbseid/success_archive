import React from 'react';

import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent } from '@mui/material';
// utils
import { fDate } from '/imports/ui/utils/formatTime';
import { fShortenNumber } from '/imports/ui/utils/formatNumber';
//
import SvgIconStyle from '/imports/ui/components/SvgIconStyle';
import Iconify from '/imports/ui/components/Iconify';

// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const TitleStyle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled,
}));

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

LinkCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function LinkCard({ post, large = false, latest = false }) {
  let { title, description, tags, url } = post;
  tags = tags || [];
  const cover = "";

  return (
    <Grid item xs={12} sm={large ? 12 : 6} md={large ? 6 : 3}>
      <Card sx={{ position: 'relative' }}>
        {/*
        <CardMediaStyle
          sx={{
            ...((large || latest) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            ...(large && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            }),
          }}
        >
          <SvgIconStyle
            color="paper"
            src="/static/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
              color: 'background.paper',
              ...((large || latest) && { display: 'none' }),
            }}
          />
          <AvatarStyle
            alt={"author.name"}
            src={"author.avatarUrl"}
            sx={{
              ...((large || latest) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40,
              }),
            }}
          />

          <CoverImgStyle alt={title} src={cover} />
        </CardMediaStyle>
        */}
        <CardContent
          sx={{
            pt: 4,
            ...((large || latest) && {
              bottom: 0,
              width: '100%',
              position: 'absolute',
            }),
          }}
        >
          {/*
            <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
              {fDate(createdAt)}
            </Typography>
          */}

          <TitleStyle
            to={url}
            target="_blank"
            color="inherit"
            variant="subtitle2"
            underline="hover"
            component={RouterLink}
            sx={{
              ...(large && { typography: 'h5', height: 60 }),
              ...((large || latest) && {
                color: 'common.white',
              }),
            }}
          >
            {title}
          </TitleStyle>

          <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
              {description}
          </Typography>

          <InfoStyle>
            {tags.map((tag, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: index === 0 ? 0 : 1.5,
                  ...((large || latest) && {
                    color: 'grey.500',
                  }),
                }}
              >
                <Iconify icon={'bi:hash'} sx={{ width: 16, height: 16, mr: 0.5 }} />
                <Typography variant="caption">{tag}</Typography>
              </Box>
            ))}
          </InfoStyle>
        </CardContent>
      </Card>
    </Grid>
  );
}
