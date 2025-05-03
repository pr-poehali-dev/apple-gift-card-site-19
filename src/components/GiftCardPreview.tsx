
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface GiftCardPreviewProps {
  value: number;
  icon: string;
  color?: string;
  bgColor?: string;
  description?: string;
}

const GiftCardPreview = ({ 
  value, 
  icon,
  color = "text-blue-500",
  bgColor = "bg-blue-50",
  description = `Подарочная карта Apple Store номиналом ${value} рублей`
}: GiftCardPreviewProps) => {
  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center">
        <div className="w-40 h-32 mb-6 flex items-center justify-center">
          <div className={`w-24 h-24 rounded-full ${bgColor} flex items-center justify-center ${color}`}>
            <Icon name={icon} size={48} />
          </div>
        </div>
        <h3 className="text-2xl font-semibold mb-2">{value} ₽</h3>
        <p className="text-gray-600 text-center mb-6">
          {description}
        </p>
        <Button asChild variant="outline" className="rounded-full w-full">
          <Link to={`/products#card-${value}`}>Подробнее</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default GiftCardPreview;
