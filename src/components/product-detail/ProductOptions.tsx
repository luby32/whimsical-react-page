import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Check, ShoppingBag } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface ProductOptionsProps {
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  personalization: string;
  setPersonalization: (text: string) => void;
  onAddToCart: () => void;
  stock?: number;
}

const ProductOptions = ({
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  quantity,
  setQuantity,
  personalization,
  setPersonalization,
  onAddToCart,
  stock = 1
}: ProductOptionsProps) => {
  const colors = {
    "Orange": "#DC6B48",
    "White": "#FFFFFF", 
    "Gray": "#E5E5E5",
    "Black": "#1A1A1A",
    "Brown": "#8B4513",
    "Sage": "#9CA88C"
  };

  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="text-base font-semibold text-gray-900">Color</Label>
          <span className="text-sm font-medium text-gray-600">{selectedColor}</span>
        </div>
        <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex flex-wrap gap-2">
          {Object.entries(colors).map(([colorName, colorCode]) => (
            <div key={colorName} className="relative">
              <RadioGroupItem value={colorName} id={`color-${colorName}`} className="peer sr-only"/>
              <Label
                htmlFor={`color-${colorName}`}
                className={`relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 transition-all
                  ${colorName === 'White' ? 'border-gray-300' : 'border-transparent'}
                  peer-checked:ring-2 peer-checked:ring-[#700100] peer-checked:ring-offset-1
                  hover:scale-110 transition-transform duration-200`}
                style={{ backgroundColor: colorCode }}
              >
                {selectedColor === colorName && (
                  <Check className={`w-3 h-3 ${colorName === 'White' ? 'text-black' : 'text-white'}`} />
                )}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="text-base font-semibold text-gray-900">Size</Label>
          <a href="#size-chart" className="text-sm font-medium text-[#700100] hover:underline">Size Guide</a>
        </div>
        <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="grid grid-cols-4 md:grid-cols-7 gap-1.5">
          {sizes.map((size) => (
            <div key={size}>
              <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only"/>
              <Label
  htmlFor={`size-${size}`}
  className="flex h-9 cursor-pointer items-center justify-center rounded-md border-2 border-gray-200 bg-white text-black text-sm font-medium transition-all peer-checked:border-[#700100] peer-checked:bg-[#700100] peer-checked:text-white hover:bg-gray-50"
>
  {size}
</Label>

            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="text-base font-semibold text-gray-900">Quantity</Label>
          <span className="text-sm font-medium text-gray-600">{stock} available</span>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="h-9 w-9 rounded-md border-2 border-gray-200 hover:border-[#700100] hover:text-[#700100] transition-all"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-10 text-center text-lg font-semibold text-black">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.min(stock, quantity + 1))}
            className="h-9 w-9 rounded-md border-2 border-gray-200 hover:border-[#700100] hover:text-[#700100] transition-all"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-base font-semibold text-gray-900">Personalization</Label>
        <Textarea
          placeholder="Add your custom text here..."
          value={personalization}
          onChange={(e) => setPersonalization(e.target.value)}
          className="min-h-[80px] resize-none border-[#700100] text-black bg-white focus:border-[#700100] focus:ring-[#700100] rounded-md"
          />
      </div>

      <Button
        onClick={onAddToCart}
        className="w-full h-12 bg-[#700100] hover:bg-[#5a0100] text-white text-lg font-medium transition-all duration-300 rounded-md mt-3"
        disabled={stock === 0}
      >
        <ShoppingBag className="mr-2 h-5 w-5" />
        {stock === 0 ? "Out of Stock" : "Add to Bag"}
      </Button>

      <div className="space-y-1.5 text-sm font-medium text-gray-600 mt-3">
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#700100]"></span>
          Free delivery in Tunisia
        </p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#700100]"></span>
          30-day return policy
        </p>
      </div>
    </div>
  );
};

export default ProductOptions;
