import { MouseEventHandler } from "react";
import { Action, Image } from "./action";

type Object = {
  title: string;
  title_h2: string;
  title_h3: string;
  description: string;
  banner_title: string;
  banner_description: string;
  designation: string;
  name: string;
  html_code: string;
  body: string;
}

type Employee = {
  image: Image;
  name: string;
  designation: string;
  $: Object;
}

type BucketList = [
  BucketArray:{
    title_h3: string;
    description: string;
    url: string;
    call_to_action: Action;
    icon: Image;
    $: Object;
  }
]

type Card = [
  cardArray: {
    title_h3: string;
    description: string;
    call_to_action: Action;
    $: Object;
    }
]

type Article = {
  href: string;
  title: string;
  $: Object;
}

type FeaturedBlog = [
  BlogArray: {
    title: string;
    featured_image: Image;
    body: string;
    url: string;
    $: Object;
  }
]

type Widget = {
  title_h2: string;
  type?: string;
  $: Object;
}

export type Component = {
  hero_banner: Banner;
  section?: SectionProps;
  section_with_buckets?: SectionWithBucket;
  from_blog?: FeaturedBlogData;
  section_with_cards?: Cards;
  section_with_html_code?: ObjectProps;
  our_team?: TeamProps;
  widget?: Widget;
}
type TopImageObjectProps = {
  image_background_color: string,
  image_url: string,
  title: string,
  alt_text: string,
}
type BottomImageObjectProps = {
  image_background_color: string,
  image_url: string,
  title: string,
  alt_text: string,
}
type AccountCTAObjectProps = {
  title: string,
  cta_background_color: string,
  cta_text_color: string,
  cta_text: string,
}
type ColumnTextBoxProps = {
  columnA: string;
  columnB: string;
}
type ThingsYouCanSectionObjectProps = {
  heading: string,
  column_text_box: Array<ColumnTextBoxProps>,
}
type FooterObjectProps = { 
  footer_text: string 
}
const ComponentOrdersType = [
  "top_image",
  "primary_message",
  "account_cta",
  "things_you_can_section",
  "support_help_text",
  "bottom_image",
  "footer_text"
]
type TopImageArrayProps = Array<TopImageObjectProps>
type BottomImageArrayProps = Array<BottomImageObjectProps>

type AccountCTAArrayProps = Array<AccountCTAObjectProps>
type ThingsYOuCanSectionArrayProps = Array<ThingsYouCanSectionObjectProps>
type FooterArrayProps = Array<FooterObjectProps>
type ComponentsOrderArrayProps = typeof ComponentOrdersType
export type ComponentEmailTemmplate = {
  components_order:ComponentsOrderArrayProps;
  email_background_image_url: string;
  top_image:TopImageArrayProps;
  account_cta: AccountCTAArrayProps;
  bottom_image:BottomImageArrayProps;
  support_help_text:string;
  footer_text:FooterArrayProps;
  primary_message:string;
  things_you_can_section:ThingsYOuCanSectionArrayProps;

}

export type SectionWithBucket = {
    bucket_tabular: boolean
    title_h2: string;
    buckets: BucketList;
    description: string;
    $: Object;
  }

export type Cards = {
    cards: Card;
  }
  
export type Banner = {
    banner_title:string;
    banner_description: string;
    bg_color: string;
    call_to_action: Action;
    banner_image: Image;
    text_color: string;
    $: Object;
  }
  
export type ObjectProps = {
    html_code_alignment: string;
    title: string;
    $: Object;
    description: string;
    html_code: string;
  }
  
export type SectionProps = {
    title_h2: String;
    description: string;
    call_to_action: Action;
    image: Image;
    image_alignment: string;
    $: Object;
  } 
  
export type TeamProps = {
    title_h2: string;
    description: string;
    $: Object;
    employees: [Employee];
  }
  
export type FeaturedBlogData = {
    title_h2: string;
    view_articles: Article;
    featured_blogs: FeaturedBlog;
    $: Object;
}

export type RenderProps = {
  blogsPage?: boolean;
  contentTypeUid: string;
  entryUid: string;
  locale: string;
  pageComponents:Component[];
}

export type RenderEmailComponentProps = {
  blogsPage?: boolean;
  contentTypeUid: string;
  entryUid: string;
  locale: string;
  componentsOrder:[];
  pageComponents:ComponentEmailTemmplate;
  resetState: MouseEventHandler<HTMLButtonElement>
}