import React from "react";

interface SearchBarProps {
  onChange: (value: string) => void;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search users"
      autoFocus={true}
      onBlur={({ target }) => target.focus()}
    />
  );
};

export default SearchBar;
