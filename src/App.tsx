import { useEffect } from 'react';
import { useCounterStore } from './store';

function setCount() {
  useCounterStore.setState({ count: 10 });
}

export default function App() {
  const { count } = useCounterStore();

  return <OtherComponent count={count} />;
}

function OtherComponent({ count }: { count: number }) {
  const incrementAsync = useCounterStore(state => state.incrementAsync);
  const decrement = useCounterStore(state => state.decrement);

  useEffect(() => {
    setCount();
  }, []);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={incrementAsync}>+</button>
    </div>
  );
}
