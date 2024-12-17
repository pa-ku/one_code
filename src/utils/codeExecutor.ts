import { secureFetch } from './secureFetch'

interface ExecutionContext {
  console: Console
  fetch: typeof secureFetch
}

export function createExecutionContext(
  consoleInstance: Console
): ExecutionContext {
  return {
    console: consoleInstance,
    fetch: secureFetch,
  }
}

export async function executeCode(
  code: string,
  context: ExecutionContext
): Promise<void> {
  const wrappedCode = `
    return async function() {
      const { console, fetch } = arguments[0];
      ${code}
    }
  `

  try {
    const fn = new Function(wrappedCode)()
    await fn(context)
  } catch (error) {
    context.console.error(error)
  }
}
