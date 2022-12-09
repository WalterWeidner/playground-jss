import React, { ReactNode } from "react";
import classnames from "classnames";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  //   () => {
  //     return {
  //       // root: { background: "red" },
  //       root: ({ hasHover }: { hasHover?: boolean }) => ({
  //         "&:hover": hasHover ? { background: "red" } : { background: "orange" },
  //       }),

  //       // children: { border: "1px solid gray"},
  //       children: ({ hasHover }: { hasHover?: boolean }) => ({
  //         border: hasHover ? "1px solid gray" : "none",
  //       }),
  //     };
  //   }
  {
    // root: { background: "red" },
    root: ({ hasHover }: { hasHover?: boolean }) => ({
      "&:hover": hasHover ? { background: "red" } : { background: "orange" },
    }),

    // children: { border: "1px solid gray"},
    children: ({ hasHover }: { hasHover?: boolean }) => ({
      border: hasHover ? "1px solid gray" : "none",
    }),
  }
);

type ParentProps = {
  children?: ReactNode;
  className?: string;
  hasHover?: boolean;
};

export const Parent = ({
  children,
  className,
  hasHover,
  ...rest
}: ParentProps) => {
  const classes = useStyles({ hasHover });

  return (
    <section className={classnames(classes.root, className)} {...rest}>
      <div className={classes.children}>{children}</div>
    </section>
  );
};
