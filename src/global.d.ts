/// <reference types="vite/client" />

export {}

declare module '*.md' {
  const content: string
  export default content
}

declare global {
  interface Window {
    WebBrain?: {
      init: (config: { userId: string }) => void
    }
  }
}
