import { InputHTMLAttributes, VFC } from "react";
import styled from "styled-components";
import { color, fontSize, radius, space } from "./constants";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  type?: "text" | "number" | "passward";
  className?: string;
};

export const Input: VFC<Props> = ({
  type,
  value,
  onChange,
  className = "",
  error = false,
  ...props
}) => {
  return (
    <Wrapper
      type={type}
      value={value}
      onChange={onChange}
      {...props}
      className={`${className} ${error ? "error" : ""}`}
    />
  );
};

const Wrapper = styled.input`
  height: 42px;
  padding: ${space.m};
  border-radius: ${radius.m};
  border: solid 1px ${color.gray};
  font-size: ${fontSize.m};
  box-sizing: border-box;

  &.error {
    color: ${color.red};
    border: solid 1px ${color.red};
  }
`;
