export interface IHeaderCategory {
  name: string;
  links: IHeaderCategoryLink[];
  href: string;
  img: string;
}

export interface IHeaderCategoryLink {
  name: string;
  href: string;
}
