const QRCode = require('qrcode');

// Hardcoded URL
const url = 'https://ngrave.vercel.app/';
console.log(`Generating QR code for: ${url}`);

// Generate QR code and save to file
QRCode.toFile('qr.png', url, {
  scale: 30,
  color: {
    dark: '#000',
    light: '#0000'  // Transparent background (RGBA with 0 alpha)
  },
}, (err) => {
  if (err) {
    console.error('Error generating QR code:', err);
  } else {
    console.log('QR code has been saved as qr.png');
  }
});
