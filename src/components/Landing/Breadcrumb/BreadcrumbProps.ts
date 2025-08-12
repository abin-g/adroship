export interface BreadcrumbProps {
    title: string;
    description: string;
    items: { name: string; href?: string }[];
}