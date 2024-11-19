// utils/slugify.ts
import slugify from "slugify";

export const toSlug = (text: string): string => {
  return slugify(text, {
    lower: true, // Convert to lowercase
    strict: true, // Remove special characters
    trim: true, // Remove leading/trailing whitespace
  });
};
