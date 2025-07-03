import { DollarSign } from 'lucide-react'
// import { FaUsers } from 'react-icons/fa'

import { usePayments } from '@/hooks/usePayments'

const PaymentStatCard = () => {
  const { payments, isLoading, error } = usePayments()

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">
              Total Payments
            </p>
            <p className="text-3xl font-bold text-gray-900">Loading...</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <DollarSign className="text-blue-600 text-xl" />
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">
              Total Payments
            </p>
            <p className="text-xl font-bold text-red-600">Error</p>
            <p className="text-xs text-red-500 mt-1">Failed to load</p>
          </div>
          <div className="bg-red-100 p-3 rounded-full">
            <DollarSign className="text-red-600 text-xl" />
          </div>
        </div>
      </div>
    )
  }

  const totalPayments = payments?.length || 0

  const totalAmount = payments?.reduce((acc, curr) => acc + curr.amount, 0) || 0

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">
            Total Payments
          </p>
          <p className="text-3xl font-bold text-gray-900">{totalPayments}</p>
          <p className="text-xs text-gray-500 mt-1">${totalAmount} in total</p>
        </div>
        <div className="bg-blue-100 p-3 rounded-full">
          <DollarSign className="text-blue-600 text-xl" />
        </div>
      </div>
    </div>
  )
}

export default PaymentStatCard
