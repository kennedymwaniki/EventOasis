import React, { useMemo, useState } from 'react'
import { CompactTable } from '@table-library/react-table-library/compact'
import { useTheme } from '@table-library/react-table-library/theme'
import { getTheme } from '@table-library/react-table-library/baseline'
import { usePagination } from '@table-library/react-table-library/pagination'
import { useSort } from '@table-library/react-table-library/sort'
import type { EventRegistration } from '@/types/types'

import { useEventRegistration } from '@/hooks/useEventRegistration'

const RegisteredEventsTable = () => {
  const theme = useTheme(getTheme())
  const [search, setSearch] = useState('')
  const { data: registeredEvents, error } = useEventRegistration()
  console.log(registeredEvents)

  //    const totalregistrations = registeredEvents?.length
  // Filter registeredEvents based on search
  const filteredData = useMemo(
    () => ({
      nodes: registeredEvents
        ? registeredEvents.filter(
            (registeredEvent) =>
              registeredEvent.amount
                .toString()
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              registeredEvent.registrationDate
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              registeredEvent.id.toString().includes(search.toLowerCase()),
          )
        : [],
    }),
    [registeredEvents, search],
  )

  // Pagination setup

  // Pagination setup
  const pagination = usePagination(filteredData, {
    state: {
      page: 0,
      size: 10, // Show 10 registeredEvents per page
    },
    onChange: onPaginationChange,
  })
  // Sorting setup
  const sort = useSort(
    filteredData,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        ID: (array) => array.sort((a: any, b: any) => a.id - b.id),
        AMOUNT: (array) =>
          array.sort((a: any, b: any) => a.amount.localeCompare(b.amount)),
        REGISTRATION_DATE: (array) =>
          array.sort((a: any, b: any) =>
            a.registrationDate.localeCompare(b.registrationDate),
          ),
      },
    },
  )

  function onSortChange(action: unknown, state: unknown) {
    console.log(action, state)
  }

  function onPaginationChange(action: unknown, state: unknown) {
    console.log(action, state)
  }

  if (error) {
    return (
      <div className="p-4 text-red-600">
        Error fetching registeredEvents: {error.message}
      </div>
    )
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  const COLUMNS = [
    {
      label: 'ID',
      renderCell: (item: EventRegistration) => item.id.toString(),
      sort: { sortKey: 'ID' },
    },
    {
      label: 'Event Name',
      renderCell: (item: EventRegistration) =>
        item.event?.event_name.toString(),
      sort: { sortKey: 'EVENT_NAME' },
    },
    {
      label: 'Registration Date',
      renderCell: (item: EventRegistration) => (
        <div className="max-w-xs truncate" title={item.registrationDate}>
          {item.registrationDate}
        </div>
      ),
      sort: { sortKey: 'REGISTRATION_DATE' },
    },

    {
      label: 'Actions',
      renderCell: () => (
        <div className="max-w-xs truncate" title="Edit User">
          edit
        </div>
      ),
    },
  ]

  return (
    <div className="p-4">
      <div className="mb-4">
        {' '}
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Search registeredEvents:
        </label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search by name, username, email, or ID..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="overflow-x-auto">
        <CompactTable
          columns={COLUMNS}
          data={filteredData}
          theme={theme}
          pagination={pagination}
          sort={sort}
        />
      </div>

      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        {' '}
        <div className="text-sm text-gray-500">
          Total Pages: {pagination.state.getTotalPages(filteredData.nodes)} |
          Showing {filteredData.nodes.length} of {registeredEvents?.length}{' '}
          registeredEvents
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">Page:</span>
          <div className="flex gap-1">
            {pagination.state
              .getPages(filteredData.nodes)
              .map((_: unknown, index: number) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => pagination.fns.onSetPage(index)}
                  className={`px-3 py-1 text-sm rounded transition-colors ${
                    pagination.state.page === index
                      ? 'bg-blue-500 text-white font-semibold'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisteredEventsTable
