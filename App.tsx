import React, { } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { AuthProvider } from './src/contexts/AuthContext';
import Home from './src/screens/Home/Home';
import { theme } from './src/theme/theme';

export default function App() {

  // async function donwload(){
  //   const response = await api.post('create/', {
  //       url: link,
  //       ttl: 600,
  //   })
  //   console.log(response.data.link_url)
  // }



  return (
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Home/>
        </ThemeProvider>
      </AuthProvider>

  );
}

