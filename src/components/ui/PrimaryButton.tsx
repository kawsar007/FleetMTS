import { Button, type ButtonProps, type DistributiveOmit } from "./Button";

type PrimaryButtonProps = DistributiveOmit<ButtonProps, "variant">;

/** Filled CTA button — the highest-emphasis action in a section. */
export function PrimaryButton(props: PrimaryButtonProps) {
  return <Button variant="primary" {...props} />;
}
