
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface GiftCardPreviewProps {
  value: number;
  imageUrl?: string;
}

const GiftCardPreview = ({ 
  value, 
  imageUrl = "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=300&auto=format&fit=crop" 
}: GiftCardPreviewProps) => {
  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center">
        <div className="w-40 h-32 mb-6 flex items-center justify-center">
          <img 
            src={imageUrl} 
            alt={`Apple Gift Card ${value} руб.`} 
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-2xl font-semibold mb-2">{value} ₽</h3>
        <p className="text-gray-600 text-center mb-6">
          Подарочная карта Apple Store номиналом {value} рублей
        </p>
        <Button asChild variant="outline" className="rounded-full w-full">
          <Link to={`/products#card-${value}`}>Подробнее</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default GiftCardPreview;
