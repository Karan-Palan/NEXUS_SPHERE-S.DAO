import { useState } from 'react'
import { useGlobalState, setGlobalState } from '../store'
import { toast } from 'react-toastify'
import { performContribute } from '../Blockchain.services'

const Banner = () => {
  const [isStakeholder] = useGlobalState('isStakeholder')
  const [proposals] = useGlobalState('proposals')
  const [balance] = useGlobalState('balance')
  const [mybalance] = useGlobalState('mybalance')
  const [amount, setAmount] = useState('')

  const onPropose = () => {
    if (!isStakeholder) return
    setGlobalState('createModal', 'scale-100')
  }

  const onContribute = async () => {
    if (!!!amount || amount === '') return
    await performContribute(amount)
    toast.success('Contribution received')
  }

  const opened = () =>
    proposals.filter(
      (proposal) => new Date().getTime() < Number(proposal.duration + '000'),
    ).length

  return (
    <div className="flex flex-col md:flex-row justify-between p-8">
      <div className="flex flex-col md:w-1/2">
        <h2 className="font-semibold text-4xl mb-5">
          {opened()} PROPOSAL{opened() === 1 ? '' : 'S'} CURRENTLY OPENED
        </h2>
        <p>
          CURRENT DAO BALANCE: <strong>{balance} Eth</strong> <br />
          YOUR CONTRIBUTIONS:{' '}
          <span>
            <strong>{mybalance} Eth</strong>
            {isStakeholder ? ', Congratulations on being a stakeholder' : null}
          </span>
        </p>
        <div className="flex flex-row justify-start items-center w-full mt-4">
          <input
            type="number"
            className="form-control block w-full px-3 py-1.5
            text-base font-normaltext-gray-700
            bg-clip-padding border border-solid border-gray-300
            rounded transition ease-in-out m-0 shadow-md
            focus:text-gray-500 focus:outline-none
            dark:border-gray-500 dark:bg-transparent"
            placeholder="e.g 2.5 Eth"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            required
          />
        </div>
        <p className='mt-2'>
          {isStakeholder
            ? 'You can now raise proposals on this platform'
            : 'Upon contribution of 1 ETH, You become a stakeholder'}
        </p>
        <div
          className="flex flex-row justify-start items-center space-x-3 mt-4"
          role="group"
        >
          <button
            type="button"
            className="bg-gradient-to-r from-violet-400 to-violet-800 py-2 px-3 rounded-md text-white"
            onClick={onContribute}
          >
            Contribute
          </button>

          {isStakeholder ? (
            <button
              type="button"
              className="bg-gradient-to-r from-violet-400 to-violet-800 py-2 px-3 rounded-md text-white"
              onClick={onPropose}
            >
              Propose
            </button>
          ) : null}
        </div>
      </div>
      <div className="w-full md:w-2/3 mt-8 md:mt-0">
        <p className='font-semibold text-xl mb-5'>CONNECTING YOUR WALLET TO A TESTNET IS A CRUCIAL STEP!</p>
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/tKMz3NAdIwg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>



    </div>
  )
}

export default Banner
