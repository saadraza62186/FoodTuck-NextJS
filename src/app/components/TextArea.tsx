import React from 'react';
import NearMeIcon from '@mui/icons-material/NearMe';

const TextArea = () => {
  return (
    <div className="flex ml-5">
      {/* Email Input */}
      <div>
        <input
          type="text"
          placeholder="Enter Your Email"
          className="border p-2"
        />
      </div>

      {/* Icon Container */}
      <div className="flex justify-center w-[40px] h- items-center bg-[#FF9F0D] p-2 rounded">
        <NearMeIcon className="text-white" />
      </div>
    </div>
  );
};

export default TextArea;
