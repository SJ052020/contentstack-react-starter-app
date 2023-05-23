import React from "react";
import { RenderEmailComponentProps } from "../typescript/component";

export default function RenderEmailComponents(props: RenderEmailComponentProps) {
  const splitNewLineCharacter = (splitValue:string, text:any) => {
    return text?.split(splitValue)?.filter(Boolean);
  };
  const { pageComponents, blogsPage, contentTypeUid, entryUid, locale, resetState } =
    props;
    // const {
    //   email_background_image_url: bgURL,
    //   top_image: [
    //     {
    //       image_background_color: bgColor,
    //       image_url: headerImage,
    //       title: topImgTitle,
    //       alt_text: topImgAltText,
    //     },
    //   ],
    //   primary_message: primaryMsg,
    //   account_cta: [
    //     {
    //       title: titleText,
    //       cta_background_color: accountBgImage,
    //       cta_text_color: accountColor,
    //       cta_text: accountCtaText,
    //     },
    //   ],
    //   things_you_can_section: [
    //     {
    //       heading: bottomTextSection,
    //       column_text_box: [colA, colB],
    //     },
    //   ],
    //   support_help_text: supportHelpText,
    //   bottom_image: [
    //     {
    //       title: bottomImgTitle,
    //       image_url: bottomImgUrl,
    //       image_background_color: bottomImgBgColor,
    //       alt_text: bottomImgAltText,
    //     },
    //   ],
    //   footer_text: [{ footer_text: footerText }],
    //   components_order: componentOrder,
    // } = pageComponents;

  const ColAArray = splitNewLineCharacter("\n", pageComponents?.things_you_can_section[0]?.column_text_box?.[0]);
  const ColBArray = splitNewLineCharacter("\n", pageComponents?.things_you_can_section[0]?.column_text_box?.[1])

  return (
    <div data-pageref={entryUid} data-contenttype={contentTypeUid} data-locale={locale}>
      <div className="template-container" style={{
            backgroundImage: `url(${pageComponents?.email_background_image_url})`,
          }}>
        
          <div
            className="top-image"
            style={{
              order: `${pageComponents?.components_order?.indexOf("top_image")}`,
            }}
          >
            <img
              src={pageComponents?.top_image[0].image_url}
              title={pageComponents?.top_image[0].title}
              alt={pageComponents?.top_image[0].alt_text}
              style={{ backgroundColor: `${pageComponents?.email_background_image_url}` }}
              width={100}
              height={100}
            />
          </div>
          <div className="top-container">
            <div
              className="primary_message"
              style={{ order: `${pageComponents?.components_order?.indexOf("primary_message")}` }}
              dangerouslySetInnerHTML={{ __html: pageComponents?.primary_message }}
            />

            <div
              className="account_cta"
              style={{ order: `${pageComponents?.components_order?.indexOf("account_cta")}` }}
            >
              <button
                title={pageComponents?.account_cta[0]?.title}
                style={{
                  backgroundColor: `${pageComponents?.account_cta[0]?.cta_background_color}`,
                  color: `${pageComponents?.account_cta[0]?.cta_text_color}`,
                }}
              >
                {pageComponents?.account_cta[0]?.cta_text}
              </button>
            </div>
          </div>
          <div
            className="things_you_can_section"
            style={{
              order: `${pageComponents?.components_order?.indexOf("things_you_can_section")}`,
            }}
          >
            <p>{pageComponents?.things_you_can_section[0]?.heading}</p>
            <div className="things_you_can_section_box">
              <ul>
                {ColAArray?.map((text:string, index:number) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
              <ul>
                {ColBArray?.map((text:string, index:number) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="support_help_text"
            style={{ order: `${pageComponents?.components_order?.indexOf("support_help_text")}` }}
          >
            <p>{pageComponents.support_help_text}</p>
          </div>
          <div className="bottom-container" style={{
              order: `${pageComponents?.components_order?.indexOf("bottom_image")}`,
            }}>
          <div
            className="bottom_image"
            style={{
              order: `${pageComponents?.components_order?.indexOf("bottom_image")}`,
            }}
          >
            <img
              src={pageComponents?.bottom_image[0]?.image_url}
              title={pageComponents?.bottom_image[0]?.title}
              alt={pageComponents?.bottom_image[0]?.alt_text}
              style={{ backgroundColor: `${pageComponents?.bottom_image[0]?.image_background_color}` }}
            />
          </div>
          <div
            className="footer_text"
            style={{
              order: `${pageComponents?.components_order?.indexOf("footer_text")}`,
            }}
          >
            {pageComponents?.footer_text[0]?.footer_text?.split("\n")?.map((text, index) => (
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
