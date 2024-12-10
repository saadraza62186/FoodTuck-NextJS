import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

interface ComboBoxProps {
  name: string;
}

const top13Foods = [
  { label: "Pizza", category: "Fast Food" },
  { label: "Burger", category: "Fast Food" },
  { label: "Sushi", category: "Japanese" },
  { label: "Pasta", category: "Italian" },
  { label: "Tacos", category: "Mexican" },
  { label: "Biryani", category: "Indian" },
  { label: "Ramen", category: "Japanese" },
  { label: "Dumplings", category: "Chinese" },
  { label: "Steak", category: "American" },
  { label: "Falafel", category: "Middle Eastern" },
  { label: "Pho", category: "Vietnamese" },
  { label: "Pad Thai", category: "Thai" },
  { label: "Ice Cream", category: "Dessert" },
];

const ComboBox = ({ name }: ComboBoxProps) => {
  return (
    <div className="mt-5 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
      <Autocomplete
        disablePortal
        options={top13Foods}
        getOptionLabel={(option) => option.label} // Custom option label
        sx={{ width: "100%" }}
        renderInput={(params) => <TextField {...params} label={name} fullWidth />}
      />
    </div>
  );
};

export default ComboBox;
