// const BlockBar = ({ onClick }) => {
//     return (
//       <svg 
//         onClick={onClick}
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         className="cursor-pointer flex xl:hidden"
//       >
//         <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="black"/>
//       </svg>
//     );
//   };
//   export default BlockBar;

// Inside BlockBar.jsx or BlockBar.js


const BlockBar = (props) => {
    return (
      <svg
        {...props} // This line ensures onClick, className, etc. are applied
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 md:hidden"
      >
        <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="black"/>
      </svg>
    );
  };
  
  export default BlockBar;
  
  