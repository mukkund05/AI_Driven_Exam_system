"use client";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function Card({ title, description, buttonText }: CardProps) {
  const handleClick = () => {
    // Replace this logic with your actual functionality
    alert(`Clicked: ${title}`);
  };

  return (
    <div className="bg-white border rounded-lg shadow-md p-5 mb-4">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {buttonText}
      </button>
    </div>
  );
}
