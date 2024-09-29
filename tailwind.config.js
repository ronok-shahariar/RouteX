/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      colors: {
        header: '#262626', 
        buyNow: '#82b440',
        buyNowHover: '#7AA93C',
        greenBody: '#034833',
        playButtonZoom: '#046b4b',
        getAnAppointment: '#76c644',
        button: '#83CD20',
      },
    },
  },
  plugins: [],
}

