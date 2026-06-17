import * as React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

type InputSize = 'sm' | 'md' | 'lg';
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    error?: React.ReactNode;
    required?: boolean;
    inputSize?: InputSize;
    fieldClassName?: string;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    error?: React.ReactNode;
    required?: boolean;
    fieldClassName?: string;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

type BadgeVariant = 'draft' | 'approved' | 'generating' | 'failed';
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant: BadgeVariant;
    indicator?: 'auto' | 'dot' | 'none';
}
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;

interface ApprovalPillProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    approved: boolean;
    approveLabel?: React.ReactNode;
    approvedLabel?: React.ReactNode;
    onToggle?: () => void;
}
declare const ApprovalPill: React.ForwardRefExoticComponent<ApprovalPillProps & React.RefAttributes<HTMLButtonElement>>;

type AccuracyChipVariant = 'neutral' | 'warn' | 'alert';
interface AccuracyChipProps extends React.HTMLAttributes<HTMLSpanElement> {
    value: number;
    variant?: AccuracyChipVariant;
    label?: React.ReactNode;
}
declare const AccuracyChip: React.ForwardRefExoticComponent<AccuracyChipProps & React.RefAttributes<HTMLSpanElement>>;

type CitationChipVariant = 'neutral' | 'warn' | 'alert';
interface CitationChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    timestamp: string;
    variant?: CitationChipVariant;
    children?: React.ReactNode;
}
declare const CitationChip: React.ForwardRefExoticComponent<CitationChipProps & React.RefAttributes<HTMLButtonElement>>;

interface FilterChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    selected?: boolean;
    onToggle?: () => void;
}
declare const FilterChip: React.ForwardRefExoticComponent<FilterChipProps & React.RefAttributes<HTMLButtonElement>>;

type IssueCalloutVariant = 'warn' | 'alert';
interface IssueCalloutProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    variant?: IssueCalloutVariant;
    title?: React.ReactNode;
    action?: React.ReactNode;
}
declare const IssueCallout: React.ForwardRefExoticComponent<IssueCalloutProps & React.RefAttributes<HTMLDivElement>>;

type EvidenceRailItemVariant = 'neutral' | 'warn' | 'alert' | 'active';
type EvidenceRailItemConnector = 'start' | 'middle' | 'end' | 'none';
interface EvidenceRailItemProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
    timestamp: React.ReactNode;
    icon?: React.ReactNode;
    title: React.ReactNode;
    sectionRef: React.ReactNode;
    variant?: EvidenceRailItemVariant;
    active?: boolean;
    connector?: EvidenceRailItemConnector;
}
declare const EvidenceRailItem: React.ForwardRefExoticComponent<EvidenceRailItemProps & React.RefAttributes<HTMLButtonElement>>;

type CalmTimelineEventVariant = 'neutral' | 'warn' | 'alert' | 'active';
interface CalmTimelineLabel {
    id: string;
    label: React.ReactNode;
    position: number;
}
interface CalmTimelineEvent {
    id: string;
    label: string;
    position: number;
    variant?: CalmTimelineEventVariant;
    tooltip?: string;
}
interface CalmTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    labels: CalmTimelineLabel[];
    events: CalmTimelineEvent[];
    activeEventId?: string;
    onEventSelect?: (eventItem: CalmTimelineEvent) => void;
}
declare const CalmTimeline: React.ForwardRefExoticComponent<CalmTimelineProps & React.RefAttributes<HTMLDivElement>>;

type DocumentPaperProps = React.HTMLAttributes<HTMLDivElement>;
declare const DocumentPaper: React.ForwardRefExoticComponent<DocumentPaperProps & React.RefAttributes<HTMLDivElement>>;
declare const DocumentPaperHeader: React.FC<React.HTMLAttributes<HTMLDivElement>>;
declare const DocumentPaperBody: React.FC<React.HTMLAttributes<HTMLDivElement>>;
declare const DocumentPaperFooter: React.FC<React.HTMLAttributes<HTMLDivElement>>;

