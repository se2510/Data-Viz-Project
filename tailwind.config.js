module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      'bg-vanilla',
      'bg-rufous',
      'bg-tiffanyBlue',
      'text-richBlack',
      'text-vanilla',
      // Agrega aquí todas las clases personalizadas que quieras asegurar que no se purguen
    ],
    corePlugins: {
      preflight: false, // Deshabilita los estilos por defecto
    },
    theme: {
      extend: {
        fontFamily: {
          miFuente: ['Valty DEMO', 'sans-serif'],
        },
        colors: {
          richBlack: '#001219',
          midnightGreen: '#005f73',
          darkCyan: '#0a9396',
          tiffanyBlue: '#94d2bd',
          vanilla: '#e9d8a6',
          gamboge: '#ee9b00',
          alloyOrange: '#ca6702',
          rust: '#bb3e03',
          rufous: '#ae2012',
          auburn: '#9b2226',
        },
        backgroundImage: {
          gradientTop: 'linear-gradient(0deg, #001219, #005f73, #0a9396, #94d2bd, #e9d8a6, #ee9b00, #ca6702, #bb3e03, #ae2012, #9b2226)',
          gradientRight: 'linear-gradient(90deg, #001219, #005f73, #0a9396, #94d2bd, #e9d8a6, #ee9b00, #ca6702, #bb3e03, #ae2012, #9b2226)',
          gradientBottom: 'linear-gradient(180deg, #001219, #005f73, #0a9396, #94d2bd, #e9d8a6, #ee9b00, #ca6702, #bb3e03, #ae2012, #9b2226)',
          gradientLeft: 'linear-gradient(270deg, #001219, #005f73, #0a9396, #94d2bd, #e9d8a6, #ee9b00, #ca6702, #bb3e03, #ae2012, #9b2226)',
          gradientTopRight: 'linear-gradient(45deg, #001219, #005f73, #0a9396, #94d2bd, #e9d8a6, #ee9b00, #ca6702, #bb3e03, #ae2012, #9b2226)',
          gradientBottomRight: 'linear-gradient(135deg, #001219, #005f73, #0a9396, #94d2bd, #e9d8a6, #ee9b00, #ca6702, #bb3e03, #ae2012, #9b2226)',
          gradientTopLeft: 'linear-gradient(225deg, #001219, #005f73, #0a9396, #94d2bd, #e9d8a6, #ee9b00, #ca6702, #bb3e03, #ae2012, #9b2226)',
          gradientBottomLeft: 'linear-gradient(315deg, #001219, #005f73, #0a9396, #94d2bd, #e9d8a6, #ee9b00, #ca6702, #bb3e03, #ae2012, #9b2226)',
          gradientRadial: 'radial-gradient(#001219, #005f73, #0a9396, #94d2bd, #e9d8a6, #ee9b00, #ca6702, #bb3e03, #ae2012, #9b2226)',
        },
      },
    },
    plugins: [],
  };