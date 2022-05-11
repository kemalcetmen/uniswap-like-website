import React, {useContext} from 'react'
import {AiOutlineSetting} from 'react-icons/ai'
import { TransactionContext } from '../context/TransactionContext'
import Modal from 'react-modal'
import { useRouter } from 'next/router'

Modal.setAppElement('#__next')

const styles = {
  wrapper:`font-semibold text-xl mt-16 `,
  content: `bg-white w-[40rem]  rounded-3xl p-2 absolute -translate-x-1/2 left-1/2`,
  formHeader: `flex justify-between p-5`,
  amountInput: `flex  bg-slate-100  rounded-2xl m-2 `,
  transferPropInput: ` bg-slate-100 flex-1 text-4xl rounded-3xl p-6`,
  confirmButton:`bg-uniswapColor p-6 rounded-3xl m-2 mt-8 text-center text-2xl text-red-500 cursor-pointer`
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
}
const Main = () => {
  
  const {formData,handleChange,sendTransaction} =useContext(TransactionContext)
  const router = useRouter()
  const handleSubmit = async (e)=>{
    const { addressTo, amount} = formData

    e.preventDefault()

    if(!addressTo || !amount) return

    sendTransaction()
   }
   
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.formHeader}>
          <p>Swap</p>
          <AiOutlineSetting/>
        </div>
        <div className={styles.amountInput}>
          <input
            type="text"
            className={styles.transferPropInput}
            placeholder="0.0"
            pattern='^[0-9]*[.,]?[0-9]*$'
            onChange={e=>handleChange(e,'amount')}
          />
        </div>
        <div className={styles.amountInput}>
          <input
            type="text"
            className={styles.transferPropInput}
            placeholder="0.0"
            pattern='^[0-9]*[.,]?[0-9]*$'
            onChange={e=>handleChange(e,'addressTo')}
          />
        </div>
        <div className={styles.confirmButton} onClick={e => handleSubmit(e)}>
          Confirm
        </div>
      </div>

      <Modal isOpen={!!router.query.loading} style={customStyles}>
        <div style={{color: "red", height : 400, width : 200}}>
          wait bit*h
        </div>
      </Modal>
    </div>
  )
}

export default Main