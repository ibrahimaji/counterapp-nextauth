import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Counter } from './Counter';

export const CounterPage = () => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-center">
        <CardTitle>Counter App</CardTitle>
        <CardDescription>Just a simple counter app</CardDescription>
      </CardHeader>
      <CardContent>
        <Counter initialValue={5} />
      </CardContent>
    </Card>
  );
};
