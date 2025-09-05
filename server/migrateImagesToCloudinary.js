const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const imagesDir = path.join(__dirname, 'images');
const categories = ['coffee', 'beverages', 'desserts', 'pastries', 'snacks'];

// Store uploaded image URLs for database update
const uploadedImages = {};

async function uploadImagesToCloudinary() {
  console.log('🚀 Starting image upload to Cloudinary...');
  console.log('📁 Images directory:', imagesDir);
  
  for (const category of categories) {
    const categoryPath = path.join(imagesDir, category);
    
    if (!fs.existsSync(categoryPath)) {
      console.log(`⚠️  Category directory not found: ${category}`);
      continue;
    }
    
    console.log(`📁 Processing category: ${category}`);
    uploadedImages[category] = {};
    
    const files = fs.readdirSync(categoryPath);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png|gif|avif)$/i)) {
        const filePath = path.join(categoryPath, file);
        const fileName = path.parse(file).name;
        const publicId = `${category}/${fileName}`;
        
        try {
          console.log(`📤 Uploading: ${file} to ${publicId}`);
          
          const result = await cloudinary.uploader.upload(filePath, {
            public_id: publicId,
            folder: category,
            overwrite: true
          });
          
          // Store the URL for database update
          uploadedImages[category][fileName] = result.secure_url;
          console.log(`✅ Uploaded: ${file} -> ${result.secure_url}`);
        } catch (error) {
          console.error(`❌ Failed to upload ${file}:`, error.message);
        }
      }
    }
  }
  
  console.log('🎉 Image upload process completed!');
  console.log('\n📋 Uploaded Images Summary:');
  console.log(JSON.stringify(uploadedImages, null, 2));
  
  // Generate updated seedProducts.js content
  generateUpdatedSeedFile();
}

function generateUpdatedSeedFile() {
  console.log('\n🔄 Generating updated seedProducts.js...');
  
  // Read the original seed file
  const seedFilePath = path.join(__dirname, 'seedProducts.js');
  let seedContent = fs.readFileSync(seedFilePath, 'utf8');
  
  // Replace local image paths with Cloudinary URLs
  for (const category in uploadedImages) {
    for (const fileName in uploadedImages[category]) {
      const oldPath = `${category}/${fileName}.jpg`;
      const newUrl = uploadedImages[category][fileName];
      
      // Handle different file extensions
      const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.avif'];
      for (const ext of extensions) {
        const oldPathWithExt = `${category}/${fileName}${ext}`;
        if (seedContent.includes(oldPathWithExt)) {
          seedContent = seedContent.replace(new RegExp(oldPathWithExt, 'g'), newUrl);
          console.log(`🔄 Replaced: ${oldPathWithExt} -> ${newUrl}`);
        }
      }
    }
  }
  
  // Save updated seed file
  const updatedSeedPath = path.join(__dirname, 'seedProducts_cloudinary.js');
  fs.writeFileSync(updatedSeedPath, seedContent);
  console.log(`✅ Updated seed file saved as: ${updatedSeedPath}`);
  console.log('💡 Use this file for production deployment!');
}

// Run the upload
uploadImagesToCloudinary().catch(console.error);
