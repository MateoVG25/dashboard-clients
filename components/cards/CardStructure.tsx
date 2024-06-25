import React from "react";

import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

type CardDashboardProps = {
  title: string;
  icon?: React.ReactElement;
  data: any[];
  keyNameOrders?: string;
  keyNameLines?: string;
  keyNameUnits?: string;
  className?: string;
  props?: any;
};

const CardStructure: React.FC<CardDashboardProps> = ({
  title,
  icon,
  data,
  keyNameOrders,
  keyNameLines,
  keyNameUnits,
  className,
  props,
}) => {
  return (
    <Card className={`${cn(className)} rounded-xl`} {...props}>
      <CardHeader className="flex items-center space-x-1">
        {icon}
        <CardTitle className="text-center">
          <TextGenerateEffect words={title} duration={2} textSize="text-4xl" />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {data &&
          data.map((item: any, index: number) => (
            <div key={index}>
              {item[`${keyNameOrders}`] ? (
                <p className="text-center">
                  Pedidos:{" "}
                  <span className="font-bold">{item[`${keyNameOrders}`]}</span>
                </p>
              ) : null}
              {item[`${keyNameLines}`] ? (
                <p className="text-center">
                  Líneas:{" "}
                  <span className="font-bold">{item[`${keyNameLines}`]}</span>
                </p>
              ) : null}
              {item[`${keyNameUnits}`] ? (
                <p className="text-center">
                  Unidades:{" "}
                  <span className="font-bold">{item[`${keyNameUnits}`]}</span>
                </p>
              ) : null}
            </div>
          ))}
      </CardContent>
    </Card>
  );
};
export default CardStructure;
