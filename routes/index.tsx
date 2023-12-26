import { useSignal } from "@preact/signals";
import type { Signal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

interface Member {
  name: string;
  count: Signal<number>;
}

export default function Home() {
  const count = useSignal(0);

  const member1: Member = {
    name: "Member1",
    count: useSignal(0),
  };

  const member2: Member = {
    name: "Member2",
    count: useSignal(0),
  };

  const members = [member1, member2];

  return (
    <div>
      <h1>Quiz</h1>
      {members.map((m) => {
        return <Counter name={m.name} count={m.count} />;
      })}
    </div>
  );
}
