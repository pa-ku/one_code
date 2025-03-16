type ConsoleCallback = (message: string) => void;

// Create a partial implementation of the Console interface
class CustomConsole implements Partial<Console> {
  private callback: ConsoleCallback;

  constructor(callback: ConsoleCallback) {
    this.callback = callback;
  }

  log(...args: unknown[]) {
    const message = args
      .map((arg) =>
        typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg),
      )
      .join(" ");
    this.callback(`${message}`);
  }

  error(...args: unknown[]) {
    const message = args
      .map((arg) => (arg instanceof Error ? arg.message : String(arg)))
      .join(" ");
    this.callback(`${message}`);
  }

  // Add stub implementations for required Console methods
  assert(): void {}
  clear(): void {}
  count(): void {}
  countReset(): void {}
  debug(...args: unknown[]): void {
    this.log(...args);
  }
  dir(): void {}
  dirxml(): void {}
  group(): void {}
  groupCollapsed(): void {}
  groupEnd(): void {}
  info(...args: unknown[]): void {
    this.log(...args);
  }
  table(): void {}
  time(): void {}
  timeEnd(): void {}
  timeLog(): void {}
  timeStamp(): void {}
  trace(...args: unknown[]): void {
    this.log(...args);
  }
  warn(...args: unknown[]): void {
    this.log(...args);
  }
}

/**
 * Creates a custom console that redirects output to the provided callback.
 * Implements the Console interface with minimal functionality.
 */
export const createCustomConsole = (callback: ConsoleCallback): Console => {
  return new CustomConsole(callback) as Console;
};
