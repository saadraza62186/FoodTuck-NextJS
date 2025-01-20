
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,       // Replace with your dataset (e.g., 'production')
  apiVersion: '2023-01-01',    // Use your Sanity API version
  useCdn: true,                // Use CDN for faster response
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
