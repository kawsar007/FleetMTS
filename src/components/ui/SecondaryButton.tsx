import { Button, type ButtonProps, type DistributiveOmit } from "./Button";

type SecondaryButtonProps = DistributiveOmit<ButtonProps, "variant">;

/** Outlined CTA button — a lower-emphasis, complementary action. */
export function SecondaryButton(props: SecondaryButtonProps) {
  return <Button variant="secondary" {...props} />;
}
