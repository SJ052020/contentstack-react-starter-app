import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAccountCTA } from "../helper";
import Skeleton from "react-loading-skeleton";
import { PageEntry, Prop } from "../typescript/pages";
import { useLivePreviewCtx } from "../context/live-preview-context-provider";
import RenderEmailComponents from "../components/render-email-template-components";
import { ComponentEmailTemmplate } from "../typescript/component";
import EmailTemplateDropDown from "../components/email-template-drop-down";
import "../styles/email-template.css";
import { onEntryChange } from "../sdk/entry";
export default function Home({ entry }: Prop) {
  const lpTs = useLivePreviewCtx();
  const params = useParams();
  const entryUrl = params.page ? `/${params.page}` : "/";
  const history = useNavigate();
  const [getEntries, setEntries] = useState({} as PageEntry);
  const [error, setError] = useState(false);
  const [openEmailTemplate, setOpenEmailTemplate] = useState(false);
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
    onEntryChange(fetchData);
  }, []);

  useEffect(() => {
    error && history("/error");
  }, [error]);
  const emailChangeHandler = () => {
    setOpenEmailTemplate(true);
  }
  const resetState = () => {
    setOpenEmailTemplate(!openEmailTemplate)
  }
  return (
    
    <div className="main-container">
    {!openEmailTemplate && <EmailTemplateDropDown emailChangeHandler={emailChangeHandler} entries={getEntries} openEmailTemplate={openEmailTemplate}/>}
    {Object.keys(getEntries).length && openEmailTemplate? (<RenderEmailComponents
      pageComponents={getEntries}
      componentsOrder={getEntries?.components_order}
      contentTypeUid='email_template_new_account'
      entryUid={getEntries?.uid}
      locale={getEntries?.locale}
      resetState={resetState}
    />): (
      <Skeleton count={2} height={400} />
    )}
    </div>
  )
   
}
