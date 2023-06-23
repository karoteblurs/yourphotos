import './../styles/globals.css';

export const metadata = {
  title: 'YourPhotos',
  description: 'YourPhotos is a new online photography service in Denmark!'
}


const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <head>
      </head>
       <body>
          {children}
      </body>
    </html>
  )
}

export default RootLayout
