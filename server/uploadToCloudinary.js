const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function uploadImagesToCloudinary() {
  const imagesDir = path.join(__dirname, 'images');
  
  if (!fs.existsSync(imagesDir)) {
    console.log('❌ Images directory not found');
    return;
  }

  const categories = fs.readdirSync(imagesDir);
  console.log('📁 Found categories:', categories);

  for (const category of categories) {
    const categoryPath = path.join(imagesDir, category);
    
    if (fs.statSync(categoryPath).isDirectory()) {
      const files = fs.readdirSync(categoryPath);
      console.log(`📸 Uploading ${files.length} files from ${category}...`);
      
      for (const file of files) {
        const filePath = path.join(categoryPath, file);
        
        try {
          // Upload to Cloudinary with folder structure
          const result = await cloudinary.uploader.upload(filePath, {
            folder: `cafeteria/${category}`,
            public_id: path.parse(file).name,
            overwrite: true
          });
          
          console.log(`✅ Uploaded: ${category}/${file} -> ${result.secure_url}`);
        } catch (error) {
          console.error(`❌ Failed to upload ${category}/${file}:`, error.message);
        }
      }
    }
  }
  
  console.log('🎉 Image upload process completed!');
}

// Run the upload
uploadImagesToCloudinary().catch(console.error);
