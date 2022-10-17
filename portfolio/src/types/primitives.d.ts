import { UrlObject } from 'url';

type Url = UrlObject | string;
type LinkProps = React.ForwardRefExoticComponent<
	Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof InternalLinkProps> &
		InternalLinkProps & {
			children?: React.ReactNode;
		} & React.RefAttributes<HTMLAnchorElement>
>;
type InternalLinkProps = {
	href: Url;
	as?: Url;
	replace?: boolean;
	scroll?: boolean;
	shallow?: boolean;
	passHref?: boolean;
	prefetch?: boolean;
	locale?: string | false;
	legacyBehavior?: boolean;
	/**
	 * requires experimental.newNextLinkBehavior
	 */
	onMouseEnter?: (e: any) => void;
	/**
	 * requires experimental.newNextLinkBehavior
	 */
	onTouchStart?: (e: any) => void;
	/**
	 * requires experimental.newNextLinkBehavior
	 */
	onClick?: (e: any) => void;
};
