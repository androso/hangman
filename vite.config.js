import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
*/


//! For use on Replit only
export default {
  plugins: [reactRefresh()],
  server: {
    host: '0.0.0.0',
    hmr: {
      port: 443,
    }
  }
}

//! IF YOU'RE NOT USING REPLIT USE THIS CONFIG INSTEAD 
// export default {
//   plugins: [reactRefresh()]
// }