// utils/calculateReadingTime.ts

export function calculateReadingTime(htmlString) {
  if (!htmlString) return 0;

  // 1. Strip HTML tags using DOMParser (in browser) or regex (in server)
  const text = htmlString
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // 2. Count words
  const wordCount = text.split(" ").length;

  // 3. Calculate time (average reading speed: 200 wpm)
  const wordsPerMinute = 200;
  const minutes = Math.ceil(wordCount / wordsPerMinute);

  return minutes;
}
