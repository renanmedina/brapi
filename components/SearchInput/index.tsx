'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks/useDebounce';
import { getQuoteList, IQuoteList } from '~/services/getQuoteList';
import { numberToMoney } from '~/utils/formatNumbers';

export const SearchInput = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const getData = async () => {
        const results = await getQuoteList({
          search: debouncedSearchTerm,
          limit: 5,
        });

        setSearchResults(results);
      };

      getData();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="items-center relative hidden md:flex">
      <input
        type="text"
        placeholder="Pesquisar Ação"
        className="input input-bordered w-64"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 absolute right-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      {searchResults.length > 0 && isFocused && (
        <SearchResults results={searchResults} />
      )}
    </div>
  );
};

const SearchResult = ({ stock, name, logo, change, close }: IQuoteList) => {
  return (
    <Link
      className="flex items-center p-2 border-b border-gray-200 hover:bg-gray-700"
      href={`/quotes/${stock}`}
    >
      <img src={logo} className="w-10 h-10 rounded-full" alt={name} />
      <div className="ml-4">
        <p className="text-lg font-medium">{name}</p>
        <p className="text-sm">
          <span>{stock} </span>
          <span
            className={clsx({
              'text-green-500': change > 0,
              'text-red-500': change < 0,
            })}
          >
            {change > 0 ? '▲' : '▼'}
            {Math.abs(change).toFixed(2)}%
          </span>{' '}
          | <span>{numberToMoney(close)}</span>
        </p>
      </div>
    </Link>
  );
};

const SearchResults = ({ results }) => {
  return (
    <div className="absolute top-full left-0 w-full bg-gray-800 rounded-md shadow-lg overflow-hidden rounded-t-none min-w-maxz">
      {results.map((result) => (
        <SearchResult key={result.stock} {...result} />
      ))}
    </div>
  );
};
