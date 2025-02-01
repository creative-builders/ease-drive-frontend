
const TabSelector = ({
    tabs,
    handleClick,
    activeTab,
    extendedStyles
}) => {
  return (
    <div className='flex gap-x-4 items-center'>
			{tabs.map((tab) => {
				const tabName = typeof tab === 'string' ? tab : tab.name;
				return (
					<button
						key={tab}
						type='button'
						className={`p-4 ${extendedStyles} rounded-lg inline-block ${
							activeTab === tabName ? 'bg-green-100 text-green-300 font-normal text-base' : 'text-gray-400'
						}`}
						onClick={() => handleClick(tabName)}
					>
						{tabName}
						{/* {activeTab === tabName && (
							<hr className='border-0 border-b-[3px] border-blue-500 absolute w-full bottom-[-3px] rounded-t-md' />
						)} */}
					</button>
				);
			})}
		</div>
  )
}

export default TabSelector