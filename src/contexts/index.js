import { ThemeProvider } from './ThemeContext'
import { TodoProvider } from './TodoContext'

export const Providers = () => {
  return (
    <ThemeProvider>
      <TodoProvider></TodoProvider>
    </ThemeProvider>
  )
}
