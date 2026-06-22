export const uploadToCloudinary = async (file, resourceType = 'auto') => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
  const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Cloudinary credentials are missing in environment variables.');
  }

  const timestamp = Math.round(new Date().getTime() / 1000);
  const strToSign = `timestamp=${timestamp}${apiSecret}`;

  const encoder = new TextEncoder();
  const data = encoder.encode(strToSign);
  const hashBuffer = await crypto.subtle.digest('SHA-1', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const signature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  const formData = new FormData();
  formData.append('file', file);
  formData.append('api_key', apiKey);
  formData.append('timestamp', timestamp);
  formData.append('signature', signature);

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

  const response = await fetch(url, { method: 'POST', body: formData });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Cloudinary Upload Error: ${errorData.error?.message || 'Unknown error'}`);
  }

  const result = await response.json();
  return result.secure_url;
};