interface TranscriptBlockProps extends React.HTMLAttributes<HTMLElement> {
    timestamp: React.ReactNode;
    speaker: React.ReactNode;
    tags?: React.ReactNode[];
}
declare const TranscriptBlock: React.ForwardRefExoticComponent<TranscriptBlockProps & React.RefAttributes<HTMLElement>>;

type EvidenceCardType = 'audio' | 'image';
interface EvidenceCardProps extends React.HTMLAttributes<HTMLElement> {
    media: React.ReactNode;
    evidenceType: EvidenceCardType;
    timestamp: React.ReactNode;
    caption: React.ReactNode;
    sectionLabel: React.ReactNode;
    accuracy: number;
    accuracyVariant?: AccuracyChipVariant;
}
declare const EvidenceCard: React.ForwardRefExoticComponent<EvidenceCardProps & React.RefAttributes<HTMLElement>>;

type CardPadding = 'none' | 'sm' | 'md' | 'lg';
type CardCommon = {
    padding?: CardPadding;
    interactive?: boolean;
};
type CardProps = (CardCommon & React.HTMLAttributes<HTMLDivElement> & {
    interactive?: false;
}) | (CardCommon & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    interactive: true;
});
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLElement>>;
declare const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>>;
declare const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>>;
declare const CardSubtitle: React.FC<React.HTMLAttributes<HTMLParagraphElement>>;
declare const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>>;

type SpinnerSize = 'sm' | 'md' | 'lg';
interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: SpinnerSize;
    label?: string;
}
declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLSpanElement>>;

interface DividerProps extends React.HTMLAttributes<HTMLElement> {
    orientation?: 'horizontal' | 'vertical';
    spacing?: 'none' | 'sm' | 'md' | 'lg';
    decorative?: boolean;
}
declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLElement>>;

type LogoVariant = 'ink' | 'accent' | 'mono';
interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Glyph color treatment. `ink` (default) is solid ink; `accent` uses the brand accent; `mono` uses currentColor for both glyph and wordmark. */
    variant?: LogoVariant;
    /** Optical size in px. Sets font-size on the root; the glyph and wordmark scale together. */
    size?: number;
    /** Render only the geometric mark (no wordmark). For favicons-in-DOM, app rails, etc. */
    markOnly?: boolean;
    /** Set when the logo sits on a dark surface so the wordmark + notch flip correctly. */
    onDark?: boolean;
    /** Override accessible label. Defaults to "FieldReport". */
    'aria-label'?: string;
}
/**
 * FieldReport logo — the geometric mark + wordmark lockup.
 * The mark is a notched square that reads as a survey marker without
 * illustrating one. Built entirely from tokens; sized via the `size` prop.
 */
declare const Logo: React.ForwardRefExoticComponent<LogoProps & React.RefAttributes<HTMLSpanElement>>;
/** Convenience: render only the mark. Equivalent to <Logo markOnly />. */
declare const LogoMark: React.ForwardRefExoticComponent<Omit<LogoProps, "markOnly"> & React.RefAttributes<HTMLSpanElement>>;

export { AccuracyChip, type AccuracyChipProps, type AccuracyChipVariant, ApprovalPill, type ApprovalPillProps, Badge, type BadgeProps, type BadgeVariant, Button, type ButtonProps, type ButtonSize, type ButtonVariant, CalmTimeline, type CalmTimelineEvent, type CalmTimelineEventVariant, type CalmTimelineLabel, type CalmTimelineProps, Card, CardFooter, CardHeader, type CardPadding, type CardProps, CardSubtitle, CardTitle, CitationChip, type CitationChipProps, type CitationChipVariant, Divider, type DividerProps, DocumentPaper, DocumentPaperBody, DocumentPaperFooter, DocumentPaperHeader, type DocumentPaperProps, EvidenceCard, type EvidenceCardProps, type EvidenceCardType, EvidenceRailItem, type EvidenceRailItemConnector, type EvidenceRailItemProps, type EvidenceRailItemVariant, FilterChip, type FilterChipProps, Input, type InputProps, type InputSize, IssueCallout, type IssueCalloutProps, type IssueCalloutVariant, Logo, LogoMark, type LogoProps, type LogoVariant, Spinner, type SpinnerProps, type SpinnerSize, Textarea, type TextareaProps, TranscriptBlock, type TranscriptBlockProps };
