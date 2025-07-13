const getInitials = (name) => {
  const words = name.trim().split(" ");
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

const UserAvater = ({ fullName, ...props }) => {
  const initials = getInitials(fullName || "U");
  
  return (
    <div className="relative w-10 h-10" {...props}>
      <svg
        className="w-full h-full"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        fill="#20AE3A"
        {...props}
      >
        <circle cx="20" cy="20" r="20"/>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
        {initials}
      </span>
    </div>
  );
};

export default UserAvater;
