import React, { useState } from 'react';

interface PopupProps {
  buttonText: string;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ buttonText, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <button 
        onClick={openPopup} 
        className="px-4 py-2 bg-red-600 text-white rounded mt-10 hover:bg-red-700 transition-colors"
      >
        {buttonText}
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background Overlay */}
          <div 
            className="bg-black opacity-50 absolute inset-0"
            onClick={closePopup} 
          ></div>

          {/* Popup Box */}
          <div className="bg-white w-auto max-w-md p-5 rounded shadow-lg relative z-60">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
            >
              X
            </button>

            {/* Centered Children (AddTest Form) */}
            <div className="text-gray-900">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;


// import React, { useState } from 'react';

// interface PopupProps {
//   buttonText: string;
//   children: React.ReactNode;  // Ensure 'children' is included in the interface
// }

// const Popup: React.FC<PopupProps> = ({ buttonText, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openPopup = () => setIsOpen(true);
//   const closePopup = () => setIsOpen(false);

//   return (
//     <>
//       <button 
//         onClick={openPopup} 
//         className="px-4 py-2 bg-red-600 text-white rounded mt-10 hover:bg-red-700 transition-colors"
//       >
//         {buttonText}
//       </button>
//       {isOpen && (
//         <div className="absolute inset-0 flex items-center justify-center z-50">
//           <div className="bg-black opacity-50 absolute inset-0" onClick={closePopup}></div>
//           <div className="bg-white w-auto h-auto p-5 rounded shadow-lg relative">
//             <button
//               onClick={closePopup}
//               className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
//             >
//               X
//             </button>
//             <div className="text-gray-900">
//               {children}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Popup;
