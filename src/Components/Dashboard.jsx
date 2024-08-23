import React from 'react'
function Dashboard() {
    const cryptoData = [
        { name: 'Bitcoin', balance: '1.5 BTC', price: '$30,000' },
        { name: 'Ethereum', balance: '10 ETH', price: '$2,000' },
        { name: 'Cardano', balance: '500 ADA', price: '$0.50' }
      ];

  return (
    <div className='flex justify-center items-center '>
         <div className='mt-32'>
        <table className='table-auto border-collapse border border-gray-400'>
          <thead>
            <tr>
              <th className='border border-gray-300 px-4 py-2'>Crypto Name</th>
              <th className='border border-gray-300 px-4 py-2'>Balance</th>
              <th className='border border-gray-300 px-4 py-2'>Current Price</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((crypto, index) => (
              <tr key={index}>
                <td className='border border-gray-300 px-4 py-2'>{crypto.name}</td>
                <td className='border border-gray-300 px-4 py-2'>{crypto.balance}</td>
                <td className='border border-gray-300 px-4 py-2'>{crypto.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard