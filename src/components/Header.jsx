import { Link } from 'react-router-dom'
import { MdLightMode } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { truncate, useGlobalState } from '../store'
import { connectWallet } from '../Blockchain.services'
import { ReactComponent as Logo } from "./logo.svg";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.theme)
  const themeColor = theme === 'dark' ? 'light' : 'dark'
  const darken = theme === 'dark' ? true : false
  const [connectedAccount] = useGlobalState('connectedAccount')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(themeColor)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [themeColor, theme])

  const toggleLight = () => {
    const root = window.document.documentElement
    root.classList.remove(themeColor)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
    setTheme(themeColor)
  }

  return (
    <header className="sticky top-0 z-50 dark:text-blue-500 top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <nav
        className="navbar navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between
      bg-white dark:bg-[#1C1B22]"
      >
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <div className="grow flex flex-row justify-between items-center p-2">
            <Link
              to={'/'}
              className="flex flex-row justify-start items-center space-x-3"
            >
              <Logo/>
              <span className="text-5xl tracking-tight bg-gradient-to-r from-violet-400 to-violet-800 text-transparent bg-clip-text">NEXUS SPHERE</span>
            </Link>

            <div className="flex flex-row justify-center items-center space-x-5">
              {darken ? (
                <MdLightMode
                  className="cursor-pointer"
                  size={25}
                  onClick={toggleLight}
                />
              ) : (
                <FaMoon
                  className="cursor-pointer"
                  size={25}
                  onClick={toggleLight}
                />
              )}

              {connectedAccount ? (
                <button
                  className="px-4 py-2.5 bg-blue-600 text-white
                  font-medium text-xs leading-tight uppercase
                  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none
                  focus:ring-0 active:bg-blue-800 active:shadow-lg
                  transition duration-150 ease-in-out dark:text-blue-500
                  dark:border dark:border-blue-500 dark:bg-transparent"
                >
                  {truncate(connectedAccount, 4, 4, 11)}
                </button>
              ) : (
                <button
                  className="bg-gradient-to-r from-violet-400 to-violet-800 py-2 px-3 rounded-md text-white"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
