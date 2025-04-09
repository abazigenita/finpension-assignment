import { Input, Button } from "../lib/components";
import { useState } from "react";
import { InputState } from "../lib/components/Input/Input.types";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export const Demo = () => {
  const [userInput, setUserInput] = useState('');
  const [inputState, setInputState] = useState<InputState>();

  const toggleInputState = () => {
    if (!inputState) setInputState('invalid');
    else if (inputState === 'invalid') setInputState('valid');
    else setInputState(undefined);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-lg space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Buttons</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Variants & States</p>
              <div className="flex gap-4 flex-wrap">
                <Button onClick={() => alert('Primary clicked')}>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Sizes</p>
              <div className="flex gap-4 flex-wrap items-end">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Icons</p>
              <div className="flex gap-4 flex-wrap items-end">
                <Button icon={<FiCheck />} iconPosition="left">Left Icon</Button>
                <Button icon={<FiArrowRight />} iconPosition="right">Right Icon</Button>
                <Button icon={<FiCheck />} />
              </div>
            </div>

            <div>
              <Button variant="secondary" onClick={toggleInputState}>
                Toggle Input State
              </Button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Inputs</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="basic-input" className="block text-sm font-medium text-gray-700 mb-1">
                Basic Input
              </label>
              <Input
                id="basic-input"
                placeholder="Type here"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-1">Current value: {userInput}</p>
            </div>

            <div>
              <label htmlFor="stateful-input" className="block text-sm font-medium text-gray-700 mb-1">
                Stateful Input (Valid/Invalid/Neutral)
              </label>
              <Input
                id="stateful-input"
                placeholder="Type with feedback"
                state={inputState}
                helpText="This input shows validation states"
                errorText="Something is wrong"
              />
            </div>

            <div>
              <label htmlFor="input-prefix-suffix" className="block text-sm font-medium text-gray-700 mb-1">
                Prefix/Suffix Input
              </label>
              <Input
                id="input-prefix-suffix"
                placeholder="Amount"
                prefix="$"
                suffix="USD"
              />
            </div>

            <div>
              <label htmlFor="email-input" className="block text-sm font-medium text-gray-700 mb-1">
                Email Input
              </label>
              <Input
                id="email-input"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password-input" className="block text-sm font-medium text-gray-700 mb-1">
                Password Input
              </label>
              <Input
                id="password-input"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
