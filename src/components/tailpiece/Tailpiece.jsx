import React from "react";
import "./tailpiece.css";
import { useDispatch } from "react-redux";
import { toggleInfoCard, toggleTailpopup } from "./../../redux/store";
import {
  careersHeader,
  contactUsHeader,
  disclaimerContent,
  disclaimerHeader,
  privacyPolicyContent,
  privacyPolicyHeader,
  termsOfServiceContent,
  termsOfServiceHeader,
} from "../../resources/constants";

export default function Tailpiece() {
  const dispatch = useDispatch();
  return (
    <>
    <div className="tailpiece-cover">

    <div className="wp-otr-tail animate__animated animate__zoomIn">
        <div className="wp-inr-tail">
          <h4 className="tail-h">PERFECT SOLUTION FOR YOUR BUSINESS</h4>
          <p className="tail-b">
            Discover first-hand how Alpix Dispatch BPO will benefit your business
          </p>
          <div className="wp-tail-nav">
            <div
              className="t-nav-link"
              onClick={() =>
                dispatch(
                  toggleTailpopup({
                    isTailpopup: true,
                    headerTailpopup: termsOfServiceHeader,
                    contentTailpopup: termsOfServiceContent,
                  })
                )
              }
            >
              <div className="nav-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-award-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
              </div>
              <div className="nav-name">Terms Of Use</div>
            </div>
            <div
              className="t-nav-link"
              onClick={() =>
                dispatch(
                  toggleTailpopup({
                    isTailpopup: true,
                    headerTailpopup: privacyPolicyHeader,
                    contentTailpopup: privacyPolicyContent,
                  })
                )
              }
            >
              <div className="nav-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-book-half"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                </svg>
              </div>
              <div className="nav-name">Privacy Policy</div>
            </div>
            <div
              className="t-nav-link"
              onClick={() =>
                dispatch(
                  toggleTailpopup({
                    isTailpopup: true,
                    headerTailpopup: disclaimerHeader,
                    contentTailpopup: disclaimerContent,
                  })
                )
              }
            >
              <div className="nav-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bandaid-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m2.68 7.676 6.49-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492.001-.002Zm5.71-2.858a.5.5 0 1 0-.708.707.5.5 0 0 0 .707-.707ZM6.974 6.939a.5.5 0 1 0-.707-.707.5.5 0 0 0 .707.707ZM5.56 8.354a.5.5 0 1 0-.707-.708.5.5 0 0 0 .707.708Zm2.828 2.828a.5.5 0 1 0-.707-.707.5.5 0 0 0 .707.707Zm1.414-2.121a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707Zm1.414-.707a.5.5 0 1 0-.706-.708.5.5 0 0 0 .707.708Zm-4.242.707a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707Zm1.414-.707a.5.5 0 1 0-.707-.708.5.5 0 0 0 .707.708Zm1.414-2.122a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707ZM8.646 3.354l4 4 .708-.708-4-4-.708.708Zm-1.292 9.292-4-4-.708.708 4 4 .708-.708Z" />
                </svg>
              </div>
              <div className="nav-name">Disclaimer</div>
            </div>
            <div
              className="t-nav-link"
              onClick={() =>
                dispatch(
                  toggleInfoCard({
                    infoCardDisplay: true,
                    infoCardHeader: careersHeader,
                    infoCardCategory: "career",
                  })
                )
              }
            >
              <div className="nav-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                </svg>
              </div>
              <div className="nav-name">Careers</div>
            </div>
            <div
              className="t-nav-link"
              onClick={() =>
                dispatch(
                  toggleInfoCard({
                    infoCardDisplay: true,
                    infoCardHeader: contactUsHeader,
                    infoCardCategory: "contact",
                  })
                )
              }
            >
              <div className="nav-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
              </div>
              <div className="nav-name">Contact Us</div>
            </div>
          </div>
          <p className="tail-cr">
            COPYRIGHT © 2023 ALPIX DISPATCH BPO. ALL RIGHTS
            RESERVED.
          </p>
          <div>
            <span
              className="dev"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/syed-inshal-612bbb249/",
                  "_blank"
                );
              }}
            >
              ☪ Dev // Eenyi /
            </span>
            <span
              className="dev"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/huzaifa-usmani-52930b262/",
                  "_blank"
                );
              }}
            >
              / huzaifausmani
            </span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
