export {}

declare global {
  interface Window {
    WebBrain?: {
      init: (config: { userId: string }) => void
    }
  }
}
