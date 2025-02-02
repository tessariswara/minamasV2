'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

// project import
import MainCard from 'components/ui-component/cards/MainCard';
import Avatar from 'components/ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';
import useConfig from 'hooks/useConfig';

// third-party
import Slider from 'react-slick';
import Lightbox from 'react-18-image-lightbox';

// assets
const prod1 = '/assets/images/e-commerce/prod-1.png';
const prod2 = '/assets/images/e-commerce/prod-2.png';
const prod3 = '/assets/images/e-commerce/prod-3.png';
const prod4 = '/assets/images/e-commerce/prod-4.png';
const prod5 = '/assets/images/e-commerce/prod-5.png';
const prod6 = '/assets/images/e-commerce/prod-6.png';
const prod7 = '/assets/images/e-commerce/prod-7.png';
const prod8 = '/assets/images/e-commerce/prod-8.png';
const prod9 = '/assets/images/e-commerce/prod-9.png';

const prodImage = '/assets/images/e-commerce';

// ==============================|| PRODUCT DETAILS - IMAGES ||============================== //

const ProductImages = ({ product }) => {
  const { borderRadius } = useConfig();
  const products = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9];

  const downLG = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const initialImage = product.image ? `${prodImage}/${product.image}` : prod1;

  const [selected, setSelected] = useState(initialImage);
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9];

  const lgNo = downLG ? 4 : 3;

  const settings = {
    rows: 1,
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    initialSlide: Number(product.id) + 1,
    centerPadding: '0px',
    slidesToShow: products.length > 3 ? lgNo : products.length
  };

  return (
    <>
      <Grid container alignItems="center" justifyContent="center" spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard content={false} sx={{ m: '0 auto' }}>
            <CardMedia
              onClick={() => {
                setModal(!modal);
                setIsOpen(true);
              }}
              component="img"
              image={selected}
              sx={{ borderRadius: `${borderRadius}px`, overflow: 'hidden', cursor: 'zoom-in' }}
              alt="product images"
            />
          </MainCard>
        </Grid>
        <Grid item xs={11} sm={7} md={9} lg={10} xl={8}>
          <Slider {...settings}>
            {products.map((item, index) => (
              <Box
                key={index}
                onClick={() => {
                  setSelected(item);
                  setPhotoIndex(index);
                }}
                sx={{ p: 1 }}
              >
                <Avatar
                  outline={selected === item}
                  size={downLG ? 'lg' : 'md'}
                  color="primary"
                  src={item}
                  variant="rounded"
                  sx={{ m: '0 auto', cursor: 'pointer' }}
                  alt="product images"
                />
              </Box>
            ))}
          </Slider>
        </Grid>
      </Grid>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </>
  );
};

ProductImages.propTypes = {
  product: PropTypes.object
};

export default ProductImages;
