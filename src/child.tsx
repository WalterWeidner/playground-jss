import React, { ReactNode } from "react";
import classnames from "classnames";
import { createUseStyles } from "react-jss";

// const useStyles = createUseStyles(() => {
//   return {
//     childRoot: ({ hasHover }: { hasHover?: boolean }) => ({
//       "&:hover": hasHover ? { fontWeight: 600 } : { fontWeight: 400 },
//     }),

//     childChildren: ({ hasHover }: { hasHover?: boolean }) => ({
//       textDecoration: hasHover ? "underline" : "none",
//     }),
//   };
// });

export const Child = ({
  children,
  className,
  hasHover,
}: {
  children?: ReactNode;
  className?: string;
  hasHover?: boolean;
}) => {
  //   const classes = useStyles({ hasHover });
  //   return (
  //     <div className={classnames(classes.childRoot, className)}>
  //       <div className={classes.childChildren}>
  //         I should be underlined!
  //         {children}
  //       </div>
  //     </div>
  //   );
  return <div className={classnames("Child", className)}>{children}</div>;
};
