import React from "react";
import { RenderEmailComponentProps } from "../typescript/component";

export default function RenderEmailComponents(props: RenderEmailComponentProps) {
  const splitNewLineCharacter = (splitValue:string, text:any) => {
    return text.split(splitValue).filter(Boolean);
  };
  const { pageComponents, blogsPage, contentTypeUid, entryUid, locale, resetState } =
    props;
    const {
      email_background_image_url: bgURL,
      top_image: [
        {
          image_background_color: bgColor,
          image_url: headerImage,
          title: topImgTitle,
          alt_text: topImgAltText,
        },
      ],
      primary_message: primaryMsg,
      account_cta: [
        {
          title: titleText,
          cta_background_color: accountBgImage,
          cta_text_color: accountColor,
          cta_text: accountCtaText,
        },
      ],
      things_you_can_section: [
        {
          heading: bottomTextSection,
          column_text_box: [colA, colB],
        },
      ],
      support_help_text: supportHelpText,
      bottom_image: [
        {
          title: bottomImgTitle,
          image_url: bottomImgUrl,
          image_background_color: bottomImgBgColor,
          alt_text: bottomImgAltText,
        },
      ],
      footer_text: [{ footer_text: footerText }],
      components_order: componentOrder,
    } = pageComponents;

  const ColAArray = splitNewLineCharacter("\n", colA);
  const ColBArray = splitNewLineCharacter("\n", colB)

  return (
    <div data-pageref={entryUid} data-contenttype={contentTypeUid} data-locale={locale}>
      <div className="template-container" style={{
            backgroundImage: `url(${bgURL})`,
          }}>
        
          <div
            className="top-image"
            style={{
              order: `${componentOrder.indexOf("top_image")}`,
            }}
          >
            <img
              src={headerImage}
              title={topImgTitle}
              alt={topImgAltText}
              style={{ backgroundColor: `${bgColor}` }}
              width={100}
              height={100}
            />
          </div>
          <div className="top-container">
            <div
              className="primary_message"
              style={{ order: `${componentOrder.indexOf("primary_message")}` }}
              dangerouslySetInnerHTML={{ __html: primaryMsg }}
            />

            <div
              className="account_cta"
              style={{ order: `${componentOrder.indexOf("account_cta")}` }}
            >
              <button
                title={titleText}
                style={{
                  backgroundColor: `${accountBgImage}`,
                  color: `${accountColor}`,
                }}
              >
                {accountCtaText}
              </button>
            </div>
          </div>
          <div
            className="things_you_can_section"
            style={{
              order: `${componentOrder.indexOf("things_you_can_section")}`,
            }}
          >
            <p>{bottomTextSection}</p>
            <div className="things_you_can_section_box">
              <ul>
                {ColAArray.map((text:string, index:number) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
              <ul>
                {ColBArray.map((text:string, index:number) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="support_help_text"
            style={{ order: `${componentOrder.indexOf("support_help_text")}` }}
          >
            <p>{supportHelpText}</p>
          </div>
          <div className="bottom-container" style={{
              order: `${componentOrder.indexOf("bottom_image")}`,
            }}>
          <div
            className="bottom_image"
            style={{
              order: `${componentOrder.indexOf("bottom_image")}`,
            }}
          >
            <img
              src={bottomImgUrl}
              title={bottomImgTitle}
              alt={bottomImgAltText}
              style={{ backgroundColor: `${bottomImgBgColor}` }}
            />
          </div>
          <div
            className="footer_text"
            style={{
              order: `${componentOrder.indexOf("footer_text")}`,
            }}
          >
            {footerText.split("\n").map((text, index) => (
              <p key={index}>
                {text}
              </p>
            ))}
          </div>
          </div>
          
      </div>
      <div className="left-section-button-section" style={{
              order: `10000`,
            }}>
              <button
                className="button-approve"
              >
                Approve
              </button>
              <button
                className="button-reject"
                onClick={resetState}
              >
                Go back
              </button>
          </div>
    </div>
  );
}
