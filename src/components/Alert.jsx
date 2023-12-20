/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import errorSvg from "../assets/frown.svg";
import warningSvg from "../assets/alert-triangle.svg";
import infoSvg from "../assets/alert-circle.svg";
import successSvg from "../assets/check-circle.svg";

export default function Alert(props) {
  if (props.severity === "error") {
    return (
      <div
        css={css`
          display: flex;
          justify-content: start;
          align-items: center;
          width: 650px;
          height: 76px;
          flex-shrink: 0;
          padding: 0px 32px;
          margin: 10px 0px;
          border-radius: 10px;
          background: #f9c8c8;
          color: #444;
          font-family: Kanit;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          gap: 15px;
        `}
      >
        <img src={errorSvg} alt="Error" />
        <div>{props.text}</div>
      </div>
    );
  } else if (props.severity === "warning") {
    return (
      <div
        css={css`
          display: flex;
          justify-content: start;
          align-items: center;
          width: 650px;
          height: 76px;
          flex-shrink: 0;
          padding: 0px 32px;
          margin: 10px 0px;
          border-radius: 10px;
          background: #f9d9c8;
          color: #444;
          font-family: Kanit;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          gap: 15px;
        `}
      >
        <img src={warningSvg} alt="Warning" />
        <span>{props.text}</span>
      </div>
    );
  } else if (props.severity === "info") {
    return (
      <div
        css={css`
          display: flex;
          justify-content: start;
          align-items: center;
          width: 650px;
          height: 76px;
          flex-shrink: 0;
          padding: 0px 32px;
          margin: 10px 0px;
          border-radius: 10px;
          background: #f9ebc8;
          color: #444;
          font-family: Kanit;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          gap: 15px;
        `}
      >
        <img src={infoSvg} alt="Info" />
        <span>{props.text}</span>
      </div>
    );
  } else if (props.severity === "success") {
    return (
      <div
        css={css`
          display: flex;
          justify-content: start;
          align-items: center;
          width: 650px;
          height: 76px;
          flex-shrink: 0;
          padding: 0px 32px;
          margin: 10px 0px;
          border-radius: 10px;
          background: #cef7cd;
          color: #444;
          font-family: Kanit;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          gap: 15px;
        `}
      >
        <img src={successSvg} alt="Success" />
        <span>{props.text}</span>
      </div>
    );
  }
}
