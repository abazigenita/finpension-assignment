import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { buttonBase, buttonDisabled, buttonSizes, buttonVariants } from "./Button.styles.ts";

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole('button', { name: "Button" });
    expect(button).toBeInTheDocument();

    expect(button).toHaveClass(buttonBase, buttonVariants['primary'], buttonSizes['md']);
    expect(button).not.toHaveClass(buttonDisabled);
  });

  it('renders all button variants with correct classes', () => {
    (Object.keys(buttonVariants) as Array<keyof typeof buttonVariants>).forEach((variant) => {
      render(<Button variant={variant}>Button {variant}</Button>);
      const button = screen.getByRole('button', { name: `Button ${variant}` });

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass(buttonVariants[variant]);
    });
  });

  it('renders all button sizes with correct classes', () => {
    (Object.keys(buttonSizes) as Array<keyof typeof buttonSizes>).forEach((size) => {
      render(<Button size={size}>Button {size}</Button>);
      const button = screen.getByRole('button', { name: `Button ${size}` });

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass(buttonSizes[size]);
    });
  });

  it('disables button when `disabled` prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: "Disabled" });
    expect(button).toBeDisabled();
    expect(button).toHaveClass(buttonDisabled);
  });

  it('enables button when `disabled` prop is false', () => {
    render(<Button disabled={false}>Disabled</Button>);
    const button = screen.getByRole('button', { name: "Disabled" });
    expect(button).not.toBeDisabled();
    expect(button).not.toHaveClass(buttonDisabled);
  });

  it('calls onClick handler', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    const button = screen.getByRole('button', { name: "Click" });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders icon on the left by default', () => {
    render(
      <Button icon={<span data-testid="icon-default" />}>
        With Icon Default
      </Button>
    );

    const button = screen.getByRole('button', { name: "With Icon Default" });
    const icon = screen.getByTestId('icon-default');

    expect(icon.parentElement).toHaveClass('mr-2');

    const [firstChild] = Array.from(button.childNodes);
    expect(firstChild).toContainElement(icon);
  });

  it('renders icon on the left', () => {
    render(
      <Button icon={<span data-testid="icon-left" />} iconPosition="left">
        With Icon Left
      </Button>
    );

    const button = screen.getByRole('button', { name: "With Icon Left" });
    const icon = screen.getByTestId('icon-left');

    expect(icon.parentElement).toHaveClass('mr-2');

    const [firstChild] = Array.from(button.childNodes);
    expect(firstChild).toContainElement(icon);
  });

  it('renders icon on the right', () => {
    render(
      <Button icon={<span data-testid="icon-right" />} iconPosition="right">
        With Icon Right
      </Button>
    );

    const button = screen.getByRole('button', { name: "With Icon Right" });
    const icon = screen.getByTestId('icon-right');

    expect(icon.parentElement).toHaveClass('ml-2');

    const childNodes = Array.from(button.childNodes);
    expect(childNodes[childNodes.length - 1]).toContainElement(icon);
  });

  it('applies custom class name', () => {
    render(<Button className="custom-class">Custom Class</Button>);
    const button = screen.getByRole('button', { name: "Custom Class" });
    expect(button).toHaveClass('custom-class');
  });

  it('can be focused via keyboard', () => {
    render(<Button>Focusable</Button>);
    const button = screen.getByRole('button', { name: "Focusable" });

    button.focus();

    expect(button).toHaveFocus();
  });

  it('applies ARIA attributes', () => {
    render(
      <Button
        aria-label="Settings"
        aria-haspopup="menu"
        aria-controls="settings-menu"
        aria-expanded={true}
      >
        Settings
      </Button>
    );

    const button = screen.getByRole('button', { name: /Settings/i });

    expect(button).toHaveAttribute('aria-label', 'Settings');
    expect(button).toHaveAttribute('aria-haspopup', 'menu');
    expect(button).toHaveAttribute('aria-controls', 'settings-menu');
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});
