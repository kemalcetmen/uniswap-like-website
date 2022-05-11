import React,{useContext,useState,useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/uniswap.png'
import eth from '../assets/eth.png'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import {HiChevronDown} from 'react-icons/hi'
import { TransactionContext } from '../context/TransactionContext'

const Header = () => {
    const styles = {
        wrapper : `flex flex-row font-semibold p-6 text-xl items-center justify-between`,
        headerLogo : `cursor-pointer origin-center hover:-rotate-6 transition ease-in-out hover:duration-300`,
        navbar : `absolute -translate-x-1/2 left-1/2 bg-white flex flex-row justify-center items-center rounded-3xl text-slate-400`,
        navItem: `py-2 px-4 m-1 cursor-pointer rounded-3xl`,
        activeNavItem: `bg-slate-200 text-slate-900`,
        buttonsContainer : `flex h-8 items-center justify-center`,
        buttonIconContainer: `flex items-center justify-center w-8 h-8`,
        button : `flex flex-row items-center cursor-pointer mx-2 p-2 bg-white rounded-2xl `,
        button2 : `flex flex-row items-center cursor-pointer mx-2 p-1 bg-white rounded-2xl `,
        buttonAccent: `bg-uniswapColor border border-uniswapColor p-1 px-2 hover:border-rose-300 rounded-2xl flex items-center justify-center text-rose-600`,
    }
    const {connectWallet,currentAccount} = useContext(TransactionContext)
    const [userName,setUserName]=useState()
    useEffect(() => {
        if(currentAccount){
            setUserName(`${currentAccount.slice(0, 7)}...${currentAccount.slice(35)}`)
        }
    },[currentAccount])
  return (
    <div className={styles.wrapper}>
        <div className={styles.headerLogo}>
            <Image
            src={logo}
            alt="logo"
            width={40}
            height={40}/>
        </div>
        <div className={styles.navbar}>
            <div className={`${styles.navItem} ${styles.activeNavItem}`}>
                Swap
            </div>
            <div className={styles.navItem} title="pools for swimming">
                Pool
            </div>
            <div className={styles.navItem} title="voting is meaningless">
                Vote             
            </div>
            <div className={styles.navItem}>
                <Link href="https://info.uniswap.org/#/">
                    Charts
                </Link>
                
            </div>
        </div>
        <div className={styles.buttonsContainer}>
            <div className={styles.button}>
                <div  className={styles.buttonIconContainer}>
                    <Image
                    src={eth}
                    alt=""
                    width={20}
                    height={20}/>
                </div>
                
                <p>Ethereum</p>
                <div  className={styles.buttonIconContainer}>
                    <HiChevronDown/>
                </div>                
            </div>
            {currentAccount ? <div className={styles.button}>{userName}</div>
            :   (<div className={styles.button2}>
               
                    <div className={styles.buttonAccent} onClick={()=> connectWallet()}>
                    Connect Wallet
                    </div>
                </div>) }
            
            <div className={styles.button}>
                <div  className={styles.buttonIconContainer}>
                    <HiOutlineDotsHorizontal/>
                </div>
            </div>
        </div>
       

    </div>
  )
}

export default Header