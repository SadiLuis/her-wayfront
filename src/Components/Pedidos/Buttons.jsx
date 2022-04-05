import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { pedirConductora} from '../../actions/conductora'


const images = [
  {
      id:1,
    url: require('../../Media/gama_media.jpg'),
    tipo_auto: 'Movil Gama Media',
    width: '33.33%',
  },
  {
      id:2,
    url: require('../../Media/alta_gama.jpg'),
    tipo_auto: 'Movil Gama Alta',
    width: '33.33%',
  },
  {
      id:3,
    url: require('../../Media/utilitarios.jpg'),
    tipo_auto: 'Utilitario',
    width: '33.33%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));



export default function ButtonBases() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const filtros = useSelector((state)=> state.conductoras.filtros)
console.log('filtros :>> ', filtros);

useEffect(() => {
  dispatch(pedirConductora())
  
}, [dispatch]);

  const handleClick = (e, tipo_auto) => {   
    e.preventDefault();
    if(filtros.length){
      return filtros.filter((c)=>c.tipo_auto===tipo_auto)
    }
    console.log('soy el boton')
    navigate('/conductoras')
    
}
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          onClick={handleClick}
          focusRipple
          key={image.tipo_auto}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="#FFA8D9"
              fontWeight={700}
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.tipo_auto}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>        
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
