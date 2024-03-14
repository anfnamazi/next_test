export interface ICategory {
  name: string;
  links: ICategoryLink[];
  href: string;
  img: string;
}

export interface ICategoryLink {
  name: string;
  href: string;
}
