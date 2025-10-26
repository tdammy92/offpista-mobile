const fs = require('fs');
const path = require('path');
require('dotenv').config();

const GOOGLE_SERVICES_PATH = path.join(
  __dirname,
  '../android/app/google-services.json',
);

try {
  // Read the google-services.json file
  const googleServices = JSON.parse(
    fs.readFileSync(GOOGLE_SERVICES_PATH, 'utf8'),
  );

  // Update the API key
  if (googleServices.client?.[0]?.api_key?.[0]) {
    googleServices.client[0].api_key[0].current_key =
      process.env.FIREBASE_API_KEY_ANDROID;

    // Write the updated configuration back to the file
    fs.writeFileSync(
      GOOGLE_SERVICES_PATH,
      JSON.stringify(googleServices, null, 2),
    );

    console.log('✅ Successfully updated Android Firebase API key');
  } else {
    console.error('❌ Invalid google-services.json structure');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Error updating Firebase API key:', error.message);
  process.exit(1);
}
