import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FormWrapperProps {
  children: React.ReactNode;
  title: string;
}

export const FormWrapper = ({ children, title }: FormWrapperProps) => {
  return (
    <Card className="min-w-[500px] max-w-[500px] border-black">
      <CardHeader>
        <CardTitle className="text-black text-3xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
