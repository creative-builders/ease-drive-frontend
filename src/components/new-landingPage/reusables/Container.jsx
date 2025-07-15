// components/Container.jsx
export default function Container({ children }) {
  return (
    <div
      className="
       
        w-full 
        md:w-full
        mx-auto 
        m-auto
        sm:px-6      // ≥ 640px
        md:px-10     // ≥ 768px
        lg:px-16     // ≥ 1024px
        xl:px-20     // ≥ 1280px
      "
    >
      {children}
    </div>
  );
}
