import { createContext, useContext } from 'react'

type NavigationContextType = {
  activeSection: string
  handleNavigate: (id: string) => void
}

export const NavigationContext = createContext<NavigationContextType>({
  activeSection: 'hero',
  handleNavigate: () => {}
})

export const useNavigation = () => useContext(NavigationContext)
