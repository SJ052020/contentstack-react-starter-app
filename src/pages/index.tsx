import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAccountCTA } from "../helper";
import Skeleton from "react-loading-skeleton";
import { PageEntry, Prop } from "../typescript/pages";
import { useLivePreviewCtx } from "../context/live-preview-context-provider";
import RenderEmailComponents from "../components/render-email-template-components";

export default function Home({ entry }: Prop) {
  const lpTs = useLivePreviewCtx();
  const params = useParams();
  const entryUrl = params.page ? `/${params.page}` : "/";
  const history = useNavigate();
  const [getEntries, setEntries] = useState({} as PageEntry);
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      const result = await getAccountCTA();
      !result && setError(true);
      setEntries({ ...result[0] });
      entry({ page: result });
    } catch (error) {
      setError(true);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
    error && history("/404");
  }, [entryUrl, lpTs, error]);
  const page_components:any[] = [];
  if(Object.keys(getEntries).length){
    const {top_image,primary_message,account_cta,things_you_can_section,support_help_text,bottom_image,footer_text } = getEntries;
    page_components.push(top_image,primary_message,account_cta,things_you_can_section,support_help_text,bottom_image,footer_text)
  }
  return Object.keys(getEntries).length ? (
    <RenderEmailComponents
      pageComponents={page_components}
      componentsOrder={getEntries?.components_order}
      contentTypeUid='email_template_new_account'
      entryUid={getEntries?.uid}
      locale={getEntries?.locale}
    />
  ) : (
    <Skeleton count={5} height={400} />
  );
}
