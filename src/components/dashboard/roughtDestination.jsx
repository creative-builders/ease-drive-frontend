 {/* Dropdown UI */}
        {(isTyping || isSearching || results.length > 0 || history.length > 0) && (
          <div className="bg-white border border-gray-200 rounded-lg shadow mt-2 max-h-64 overflow-y-auto">
            {/* Loading Spinner */}
            {isSearching && (
              <div className="flex justify-center items-center p-4">
                <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="ml-2 text-sm text-green-600">Searching location...</p>
              </div>
            )}

            {/* Typing indicator */}
            {isTyping && !isSearching && (
              <p className="p-3 text-sm text-neutral-950 italic">Typing...</p>
            )}

            {/* Results */}
            {!isSearching &&
              results.map((result, i) => (
                <li
                  key={i}
                  onClick={() => handleSelect(result)}
                  className="list-none p-3 hover:bg-green-50 cursor-pointer text-sm"
                >
                  {result.display_name}
                </li>
              ))}

            {/* History Section */}
            {!queryValue && !isSearching && history.length > 0 && (
              <div className="border-t border-gray-100">
                <p className="text-xs text-gray-400 uppercase px-3 pt-2">
                  Recent Searches
                </p>
                {history.map((entry, i) => (
                  <li
                    key={i}
                    onClick={() => handleHistoryClick(entry)}
                    className="list-none p-3 hover:bg-gray-50 cursor-pointer text-sm flex items-center"
                  >
                    <LiveGPSIcon className="mr-3"/>
                    {entry.name}
                  </li>
                ))}
              </div>
            )}
          </div>
        )}