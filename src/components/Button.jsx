/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Button(props) {
  if (props.color === "primary") {
    return (
      <button
        css={css`
          display: flex;
          width: 171.19px;
          height: 50px;
          padding: 0px 16px;
          margin: 10px 0px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          background-color: #074EE8;
          border-radius: 4px;
            }
          `}
      >
        <span>{props.text}</span>
      </button>
    );
  } else if (props.color === "secondary") {
    return (
      <button
        css={css`
          display: flex;
          width: 171.19px;
          height: 50px;
          padding: 0px 16px;
          margin: 10px 0px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          background-color: #07A4E8;
          border-radius: 4px;
            }
          `}
      >
        <span>{props.text}</span>
      </button>
    );
  }
}
