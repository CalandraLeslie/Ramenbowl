/**
 * Type declarations for CSS modules and other assets
 * This file provides TypeScript type safety for importing CSS files and other assets
 */

/**
 * CSS Module declarations
 * Allows importing CSS files as modules in TypeScript
 */
declare module '*.css' {
  const content: any;
  export default content;
}

/**
 * Image asset declarations
 * Allows importing image files in TypeScript
 */
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}
