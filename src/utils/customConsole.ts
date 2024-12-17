type ConsoleCallback = (message: string) => void

class CustomConsole {
  private callback: ConsoleCallback

  constructor(callback: ConsoleCallback) {
    this.callback = callback
  }

  log(...args: any[]) {
    const message = args
      .map((arg) =>
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      )
      .join(' ')
    this.callback(`> ${message}`)
  }

  error(...args: any[]) {
    const message = args
      .map((arg) => (arg instanceof Error ? arg.message : String(arg)))
      .join(' ')
    this.callback(`${message}`)
  }
}

export const createCustomConsole = (callback: ConsoleCallback) =>
  new CustomConsole(callback)
